let hr=document.querySelector("#hr");
let min=document.querySelector("#min");
let sec=document.querySelector("#sec");

let day=document.querySelector("#day");
let dayVal=document.querySelector("#dayVal");
let month=document.querySelector("#month");
let year=document.querySelector("#year");
let suffix=document.querySelector("#suffix");

let xii=document.querySelector("#xiih");
let xxiv=document.querySelector("#xxivh");

const daymap = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const monthmap = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function get_day(day){
    console.log(day);
    return daymap[day];
}
function get_month(month){
    return monthmap[month];
}


setInterval(()=>{
    const time=new Date();
    console.log(time);
    sec.textContent=time.getSeconds();
    console.log(time.getSeconds());
    min.textContent=time.getMinutes();
    year.textContent=time.getFullYear();
    month.textContent=get_month(time.getMonth());
    dayVal.textContent=time.getDate();
    day.textContent=get_day(time.getDay());

    if(time.getHours()>=12)
    {
        console.log("howuanfd");
        suffix.textContent="PM";
    }
    else{
        suffix.textContent="AM";
    }

    console.log(xii.getAttribute("value"));
    xii.addEventListener("click",function(){
        xii.setAttribute("value","true");
        xxiv.setAttribute("value","false");
    });
    xxiv.addEventListener("click",function(){
        xii.setAttribute("value","false");
        xxiv.setAttribute("value","true");
    });

    if(xii.getAttribute("value") === "true"){
        hr.textContent=time.getHours()-12;
    }
    if(xxiv.getAttribute("value") === "true")
    {
         hr.textContent=time.getHours();
    }
},1000);


xii.addEventListener("click",function(){
    xxiv.classList.remove("shadow");
    xii.classList.add("shadow");
})
xxiv.addEventListener("click",function(){
    xii.classList.remove("shadow");
    xxiv.classList.add("shadow");
})



