// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

//const bigNumber = 23658372072319473844n


// Reference (Non Primitive)

// Array, objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Trisha",
    age: 20
};


const myFunction = function(){
//    console.log("Hello World");
}

//console.log(typeof bigNumber);

/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

//***********************************************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Trisha"

let anotherName = myName
anotherName = "Mishti"

console.log(myName);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "trisha@google.com"

console.log(userOne.email);
console.log(userTwo.email);


/*

 ____________________________
|                            |                                                                           
|          userTwo           |                                                         
|____________________________|                    ______________________________________          
|                            |                   |                                      |                   
|        userOne             |                   |                                      | 
|____________________________|                   |                                      |
|                            |                   |                                      |                   
|          myName            |                   |                                      |                   
|____________________________|                   |                                      |   
|                            |                   |                                      |           
|        anotherName         |                   |                                      |
|____________________________|                   |                                      |
|                            |                   |    { email: "user@google.com",       |
|           myName           |                   |      upi: "user@ybl" }               |
|____________________________|                   |______________________________________|

        STACK                                                     HEAP
*/