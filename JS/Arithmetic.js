let a=7, b=3, c="7";

// arithmetic operators
console.log("a+b = ", a+b);
console.log("a-b = ", a-b);
console.log("a*b = ", a*b);
console.log("a/b = ", a/b);
console.log("a%b = ", a%b);
console.log("a**b = ", a**b," (a to the power b)");
console.log("++a = ", ++a ,"same as a = a+1");
console.log("--b = ", --b ,"same as b = b-1");
console.log("a++ = ", a++ ,"returns a, then a = a+1");
console.log("b-- = ", b-- ,"returns b, then b = b-1");


// comparison operators 
let x=10, y=20 , z="10";
console.log("x == y", x==y);
console.log("x != y", x!=y);
console.log("x == z", x==z); // true because , js implicitly converts string to number
console.log("x === z", x===z); // false because , type is different , it is called strict equality operator
console.log("x !== z", x!==z); // true because , type is different , it is called strict not equal operator
console.log("x > y", x>y);
console.log("x < y", x<y);
console.log("x >= z", x>=z);
console.log("x <= z", x<=z);


// logical operators

let m=2, n=3;
console.log("(m < n) && (m == 2) : ", (m < n) && (m == 2) ); // true && true = true
console.log("(m < n) || (m == 5) : ", (m < n) || (m == 5) ); // true || false = true
console.log("!(m < n) : ", !(m < n) ); // !true = false