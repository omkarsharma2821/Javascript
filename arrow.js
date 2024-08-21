// this keyword is used to refer the current context

const user = {
    username: "omkar",
    price: 100,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the course!`);
    }
}
// user.welcomeMessage(); // omkar, welcome to the course!
user.username = "Aman";
// user.welcomeMessage(); // Aman, welcome to the course! // now the context changes and it will print Aman

// () => () // arrow function with implicit return

const addTwoNumbers = (a, b) => a + b;
console.log(addTwoNumbers(1, 2)); // 3

const addTwoNumbers1 = (a, b) => {
    return a + b;
} // {} have to use return keyword
console.log(addTwoNumbers1(1, 2)); // 3
