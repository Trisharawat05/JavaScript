const accountId = 144553
let accountEmail = "trisha@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur" 
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "12121212"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([ accountId, accountEmail, accountPassword, accountCity, accountState])