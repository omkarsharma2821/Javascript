let name = "omkar";
let hobby = "coding";

// string interpolation
console.log(`Hello my nam is ${name} and my hobby is ${hobby}.`);

// string methods
const str = new String('Omkar sharma 108')
console.log(str.length);
console.log(str.charAt(3));
console.log(str.split(' '));
console.log(str.slice(0,4));
console.log(str.replace(' ', '@'));
console.log(str.replaceAll(' ', '@'));
console.log(str.trim());
console.log(str.toUpperCase());
console.log(str.indexOf('a'));


const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 