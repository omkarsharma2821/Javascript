const fruits = [];
fruits.push("banana", "grapes", "mango");
fruits.length = 10;
console.log(fruits.length);
// console.log(Object.keys(fruits));
console.log(fruits);
fruits[5] = "apple";
const iterator = fruits.keys();

// for(let key of iterator)
    // console.log(`${key} : ${fruits[key]}`); // string interpolation

const numbers = [1, 2, 3, 4, 5];
numbers.unshift(0);
console.log(numbers); // here in this case, unshift() method adds the element at the beginning of the array
// all the indexes are shifted by 1 which is not the case with push() method