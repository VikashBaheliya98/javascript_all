"use strict"; // treat all js code as newer version

// alert (3+3); we are using node.js not browser

// console.log( 3
//     +
//     3)   // wrong represantation because code readibility should be high

    // console.log("vikash baheliya")

    let name = "vikash"
    let age  = 25
    let isLoggedIn = true

    // so there are 2 types or datatype
    // 1. primitive datatype   2. nonprimitive or referenced datatype

    //primitive datatype are as follows

    // string = "vikash"
    // number = 544 , range vary from 2 to power 52
    // boolean = true or false
    // bigInt = 66444565965654n
    // null = stand alone value
    // undefined 
    // symbol = unique
    

    // Reference or nonprimitive datatype are as follows

    // object , Array , functions

     const heros = ["ironman", "captainAmeria", "Thor", "spiderman"];

     let obj = {
        name: "vikash",
        age: 25,
        occu: "programmar"
     }


     const myFunction = function marvel() {
        console.log("hello world")
    }
    myFunction()


    // console.log(typeof undefined);  // undefined

    // console.log(typeof null);   // object



    // **************** Stack  &  Heap ****************

    // stack memory uses in ( in all primitive datatype) also it provides copy of that variable ;

    // Important Note : agar stack se koi value uthayenge ya use reuse krenge to uska hume ek copy milta h to agar hum chahte h us copied value me change krna to usme change ho jayega par original value unchangable rahegi;

    // Heap memory uses in ( in all non primitive datatype) alos it provides reference of that datatype or you can say (array, function, object);

    // Important Note : agar Heap se ya reference or non-primitive datatype koi value copy krenge ya use use krenge to hume waha same hi value ka reference milta h to agar use change krna chaahe to jo  original value hogi usme bhi change reflect hoga 

