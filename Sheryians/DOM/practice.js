//select all <li> elements and print their text using a loop
let list=document.querySelectorAll("li");
console.log(list);
list.forEach(function(val)
{
   console.log(val.textContent); 
})

// select a paragraph and replace its content with
// <b> updated</b> by javascript
let p=document.querySelector("p");
p.innerHTML="<b> updated</b> by javascript";
console.dir(p);

// add a title attribute to a div dynamically
let div=document.querySelector('div');
div.setAttribute("title","hey");

// add a highlight class to every even item in a list.

let lis=document.querySelectorAll("ul li:nth-child(2n)");
console.log(lis);
lis.forEach(function(val){
    val.classList.add("highlight")
});