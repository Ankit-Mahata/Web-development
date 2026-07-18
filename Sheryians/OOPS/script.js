function createBiscuit(){
    this.name="parleG",
    this.price=5,
    this.qty=8,
    this.company="parle",
    this.category="regular"
}
let biscuit1=new createBiscuit();
console.log(typeof (biscuit1),biscuit1);


function chocolate(name,price,flavour){
    this.name=name;
    this.price=price;
    this.flavour=flavour;
}
let c1=new chocolate("dairy milk",100,"chocolate");
let c2=new chocolate("blast",2,"lemon");
console.log(c1,c2);

/* function vitra ta this ko value window hunu 
parne hoina ra ?
 ho , tara new keyword le eauta blank object 
 create garchha ra , new use garera functioni call
  garyo vane this ko value blank object hunchha
 ani function vitra vayeko harek variable ra
 methods tyo objeect ko lagi banxa ra , object return hunchha */

 function createPencil(name,price,color){
    this.name=name;
    this.price=price;
    this.color=color;
    this.write=function(text){
        let h1=document.createElement("h1");
        h1.textContent=text;
        h1.style.color=color;
        document.body.append(h1);
    }
 }

 let p1=new createPencil("nataraj",10,"black");
 p1.write("howare you");
 let p2=new createPencil("doms",10,"red",);
 p2.write("kasie ho bhay");

/* yedi object ko kunai pani property same chha vane 
for eg company name , then teslai constructor 
function vitra banayo vane , harek object
ko lagi naya property banchha . tesko satta 
prototype keyword use garyo vane ekai choti matra
tyo property banchha */
// c++ ma static member jastai
createPencil.prototype.company="pencil";
console.log(p1,p2);
console.log(p1.company,p2.company);

// similarly kunai method lai pani prototype banauna skainchha 

function Vehicle(name,color,wheel,speed){
    this.name=name;
    this.color=color;
    this.wheel=wheel;
    this.speed=speed +"km/h"
}
Vehicle.prototype.run=function(){
let h1=document.createElement("h1");
h1.textContent=`${this.name} runs at ${this.speed}`;
h1.style.color=this.color;
document.body.append(h1);
}
let v1=new Vehicle("car","blue",4,40);
console.log(v1);
v1.run();
let v2=new Vehicle("bike","red",2,30);
v2.run();


