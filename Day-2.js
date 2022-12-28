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

// objects 

function user(name, age){
    return{
        name : name,
        age :  age
    }
}

let makeUser = user("rubin", 23)

console.log(makeUser.name)

// check whether object has following property or not

console.log("name" in makeUser) // true if there is name property

// itterable objects

for (let key in makeUser){
    console.log(key)
    console.log(makeUser[key])
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
function multyplyNumeric(obj) {
    for (key in obj){
        if (typeof(obj[key])=='number'){
            obj[key] *= 2;
        };
    }
}
multyplyNumeric(menu)
console.log(menu)