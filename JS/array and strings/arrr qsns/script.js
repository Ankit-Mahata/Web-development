/* for a given array of marks find the average marks of students */
let stdmarks=[85,97,44,37,76,60];
let sum=0;
console.log(`marks are = ${stdmarks}`);
for(let i=0; i<stdmarks.length; i++){
    sum=sum+stdmarks[i];
}
console.log(`the average marks is ${sum/stdmarks.length}`);
