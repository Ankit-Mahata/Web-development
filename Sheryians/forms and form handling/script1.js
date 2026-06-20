let email=document.querySelector("#email");
let password=document.querySelector("#password");
let form=document.querySelector("form");

form.addEventListener("submit",function(dets){
    dets.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans=emailRegex.test(email.value);
    let passans=passwordRegex.test(password.value);

    if(!emailans){
     document.querySelector("#emailMessage").textContent="Email is incorrect !";  }
     if(!passans){ 
     document.querySelector("#passwordMessage").textContent="password is incorrect !";
     }
    
})