const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const result = myNumbers.filter((nums) => {
//     return nums%2 == 0;
// })
const result = myNumbers.filter((nums) => (nums%2 == 0))  // implicit result
console.log(result);
