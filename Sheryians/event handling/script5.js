// event bubbling and capturing
/*jun element ma event occur hunchha yedi tyo sanga event listner chhaina vane , event bubble garera parent sanga janchha and keep moving upward   */
// yedi event listner chha vane pani parent sanga janchha
let nav=document.querySelector("#nav");
let about=document.querySelector("#about");
nav.addEventListener("click",function(){
    alert(" nav clicked");
})
// if we click in button still alert will be popped

about.addEventListener("click",function(){
    alert("about clicked");
})
// even if about have listner it still goes to nav bar after about




// now creating a line through in a list , whenever it is clicked with the use of event bubbling

document.querySelector("ul").addEventListener("click",function(dets){
    dets.target.classList.toggle("line");
})
// toggle le , class lageko vaye hataune ho ra hateko vaye lagaune ho


// !!! Important

/* jaba pani kunai event raise hunchha taba event flow (propagation) two phase ma chalchha
1: event top level element bata tala(child) tira flow hunchha
which is called CAPTURING PHASE
2: event raised element bata parent tira janchha which is called BUBBLING PHASE

** pahile event 1 chalchha
tara ahile samma ta hamile by default bubbling phase observe garyau ?
   => ho, khas ma by default capturing phase chalchha , tara hamile teslai activate garaunu parchha
   matlab event parent to child flow garchha 
*/



// event capturing

/* event listening flow from parent to child */

let a=document.querySelector(".a");
let b=document.querySelector(".b");
let c=document.querySelector(".c");
let click=document.querySelector("#click");

click.addEventListener("click",function(){
    alert("button clicked");
}
,true);
c.addEventListener("click",function(){
    alert("c clicked");
},true);
b.addEventListener("click",function(){
    alert("b clicked");
}
,);
a.addEventListener("click",function(){
    alert("a clicked");
},true);
// expected output when clicked on button
/* 
   1: capturing phase = a->c->button (since no te=rue mark on b)
   2: bubbling phase = b 
   */

