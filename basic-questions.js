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
// console.log(myNameDisplay);

// function myNameDisplay(){
//   const myname = 'Rakshit';
//   console.log(`My name is ${myname}.`);
// }

// console.log(typeof myNameDisplay);

// const myNameDisplay = function()
// {
//   const myname = 'Rakshit';
//   console.log(`My name is ${myname}.`);
// }
// console.log(myNameDisplay());
// console.log(typeof myNameDisplay);

//Iterators Demonstration

console.log('Ba'+'100'+'Na');
function createIteratorRange(min=0,max=Infinity,step=1)
{
  let nextnum =min;
  let count =0;
  
  const rangeInterate = (next)=>
  {
     let result;
     if(nextnum<max)
     {
      result = {value:nextnum,done:false};
      nextnum+=step;
      count++;
      return result;
     }
     return {value:count,done:true};
  }
  return rangeInterate;
}
console.log(createIteratorRange);

//Memoization Demonstration.
memo = [];
function checkarray(num)
{
  const memodemo = [45,67,89,34,56];
   if(memodemo[num])
    return memodemo[num];
  else{
     memodemo.push(num);
     memodemo.sort();
    //  memodemo.pop();
  }
  return memodemo;
}
console.log(checkarray(78));

//Method Demonstration:
const Bio = {
  Name: "RAKSHIT",
  AGE: "22",
  GENDER:'Male',
person: function()
{
  console.log("The name is "+ this.Name); 
   console.log("My age is " +this.AGE);
   console.log("My gender is " +this.GENDER);
}
}

let random = Bio.person();
Bio.AGE=23;
random = Bio.person.bind(Bio);
random();



class Human7
{
  #name;
  set name(name)
  {
    this.#name = name;
  }
}

const namestest = new Human7();
namestest.name = 'Rakshit';

console.log(namestest.name);

const n = 256.5;
isFinite(n)
console.log(isFinite(n));
// return isNaN(n)? 1:0;
console.log(isNaN(n));
const n1 = n.toExponential();
console.log(n1);
const n2 = n.toString();
console.log(n2);
let n3 = n.toLocaleString();
console.log(n3);
console.log(typeof n2);
console.log(typeof n3);

// const person = new Person();

const Engineer = {
  Firstname: 'Rakshit',
  LastName:'Honnavar',
  Age : 22,
  Gender: 'Male'
}
Engineer.Firstname;

//Using Object Constructors
class Person{
  constructor(firstname,lastName)
  {
    this.firstname = firstname;
    this.lastName=lastName;
  }
  greeting()
  {
     return `Hi my name is ${this.firstname}   ${this.lastName}`;  
  }
}
const person = new Person('rakshit','honnavar');
console.log(person.greeting());

//Using Object Constructors.
class HumI{
  constructor(age,gender)
  {
    this.age=age;
    this.gender=gender;
  }
   greeting()
   {
    return `Hi my AGE IS  ${this.age} ${this.gender}.`
   }
}
const num = new HumI('22','Male');
console.log(num.greeting());
console.log(2+2);
let sankye = 65<23;
console.log(sankye);
console.log(89=="89");
const val = "true";
const val1 = "false"

let check = true || false;
console.log(check);

let i=true;
let a=0;
let b=0;
let c=0;
i==true? (a++,b++,c++):((a=0),(b=0),(c=0));
console.log('a=',a,'b=',b,'c=',c);
//Greatest of 3 numbers using ternary operator:
let x=23;
let y=45;
let z=67;
const answer = (x>y)&&(x>c)? x: ((y>z)? y : z );
console.log("The Greatest Number is",answer);
const answer1 = (x<y)&&(x<z)? x:( (y<x)? y : x ) ;
console.log("The Smallest Number is",answer1);

//Usage of Chaining 
const promise = new Promise((resolve,reject)=>
{
   const term1 = 45;
   const term2 = 45;
   const val3 = term1+term2;
   const answer2 = 91;
   const check = val3===answer2;

   if(check)
   {
    resolve('The promise was fullfilled!');
   }
   else{
      reject(
        {
          errortype:'ArithmeticError',
          message:"Expression was calculated correctly.",
          orgexp:`${term1}+${term2}=== ${answer2}`,
        }
      );
   }
});
promise.then((message)=>
{
  console.log(`success :${message}`);
})
.catch((err)=>{
   console.log(`${err.errortype}: ${err.message} \nOriginal Expression: ${err.orgexp}`);
}
)
.finally((message)=>{
console.log('Operations finished');
}
);

//Async and await demonstration:
function demo1()
{
  return  new Promise((resolve)=>
  {
    resolve('Sucessfull promise');
  });
}

function demo2()
{
  return new Promise((resolve)=>{
    resolve('Second Sucessfull promise!');
  });
}

async function someAsyncAwaitFunction()
{
  try{
    const promise = await  demo1();
    const promiseTWO = await demo2();
    console.log(promise, promiseTWO);
  }
  catch(error)
  {
     console.log(`Error from async function: ${error}`);
  }
}

someAsyncAwaitFunction();

class gaadi{
  constructor(company,paisa,saal)
  {
    this.company=company;
    this.paisa=paisa;
    this.saal=saal;
  }
}
const vahana = new gaadi("toyota","34lakh",'2019');
const vxh =  `this car belongs to ${this.company} its price is ${this.paisa} and the lauching year is ${this.saal}`;
console.log(vxh);

function demo3()
{
  return new Promise((resolve)=>{
    console.log("third test");
  })
}
function demo4()
{
  return new Promise((reject)=>{
    console.log("Fourth test");
  })
} 

