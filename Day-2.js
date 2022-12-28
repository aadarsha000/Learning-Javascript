// function

    // function addition(a,b){
    //     return a+b;
    // }

    // let a=2;
    // let b=3;
    // console.log(addition(a,b))

    // function evenNumber(){
    //     for (let i=0; i<10; i++){
    //         if(i%2==0){
    //             console.log(i)
    //         };
    //     };
    // }
    // console.log(evenNumber())

    // // function expressions

    // let sayHi = function (){
    //     console.log("Hello")
    // };

    // console.log(sayHi)

// callback function

    // function ask(question, yes, no){
    //     (confirm(question))? yes():no();
    // }

    // function showYes(){
    //     console.log("Yes")
    // }
    // function showNO(){
    //     console.log("No")
    // }

    // ask("Are you ok?", showYes, showNO)

    // // arrow function

    // let greet = ()=>{
    //     console.log("hello");
    // }

    // greet()

    // let asking = (question, yes, no) =>{
    //     (confirm(question))? yes():no();
    // }

    // asking("Do you agree", showYes, showNO)

//objects 

    // function user(name, age){
    //     return{
    //         name : name,
    //         age :  age
    //     }
    // }

    // let makeUser = user("rubin", 23)

    // console.log(makeUser.name)

    // // check whether object has following property or not

    // console.log("name" in makeUser) // true if there is name property

// itterable objects

    // for (let key in makeUser){
    //     console.log(key)
    //     console.log(makeUser[key])
    // }

    // let menu = {
    //     width: 200,
    //     height: 300,
    //     title: "My menu"
    // };
    // function multyplyNumeric(obj) {
    //     for (key in obj){
    //         if (typeof(obj[key])=='number'){
    //             obj[key] *= 2;
    //         };
    //     }
    // }
    // multyplyNumeric(menu)
    // console.log(menu)

// object caanot be copied as it takes refrence

    // let users = {
    //     name : 'john'
    // }

    // let userr = users

    // userr.name = "rubin" 

    // console.log(users.name) // rubin  as userr to refrence to same object of users

    // clone object using Object.asssign()

    // let userr = {}

    // Object.assign(userr, users)

    // userr.name = "amrit"

    // console.log(users.name) // john
    // console.log(userr.name) // amrit

// Nested clone of object using structuredClone()

    // let users = {
    //     name : "aadarsha",
    //     age : 21,
    //     sizes : {
    //         height : 185,
    //         weight : 80,
    //     }
    // };

    // let clone = structuredClone(users)

    // console.log(clone==user) // false

    // clone.sizes.height = 200

    // console.log(users.sizes.height) // height = 185

    // console.log(clone.sizes.height) // height = 200
