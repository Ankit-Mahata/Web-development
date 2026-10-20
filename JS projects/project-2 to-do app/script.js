let input=document.querySelector("input"); // selecting task input box
let add=document.querySelector("#add-btn"); // selecting add button
let task=document.querySelector("#tasks"); // task area
let filter=document.querySelector("#filter"); // filter buttons
let clear=document.querySelector("#clear");   // clear complete
let all=document.querySelector("#all");
let active=document.querySelector("#active");
let completed=document.querySelector("#completed");
let mission=""; 


// get the value from input box

input.addEventListener("input",function(e){
    mission=e.target.value;
    console.log(mission);
    console.log(task.children[0].tagName);
});



// adding tasks , marking completed or deleted


add.addEventListener("click",function(){
    let tag = task.children[0]?.tagName;
    // console.log(tag);
    console.log(mission);
     
    if(mission =="")
    {
        if(task.children.length===0)
        {
            console.log("hi");
            let message=document.createElement("p");
            message.textContent="please add some tasks!";
            task.classList.add("msg-flex");
            message.style.color="red";
            task.append(message);

        }
        if(tag==="P")
        {
            console.log("hi2");
        task.children[0].textContent="please add some tasks!";
        task.children[0].style.color="red";
        }
    }
    

     else{
        if(tag==="P"){
            task.classList.remove("msg-flex");
            task.children[0].remove();
        }
        if(mission!==""){
        let main_div=document.createElement("div"); // task-box
        main_div.classList.add("task-box");
        let div1=document.createElement("div");
        div1.id="div1";
        let div2=document.createElement("div");
        div2.id="div2";
        main_div.appendChild(div1);
        main_div.appendChild(div2);

        let checkbox=document.createElement("input");
        let label=document.createElement("label");
        checkbox.type="checkbox";
        checkbox.classList.add("tickbox");
        label.textContent=mission;

        div2.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`;


        
        

        div1.appendChild(checkbox);
        div1.appendChild(label);
        task.append(main_div);

        // when checked 

        checkbox.addEventListener("change",function(){
            if(checkbox.checked)
            {
                label.style.textDecoration="line-through";
                main_div.style.opacity="0.7";
            }
            else{
                 label.style.textDecoration="none";
                main_div.style.opacity="1";
            }
            updateProgress();
        });
         
    // when task deleted
        div2.addEventListener("click",function(){
            main_div.remove();
            updateProgress();
        });

        document.querySelector("#all").classList.add("blue-border");
        active.classList.remove("blue-border");
        completed.classList.remove("blue-border");
        
        }
        updateProgress();
     }
     
});




// handling filter buttons


filter.addEventListener("click",function(e){
    let key=e.target.id
    console.log(key);
    let taskbox=document.querySelectorAll(".task-box");

    if(key==="all")
    {
        completed.classList.remove("blue-border");
        all.classList.add("blue-border");
        active.classList.remove("blue-border");
        console.log(taskbox);
        taskbox.forEach(function(element){
            element.style.display="flex";
        });
        
    }
    if(key==="active")
    {
        completed.classList.remove("blue-border");
        all.classList.remove("blue-border");
        active.classList.add("blue-border");
        taskbox.forEach(element=>{
           let checkbox= element.querySelector("input");
           if(checkbox.checked){
            element.style.display="none";
           }
           else{
            element.style.display = "flex";
           }
        });
    }

    if(key==="completed")
    {
        completed.classList.add("blue-border");
        all.classList.remove("blue-border");
        active.classList.remove("blue-border");
        
        taskbox.forEach(element=>{
           let checkbox= element.querySelector("input");
           if(checkbox.checked){
            element.style.display="flex";
           }
           else{
            element.style.display = "none";
           }
        });
    }
});

// clear completed

clear.addEventListener("click",function(){
    let taskbox=document.querySelectorAll(".task-box");

    taskbox.forEach(element=>{
        let checkbox=element.querySelector("input");
        if(checkbox.checked)
        element.remove();
    });
});


// progress bar
function updateProgress(){
let taskbox=document.querySelectorAll(".task-box");
let remaining=0,total=0;
taskbox.forEach(function(element){
    total++;
    let checkbox=element.querySelector("input");
    console.log(checkbox.checked);
    if((checkbox.checked)){
        remaining++;
    }
});
console.log(remaining,total);
 let span_remaining=document.querySelector("#remaining");
 let span_total=document.querySelector("#total");
 span_remaining.textContent=remaining + " ";
 span_total.textContent=total;
 console.log(span_remaining.textContent,span_total.textContent);

//  show bar

let progress_level=document.querySelector("#progress-level");
console.log
let progress=(remaining/total)*100;
console.log(progress);
progress_level.style.width=progress+"%";

let message=document.querySelector("#message");
console.log(message.textContent,progress);
if(progress<=35 || progress==NaN)
{
    if(progress==0)
    {
   message.textContent="Let's get started! 🚀";
   message.style.color="";
    }
    else{
    message.textContent="Struggling a bit?";
    message.style.color="red";
    }
}
if(progress>35 && progress<75)
{
    message.textContent="You're making great progress! 💪";
    message.style.color="orange";
}
if(progress>=75)
{
    message.textContent="Almost there! Finish strong! 🔥";
    message.style.color="green";
    if(progress==100)
    {
        message.textContent="100%...You crushed it! 🔥";
    message.style.color="green";
    }
}
}
