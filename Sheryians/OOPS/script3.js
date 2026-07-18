// extend and super

class user{
    constructor(name,address,username,email){
        this.name=name;
        this.address=address;
        this.username=username;
        this.email=email;
        this.role="user";
    }
    write(text){
        let h1=document.createElement("h1");
        h1.textContent=`${this.name} : ${text}`;
        document.body.append(h1);
    }
}

class admin extends user {
    constructor(name,address,username,email)
    {
        super(name,address,username,email);
        this.role="admin";
    }
    remove(){
        document.querySelector("h1").forEach(function(elem){
            elem.remove();
        });
    }
}


let u1=new user("ankit","tilakpur","ankit@anc.com");
u1.write("hi");
let u2=new user("ankita","haldukhal","ankita@an.com")
u2.write("hi");
let a1=new admin("harsh","khaireni","safnawnf","anas.com");
a1.write("stop");
a1.remove();