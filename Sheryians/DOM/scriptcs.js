// manuplating style through css
h2=document.querySelector("#two");
console.dir(h2.style);
h2.style.color="red";
h2.style.backgroundColor="black";
para=document.querySelector("p");
para.style.fontFamily="Gilroy";
let h1=document.querySelector("h1");
h1.style.fontFamily="arial";

// adding class to a tag
para.classList.add("demo");
h1.classList.add("demo");
// removing class
para.classList.remove("demo");