localStorage.setItem("name","Ankit mahata");
let val=localStorage.getItem("name");
console.log(val);
localStorage.setItem("age","20");
console.log(localStorage.getItem("age"));
localStorage.removeItem("age");
console.log(localStorage);

// session storage is same as localStorage but differ by storing feature

// cookies
// cookies ma j data store gare pani page reload huda automatically server ma janchha 
document.cookie="Ankitmahata@gmail.com";
console.log(document.cookie);

