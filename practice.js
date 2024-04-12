//Few more practice problems:
console.log("Helloworld");
const add = (a,b)=>{
    return a+b;
}
console.log(add(7,8));
console.log("Rakshit");

let check = Date();
console.log(check);

// console.log(check1);

class Vehicle{
    constructor(name,year,price)
    {
      this.name=name;
      this.year=year;
      this.price=price;
    }
    price_check()
    {
      return `This is my ${this.name} and it was released in the year ${this.year}  and cost of this is${this.price}.`;
    }
  }
  const gaadi = new Vehicle('BMW',2020,'5 Lakhs');
  console.log(Vehicle.price_check());
  
  
  


  
  
