// import myNAMEDisplay  from "./module.mjs";

// let variable = myNAMEDisplay('Rakshit');
// console.log(variable);
//Try and Catch Illustration:
let number = 25;
try {
     if(number < 20)
     {
        throw 'too loww'
     }
     else if(number>20)
     {
        throw 'too big!';
     }
     else
      {
         console.log('Input was' +number);
      }
   
} 
catch (error) 
{
   console.log('Input was' +error);
}
let sankye = 9 ;
try{
   let  hosa_sankye = sankye/0;
   console.log(hosa_sankye);  
}
 catch(ArithmeticError)
 {
    console.log("Cannot divide by Zero");
 }