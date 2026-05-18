// create a bmi calculator
function bmi(w,h)
{
    return w/(h*h);
}
console.log(bmi(101,1.7).toFixed(2));


//create a reusable discount calculator
function discountCalculator(discount)
{
    return function (price)
    {
        return price-price*(discount/100);
    }
}
let ten=discountCalculator(10);
console.log(ten(100));
let twenty=discountCalculator(20);
console.log(twenty(200));



// build a counter using closure
function counter()
{
    let count=0;
    return function(){
        count++; 
        return count;
    };
}
let c =counter();
console.log(c());
console.log(c());
console.log(c());
let d=counter();
console.log(d());
console.log(d());
console.log(c());



//create a pure function to transform a vlaue
function doouble(val)
{
    return 2*val;
}
console.log(doouble(5))


//use IIFE to isolate a variable
(function()
{
    let pass ="ankit123";
    console.log(pass);

})();