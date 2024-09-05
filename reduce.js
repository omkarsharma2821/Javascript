const myNum = [1,2,3];
// const total = myNum.reduce((acc, currval) => acc+currval,0 ); // implicit return

// same thing with normal function

const total = myNum.reduce( function(acc, currval){
    console.log(`acc : ${acc}, currval : ${currval}`);
    return acc + currval;
}, 0)
console.log(total);

// output
// acc : 0, currval : 1
// acc : 1, currval : 2
// acc : 3, currval : 3
// 6