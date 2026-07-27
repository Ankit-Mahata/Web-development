// debouncing and throttling
let input1=document.querySelector
("#ip1");

function debounce(fnc,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer=setTimeout(()=>{
            fnc(...args);
        },delay);
    }
}


input1.addEventListener("input",debounce(function(){
    console.log("ran");
},1000));

// debounce matlab , ek delay pachhi action ko reation milnu

// action hudai garda , fix interval ma reaction hudai garnu throttling ho

let input2=document.querySelector
("#ip2");
function throttle(fnc,delay){
    let timer=0;
    return function(...args){
       let now=Date.now();
       if(now-timer>=delay){
        timer=now;
        fnc(...args);
       }
    };
}

input2.addEventListener("input",throttle(function(){
    console.log("hi");
},1000));
