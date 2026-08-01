
let button = document.querySelector(".buttons");
let display = document.querySelector("#display");
let conclusion = document.querySelector("#conclusion");
let screen = document.querySelector(".screen");


// displaying in screen 
function show(key) {
    display.textContent = display.textContent + key;
}



// calculation handling 
/* if user inputs "25+10*2", first process is tokenization  and then infix to postfix and postfix evaluation  */

function calculate(expression){
    let token=tokenization(expression);
    let postfix=infixToPostfix(token);
    let result=postfixEval(postfix);
    return result;

}

// tokenization
// eg. tokens=[25, "+", 10, "*", 2];

function tokenization(input) {
    input=input.replaceAll("×", "*");
    input=input.replaceAll("÷", "/");
    let tokens = [];
    let number = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== '+' && input[i] !=='-' && input[i] !=='*' && input[i] !=='/' && input[i] !=='%')
        {
            number += input[i];
        }
    else {
            tokens.push(Number(number));
            tokens.push(input[i]);
            number = "";
        }
    }
    if (number !== "") { tokens.push(Number(number)); }
    
    return tokens;

}



// infix-to-postfix .................


// operator precedence 

function precedence(op){
    if(op === "+" || op==="-"){return 1;}
    if(op === "*" || op ==="/" || op === "%"){return 2;}
}


function infixToPostfix(tokens){
    let postfix=[];
    let stack=[];
    let top=-1;

    for(let i=0; i<tokens.length; i++)
    {
        if(typeof(tokens[i]) === "number")
        {
            postfix.push(tokens[i]);
        }
        else {
            if(top==-1){
                stack.push(tokens[i]);
                top++;
            }
            else{  // calculating precedence 
                let current=precedence(tokens[i]);
                let peak=precedence(stack[top]);
                if(current>peak){            // if current operator have greater precedence...
                    stack.push(tokens[i]);     //  than stack top ,then push current.
                    top++; 
                }
                else{
                    postfix.push(stack.pop());   // else current optr can have lesser or equal precedence than stack top, therefore pop it !
                    top--;
                    if(top>-1){                      /* if we pop higher precedene operator then there may arise 2 case : i) new stack top may be of same precedence . ii) stack may be empty */
                    peak=precedence(stack[top]);   //first case :  here if stack is not empty and stack top have same precedence then pop stack top and push current optr
                    } 
                    if(current == peak && top>-1){
                        postfix.push(stack.pop());
                        stack.push(tokens[i]);
                    }
                    else{            // second case : just push the current optr
                        stack.push(tokens[i]);
                        top++;
                    }
                    
                }
            }
        }
    }

    // pop everything and push it to postfix
    if(top>-1)
    {
        while(top!=-1){
            postfix.push(stack.pop());
            top--
        }
    }
    return postfix; 
    
}




// postfix evaluation ....................


function postfixEval(postfix){
    let stack=[];
    let result;
    let top=-1;
    for(let i=0;i<postfix.length; i++)
    { 
        if(typeof(postfix[i])=== "number"){
            stack.push(postfix[i]);
            top++;

        }
        else{
            if(stack.length<2){return "syntax error !!";} // beacause an operator need at least 2 operand .
            let opd1=stack.pop(); top--;
            let opd2=stack.pop();top--;
            if(postfix[i] === "%") {stack.push(opd2%opd1);top++;}
            else if(postfix[i] === "*") {stack.push(opd2*opd1);top++;}
            else if(postfix[i] === "/") {stack.push(opd2/opd1);top++;}
            else if(postfix[i] === "+") {stack.push(opd2+opd1);top++;}
            else 
                 {stack.push(opd2-opd1);top++;}
        }
    }
    result=  stack.pop();
    top--;
    return result;
}


// eventListner

button.addEventListener("click", (key) => {
    console.log(key.target);  // event bubbling
    let att=key.target.getAttribute("class");
    if(att === "buttons"){return ;} // to check if any empty area is pressed instead of any key 
    let value = key.target.textContent;   // saving the content of buttons 
    if (value === "AC") {
        display.textContent = ""; 
        conclusion.textContent="";        // handling All Clear(AC)
        screen.classList.remove("active");
    }
    else if (value === "DEL") {          // handling delete
        let str = display.textContent;
        let newstr = "";
        let i = 0;
        while (i < str.length - 1) {
            newstr = newstr + str[i];
            i++;
        }
        display.textContent = newstr;

    }

    // handling , if first character given by user is operator then don't show it
     else if ( (display.textContent === "") && (                       
        value === "%" || value === "÷" || value === "-" || value === "×" || value === "+" || value === "=" )) { return ; } 




    // handling equal operator
    else if (value === "=") {      
        let expression = display.textContent;
        if (expression.length == 1) { return; }  // to check if there is only one operand

        let result=calculate(expression);
        console.log(result);
        if(typeof(result)!="number"){
        conclusion.textContent=result;
        }
        else{
            result=Number(result.toFixed(6));
            conclusion.textContent=` = ${result}`;
        }
        
        screen.classList.add("active");

    }

    else {
        show(value);
    }
});