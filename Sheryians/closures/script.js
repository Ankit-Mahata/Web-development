// closures matlab yesto function jasle return garos eauta arko function jasle parent function ko variables use garos

function counter(){
    let c=0;
    return function(){
        c++;
        console.log(c);
    }
}
let fnc=counter();
fnc();
fnc();
fnc();
let fnc2=counter();
fnc2();
fnc2();
fnc2();
fnc2();

// Encapsulation
 
function click_limiter(){
    click=0;
    return function(){
        if(click<5)
        {
            click++;
            console.log(`clicked : ${click} times`);
        }
        else{
            console.log("LIMIT EXCEEDED !");
        }
    }
}
let fun=click_limiter();
fun();
fun();
fun();
fun();
fun();
fun();
fun();
// we cannot tthe change the value of click , externally