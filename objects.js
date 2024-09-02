const mySym = Symbol("Key1");

const user ={
    name: 'Omkar',
    "full name" : "Omkar Sharma", // No chances you can access this with (.dot)
    age: 30,
    email: "omkar@gmail.com",
    location: 'Pune', 
    [mySym]: "Key1", 
}
// accessing methods
console.log(user["email"]);
console.log(user.name);
console.log(user[mySym]);
console.log(typeof mySym);

user.greeting = function(){
    console.log(`Hello ${this.name}`);
}
console.log(user.greeting());


const course = {
    title: "JavaScript",
    instructor: "Omkar",
    published: true,
}


const keys = Object.keys(course);
console.log(keys);

// console.log(course.instructor); instead of this we can use object destructuring

const {title, instructor, published} = course;  // this is called object destructuring also used in react
console.log(title, instructor, published);

// move your work on someone else's head is called API
// https://api.github.com/users/omkarsharma2821
// https://randomuser.me/api/





