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
var have function scope ,let and const have block scope
*/

let b = 300;
// problem appears when multiple coder are there and using var keyword which will lead to problems
if (true){  // this if block is a block scope & above variables will in global scope
    var a = 10;
    let b = 20;
    const c = 30;
    console.log("INNER BLOCK : ", a);
}
console.log(a); // 10
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // ReferenceError: c is not defined