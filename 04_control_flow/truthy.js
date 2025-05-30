//const userEmail = "t@trisha.ai"
//const userEmail = ""
const userEmail = []

if (userEmail) {
    console.log("Got it");
} else {
    console.log("Nope");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0){
//     console.log("Array empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0 ) {
    console.log("Object empty");
    
}
