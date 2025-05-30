const user = {
    username: "Trisha",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
        
    }

}

// this current context ko refer krta h 

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Trisha"
//     console.log(this);
    
//     // console.log(this.username); // this is only working in object not inside a function
// }

// chai()

// const chai = function(){
//     let username = "Trisha"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Trisha"
    console.log(this);
}

/*
Regular functions ->
have their own this context, which is determined by how the function is called. This can be the global object (window), an object method, or something else depending on the invocation.
Arrow functions ->
do not have their own this context. They lexically bind this to the surrounding context, meaning they inherit this from the parent scope. 
*/

// chai()

// const addTwo = (num1, num2) => {   // explicit return
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 // implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Trisha"})


console.log(addTwo(3,4));


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()