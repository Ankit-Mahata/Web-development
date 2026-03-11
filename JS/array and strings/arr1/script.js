/* array are objects but they are indexed collections of values . they have index as keys*/
let heroes=["superman","hulk","thor","ironman"];
let marks=[1,5,4,8,44];
let info=["ankit",86, "delhi"]; // this array is not preferred . arrray should contain same type of elements
console.log(heroes);
console.log(marks);
console.log(info.length); // property
console.log(heroes[0]); // accessing elements of array
console.log(info[0]);
info[0]="ankit mahata"; // arrays are mutable i.e we can change the elements of array
console.log(info[0]);
// looping over an array
for(let i=0; i<heroes.length; i++)
{
    console.log(heroes[i]);
}

let cities=["mnr","ktm","bkt","pkr","btl"];
for(let city of cities){
    console.log(city.toUpperCase());
}