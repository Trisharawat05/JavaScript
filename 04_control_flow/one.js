// if

/*
SYNTAX->
if(condition){

}
*/

const isUserLoggedIn = true
const temperature = 41

// if( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("greater than 50");
// }

// ===, !==

const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInfromEmail = true

if (UserLoggedIn && debitCard) {
    console.log("Allowed");
}

if (loggedInFromGoogle || loggedInfromEmail) {
    console.log("User logged in");
}