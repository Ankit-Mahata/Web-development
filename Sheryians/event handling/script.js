// adding event listner
let p=document.querySelector("p");
p.addEventListener("click",function(){
    p.style.color="blue";
    p.style.backgroundColor="aqua";
})

let h=document.querySelector("h2");
function addEvent(){
    h.style.color="pink";
    h.style.backgroundColor="red";
}
h.addEventListener("mousemove",addEvent);

// removing event listener

h.removeEventListener("mousemove",addEvent);

// common events
// click and mousemove is already discussed above

let inp=document.querySelector("input");
inp.addEventListener("input",function(data){
    console.dir(data);// jaba kunai event trigger hunchha browser le automatically eauta object banauchha , jasma tyo event ko sabai info hunchha
    // user le input diyeko value herna lai 
    // data.target.value
    alert(`your name is ${data.target.value}`);
})
/* this means whenever any input is given by a user then then event input is triggered and any data given by user is stored in function variable */

// suppose yedi user le input diyo ani user le enter press gare pachhi matra data show garaunu chha vane
let inpu=document.querySelector("#last");
inpu.addEventListener("keydown",function(e){
    if(e.key=="Enter")
    {alert(`your name is ${e.target.value}`)}

})

// 
let select=document.querySelector("select");
let device=document.querySelector("#device");
select.addEventListener("change",function(val){
    console.log(val.target.value);
    device.style.color="red"
    device.textContent=`${val.target.value} selected`;
    // h2 heading will be changed
});


//
let h1=document.querySelector("h1")
window.addEventListener("keydown",function(det){
  console.log(det.key);
  if(det.key===" ")
  {
    h1.textContent="spc";
  }
  else
    {h1.textContent=`${det.key}`;}
})

