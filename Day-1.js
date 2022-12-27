// Javascript Introduction
// What is JavaScript?
//  JavaScript is a programming language initially designed to add interact with element of web pages.
// It consists of three part :
// 1. ECMASCRIPT
// 2. DOM( Document Object Model) provides interface to interact with element on web pages.
// 3. BOM(Browser Object Model ) provides the browser API for interaction with the web browser.

// What can in-browser JavaScript do?
// In-browser JavaScript is able to: 
// 1. Add new HTML to the page, change the existing content, modify styles.
// 2. React to user actions, run on mouse clicks, pointer movements, key presses.
// 3. Send requests over the network to remote servers, download and upload files.
// 4. Get and set cookies, ask questions to the visitor, show messages.
// 5. Remember the data on the client-side (“local storage”).

// What can’t in-browser JavaScript do?
// . It cann't read/write files on hardisk, copy them or execute programs.
// . JavaScript can easily communicate over the net to the server where the current page came from. 
//    But its ability to receive data from other sites/domains is crippled. 
//    Though possible, it requires explicit agreement (expressed in HTTP headers) from the remote side.
//    Once again, that’s a safety limitation.

// JavaScript Fundamental:

// 1. Variable
// let key word is used to create variable
let msg = 'Hello programmer';
alert(msg)
msg = 'how are you' // changing value of variable
alert(msg)

// 2. Data types
//i. null (It’s just a special value which represents “nothing”, “empty” or “value unknown”.)
let age = null

// ii. Undefined (If a variable is declared, but not assigned, then its value is undefined)
let money;
alert(money)

// iii. Number
let cash = 123456776543;

// iv. BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// v. String
let name = 'Itachi'

// vi. boolean (it has two value true and false)
let is_male = true
let is_old = false

// vii. Symbol (The symbol type is used to create unique identifiers for objects)

// viii. Object
let person = {
    'name' : 'Uchiha',
    'age' : 22,
    'gender' : 'male',
    'alive' : true
}
alert('progrmmer detail')
alert(person.name)
alert(person.age)
alert(person.gender)
alert(person.alive)

// Type conversion 
let abc = '123'
let num = Number(abc)
console.log(typeof(abc))
console.log(typeof(num))
let num1 = 564
let str = String(num1)
console.log(typeof(num1))
console.log(typeof(str))

// increment and decrement
a=1;
b=1;
a++ // increment
a-- // decrement

c = ++a
d = b++
console.log(c,d)
