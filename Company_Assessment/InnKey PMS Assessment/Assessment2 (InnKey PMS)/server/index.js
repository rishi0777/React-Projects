const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { createTokens, validateToken } = require("./JWT");

//library used to hash the password when the user's registration details are
//saved in the "login" table of database "task"
const bcrypt = require("bcrypt");
const saltRounds = 10;
//this constant makes hashing more secure...higher the
//value higher is the security but then higher the value higher will be the
//time consumed by bcrypt to hash the password ...so use the value which
//is most preferrable in the scenario

//it is the main object that is responsible for starting the server
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//creating a connection to database "task" with the specified user and password of mysql database
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root@123",
  database: "task",
});

//route for registeration of new users
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (error, hash) => {
    if (error) {
      console.log(error);
    } else {
      db.query(
        "INSERT INTO login (username, password) VALUES (?,?)",
        [username, hash],
        (err, result) => {
          if (err) {
            console.log("Transaction Aborter" + err);
          } else {
            console.log("Transaction Successful");
          }
        }
      );
    }
  });
});

//route for authentication -> checking whether any current user is loggedIn or Not
//user will get the response only , if they are allowed or authenticated successfully
//putting a midware inside this request,befire we read anything inside of this request
//before we read anything inside of this request it will run that function which decides
//whether or not we should move forward with th request or not. The idea is we are going
// to create a middle ware which is going to determine if the current user/client is
// authenticated or not.So to achieve this we have basically created a middle-ware
// inside JWT.js file validateToken and now we will pass this in this route
app.get("/login", validateToken, (req, res) => {
  //if get request of login is giving you 1 then user is authenticated
  //else he is not authenticated
  console.log("User Authenticated");
  res.send("1");
});

//route for authorization of user
/*return 
-1->error
0->User Does Not Exist
1->authorized
2-> Wrong username/password combination! or user doesnot exist*/
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM login where username=?",
    username,
    (error, result) => {
      if (error) {
        res.send("-1");
      } else if (result.length > 0) {
        const user = result[0].username;
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            //creating a jwt token for authorized or logged In user, in case we require to perform authentication in future
            const accessToken = createTokens(user);
            //creating a cookie to store it in the user's browser
            res.cookie("access-token", accessToken, {
              maxAge: 60 * 5 * 1000, //cookie will expire after this time 60 * 5 * 1000
              //after that user is required to login again
              //httpOnly: true, //to make it moreSecure so that any hacker cannot access it
            });
            console.log(result[0].username + " LoggedIn");
            res.send("1");
          } else {
            console.log("Wrong username/password combination!");
            res.send("2");
          }
        });
      } else {
        console.log("User doesn't exist");
        res.send("2");
      }
    }
  );
});

//making the server listen at specific port,here that port is 8080
app.listen(8080, () => {
  console.log("Running Server");
});
