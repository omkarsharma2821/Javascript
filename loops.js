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
    // console.log(`${key} is ${myobject[key]}`);   
}

const course = [
    {
        branch: "cs",
        fees : 500,
    },
    {
        branch: "ece",
        fees : 400,
    },
    {
        branch: "me",
        fees : 300,
    }
]

course.forEach( (item , index, course) => {
    console.log(item.branch, index);
    
})

