// call apply bind 

let stu={
    name:"mahata",
    age:20,
}
function bcd(){
    console.log(this); // function vitra this ko value , window hunchha
}
// but function lai call garda kheri this ko value k hune 
// vanera hami set garna sakchhau 
 bcd.call(stu); // aba function vitra ko this ko value , k pass gareko chha tehi hunchha. i.e. object

 // if any function have parameters , then call is used as

function efg(a,b){
    console.log(this,a,b);
}
efg.call(stu,2,3);


// ---> apply ko kam : yedi function ma ek vaanda jyada arguments pass gariyo vane(including obj) then pass garda kheri arguments lai array ko rup ma pass garne 

function hij(a,b,c){
console.log(this.name,a,b,c);
}
 hij.apply(stu,[1,7,0]);

 // ---> bind le function lai call garaudaina , baru function ko copy return garchha jasma this ko value , pass gariyeko object hunchha
 let clone=hij.bind(stu,2,4,6);
 clone();
   