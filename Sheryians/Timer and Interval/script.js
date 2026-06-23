setTimeout(function(){
    console.log("hello");
},2000)
setInterval(function(){
    console.log("iam Ankit Mahata");
},3000)
let clr=setTimeout(function(){
    console.log("Learning from harsh bhaiya");
},4000)
clearTimeout(clr);
//
let h1=document.querySelector("h1");
let c=10;
let cls=setInterval(function(){
c--;

if(c<1){
    clearInterval(cls);
}
h1.textContent=c;
},1000);