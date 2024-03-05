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
let count = prompt("Enter the count");
let n = parseInt(count);
function maxElement(n)
{
   const nums = [34,26,37,48]; 
    nums.sort();
    return nums[n-1];
}
console.log(maxElement());


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

// function findLargest(num)
// {
//     const array = [34,67,48,23,45];
    
// }

//Function to capitlize 1st letter  of each word and convert all letters to uppercase

// function TitleCase(str)
// {
//   //  const  str = "It's a beautiful day";
//   return str.replace(str.charAt(0).toUpperCase());
// }
// TitleCase(str);
