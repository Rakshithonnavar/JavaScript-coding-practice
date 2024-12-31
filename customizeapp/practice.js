console.log("Hello World");

const sum = (a,b) =>{
 return a+b;  
}
sum(5,7); // Output: 12

function Car(brand,name,year)
{
  this.brand = brand;
  this.name= name;
  this.year = year;
}

let car1 = new Car('Toyota','Fortuner',2012);
let car2 = new Car('Toyota','Qualis',2002);

console.log('Car1 name is'+ car1.name +' ' + car1.brand +' '+ car1.year);
console.log('Car2 name is'+ car2.name +' '+ car2.brand + ' ' +car2.year);

//callback functions:
function doubleResult(num1,num2,calc)
{
    return calc(num1,num2)*2;
}
function add(num1,num2)
{
    return num1+num2;
}
function multiply(num1,num2)
{
    return num1*num2;
}
console.log(doubleResult(8,8,multiply));
//Events in Javascript:
{/* <button id="Hello-button">Click Me!</button> */}

// let btn = document.getElementById("Hello-button");

// btn.addEventListener('click', () =>{
//     window.alert("Hello world");
// });

// let btn1  = document.getElementById("Hello-Button");

// btn1.addEventListener('click',()=>{
//     window.alert("Hello world two");
// })

// let btn2 = document.getElementById('click',()=>{
//     window.alert("Hello world three");
// }

// )

//Promises 
function myPromise()
{
    return new Promise((resolve) => {
resolve('Successful promise!');
    });
}

function mySecondPromise()
{
    return new Promise((resolve) =>{
        resolve('Second Sucessfull Promise');
    })
}

function myThirdPromise()
{
    return new Promise((resolve)=>{
      resolve('Third Sucessful promise');
    })
}

async function waitfunction()
{
    try 
    {
        const p1 = await myPromise();
        const p2 = await mySecondPromise();
        const p3 = await myThirdPromise();

        console.log(promise);
        console.log(mySecondPromise);
        console.log(myThirdPromise);
    }
    catch(error)
    {
        console.log(`Error from async function: ${error}`);
    }
}

waitfunction();

const wishes = () => {
    console.log("Happy new year 2025!");
    console.log("This year ur a going to achieve great things Rakshit");
    console.log("Keep Hustling");

}
console.log(wishes());