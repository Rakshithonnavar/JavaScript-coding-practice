

// import { displayName } from "./basic-questions.js";

// let variable = displayName('Rakshit');

// console.log(displayName);
// console.log("HelloWorld");
//call backs demo:

function DivideResult(num1,num2,calc)
{
    return calc(num1,num2)/2;
}
function add(num1,num2)
{
    return num1+num2;
}
//Arrow Function Demo:
const greatest=(a,b,c)=>{
    return (a>b && a>c)?a:(b>c)?b:c;
}
console.log(greatest(4,5,6));
//leap year check:
const leapYearcheck =(year)=>{
if(year%4==0&&year%100!=0||year%400==0)
   console.log("leap year");
else
{
    console.log("not a leap year");
}
}
leapYearcheck(2021);

const evenornot=(num)=>
{ 
    if(num==0)
    console.log("even number");
    else{
    return num%2==0?1:0;
}

}
console.log(evenornot(0));
//using object datatype
var simplehash =  new Object();
simplehash['key1']='value1';
simplehash['key2']='value2';
simplehash['key3']='value3';

for(var key in simplehash)
    {
     if(simplehash.hasOwnProperty(key))
        {
            console.log("key is: "+key+" ,value is "+simplehash[key]);
        }
    }
//using map object:
let maphash =  new Map();
maphash.set('person1',"Rakshit");
maphash.set('person2',"Sahana");
maphash.set('person3','our both child name');

console.log(maphash.get('person1'));
console.log(maphash.get('person2'));

let college =  new Map();
college.set('college1','CEC');
college.set('college2','NIT');
college.set('college3','IIT');
college.set('college4','SCEM');
college.set('college5','SJEC');

college.delete('college5');

console.log(college.size);
console.log(college.get('college1'));
console.log(college.get('college2'));
console.log(college.get('college3'));
console.log(college.get('college4'));

const colleges = new Map([
    ['RVCE',"Bengaluru"],
    ['BMSCE',"Bengaluru"],
    ['MSRIT',"Bengaluru"],
    ['PESIT',"Bengaluru"],
    ['SCEM',"Mangaluru"],
    ['CEC',"Mangaluru"],
])

console.log(colleges.get('SCEM'));









