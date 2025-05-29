function sayMyName(){
    console.log("T");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 4)
// console.log("Result: ", result); 

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Trisha"))
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){ // ... is called spread operator/ rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Trisha",
    // price: 199
    prices: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
