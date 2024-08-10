// Stack and Heap memory

// Stack memory
// - stores primitive values

let myName = "Omkar";
let anotherName = myName;
anotherName = "Aman";
console.log(anotherName); // Aman
console.log(myName); // Omkar


// Heap memory
// - stores reference values
// - stores objects, arrays, functions

let useOne = {
    name: "Omkar",
    age: 21
};

let useTwo = useOne;
useTwo.name = "Aman";
console.log(useOne.name); // Aman
console.log(useTwo.name); // Aman

