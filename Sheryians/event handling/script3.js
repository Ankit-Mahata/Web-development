let form=document.querySelector("form");
let inputs=document.querySelectorAll("input");
let main=document.querySelector("#main");

form.addEventListener("submit",function(dets){
    dets.preventDefault(); // to prevent reload
    
    let card=document.createElement("div");
    card.classList.add("card");
    
    let pic=document.createElement("div");
    pic.classList.add("pic");

    card.append(pic);

    let img=document.createElement("img");
    img.setAttribute("src",inputs[0].value);

    pic.append(img);

    let h3=document.createElement("h3");
    h3.textContent=inputs[1].value;
    let h5=document.createElement("h5");
    h5.textContent=inputs[2].value;
    let p=document.createElement("p");
    p.textContent=inputs[3].value;
    card.append(h3);
    card.append(h5);
    card.append(p);
    main.append(card);
    console.log(main);
})
