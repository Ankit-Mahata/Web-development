/* create a following array of companies 
remove the first company from the array
remove uber and ola in its place
add amazon at the end*/
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log("companies : ",companies);
companies.shift(); // removing the first company
console.log(`\nafter removing first company : ${companies}`);
companies.splice(1,1,"ola"); // removing uber and adding ola
console.log(`\nafter replacing uber with ola : ${companies}`);
companies.push("Amazon"); // adding amazon at the end
console.log(`\nafter adding amazon : ${companies}`);