// array methods
let arr=[1,2,3,4,5];
arr.push(1);
console.log(arr);
arr.pop();
console.log(arr);
arr.pop();
console.log(arr);

arr.shift();
console.log(arr);
arr.unshift(5);
console.log(arr);

let arro=arr.splice(1,1); // splice delete the elements from actual array also return the elements
console.log(arro);
console.log(arr);
arr.push(4,1,2)
console.log(arr);

let newarr=arr.slice(2,4); // slice do not change the actual array 
console.log(arr);
console.log(newarr);

arr.reverse();
console.log(arr);

let sr=arr.sort(function(a,b){
    return a-b;
});
console.log(sr);


arr.forEach(function(val)
{
    console.log(val+1);
})



console.log(arr);
let arr5=arr.map(function(val){
    return 2*val;
});
console.log(arr5);
let arr3=arr.map(function(val){
    if(val>3)
        return val;
})
console.log(arr3);


console.log(arr);
let arr2=arr.filter(function(val){
if(val>2) return true;
})
console.log(arr2);


let ans=arr.reduce(function(acc,val){
    return acc+val;
},0)
console.log(arr);
console.log(ans);


let a=arr.find(function(val){
    return val==4;
})
console.log(a);

let b=arr.some(function(val){
    return val>4;
})
console.log(b);

let c=arr.every(function(val)
{
    return val>4;
})
console.log(c);
