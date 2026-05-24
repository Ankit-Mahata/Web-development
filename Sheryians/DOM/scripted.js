// getAttribute
let anc=document.querySelector("a")
let ancr=anc.getAttribute("href");
ancr="https://www.google.com";
console.log(ancr);

// removeAttribute
let image=document.querySelector("img")
image.removeAttribute("src");

// dynamic DOM manuplation
 let para=document.createElement("p");
 console.dir(para);
 para.textContent="hi ! this paragraph is to demonstrate creating and appending node/tag dynamically";
document.body.prepend(para);

h2=document.querySelector("#second"); // selecting by id
h2.remove(); // removing any tag

// dynamically addding a div and heading inside it

let div=document.createElement("div");
document.body.appendChild(div);
let heading1=document.createElement("h1");
heading1.textContent="first heading inside div";
div.append(heading1);
let heading2=document.createElement("h2");
heading2.textContent="second heading inside div";
heading2.setAttribute("id","heading2");
div.append(heading2);
// i want to add h3 between h1 and h2
let heading3=document.createElement("h3");
let target=document.querySelector("#heading2"); // using id selector because we have another h2
heading3.textContent="h3 before h2";
target.insertAdjacentElement('beforebegin',heading3);