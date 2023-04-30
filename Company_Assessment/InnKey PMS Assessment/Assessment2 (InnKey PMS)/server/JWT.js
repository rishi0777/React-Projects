const { sign, verify } = require("jsonwebtoken");

//function that allows us to crreate a token
//a token is like a object with information inside it
//data inside this object is called the payload, token is secure because it is
//completely encrypted
const createTokens = (user) => {
  const accessToken = sign(
    { username: user.username },
    "abcdefghijklmnopqrstuvwxyz"
  );

  return accessToken;
};

//next is the function which is going to be called when we want to move forward
// with the request
const validateToken = (req, res, next) => {
  //if the user has already loggedIn then inside cookies cookie named access-token will be present
  const accessToken = req.cookies["access-token"];

  if (!accessToken) return res.send({ message: "User not authenticated" });

  try {
    const validToken = verify(accessToken, "abcdefghijklmnopqrstuvwxyz");
    if (validToken) {
      req.authenticated = true; //creating and setting authenticated variable as true
      return next(); //moving forward with the request since the user is authenticated
    }
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

module.exports = { createTokens, validateToken };
