const fruits = [];
fruits.push("banana", "grapes", "mango");
fruits.length = 10;
console.log(fruits.length);
console.log(Object.keys(fruits));
console.log(fruits);
fruits[5] = "apple";
const iterator = fruits.keys();

for(let key of iterator)
    console.log(`${key} : ${fruits[key]}`);

