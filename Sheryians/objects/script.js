let user ={
name: "ankit",
address: {
    city : "mahendranagar",
    pin : "1234",
    location : {
        lat:11,
        lng:22,
    },
},
};
console.log(user.name);
console.log(user.address.location.lng);
let{lat,lng}=user.address.location;// destructuring
console.log(lat,lng);

// loops
let obj={
    name:"ankit",
    age:20,
    email:"ankit@gmail.com",
};
for(let i in obj)
{
    console.log(i,obj[i]);
    // console.log(obj.i);  this is error
}

let arr=Object.keys(obj); //returns the properties of an object 
console.log(arr);



// copying
let obj1={...obj};
console.log(obj1);


// deep clone
let userclone={...user}
console.log(userclone);
userclone.address.location.lng=20; // this change reflects in original obj
console.log(userclone);
console.log(user);

// therefore deep clone is used

userclone=JSON.parse(JSON.stringify(user));
console.log(userclone);
userclone.address.city="tilakpur";
console.log(userclone);
console.log(user);