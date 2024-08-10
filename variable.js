const accountID = 12345;
let accountEmail = "abc@gmail.com";
var accountPassword = "1234";
accountCity = "Delhi"; // shows dynamically typed language 
let accountState;

// accountID = 25; // not allowed to change const variable
// console.log(accountID)

accountEmail = "def@gmail.com";
accountPassword = "5678";
accountCity = "Banglore"

console.table([accountEmail, accountID, accountPassword, accountCity, accountState]);

/*
Note: Prefer not to use var 
Reason: causes issues in black and function scope
var have function scope and let, const have block scope
*/