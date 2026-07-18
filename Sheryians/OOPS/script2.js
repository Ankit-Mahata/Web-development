// classes

class Animal{
    constructor(name,leg,move,color){
       this.name=name;
       this.leg=leg;
       this.color=color;
       this.move=move;
    }
    action(){
        let h3=document.createElement("h3");
        h3.textContent=this.name +" "+ this.move;
        h3.style.color=this.color;
        document.body.append(h3);
    }
}
let snake=new Animal("snake",0,"crawls","grey");
snake.action();
let human=new Animal("Ankit",2,"walks","black");
human.action();