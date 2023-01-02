// Datatypes Number

// Rounding 

    // console.log(Math.floor(3.54)) // 3

    // console.log(Math.ceil(3.2)) // 4

    // console.log(3.122222.toFixed(2)) // 3.12

    // // other method

    // console.log(Math.max(11,12,13,14,55))
    // console.log(Math.min(20,24,55,01))
    // console.log(Math.floor(Math.random()*100))
    // console.log(Math.floor(Math.random()*7))

// String

    /* Backticks, however, allow us to embed any expression 
    into the string, by wrapping it in ${…} */

        // function sum(a,b){
        //     return a + b
        // }

        // console.log(`1 + 2 = ${sum(1,2)}`) // 1 + 2 = 3

    /* Another advantage of using backticks is that 
    they allow a string to span multiple lines: */

        // let desc = ` hello i am aadarsha.
        //             i am from itahari sunsari.
        //             currently studing bsccsit 6 sem.`

        // console.log(desc)

    /* all special characters start with a backslash character \. It is also called an “escape character”.
    Because it’s so special, if we need to show an actual backslash \ within the string, we need to double it: */

        // console.log('i am \\')
        // console.log('i\'m aadarsha karki')

    // length of string
        // let str = "Hello, How are you"
        // console.log(str.length)

    // changing case of string 
        // console.log(str.toLowerCase())
        // console.log(str.toUpperCase())

// Arrays 
    let arr = [7, 8, 6, 3 ,9]

    // add element to end
        // arr.push(4)
        // console.log(arr)
    // add elemrnt tto firt
        // arr.unshift(1)
        // console.log(arr)
    // remove element from last 
        // arr.pop()
        // console.log(arr)
    // remove elemnt from first
        // arr.shift()
        // console.log(arr)

    // loop in array
        // for (let num of arr){
        //     console.log(num)
        // }


    // splice array is used to delete element in array 
        // syntax array.splice(start, no.of element to delete from start, elem1,..., elemN)
        // elem1..elemN is used to replace delete element if we want to replace
        // arr.splice(2,3)
        // arr.splice(0,1,3)
        // console.log(arr)


    // array slice method
        // console.log(arr.slice(0,3))
    

// Map
    // it is similar to object but it has key of any type

    // map Methods and Properties

        // let map = new Map() // create map

        // map.set('1', 'str1') // insert data

        // map.set(1, 'num1')

        // map.set(true, 'bool1')

        // console.log(map.get('1')) // get data with key '1' 
        // console.log(map.get(1))
        // console.log(map.get(true))
        // console.log(map.size) // return size

        // console.log(map)

    // Iteration over map
        //     let recipeMap = new Map([
        //         ['cucumber', 500],
        //         ['tomatoes', 350],
        //         ['onion',    50]
        //     ]);

        //    recipeMap.forEach((value, key, map)=>{
        //     console.log(`${key}:${value}`)
        //     console.log(map)
        //    })
