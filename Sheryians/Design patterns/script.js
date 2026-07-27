// module pattern (IIFE)
let bank=(function(){
  let bankbal=10000;
  function checkbal(){
    console.log(bankbal);
  }

  function deposite(val){
    bankbal +=val;
  }
  function withdraw(val){
    if(bankbal>=val){
       bankbal-=val;
    }
  }

    return { 
       check: checkbal,  // revealing model pattern. actual function lai alag naam le pathako ho
       depo : deposite,
       with: withdraw,
    };
})();

bank.check();
bank.depo(1000);
bank.check();
bank.with(2000);
bank.check();


// factory function pattern
function createproduct(name,price){
    let stock=10;
    return{
    name,
    price,
    checkstock(){
        console.log(stock);
    },
    buy(qty){
        if(qty<=stock){
            stock-=qty;
            console.log(`${qty} pieces booked ...${stock} pieces left`);
        }
        else{
            console.error(`we only have ${stock} pieces left. `);
        }
    },
    refill(qty){
        stock+=qty;   
    },
};
}
let iphone=createproduct("iphone",70000);
iphone.buy(9);
let samosa=createproduct("iphone",20);
samosa.buy(5);




// observer pattern

class yt{
    constructor(){
        this.subscriber=[];
    }
    subscribe(user){
        this.subscriber.push(user);
        user.update(`${user.name}, you have subscribed the channel. `);
    }
    unsubscribed(user){
        this.subsriber=this.subscriber.filter((sub)=>{sub !==user});
        user.update(`you have unsubscribed the channel.`);
    }
    notify(message){
        this.subscriber.forEach((sub)=>{sub.update(message)});
    }
}

class user{
    constructor(name){
        this.name=name;
    }
    update(data){
        console.log(`${this.name},${data}`);
    }
}


let sher= new yt();
let user1=new user("ankit");
sher.subscribe(user1);
sher.notify("new video is out now");
