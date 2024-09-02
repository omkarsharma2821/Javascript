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