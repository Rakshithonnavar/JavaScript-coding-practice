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