async function awaitdemofunction()
{
  try{
  const d1 = await  demo3();
  const d2 = await demo2();
  console.log(d1,d2);
  }
  catch(error)
  {
    console.log(`the  error is ${error}`);
  }
}

console.log(awaitdemofunction());

//HTML Request and response method:

// let create = new XMLHttpRequest();

// create.open(method,URL,[async,user,password]);

// create.send([body]);

// create.onload = function()
// {
//   alert(`Progress: ${create.status} ${create.response}`);
// };

// create.onerror = function()
// {
//   alert(`Network error occured`);
// };

// create.onprogress = function(event)
// {
//   alert(`Received ${event.loaded} of ${event.total}`);
// };

// create.timeout = 10000;


function functionName(...digit)
{
   let rem
   let sum=0;
        
      for(const randomm of digit)
      {
      rem%=10;
      sum+=sum+rem;
      digit/=10;
    }
    return sum;
}
let numss = [457,678];
// let randomm = functionName(...digit);
console.log(functionName(...numss));

//SET Demonstration:
const mySet = new Set();

const newset = new Set("Rakshit");
const newset1 = new Set("");
const newset2 = new Set("Rakshit");
console.log(newset1);

console.log(newset.size);
console.log(newset2.size);
// console.log()

//Set Objects method:
newset1.add(34);
newset2.add(56);
newset.add(78);
newset2.add("x");
console.log(newset1);
console.log(newset2);
console.log(newset);
console.log(newset.delete(78));
console.log(newset1.delete(x));
console.log(newset.has("R"));
console.log(newset.clear());

 //Array sorting:
const sortops = [45,67,34,12,45];
sortops.sort();
console.log(sortops);

const compare = (a,b)=>
{
  if(a==b)
  {
    return 0;
  }
  else
  {
  return a>b?a:b;
  }
}
console.log(compare(3,2));

function comparefun(A,B)
{
  return A-B;
}
sortops.sort(function comparefun(A,B)
{
  return A-B;
});
console.log(sortops);


console.log(sortops.length);


//Printing Numbers from 1 to 10:
function  printnums(){
let numberrr=0;
while(numberrr<=10)
{
  numberrr++;
}
console.log(numberrr);
}
console.log(printnums());



const arry = [34,56,67,75,58];
console.log(arry);
// console.log(isPalindrome());
const array3 = [34,78,34,78,12];
const array4 = [89,56,89,71,45];
const array5 = array3+","+array4;
console.log(array5);

console.log(Timezone);
console.log(Date);
Date();
console.log(Date());

class college1 
{
 constructor(title,year,location) 
 {
  this.title=title;
  this.year=year;
  this.location=location;
 }
 displayCollege()
 {
      return `this is ${this.title} which was established in the year ${this.year} and this is situated in ${this.location}`;
}
}
const collegedisplay = new college1("Canara Engineering College","2001","Mangalore");

function displaycollege()
{
    console.log("Canara Engineering College");
}
displaycollege();
console.log(day);
console.log(month);
const sett =  new Set();

const college = {
  year:'2001',
  name:'Canara Engineering College',
  Location:'Mangalore',
  display : function()
  {
    console.log(this.year+' '+this.name+', '+this.Location);
  },
};

college.display();



const Myprofile = {
  name:'Rakshit',
  age: "22",

  prof : function()
  {
    console.log("My name is"+" "+this.name+", am " +this.age+" years old");
  },
}
Myprofile.prof();

function doubleResult(num1,num2,calc)
{
  return calc(num1,num2)*2;
}

// const newSett =  new Set(Rakshit);

function add(num1,num2)
{
  return num1+num2;
}

function multiply(num1,num2)
{
   return num1*num2;
}
console.log(doubleResult(4,2,add));
console.log(doubleResult(4,2,multiply));

let global = 'World';

function outer(){
   let locaglobal = "rakshit";
  function inner()
  {
    let mylocal = `${global}, ${locaglobal}}!`;
    return mylocal;
  }
  return inner;
}

let global1 = 'test1';

function outer()
{
      let locaglobal = "test2";

      function inner()
      {
        let randomvariable  = `${global1},${locaglobal}`;
        return randomvariable;
      }
    return inner;
}


function Myprofilee(Name,age,Degree)
{
  this.Name=Name;
  this.age=age;
  this.Degree=Degree;
}

let person1 = new Myprofilee("Rakshit","22","Information Science");
let person2 = new Myprofilee("XYZ","33","BYH");

console.log("My name is " + person1.Name +" "+"I am "+ person1.age +" "+ "years old "+"I have obtained bachelors in"+" "+ person1.Degree);

class Carr{
  constructor(name,year,price){
    this.name=name;
    this.year=year;
    this.price=price;
  }
}

let CAR1 = new Carr("Fortuner","2010","34lakhs");

console.log("This is "+CAR1.name+" which was launched in the year "+CAR1.year+" its on road value is "+CAR1.price+".");

//Event Handling:

// {/* <button id="Hello-button">Click me!</button>

// var btn = document.getElementById('Hello-button');

// btn.addEventListener('click',() =>{
//   window.alert("Hello World!");
// }); */}

//Set demo 

const myset = new Set([1,2,3,4,56]);

console.log(mySet);
console.log(mySet.size);


const randomarray = [35,67,88,67,56];

console.log(randomarray.sort());


//Sorting in presence of comparision function:

function CompareFn(A,B)
{
  return A-B;
}

let Randomarr1 = [23,56,98,22,45,23];
randomarray.sort(function Compare(A,B){
  return A-B;
});
console.log(randomarray);


let Randomarr2 = [78,23,12,23,56,67,99];
Randomarr2.sort(function Compare(A,B){
  return A-B;
});
console.log(Randomarr2);



