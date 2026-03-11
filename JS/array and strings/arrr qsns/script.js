/* for a given array of marks find the average marks of students */
let stdmarks=[85,97,44,37,76,60];
let sum=0;
console.log(`marks are = ${stdmarks}`);
for(let i=0; i<stdmarks.length; i++){
    sum=sum+stdmarks[i];
}
console.log(`the average marks is ${sum/stdmarks.length}`);


/*for a given arrray with price of 5 items. change the array to stor the price with 10% discount */
let price=[250,645,300,900,50];
console.log(`the price of items are = ${price}`);
for(let i=0; i<price.length; i++){
    price[i]=price[i]-price[i]*0.1;
} 
console.log(`the price of items after discount is = ${price}`);