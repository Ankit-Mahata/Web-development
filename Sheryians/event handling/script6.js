let input=document.querySelector("#first");
let span=document.querySelector("#s1");
input.addEventListener("input",function(){
  span.textContent=input.value.length;
})
let inp=document.querySelector("#second");
let spa=document.querySelector("#s2");
let left;
inp.addEventListener("input",function(){
    left=20-inp.value.length;
    if(left<0)
    {
        spa.textContent=left;
        spa.style.color="red";
    }
    else{
        spa.style.color="black";
        spa.textContent=20-inp.value.length;
    }
})
