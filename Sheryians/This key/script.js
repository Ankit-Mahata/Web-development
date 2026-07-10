//"this" is a special keyword , jasko value , kuna thau ma use gariyeko chha tyo anusar change hunchha


console.log(this);
// global scope ma window object hunchha 

function meaning(){
    console.log(this);
}
meaning();
// function ma pani this ko vlaue window nai hunchha 

let obj={
    name:"Ankit",
    class:14,
    sayName: function(){
        console.log(this);
        console.log(this.name);
        console.log(this.class);
    },
    checkVal: () =>{
        console.log(this);
    },
    funcvitra: function(){
        function vitra(){
            console.log(this);
        }
        vitra();
    },
    arrw: function(){
        let fun=() =>{
            console.log(this);
        }
        fun();
    }
    
}
obj.sayName(); // object vitra , kunai method ma this ko value object nai hunchha tara

obj.checkVal();// tara object vitra arrow function chha vane this ko value tyo function ma window hunchha

obj.funcvitra();// obj ma method vitra eauta arko function banayo vane this le feri aafno property lose garchha i.e wwindow hunchha

obj.arrw();
// tesaile method vitra function bananunu paryo vane arrow function banaunu parchha , jasle  garda this ko value object nai rahanchha

document.querySelector("h1").addEventListener("click", function(){
    console.log(this);
    console.dir(this);
    this.style.color="red";
})
// eventLIstner vitra this ko value tei element hunchha jasma listner lageko hunchha

class Abcd{
    constructor(){
        console.log("hey");
        this.a=12;
    }
}

let val=new Abcd(); // new keyword le class lai call garayera eauta blank object create garchha ra , this ko value tei blank object hunchha 
//same as c++
console.log(val);


