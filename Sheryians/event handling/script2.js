let btn=document.querySelector("#btn");
let fileip=document.querySelector("#fileip");
btn.addEventListener("click",function(){
fileip.click();
})
fileip.addEventListener("change",function(dets){
    btn.textContent=dets.target.files[0].name;
})