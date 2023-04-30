## Concepts

1. #### Agar ham function based component ko use kar rahe hote hain aur us se kewal jsx return kar rahe hain, to hame us file mein react import karne ki zaroorat nahi hoti hai.

2. #### Difference Between Named Export and Default Export

   Ek module ke kisi bhi variable ya kisi bhi functionc, etc. ko doosre module mein do tarah se export kar skte hain,

   - default export
   - named export

   default export ke through ham kewal ek hi cheez ko export kar skte hain, aur agar phir us module ko kisi doosre module mein import karenge to naam se fark nahi padega hame, ki ham kis naam ka use kar rahe hain doosre module mein exported content ko access karne ke liye.

   Agar hame multiple functions,variable,etc. export karne hote hain to hame named export use karna padta hai aur isme ham jis naam se export karte hain kisi content ko usi naam se access kar paaytein hain us content ko jis module mein hamne exporting module ko import kiya hota hai.

   #### NOTE: Difference between .js and .mjs?

   Node.js's original module system is CommonJs (which uses require and module.exports).
   Since Node.js was created, the ECMAScript module system (which uses import and export) has become standard and Node.js has added support for it.
   Node.js will treat .cjs files as CommonJS modules and .mjs files as ECMAScript modules. It will treat .js files as whatever the default module system for the project is (which is CommonJS unless package.json says "type": "module",).

   Module1.mjs

   ```bash
   const a = "Ram";
   const b = "Shyam";
   const c = "Raghu";

   export default b;
   export { a, c };
   ```

   Module2.mjs

   ```bash
   import name, { a, c } from "./module1.mjs";
   console.log(name);
   console.log(a);
   console.log(c);
   ```

   ```bash
   Output:
   Shyam
   Ram
   Raghu
   ```

   ```bash
   import name, { a, name2 } from "./module1.mjs";
   console.log(name);
   console.log(a);
   console.log(name2);

   //this code will throw error because we have exported two things with name as (a,c) from
   //module1.mjs but in module2 we are trying to import from module1 -> name2 which is not
   //exported from module1
   ```

3. #### Props in Reactjs

   Example: Agar ham tmhe ek khaali kagaz tukda de dein to wo ek khaali kaagaz ka tukda hai lekin agar ham usme kx inofrmation fill kar ke de dein to wo ek leave application hos skti hai, job application ho skti hai, etc. To wo ek kaagz ka tukda useful ban jaata hai nhi to wo kaagaz ek kaagaz hi rehta. Similar to templates.

   Jaise ki school ka application form hota hai to wo ek template hai basically jab wo tmhe diya jaata hai to usme to koi bhi value kisi bhi field ki set nahi hoti hai to agar wo aise hi waapas kar dein hame to wo form ka koi relevance nahi rahega, par agar usme value fill karke us form ko waapas karein to wo form basically hamara form hoga jsime ki hamse related saari information hogi.

   Ab props bhi kx aisa hi hai, agar koi component react mein props accept kar raha hai to matlab hai ki wo component basically ek template hai jiska relevance tabhi hoga jab us component mein ham wo saari fields jo ki bharni hai usme ham props ki value daal denge.
   Ye props ki value default bhi ho skti hai, aur aisa bhi ho skta hai ki props ki value parameterized ho.
   Props hamari basically properrtiers hoti hai, agar hamne ek component banaya ab ham us component mein kx cheezein paas karna chahte hain, to jab bhi us component ko kabhi ham use
   karenge doosre component mein to ham us component ko di jaane waale properites paas karenge,yahi properties props hoti hain.

   #### NOTE: Props should always be read only.

   Hame kisi bhi keemat par inhe apne component ke andar jo ki un props ko accept kar raha hai, nahi change karna hai.

   #### propTypes

   Ye ye batate hain ki jo prop components mein use ho rahe hain unka kya type hai agar uske alawa koi type hamne apne component ke andar us prop ka use kiya hai to console mein hame ek warning milega uske regarding.Aur agar un propTypes mein tmne isRequired bhi use kar liya hai to agar kisi component nhi paas ki hai un props ki value ki is component ko use karte wakht to bhi hame ek warning milegi console mein.

   #### defaultProps

   ye ye batata hai ki kaunsi value ya kaunsi cheez use karenin us prop ki jagah, agar us prop ke liye jo component hamare component ko use kara hai usne us prop ki value nhi di hai.
 
4. ### React Hooks: useEffect() is called twice even if an empty array is used as an argument
   Probably you have other side effects that cause the component to rerender but the useEffect itself will only be called once. You can see this for sure with the following code.
```
useEffect(()=>{
      /*
      Query logic
      */
      console.log('i fire once');
},[]);
```
If the log "i fire once" is triggered more than once it means your issue is one of 3 things.

This component appears more than once in your page
This one should be obvious, your component is in the page a couple of times and each one will mount and run the useEffect

Something higher up the tree is unmounting and remounting
The component is being forced to unmount and remount on its initial render. This could be something like a "key" change happening higher up the tree. you need to go up each level with this useEffect until it renders only once. then you should be able to find the cause or the remount.

React.Strict mode is on
StrictMode renders components twice (on dev but not production) in order to detect any problems with your code and warn you about them (which can be quite useful).
