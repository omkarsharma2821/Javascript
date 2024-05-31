const colors = ["red", "green", "blue"];
const colors2 = ["yellow", "pink", "black"];

// colors.push(colors2);
// console.log(colors);
// output : [ 'red', 'green', 'blue', [ 'yellow', 'pink', 'black' ] ]

// const all_colors = colors.concat(colors2);
// console.log(all_colors);
// output : [ 'red', 'green', 'blue', 'yellow', 'pink', 'black' ]

// spread operator add elements

const all_colors = [...colors, ...colors2];  // [...add1, ...add2, ...add3, .....so on];
console.log(all_colors);
// output: [ 'red', 'green', 'blue', 'yellow', 'pink', 'black' ]
