// function

function addition(a,b){
    return a+b;
}

let a=2;
let b=3;
console.log(addition(a,b))

function evenNumber(){
    for (let i=0; i<10; i++){
        if(i%2==0){
            console.log(i)
        };
    };
}
console.log(evenNumber())

// function expressions

let sayHi = function (){
    console.log("Hello")
};

console.log(sayHi)

// callback function

function ask(question, yes, no){
    (confirm(question))? yes():no();
}

function showYes(){
    console.log("Yes")
}
function showNO(){
    console.log("No")
}

ask("Are you ok?", showYes, showNO)

// arrow function

let greet = ()=>{
    console.log("hello");
}

greet()

let asking = (question, yes, no) =>{
    (confirm(question))? yes():no();
}

asking("Do you agree", showYes, showNO)