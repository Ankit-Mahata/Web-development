// selecting element
let abc=document.getElementById("two");
console.dir(abc);
let b=document.getElementsByClassName("heading");
console.dir(b);

// general selection
let h2=document.querySelector("h2");
console.dir(h2);

// manuplation
h2.textContent="h2 heading";
h2.innerHTML="<i>h2 heading</i>"

// i can add new tag inside body tag in HTMl through JS
// let me add <a></a> tag
// but if i want to add this tag directly 
// it will replace or override all other tags 
// i.e body.innerHTML="<a></a>"
// this will remove all other tags
// therefore to update a tag in HTML there are threee ways 
// i) using += operator
// body.innerHTML += '<a href="https://google.com">Click</a>';

// ii) body.insertAdjacentHTML('beforeend', '<a href="https://google.com">Click</a>');


// iii) using createElement(); // this is the most professional way
let a=document.createElement('a');
a.href="";
a.textContent="click me";
document.body.appendChild(a);
let anchor=document.querySelector("a");
console.dir(anchor);
// giving value to the attributes
anchor.href="https://www.google.com";
anchor.setAttribute("href","https://www.Youtube.com");
anchor.textContent="youtube";

let img=document.querySelector("img");
console.log(img);
img.setAttribute("src","https://images.unsplash.com/photo-1778704822016-24f082b69eb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8");
