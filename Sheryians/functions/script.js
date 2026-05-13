// function decleration
function abcd()
{
    console.log("hello world");
}
abcd();

// function expression
let func=function()
{
    console.log("hello Ankit");
}
console.log(func);
func();

// arrow function
let arrowfunc = () =>
{
    console.log("hello mahata");
}
console.log(arrowfunc);
arrowfunc();

// first class function
function firstclass( func)
{
    func();
}
firstclass(function(){
    console.log("I am a developer");
});

// higher order function
function hof()
{
    return function()
    {
        console.log("higher order function");
    }
}
hof()();