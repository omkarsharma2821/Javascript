// Immediately invoked function expression
// some times we have problem due to global scope variable.
// to prevent from global scope polution we use IIFE

(function one(){
    console.log("Database connected");
})();

((name) => {
    console.log(`Data base two connected ${name}`);
    
})('Omkar')
