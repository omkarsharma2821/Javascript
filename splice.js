const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.splice(2,4));
console.log(animals);

// Main difference b/w slice and splice is splice update(trim) the original array 
// Last range is also included in the array.