// array methods
let arr = [1, 2, 3, 4, 5];
// push method - adds one or more elements to the end of an array and returns the new length of the array
console.log(arr);
arr.push(6);
console.log(arr);
arr.push(7,7.5);
console.log(arr);

// pop method - removes the last element from an array and returns that element. This method changes the length of the array.
let lastval=arr.pop();
console.log(lastval);
console.log(arr);

// tostring method - returns a string representing the specified array and its elements. The elements are converted to strings and are separated by commas.
let str=arr.toString();
console.log(str);

// concat method - is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let person=["ankit","teke", "sandy","kishor","vivek"];
let age=[20,23,21,19,20];
let newarr=person.concat(age);
console.log(newarr);

//  unshift method - adds one or more elements to the beginning of an array and returns the new length of the array.
person.unshift("harish");
console.log(person);

// shift method - removes the first element from an array and returns that removed element. This method changes the length of the array.
let firstval=person.shift();
console.log(firstval);
console.log(person);

// slice method returns a piece of the array
let arr1=arr.slice(0,3);
console.log(arr1);

// splice method - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// syntax: array.splice(startidx, deleteCount, item1, item2, ...)
let arr2=[4,5,6,7,8,9,0];
let arr3=arr2.splice(2,3,10,11);// removes 3 elements starting from index 2 and adds 10 and 11 in their place
console.log(arr2);
console.log(arr3);