// async/await

/*async/await le Promise lai replace gardaina.
async/await ta Promise lai use garne sajilo syntax matra ho */

//async le function lai Promise return garne banaidinchha.

async function test(){
    return "hello";
}
console.log(test());
// output is promise object
/* 
function internally ,
function test(){
    return Promise.resolve();
} 
   async function le jun sukai value return gare pani automatically Promise ma wrap garidinxa.
    */

   /* kunai function ma async code lekhichha vane , hami tyaha promises use garna sakchhau , kinakin promises use garnu async behaviour haina baru promises le async code lai manage garchha , then ko use garera 
   tei then bata bachna lai async await ko use garinchha */


// without async/await

function abcd(){
    fetch(`https://randomuser.me/api/`)// random api bata raw data liyera aauchha 
    .then(function(raw){
        return raw.json();
    })
    .then(function(data){
        console.log(data);
    })
}
abcd();

//using async / await 
// ek await le ek then hatchha 

async function bcd(){
    let raw =await fetch(`https://randomuser.me/api/`) ;
    
    let data=await raw.json();
    console.log(data);
// raw pani async code ho kinaki , user ko data jati pani thulo huna sakchha tesaile
// read garna time lagna sakchha , tesile raw.json() le promise return garchha ;
}
bcd();

