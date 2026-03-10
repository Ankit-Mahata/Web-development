let str1="ankit mahata";
let str2='adam max';
console.log(str1," ",str1.length);
console.log(str2," ",str2.length);
for(let i=0; i<str1.length; i++){
    console.log(str1[i]);
}
console.log("\n");
for(let i=0; i<str2.length; i++){
    console.log(str2[i]);
}

// string methods
let Name= "Ankit Mahata";
console.log(Name.toUpperCase()); // it doesnot effect the original string;
let lower=Name.toLowerCase();
console.log(lower); 
console.log(Name.slice(2,7));  // gives some part of the string forn given index
let conc=str1.concat("\t",str2); // for concatenation of strings
console.log(conc);
console.log(Name.replace("kit","k")); // to replace some part of string




//template literals
let string1=`hello world`;
console.log(string1);
// template literals are special type of strings 
let obj={
    item:"pen",
    price:10,
};
// normally we print key pairs as 
console.log("item:",obj.item,"  price:",obj.price);
// template literals helps to combine string and variables in a single string
console.log(`the cost of ${obj.item} is ${obj.price} rupees`);

// eg
let lateral=`i have 10 ${obj.item}s and total cost is ${10*obj.price}`;
console.log(lateral);
//${any expression}