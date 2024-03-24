// import myNAMEDisplay  from "./module.mjs";

// let variable = myNAMEDisplay('Rakshit');
// console.log(variable);
// Try and Catch Illustration:
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
const message = "Cannot divide by Zero"
try{
   let  hosa_sankye = sankye/0;
   console.log(hosa_sankye);  
}
 catch(error)
 {
    console.log(error.message);
 }

//Block Scope:
function myFunction()
{
   let a=1;
   let b=2;
   if(a==1){
     console.log(a);
     console.log(b);
   }
   console.log(a);
   console.log(b);
}
console.log(myFunction());

//Window Objects:
// window.alert('Helloworld');
// alert("Hello World");
const currency  = 'Rs';
const hana = "85000";
console.log(currency+hana);

const currency1 = '1000';
console.log(typeof currency1);
const currency2 = 2000;
console.log(currency1+currency2);

// let hesaru = "Rakshit";
const myNameDisplay = (hesaru)=>{
   // let hesaru = "Rakshit";
   return `My name is ${hesaru}`;
}
console.log(myNameDisplay("Rakshit"));

 //Largest element in array:

   const array3 = [-2,-9,78,0,34,12];
   const result = array3.sort();
   const count=0;
    for(let i=0;i<result.length;i++)
      {
         if(result[i]==result[i+1])
           {
            count++;
           }
      }
      return count;
   // const result = array3.sort();
   const largest  =  result[result.length-1] ;
   const Smallest = result[0];
   console.log(Smallest);
   console.log(largest);
   //Distinct elements in array:




