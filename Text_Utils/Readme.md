# LIVE URL

[Click Me! ](https://rishi0777.github.io/reactTurtorialTextUtils/)

# Set Up Computer For ReactJs

#### NOTE

Reactjs is not a framework it is a library that is used to create single page applications.
Even Reactjs library does not even consist of router that is used to to route to another pages without reloading the page(react-router-dom).Whatever things we need in our react application we have to install them and use it. This makes our application very light weight fast.

### Install Nodejs

It will install both Nodejs and npm in your machine. NPM is basically a node package manager that is used manage node packages that are installed on your system (similar pip in python).

### Install VS Code

A very powerful editor with lot of very good extensions that increase your productivity multi-fold.

### Install React Developer Tools

A google chrome extension that helps you to debug your react code very easily.
It will show you all the react components which props you have send to another components and what states you have used in the react components etc.

### Extensions

1. #### ThunderClient

   It is similar to postman. It is used to the see the response of the request that you have sent to api in VS code only.

2. #### ES7 React/Reduc/GraphQl

   This extension is useed to increase your productivity. That is it provides emmets(short forms) if we write the short forms then it will automatically write the whole code for it.For Eg: rfce,rafce,etc.

3. #### Auto Rename Tag
4. #### Bracket Pair Colorizer
5. #### LiveServer
6. #### Prettier

   Code Formatter

7. #### NOTE:

   In VS code will not be able to use emmets for reactjs because in emmets VS code does
   not add emmet key value pair for react by deafult. So we have to add it manually
   just go to settings and type emmet and then add this javascript: javascriptreact.

   ![Emmet](./Screenshots/screen1.png?raw=true "Title")

## Creating First React App

React app ko simply ham code likh kar bhi bana skte hain bina koi package use kiye (without using initial template) par aisa karna optimal nhi hoga aur it will consume a lot of time.

That's why we use create-react-app package it creates the initial optimiized template for the react application with the name of the application that you have given.

```bash
npx create-react-app my-app
cd my-app
npm start
```

or use

```bash
npx create-react-app .
npm start
```

It will create the basic tem,plate of react-app (whole folder architecture) in the same directory.

#### NOTE:

1. #### Difference between npm and npx?

   Agar kisi package ko bina download kiye agar aap use karna chahte ho to wo kaam npx karta hai
   For Eg: Ham basic react app ka template to ek hi baar banayenge apni app mein baar baar to banayenge nahi, to instead of using npm install create-react-app and then useing create-react-app to create your application. Ham npx ka use karke bina create-react-app package ko apni application mein download kiye basic template bana lenge using npx.

   NPX -> koi package udhar lete ho usko use karke waapas kar dete ho.

   NPM -> jo bhi package use karte hai use khareed letein hain aur apne paas rakh lete hain taaki agar kisi package ki functionality ko baar baar use karna hai to phirse udhaar na lena pade.But it will take some amount of space in your hard disk.

2. #### What does warn in ReactJS signify?

   Analogy of Pen: Jab school mein padhte the to agar koi friend pen maangta the to agar poora sahi hai pen tab to koi baat nhi hai aise hi de dete the pen ham log, lekin agar pen thoda sa toota hua hai to ek warning ke saath dost ko pen dete the ki use ro kar lo is pen ko lekin dhyaan rakhna halka toota hai to leek kar skta hai aur jahan par rakhoge us poori jagah ko bhi kharab kar skta hai.
   Here also warning signifies the same thing if it is possible fopr any package to get broken when you use it then react will show you a warning for that package(Dhyaan Rakhna Beta leak kar skta hai).As a beginner you can ignore these warnings.

### Folder Structure

1. node_modules: It will contain all the packages that your react application is using. Whatever package you install for your react-app gets installed in your node_modules folder and then using those packages functionalityu your react application runs.

2. packaga.json:
   This file contains all the dependencies that are required for your application. Matlab ki jo-jo package tm install karoge apni react-app ke liye unki information json format mein packge.file mein store ho jaayegi ki name of package, what is its version etc.
   To agar hame kabhi bhi node_modules folder ko replicate karna hota hai to hame package_lock.json aur package.json file ki requirement hoti hai.

   ```bash
   npm install
   ```

   or

   ```bash
   npm i
   ```

This command installs all the packages in the node_modules folder as mentioned in the package_lock.json and package.json file.

3. .gitignore: We mention naems of those files in this file that we want that git should ingore while pushing our application's code on remote repository usiing wioldcards and '.'

4. Reademe.md: It tells baiscally tells all the information related to your qpplication that might be hjelpful for the end user.

5. public:
   It contains the index.html that is going to be rendered on the screen when your application starts. Using javascript we populate the only div present in the index.html whose id is given by default as 'root'.
   It also contains logo,favicon and manifest.json file but these files can be romved it won't have a major impact on our application but we can't remove index.html file.
   Is folder mein ham koi kbhi aisi cheez nhi daalti hain jo ki confidential ho kyunki
   kyunki is folder ka content publically accessible rehta hai.
   Use of manifest.json file: \***\*\_\*\***
6. src: We put the components of our react-app in src.

## JAVASCRIPT

### use-strict:

'use-strict' hamare bahoot saare restrictions impose kar deta hai javascript taaki agar koi cheez javascript ne allow kar di hai aur wo aage future mein bug create kar skti hai usko use-strict allow nhi karne dega javascript.

For Example: if we use the code

```bash
a=20;
console.log(a)
```

this will work fine.But if we use this code

```bash
'use-strict'
a=20;
console.log(a)
```

since in this snippet we have not defined any a variable with var,let,const so because of presence of use-strict it will throw an error that a is not defined.

#### NOTE

By default in react-js 'use-strict' is already enabled.Because in index.js component it is written

```bash
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

So if we remove React.StrictMode then we will disable use-strict in react.

### Difference between js and jsx

jsx hamari html hi hai bas fark itna hai ki jsx mein ham javascript directly use kar skte hain by specifying it in curly braces{}.

Matlab ki for example hamare paas ek component hai react mein jo ki maan lo kx aisa hai

```bash
import React from 'react'

function comp() {
    let name="RAM";
  return (
    <div>{name}</div>
  )
}

export default comp
```

```bash
return (
    <div>{name}</div>
)
//this code is jsx
```

javascript hai kyunki to saari javascript ki functionality ko use kar skte hain isme, ab hamne upar ek variable banaya hai uski value ko, jo html ye react component return kar raha hai usme use karna hai to simply curly braces denge html aur us varible ka nam likh denge aur hame value mil jaayegi wahan par.
So the html which react component is returning this is basically the jsx because in this html code we can directly use javascript functionality using curly braces{}.

#### NOTE

1. Javascript mein class, for, tabindex, etc. aise kx keyword hote hain jo ki html mein bhi hote hain to ye ambiguity create karte hain isiliye javascript ke keywords ko react ne prefernce diya hai bajay html ke tags ke attributes ko, to jsx ki html mein ham inhe nahi use kar skte hain because they mean something different for javascript. So inorder to use them

   - class -> className (class of html became className in html of jsx)
   - for -> htmlFor (for is an attribute of input tag or label tag in html)
   - tabindex -> tabIndex

2. Agar ham react ke andar jsx return kara rahe hain kisi component ke through to ahm kewal ek hi element ko reaturn kara skte hain agar hame multiple elements return karane hai to create a div tag and put all those elements in that div or use jsx fragment '<></>' and enclose/wrap all the elements inside this, then it will work.

3. Return karte wakht ham jsx agar ek line se jaada hai to paranthesis laga dete hain kyunki javascript automatic paranthesis lagati hai har ek line ke end ke baad to agar ham paranthesis mein multi-line jsx ko nahi agar enclose karnege to javascript semi-colon laga lagakar ke har ek line ke end ke baad hamari jsx ko khaarab kar degi that's whe we have enclosed everything in paranthesis.<br>

- When we do not use paranthesis then javascript may compile this code like this

  ```bash
  import "./App.css";

  function App() {
    return
      <div className="App">;
        <h1>Hello</h1>;
        <h2>Ram</h2>;
      </div>;
  }
  export default App;
  ```

- Using paranthesis, no insertion of semi-colon at end of every line of jsx

  ```bash
  import "./App.css";
  function App() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <h2>Ram</h2>
      </div>
    );
  }
  export default App;
  ```

4. We are not allowed to put any unterminated jss content in our jsx code.

   For Eg:

   ```bash
   <img src="" alt=""></img>
   ```

   Although in html img is a self closing tag it does not maatter in html whetehr we close it or not but when we are writing html in jsx then we are required to close this tag or else it will throw the error in reactjs during compilation.

5. Babel is a very famous transpiler that basically allows us to use future JavaScript in today’s browsers. In simple words, it can convert the latest version of JavaScript code into the one that the browser understands. The latest standard version which JavaScript follows is ES2020 which is not fully supported by all the browsers and hence we make use of a tool such as ‘babel’ so that we can convert it into the code that today’s browser understands.

   #### What is a transpiler?

   It is a tool that is used to convert source code into another source code that is of the same level. That is why it is also known as a source-to-source compiler. Both the codes are equivalent in nature, considering the fact that one works with the specific version of the browser and one doesn’t.

   #### Note:

   It is also good to note that a compiler is totally different from a transpiler as the transpiler converts source code into another source code at the same abstraction level, whereas the compiler converts code into a lower level code generally. Like in Java, the source code is converted to byte Code which is lower level and not equivalent.

   #### Why do we need Babel?

   The main reason we need babel is that it gives us the privilege to make use of the latest things JavaScript has to offer without worrying about whether it will work in the browser or not.

   Babel is used in ReactJs to compile JSX down to React.createElement() calls

   The below two examples are exactly identical. Babel compiles the first code to the second code, so we do not need to write the React.createElement calls for every element which we want to display, babel does that dor you using the jsx which we write.

   ```bash
   return (
     <h1 className="greeting">
       Hello, World!
     </h1>
   );
   ```

   ```bash
   const e = React.createElement;
   return e(
     'h1',
     { className:'greeting' },
     'Hello, World!'
   );
   ```

6. Jab bhi hame apni application ko host karna hota hai to hamne jo application create ki hai usko directly host nhi karte hain, kyunki development karte wakht jo application use kar rahe hote hain wo optimized nahi hoti hai.
   To agar hame optimized application chahiye to ham ye command use karte hai jo ki optimzed application build karke de deti hai.

   ```bash
   npm build
   ```

### Single Page Vs Multi Page

#### How request and response works

Ismein hota ye hai ki user/client URL daalta hai apne web browser par jo bhi use access karna hota hai, ye request jaati hai ISP(Internet Service Provider ke Paas) waha se request transfer hoti us URL ke DNS(Domain Name Server) par jo ki us DNS ka IP address provide karta hain, us IP address ka use karke wo request phir server par jaati hai jaha par actual mein HTML/CSS/Javascript files present hoti hain jo ki response ki tarah wapas aati hai server se via same path aur phir browser response mein mili HTML/CSS/JavaScript ko render karata hai screen par.

Ab jo multiple page application hoti hai usme agar user ko koi doosra page access karna hota hai to wo doosri link kholta hai aur phir yahi request response cycle poori chalti hai, matlab client request karta hai server response send karta hai.

Lekin Single Page application mein kya hota hai, agar koi client access karna chahta ki single page application ko to wo request send karega ab us request ke response mein server us application ka poora jo bhi HTML/CSS/Javacript hai wo return kar dega. To ab agar client doosre page par jaata hai to phirse request nhi send karni padti hai client ko HTML/CSS/Javascript us page ki already present hoti hai to usi ko browser render kar deta hai.

Saari jab return kar deta hai HTML/CSS/JavaScript server to saari isiliye nahi render kyunki usko control kar raha hota hai React(JavaScript) ki kaun sa component kab render karna hai.

#### Benefits

1. Website bahoot fast ho jaati hai.
2. Bandwidth bahoot bach jaati hai client aur server dono ki.
3. Load server par kam ho jaata hai kyunki kam request aayengi server par.
