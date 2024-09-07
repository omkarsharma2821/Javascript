// declaration moves at the top

console.log(a); // undefined because 'a' is hoisted and not assigned
var a = 5;
console.log(a); // 5

// console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
// same error will come with const because they have block scope


greetingMessage();  // welcome user
function greetingMessage(){
    console.log(`Welcome user`);
}

greeting(); // Cannot access 'greeting' before initialization
const greeting = ((greet) => console.log("Hurray!!!"))