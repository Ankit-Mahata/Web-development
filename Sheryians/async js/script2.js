// promises

/* promise ko kam vaneko , kunai kam ko result lai manage garnu ho 
jastai , callback hell ma yo pachhi yo kam garne vanera 
callback vitra call back hunchha , tei kam manage garne kam promise ko ho */
// jastai user login vaye pachhi , profile khulnu , tespachhi post dekhaunu etc

// Promise भनेको asynchronous बनाउने चीज हो?
/* Promise ले asynchronous काम बनाउँदैन।

Asynchronous काम त setTimeout(), fetch(), browser APIs, वा Node.js APIs ले गर्छन्।

Promise को काम भनेको त्यस asynchronous कामको future result लाई व्यवस्थित रूपमा represent र handle गर्नु हो। */

// Promise एउटा built-in Class हो।
// const promise = new Promise();
// aba promise class ko ctor le eauta function maagchha
// const p = new Promise(function () {});
/* Promise class ले त्यो function call गर्दा
दुईवटा argument आफैं पठाउँछ।
  new Promise(function (resolve, reject) {});
 
  [callback sikda hamile herya thyau setTimeout vitra parameter wala function call garera hami kehi pathauthyau]

  resolve pani eaut function ho jun , kam success vayeko bela call garna garinchha 
  reject pani eauta function ho jun, kam fail vayeko bela call garinchha 
  */

var ans=new Promise((res, rej)=>{
    var n=Math.floor(Math.random()*10);
    if(n<5){
        return res();
    }
    else{
        return rej();
    }
});
ans.then(()=>{
    console.log("less than 5");
})
.catch(()=>{
    console.log("greater or equal to 5");
})



// internally , conceptually yestai kam hunchha .

/* class MyPromise {

    constructor(executor) {

        // Promise ko internal data
        this.state = "pending";
        this.result = undefined;
        this.thenCallback = null;

        // resolve function
        const resolve = (value) => {

            this.state = "fulfilled";
            this.result = value;

            // then pahilai register bhayeko xa vane call gara
            if (this.thenCallback) {
                this.thenCallback(this.result);
            }
        };

        // reject function
        const reject = (reason) => {
            this.state = "rejected";
            this.result = reason;
        };

        // Timi le diyeko function lai call gar
        executor(resolve, reject);
    }

    then(callback) {

        // callback save gara
        this.thenCallback = callback;

        // promise pahilai resolve bhayeko xa vane
        if (this.state === "fulfilled") {
            callback(this.result);
        }
    }
}
    
let ans = new MyPromise((res, rej) => {

    res("ghar jau");

});

ans.then(function(data) {

    console.log(data);

});


*/






// ghar jau 
// gate khola
// khana pakau
// khau 
// suta

// yini kam haru lai ek paxi ek execute garna promise chahinchha

let a=new Promise((res,rej)=>{
    res("ghar jau");
});
  a.then(function(data){
    console.log(data);
    return new Promise((res,rej)=>{
      res("gate khola");
    })
})
  .then((data)=>{
    console.log(data);
    return new Promise((res,rej)=>{
      res("khana pakau");
    })
})
  .then((data)=>{
    console.log(data);
    return new Promise((res,rej)=>{
      res("khau");
    })
})
  .then((data)=>{
    console.log(data);
    return new Promise((res,rej)=>{
      res("suta");
    })
  })
  .then((data)=>{
    console.log(data);
  })


  // in actual , .thrn() vitra feri promise banaunu teti practical hudaina , baru harek kam lai eauta function banainchha


  function gharJau() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("🏠 Ghar jau");
            resolve();
        }, 2000);
    });
}

function gateKhola() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("🚪 Gate khola");
            resolve();
        }, 2000);
    });
}

function khanaPakau() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("🍳 Khana pakau");
            resolve();
        }, 2000);
    });
}


gharJau()
    .then(() => {
        return gateKhola();
    })
    .then(() => {
        return khanaPakau();
    })



    
  // this is also called promise chaining

