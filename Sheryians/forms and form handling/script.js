let nam=document.querySelector("#name");
let form=document.querySelector("form");
let email=document.querySelector("#email");
form.addEventListener("submit",function(dets){
    dets.preventDefault();
    let hide=document.querySelector("#hide");
    if(nam.value.length <= 2 || nam.value.length >10 ){
        hide.style.display="initial";
    }
        else{
        hide.style.display="none";
        }
    

   // email part
   const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
     let ans =emailRegex.test(email.value);
     console.log(ans);
})