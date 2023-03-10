# Learning-Javascript
# Day-1
## Introduction to Javascript
1. #### What is JavaScript?
    JavaScript is a programming language initially designed to add interact with element of web pages.
    It consists of three part :
    1. ECMASCRIPT
    2. DOM( Document Object Model) provides interface to interact with element on web pages.
    3. BOM(Browser Object Model ) provides the browser API for interaction with the web browser.

2. #### What can in-browser JavaScript do?
    In-browser JavaScript is able to: 
    1. Add new HTML to the page, change the existing    content, modify styles.
    2. React to user actions, run on mouse clicks, pointer movements, key presses.
    3. Send requests over the network to remote servers, download and upload files.
    4. Get and set cookies, ask questions to the visitor, show messages.
    5. Remember the data on the client-side (“local storage”).
3. #### What can't in-browser JavaScript do?
    . It cann't read/write files on hardisk, copy them or execute programs.
    . JavaScript can easily communicate over the net to the server where the current page came from. But its ability to receive data from other sites/domains is crippled. Though possible, it requires explicit agreement (expressed in HTTP headers) from the remote side.Once again, that’s a safety limitation.
## JavaScript Fundamental
1. #### Variable
    Variable are used to store the value in any programming language. Let keyword is used to create the variable. Variable name should not contain any reserved keyword and start with number.
2. #### Data Types
    Javascript has following data types:
    i. null
    ii. undefined
    iii. number
    iv. bigint
    v. string
    vi. boolean
    vii. symbol
    viii. object
3. #### Type Conversion
    The three most widely used type conversions are to string, to number, and to boolean.

    String Conversion – Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.

    Numeric Conversion – Occurs in math operations. Can be performed with Number(value).

    Boolean Conversion – Occurs in logical operations. Can be performed with Boolean(value).


4. #### Operators
    Javascript operators are:
    
    i. Arithmetic Operators
    ii. Comparison Operators
    iii. Logical Operators
    iv. Assignment Operators
    v. Conditional Operators
    vi. Ternary Operator
    vii. Nullish coalescing operator '??'
5. #### Conditional Branching
6. #### Loops

# Day-2

7. #### Function
    Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

8. #### Debugging in the browser

9. #### Coding Style

## Objects: the basics

1. #### Objects
An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

2. #### Object references and copying
    A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
    When an object variable is copied, the reference is copied, but the object itself is not duplicated.

    Two objects are equal only if they are the same object.

    For instance, here a and b reference the same object, thus they are equal:

    let a = {};
    let b = a; // copy the reference

    alert( a == b ); // true, both variables reference the same object
    alert( a === b ); // true

    And here two independent objects are not equal, even though they look alike (both are empty):

    let a = {};
    let b = {}; // two independent objects

    alert( a == b ); // false


    We can  use the method Object.assign to clone the object

        The syntax is:

        Object.assign(dest, ...sources)

        The first argument dest is a target object.
        Further arguments is a list of source objects.

    The call structuredClone(object) clones the object with all nested properties.

3. #### Object methods, "this"
    The value of this is defined at run-time.
    When a function is declared, it may use this, but that this has no value until the function is called.

4. #### Numbers
    In modern JavaScript, there are two types of numbers:
    1.  Regular numbers in JavaScript are stored in 64-bit format
    2.  BigInt numbers represent integers of arbitrary length. They are sometimes needed because a regular integer number can’t safely exceed (253-1) or be less than -(253-1)

    ######  toString(base)
    The method num.toString(base) returns a string representation of num in the numeral system with the given base.

    For example:

    let num = 255;

    alert( num.toString(16) );  // ff
    alert( num.toString(2) );   // 11111111

    ###### Rounding
    There are several built-in functions for rounding:

    Math.floor
        Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
    Math.ceil
        Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
    Math.round
        Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.
    Math.trunc (not supported by Internet Explorer)
        Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.

# Day-3

5. #### Strings

  ######    Quotes
    Strings can be enclosed within either single quotes, double quotes or backticks.
    Single and double quotes are essentially the same. Backticks, however, allow us to embed any expression into the string, by wrapping it in ${…}:

        function sum(a, b) {
        return a + b;
        }

        alert(`1 + 2 = ${sum(1, 2)}.`);
    
    Another advantage of using backticks is that they allow a string to span multiple lines:

    ######  String length
    The length property has the string length:
        alert( `My\n`.length ); // 3
    
    ######  Changing the case
    Methods toLowerCase() and toUpperCase() change the case:

    alert( 'Interface'.toUpperCase() ); // INTERFACE
    alert( 'Interface'.toLowerCase() ); // interface

6.  #### Array

    Arrays provide a lot of methods. To make things easier,

    ###### Add/remove items

        arr.push(...items) – adds items to the end,
        arr.pop() – extracts an item from the end,
        arr.shift() – extracts an item from the beginning,
        arr.unshift(...items) – adds items to the beginning.

    ###### splice

        The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.

        The syntax is:

        arr.splice(start[, deleteCount, elem1, ..., elemN])

    ###### slice
        The method arr.slice is much simpler than similar-looking arr.splice.

        The syntax is:

        arr.slice([start], [end])

    ###### concat
        The method arr.concat creates a new array that includes values from other arrays and additional items.

        The syntax is:

        arr.concat(arg1, arg2...)

    ###### Iterate: forEach
        The arr.forEach method allows to run a function for every element of the array.

        The syntax:

        arr.forEach(function(item, index, array) {
        // ... do something with item
        });