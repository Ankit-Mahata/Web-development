let count=0;
let progress=document.querySelector(".progress");
let  button=document.querySelector("button");
let  p=document.querySelector("p");
let  h2=document.querySelector("h2");

button.addEventListener("click",function(){
coount=0;
setInterval(function(){
if(count<100){
    count++;
    progress.style.width=`${count}%`;
    p.textContent=count+"%";
}
else{
    h2.textContent="Downloaded";
}
},30)
}); 