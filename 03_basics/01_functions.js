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
console.log(loginUserMessage());
