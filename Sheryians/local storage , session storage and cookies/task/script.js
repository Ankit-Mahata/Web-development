// OS bata mode change garda , live change hunu paryo

if(localStorage.getItem("theme")){
    document.body.classList.add(localStorage.getItem("theme"));
}
else{
     setmode();
}

function setmode()
{
    if(window.matchMedia("(prefers-color-scheme: dark)").matches)        
    {
        console.log("dark");
        document.body.classList.remove("light");
    document.body.classList.add("dark");
    }
    else{
        console.log("light");
        document.body.classList.remove("dark");
    document.body.classList.add("light");
        }
}



window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function(){
    setmode();
})


// button bata change garda pani hunu paryo
let button=document.querySelector("button");
button.addEventListener("click",function(){
 if(document.body.classList.contains("dark"))
 {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme","light");
    // aba , hamile website close garera feri open garda jun previous theme thyo tehi aaunu paryo
 }
 else{
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem("theme","dark");
 }
})



/*✅ OS theme detect (prefers-color-scheme)
✅ OS theme live change detect (matchMedia + change event)
✅ Button बाट manually theme toggle
✅ localStorage मा user preference save
✅ Page reload पछि पनि उही theme restore */