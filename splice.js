const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(1,3)); // [ 'bison', 'camel' ]
console.log(animals); // [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]

console.log(animals.splice(1,3)); // [ 'bison', 'camel', 'duck' ]
console.log(animals); // [ 'ant', 'elephant' ]

// difference b/w slice and splice is 
// splice update change (trim) the original array
// Last range is also included in the array.
