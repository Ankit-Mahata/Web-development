let email=document.querySelector("#email");
let password=document.querySelector("#password");
let form=document.querySelector("form");

form.addEventListener("submit",function(dets){
    dets.preventDefault();
    let isvalid=true;
    
    document.querySelector("#emailMessage").textContent=" ";
    document.querySelector("#passwordMessage").textContent=" ";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans=emailRegex.test(email.value);
    let passans=passwordRegex.test(password.value);

    if(!emailans){
     document.querySelector("#emailMessage").textContent="Invalid Email !";
    isvalid=false;  }
     if(!passans){ 
     document.querySelector("#passwordMessage").textContent="Invalid Password !";
     isvalid=false;
     }
    if(isvalid){
        document.querySelector("#resultMsg").textContent="Everything is correct";
    }
    else{
        document.querySelector("#resultMsg").textContent="There is error";
    }
})