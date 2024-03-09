// console.log("HelloWorld");


// //Code to chech weather given number  is prime or not:
function  checkPrime(num) {
    if(num>1 && num%2!==0){
        console.log(num + "is a Prime Number");
    }
        else{
            console.log(num+ "is not a prime number");
        }
}
checkPrime(5);

//Maximum Number in array:
// let count = prompt("Enter the count");
// let n = parseInt(count);
// function maxElement(n)
// {
//    const nums = [34,26,37,48]; 
//     nums.sort();
//     return nums[n-1];
// }
// console.log(maxElement());


//Check if the given string is plaindrome:
function isPalindrome(str)
{
   if (str===str.split('').reverse().join('')) {
   return true;
}
  else{
     return false;
  }
}
console.log(isPalindrome(""));


//Reverse a string:
function reverseString(str)
{
    return str.split('').reverse().join('');
}
console.log(reverseString("Rakshit"));


//Find factorial of a number:
function factorial(n)
{
    if(n==0)
      return 1;
    else
    {
        return n*factorial(n-1);
    }
}
console.log(factorial(5));



//printing  Fibonacci Series:
function fibonacci(num)
{
  if(n===0)
  return 0;
  if(n===1)
  return 1;
   let fib = [0,1];
   for (let i=2;i<=num;i++)
  {
    return (fib[i-1]+fib[i-2] );
  }  
}

//program to check wheather the given number is prime

function isPrime(num)
{
  if(num<0)
  {
    return -1;
  }
  if(num>0 && num%2!=0)
   {
    console.log("Prime number");
   }
   else{
    console.log("Not a Prime Number");
   }
}


// Find largest element in nested arrays:

function findLargest(num)
{
          array = [[34,67,48],
                   [46,34,67],
                   [59,65,43]];
    var maxVal = array[0][0], maxIndex = 0;
    for(var i = 0; i < array.length; i++){
          for(var j = 0; j < array[i].length; j++ ){
            if(array[i][j] > maxVal){
              maxVal = array[i][j];
              maxIndex = i;
            }
          }
    }
    console.log(`The largest element of ${num} is at index ${maxIndex}`);
    return maxVal;
  }
  console.log(findLargest(5)); // Outputs
//Function to capitlize 1st letter  of each word and convert all letters to uppercase

// function TitleCase(str)
// {
//   //  const  str = "It's a beautiful day";
//   return str.replace(str.charAt(0).toUpperCase());
// }
// TitleCase(str);

function Random()
  {
  // const newArray = ["Rakshit","Sahana"];
  // newArray.push("Sahana");
  //   // return newArray;
  //   console.log(newArray);
     const array2  = [23,56,86,89,9];
     const fruit = ['Apple', 'Orange', 'Banana'];
     const test = array2.concat(fruit);
     console.log(test);
    //  array2 = fruit.copyWithin(1,2);
    //  console.log('After using copywithin method:');
    //  console.log(array2); 
     const test1 = fruit.indexOf('Apple');
     console.log(test1);
      fruit.reverse();
       console.log(fruit);
       fruit.length
       console.log(fruit);
       const test3 =  array2.sort();
        console.log(test3);
        const test4 = fruit.shift();
        console.log(test4);
        const test5 = array2.slice();
        console.log(test5);
    }
console.log(Random())

//Arrow Function Demonstration
const addition = (a,b)=>
 sum = a+b;
 console.log("The sum is :"+addition(7,5));

 //Sorting array elements using arrow function

 const array1 = [23,67,35,67,89];
 const swap = (array,a,b) =>{
  let temp = array[a];
    array[a]=array[b];
    array[b] =temp;
 }

 let sort = (array) => {
    for(let i=0;i<array.length;i++)
    {
       for(let j=0;j<array.length-i-1;j++)
       {
          if(array[j] > array[j+1])
          {
            swap(array,j,j+1);
          }
       }
    }
    return array;
 }
 console.log(sort(array1));

 //Callback function
 function calculator(num1,num2,calc)
 {
    // console.log("The sum is"+)
    return calc(num1,num2)%2;
 }
 function add(num1,num2)
 {
  return num1+num2;
 }

 console.log(calculator(4,5,add));
//  const display = (hesru)=>
//  {
//   console.log(+hesru +"will be most sucessfull one day.");
//  }
//  console.log(display("Rakshit"));

//  console.log();


//Closures

let variable1 = "Rakshit";

function fun1()
{
   let variable2 = "Random string";

   function fun2()
   {
    //  let variable3 = "Random String2";
     let variable4 = `The 2 strings are ${variable2} and ${variable1}`;
      return variable4;
   }
   return fun2;
  }
fun1()

//Constructor Demostration
//Object Constructor
function Human(name,age,gender)
{
   this.name=name;
   this.age=age;
   this.gender= gender;
}

let human1 =  new Human("Rakshit",22,"Male");
let human2= new Human("xyz",18,"Female");
console.log("My name is" +  human1.name  +   "and I am" + human1.age +" years old");

//Class Constructor
class Car{
  constructor(make,model,price){
    this.make=make;
    this.model=model;
    this.price=price;
}
}

let car1 = new Car("Toyota","Fortuner","33 Lakhs");
console.log("This is"+" "+car1.make+" "+car1.model+" "+"its price is INR"+" "+car1.price);


//Dates and its methods:
const currentdate =  new Date();
const  day = currentdate.getDate();
console.log(day);
let month = currentdate.getMonth();
console.log(month);
const year = currentdate.getFullYear();
console.log(year);
console.log(day+ "/"+ (month)+"/ "+year);
const hours = currentdate.getHours();
console.log(hours);
const Timezone = currentdate.getUTCMilliseconds();
console.log(Timezone);
const str = currentdate.toString();
console.log(str);
 month = currentdate.setMonth(3);
console.log(currentdate.getMonth());



//Enums demonstration
const items = Object.freeze(
  {
    pen:1,
    pencil:2,
    whitener:3,
    eraser:4
  }
)
Object.keys(items).forEach((items)=>
console.log("itesm are:",items)
)

let variable5 = new Object();

variable5['key1'] = 'value1';
variable5['key2'] = 'value2';
variable5['key3'] = 'value3';

for(let key in variable5){

  if(variable5.hasOwnProperty(key)){
    console.log('key is: '+key+', value is:' +variable5[key]);
  }
}
 
let variable6 = new Map();

variable6.set('key1','value1');
variable6.set('key2','value2');
variable6.set('key3','value3');

console.log(variable6.get('key3'));

variable6.set('key2','nee value')

console.log(variable6.get('key2'));

variable6.delete('key3');
variable6.has('key3');
variable6.has('key3');
// console.log(`My name is ${NAME}`);

// let myname ='Rakshit';
//Memory hoisting 
console.log(myNameDisplay);

// function myNameDisplay(){
//   const myname = 'Rakshit';
//   console.log(`My name is ${myname}.`);
// }

// console.log(typeof myNameDisplay);

const myNameDisplay = function()
{
  const myname = 'Rakshit';
  console.log(`My name is ${myname}.`);
}
console.log(myNameDisplay());
// console.log(typeof myNameDisplay);





  

