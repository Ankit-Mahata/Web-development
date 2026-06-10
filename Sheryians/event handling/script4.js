// mouseover, mouseout and mousemove
let abcd= document.querySelector("#abcd");
abcd.addEventListener("mouseover",function(){
    abcd.style.backgroundColor="yellow";
})
abcd.addEventListener("mouseout",function(){
    abcd.style.backgroundColor="red";
})

let mov=document.querySelector("#mov");
window.addEventListener("mousemove",function(dets){
    mov.style.top=dets.clientY + "px";
    mov.style.left=dets.clientX + "px";
});

