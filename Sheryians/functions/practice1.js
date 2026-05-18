// function expression 

// multiply function
let mul= function(a,b)
{
  return a*b;
}
let val=mul(4,5);
console.log(val);

// print welcome
let printwc= function()
{
    console.log("welcome");
}
printwc();

// convert temperature from celsius to fahrenheit
let temp=function(c)
{
    let f=32+1.8*c;
    return f;
}
console.log(`${temp(30)}f`);




// -> arrow function

// subtract function
let sub=(a,b)=>{
    return a-b;
}
console.log(sub(4,2));

// positive or negative

let find=n=>{
    if(n>0)
        return "positive";
    else if (n==0)
        return "zero";
    else 
        return "negative";
}
console.log(find(-4));

// find cube

let cube=m=>{
    return m*m*m;
}
console.log(cube(3));




// first class function

// creaate a function , assign it in a variable and invoke it
function greet()
{
    console.log("hello");
}
let x=greet;
x();
greet();

//create a function that accept another funnction as a parameter

function A()
{
    console.log("function A");
}

function B (one)
{
  one();
}
 B(A);


 // create a function that return another function

 function outer()
 {
    return function(){
        console.log("inner");
    }
 }
 outer()();
 let i=outer();
 i();

