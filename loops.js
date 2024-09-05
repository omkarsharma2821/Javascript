// for in loop find key {mostly used for objects}
// for of loop give value {mostly used for array}
// map is not itteratable

myarray = [1,2,3,4,5]

for (const num of myarray) {
    // console.log(num);
}

const myobject = {
    name : "omkar",
    course : "b.tech",
    branch : "cs"
}

for (const key in myobject) {
    console.log(`${key} is ${myobject[key]}`);   
}