// All about JSON

localStorage.setItem("work","study");
console.log(localStorage.getItem("work"));
// localStorage.setItem("marks",[25,24,20]);
// console.log(localStorage);
// local storage ma string matra save hunchha 
// array, object store gare pani string ma convert hunchha
/* aba yedi hamilai local storage ma object/array store garnu parne chha or , backend ma object pathaunu parne chha vane , pahila tyo lai string ma change garinchha with the help of JSON ani tespachhi feri tyo string lai actual format ma convert garinchha  */

// JSON.stringify([1,2,3,4]);
// this array ia converted in string
console.log(JSON.stringify([45,12,"Ankit",'a']));

//

localStorage.setItem("friends",JSON.stringify(["akash","arun","babita"]));
console.log(localStorage); // string is saved in local storage
console.log(localStorage.getItem("friends"))

// aba yo string lai aafno actual (array) form ma use garna lai , jun string lai change garnu ho tyo lai JSON.parse() ma rakhidine

let jsonarr=JSON.parse(localStorage.getItem("friends"));
console.log(jsonarr);


/* JSON.stringify() ma actual data rakhne ani 
JSON.parse() ma string rakhne  */

