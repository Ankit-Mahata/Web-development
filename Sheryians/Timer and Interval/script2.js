let count=0;
let progress=document.querySelector(".progress");
let  button=document.querySelector("button");
let  p=document.querySelector("p");
let  h2=document.querySelector("h2");

button.addEventListener("click",function(){
count=0;
progress.style.width=`0%`;
    p.textContent="0%";
    h2.textContent="Downloading File...";
let cls=setInterval(function(){
if(count<100){
    count++;
    progress.style.width=`${count}%`;
    p.textContent=count+"%";
}
else{
    h2.textContent="Downloaded";
    clearInterval(cls);
}
},30)
}); 