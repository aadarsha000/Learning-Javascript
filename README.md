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