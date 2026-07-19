// asynchronous behaviour
console.log("hey1");
console.log("hey2");
setTimeout(()=>{
console.log("hey3");},3000);
console.log("hey4");

// sync matlab ek sakiye pachhi matra arko kam 
// suru garnu 
// async matlab sabai kam sangai suru garnu tara jasko answer pahila aayo tyo respod gardinu

// for instant 
// task a = 5s 
// task b = 3s
// task c = 10s

// sync behaviour ma total task complete garna 
// 18 seconds lagne hun 
// tara async ma total task garna 10 seconds lagne hun


// callback

let time;
function wait (fnc){
    time=Math.floor(Math.random()*10);
    setTimeout(()=>{
    console.log("after",time,"seconds");
    },time*1000)
}
wait();

//
function rukja(fnc){
    setTimeout(fnc,time*1000);
}
rukja(function(){
    console.log("callback");
});

// 
function greet(callback){
    console.log("namaste");
    callback();
}
function bye(){console.log("bye");};
greet(bye);
/* callbacks vaneko tyo function ho jaslai as
an argument pathainchha kunai function ma , so that teslai kehi time pachhi use/call garna sakiyos */
// here bye is a callback
// but , yesto greet(bye()); yesto vaidiyeko vaye
// tyo callback hune thiyena , kinaki yo bela 
// bye() instant call hune thiyo
/* callback ko main purpose vaneko 
kunai kaam sakiye pachhi particular function lai execute garnu ho , khas ma function lai variable ma assign garnu ko purpose pani yehi ho  */
// in general , kunai specific work sakiye pachhi execute hune function callback ho 
// for eg , EventListner pani callback ho

function process(callback){
    console.log("processing");
    setTimeout(callback,2000);
}
process(()=>{console.log("Email sent")});
process(()=>{console.log("SMS sent")});

// With the use of callback , a function can preform multiple task

/*Callback भनेको एउटा function हो, जसलाई अर्को function मा argument को रूपमा पठाइन्छ र आवश्यक समयमा त्यसले call (execute) गर्छ। */



// callback hell

function login(emailpass,ab){
    console.log("logging in...");
    setTimeout(()=>{
        console.log(`logged in as ${emailpass.email}`);
        ab("welcome to the profile",emailpass);
    },2000);
}
function getprofile(username,cb){
    setTimeout(()=>{
    console.log(`Profile fetched of ${username}`);
    cb({username,age:20});
    },3000)
}

function getpost(fe){
    setTimeout(()=>{
        console.log("getting posts");
        fe({posts:5,like:100,comment:50});
    },4000);
}


login({email:"ankit123@gmail.com",pass:"ankit111"} , function(text,emailpass){
    console.log(text);

    getprofile("Ankit",(pfdata)=>{
    USER={...emailpass,...pfdata};
    console.log(USER);

    getpost((posts)=>{
        USER={...USER, ...posts};
        console.log(USER);
    })
});


});


// ek kaam sakiye pachhi arko kam garnu , tyo pani callback vitra callback lagayera , tyo lai callback hell vaninchha
// yeslai overcome promises ra asyncwait le garchha




