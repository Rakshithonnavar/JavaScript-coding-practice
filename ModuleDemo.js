// import myNAMEDisplay  from "./module.mjs";

// let variable = myNAMEDisplay('Rakshit');
// console.log(variable);

//Same elements in array:
const array1 = [23,12,12,0,34,14];
const result = array1.sort();
console.log(result); //Sorts the array in ascending order and returns a new sorted array without modifying original one.
let count=0;
const samecheck= ()=>{
    const store = [];
for(let i=0;array1.result;i++)
{
    if(array1[i]==array1[i+1])
      store.push();      
}
console.log(store);
}
console.log(samecheck());
const array2= [34,56,89,45,34];
const array3= [34,56,89,45,34];
let array4=0;
if(array2==array3)
{
    console.log("True");
}
else{
    console.log("false");
}
const demoarray = [56,78,56,90,78];
//Array out of Bound exception demonstration using  try catch block
// let test  = demoarray[5];
// console.log(test);

// const store1 = [];
// try{
    let test  = demoarray[5];
    // for(let i=0;i<demoarray.length;i++)
    // {
    //     if(demoarray[i]<=demoarray.length)
    //        demoarray.push(store1[i]);  
    //     //   console.log(store1);  
    // }
//     console.log(store1);  
// }
// catch(error)
// {
//      lastIndex = findLastIndex(demoarray,high/2,high);
//      console.log("Array out of bounds exception");
// }


let num = 3;
if(num in demoarray)
{
    const moulya  = demoarray[num];
    console.log(moulya);
}
else{
    console.log(num+ "is not present in the array");
}