// destructuring and spread operator
let array=[4,7,2,9];
let[x,y,z]=array;
console.log(x,y,z);

// ... is spread operator and is used to copy an array
let arrayc=[...array];
console.log(arrayc);


// create an array with 3 fruits and print the second fruit, add "guava" at the end and "pineapple" at the beginning
let fruits=["apple","mango","banana"];
console.log(fruits[1]);
console.log(fruits);
fruits.push("guava");
fruits.unshift("pineapple");
console.log(fruits);


// insert "red" and "blue" at index 1 in the follwing array
let colors=["green","yellow"];
colors.splice(1,0,"red","blue");
console.log(colors);

// extract only the middle three elements from this array
let items=[1,2,3,4,5,6];
let part=items.slice(1,4);
console.log(part);

// sort this array alphabetically and reverse it
let names=["zara","arjun","mira","bhavya"];
let newname=names.sort()
console.log(newname);
console.log(newname.reverse())

// use .map() to square each number
let arr1=[1,2,3,4];
let square=arr1.map(function(val){
    return val*val;
})
console.log(square);

//use filter() to keep numbers greater than 10
let arrt=[5,12,8,20,3];
let gten=arrt.filter(val=>{
    return val>10;
})
console.log(gten);


//merge two arrays using spread operator
let m=[1,2];
let n=[3,4];
let o=[...m,...n];
console.log(o);

// add "nepal" to start of this array using spread
let cont=["UK","USA"];
cont=["nepal",...cont];
console.log(cont);
