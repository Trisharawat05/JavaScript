// Immediately Invoked Function Expression (IIFE)

// need for -> immediate execution and prevent pollution from global scope

(function chai() {
    // Named IIFE
    console.log(`DB CONNECTED`);
})(); // Semicolon ends the IIFE context

/*
()()-> execution call 
 |
 function definition
 */

(() => {
    console.log(`DB CONNECTED TWO`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Trisha');
