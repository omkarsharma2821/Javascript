// Array Slicing Interview Question

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.length); // length 5
console.log(animals.slice(2,4)); // [ 'camel', 'duck' ] starting index = 2 , last index = 4
console.log(animals.slice(1,4)); // [ 'bison', 'camel', 'duck' ]
console.log(animals.slice(1,3)); // [ 'bison', 'camel' ]
console.log(animals.slice(2)); // [ 'camel', 'duck', 'elephant' ] starting index  = 2 & here last index in not given
console.log(animals.slice(-2)); // trick subtract length or array to the indexing array i.e (5-2) = 3