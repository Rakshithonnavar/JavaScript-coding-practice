console.log("HelloWorld");
//arrays:

const names = ["Rakshit","Ruchita","Hemaltha"];

console.log(names[0]);
console.log(names);

names.push('Vinod');
console.log(names);

const indiancars = [
  ["Scorpio","Thar","XUV 700"],
  ["Creta","Seltos","Aurora"],
  ["Safari","Innova","Ertiga"]
]
console.log(indiancars);
console.log(indiancars[0][1]);

const firstElement = names.at(0);
console.log(firstElement);

// const find =  find(indiancars[0]);

// console.log(find);
function mathoperations(num1,num2,calc)
{
  return calc(num1,num2);
}
function add(num1,num2)
{
  return num1+num2;
}
function multiply(num1,num2)
{
  return num1*num2;
}
function subtract(num1,num2)
{
  return num1-num2;
}
console.log(mathoperations(3,5,add));
console.log(mathoperations(3,5,multiply));
console.log(mathoperations(3,5,subtract));

//Closure Functions:
let myGlobalString = 'Rakshit';

function outer()
{
  let mylexicalString = "Honnavar";

  function inner()
  {
    myLocalString = `${myGlobalString},${mylexicalString}`;
    console.log(myLocalString);
  }
  return inner;
}
console.log(outer());

//Consstructors
function Car(company,model,year)
{
  this.company = company;
  this.model = model;
  this.year = year;
}
let car = new Car('Toyota','Fortuner','2018');
console.log('This is a  ' +car.company+' '+car.model+' '+'launched in the year'+' '+this.year);

{/* <button id="hello-button">Click Me!</button>

let button =  document.getElementById('click',() =>{
  window.alert('Hello World!');
}) */}

{/* <button id="name-clicking-button">Name</button>

let btn = document.getElementById('name-clicking-button');

btn.addEventListener('click', ()=>{
    window.alert('Rakshit');
}) */}
const addition = (num1,num2)=>{
  return num1+num2;
}
console.log(addition(4));

console.log(typeof(NaN));
console.log(typeof(null));

console.log(addition(10,34));

function rocketToMars() {
  return 'BOOM!';
}
console.log(rocketToMars());

let simplehash = new Object();

simplehash['name']='Rakshit';
simplehash['age']=20;
simplehash['city']='Bengaluru';

//Mutators 
class Human
{
  #name;

  set name(name) //Mutator created
  {
    this.#name = name;
  }
}

const human = new Human();
human.name = 'Rakshit';

console.log(human.name);

const number  = 89;

// console.log(isInteger(number));
Number.isInteger(number);

const myname = '90';

console.log(Number.isNaN(myname));

console.log(Number.parseFloat(myname));

let secondnumber = '3.14';
secondnumber = 30.14456;
console.log(Number.parseInt(secondnumber));
console.log(secondnumber.toFixed(3)
);

//Promises Practice 
let mypromize  = new Promise((resolve,reject) => {
  resolve('Promise is resolved');
  reject('Promise is rejected');
})
console.log(mypromize);

const promise =  new Promise((resolve,reject) =>{
  const term1 = 2;
  const term2 = 2;
  const expression = term1 + term2;
  const answer = 5;
  const expiscorrect = expression === answer;

  if(expiscorrect)
  {
    resolve('The promise was fulfilled');
  }
  else{
    reject({
      errorType : 'Arithmetic Error',
      message:"The expression didn't evaluate correctly",
      originalExpression: `${term1} + ${term} === ${answer}`,
    });
  }
});

promise
  .then((message) => {
    console.log(`Success: ${message}`);
  })
.catch ((err) =>{
   
})
.finally((message) =>{
  console.log('Operations finished');
})
console.log(promise);

//Async Await
// function myPromise()
// {
//   return new Promise((resolve) => {
//      resolve('Successful promise!');
//   });
// }

// function mySecondPromise()
// {
//   return new Promise((resolve) =>{
//     resolve('Successful second promise!');
//   });
// }

// async function someAsyncAwaitFunction()
// {
//   try{
//     const promise = await myPromise();
//     const promisetwo = await mySecondPromise();

//     console.log(promise);
//     console.log(promisetwo);
//   }
//   catch(error)
//   {
//    console.log(`Error from async function: ${error}`);
//   }
// }

// someAsyncAwaitFunction();

//
// Promise.all(iterableObject);

const promiseA = new Promise((resolve,reject) => {
  resolve(23);
});

const promiseB = new Promise((resolve, reject) =>{
  if(12 * 12 === 144)
  {
    resolve(144);
  }
  else{
    reject ({
      errorType: 'TypeError',
      message: `Unexpected type - expected ${typeof (12 * 12)}.`,
    });
  }
});

  Promise.all([promiseA, promiseB])
  .then((values) => {
    console.log(`Results from Promise.all() : [${values}]`);
  })
  .catch((err) =>{
    console.log(`Error from Promise.all() : ${err.message}`);
  })
  .finally(() =>{
    console.log('Finally block executed');
  })

  //Promises
  myPromiseObject.catch(rejectedPromiseCallback);

  const brokenPromise = new Promise((resolve, reject) => {
    reject({
      errorType: 'TypeError',
      message:'Something went wrong.',
    });
  });

  brokenPromise.catch((err) =>{
    console.log(`Error from brokenPromise: ${err.message}`);
  })

  //try ca6ch and finally
  let num=5;
  try{
  if(num == 5)
    console.log("Thank You!");
  }catch(err)
  {
   console.log("Error:"+error);
  }
  finally{
    console.log("Finally block executed");
  }

  //Requests:
  let xhr  = new XMLHttpRequest();
  xhr.open(method, URL,[async,user,password]);
  xhr.send([body]);

  xhr.onload = function()
  {
    alert(`Progress: ${xhr.status} ${xhr.response}`);
  };
  xhr.onerror = function()
  {
   alert(`Network Error Occurred`);
  };
  xhr.onprogress = function (event)
  {
    alert(`Received ${event.loaded} of ${event.total}`);
  };
  //Response:

