// singleton -> from constructors
// not singleton -> from literals

// Object.create()
// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Trisha",
    "full name": "Trisha Rawat",
    [mySym]: "mykey1",
    age: 20,
    location: "Jaipur",
    email: "trisha@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// // console.log(JsUser.full name); // Cant do this
// console.log(JsUser["full name"]);
// //console.log(typeof JsUser.mySym); // type-> string
// console.log(JsUser[mySym]);

JsUser.email = "trisha@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "trisha@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

