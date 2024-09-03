function addTwoNumbers(a, b) { // a,b are the parameters
  return a + b;
}
const result = addTwoNumbers(1, 2); // 3 // 1,2 are the arguments
// console.log(result);

function one(){ // example ice-cream cone child can take cone from elder but elder can't take cone from child
  const name = "John";

  function two(){
    const age = 20;
    console.log(name);
  }
  // console.log(age); // ReferenceError: age is not defined 
  two(); // John 
}
one();

function calculateCartPrice(...num){  // (...) is called rest operator
  return num;
}
console.log(calculateCartPrice(200,500,400));

const user ={
  username:"omkar",
  age:20,
}

function handleobject(anyobject){
  console.log(`Welcome ${anyobject.username} your age is ${anyobject.age}`);
}

handleobject(user);