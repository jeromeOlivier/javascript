// Array literals
const numbers = [1, 2, 3, 4, 5];
console.log("const numbers = [1, 2, 3, 4, 5];", numbers);

// Array Constructors
console.log("new Array(5);", new Array(5));

// methods
numbers.push(6);
console.log("numbers.push(6);", numbers);

numbers.pop();
console.log("numbers.pop();", numbers);

numbers.shift();
console.log("numbers.shift();", numbers);

numbers.unshift(12);
console.log("numbers.unshift(12);", numbers);

numbers.reverse();
console.log("numbers.reverse();", numbers);

const includes = numbers.includes(12);
console.log("numbers.includes(12);", includes);

const index = numbers.indexOf(12);
console.log("numbers.indexOf(12);", index);

const slice = numbers.slice(1, 4);
console.log("numbers.slice(1, 4);", slice, "console.log(numbers)", numbers);
// index of 1 to 4 (non-inclusive)

const splice = numbers.splice(1, 4);
console.log("numbers.splice(1, 4);", splice, "console.log(numbers)", numbers);
// from index 1 and move 4 over (inclusive). the 4 isn't an index, it's the
// number of indexes to jump over

// note on above: slice does not mutate the array, but splice does
// to remove a single element from an array:
// first: find its index and save it to a variable.
// second: use the index with splice to remove the element from the array
// with .splice(index, 1)

// nesting arrays
const fruits = ["banana", "apple", "orange"];
const berries = ["strawberry", "blueberry", "raspberry"];
fruits.push(berries);
console.log("fruits.push(berries);", fruits);

console.log("fruits[3][2]", fruits[3][2]);

const fruits02 = ["banana", "apple", "orange"];
const berries02 = ["strawberry", "blueberry", "raspberry"];

console.log("[fruits02, berries02]", [fruits02, berries02]);
console.log("fruits02.concat(berries02)", fruits02.concat(berries02));
console.log("[...fruits02, ...berries02]", [...fruits02, ...berries02]);

const matrix = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 0]];
console.log("const matrix = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 0]];", matrix);
console.log("matrix.flat()", matrix.flat());

// Static Methods on Array Objects
console.log("Array.isArray(matrix)", Array.isArray(matrix));
console.log("Array.isArray(\"Hello\")", Array.isArray("Hello"));

console.log("Array.from({ length: 5 }", Array.from({ length: 5 }));
console.log("Array.from(12345)", Array.from("12345"));

const a = 1;
const b = 2;
const c = 3;

console.log("Array.of(a,b,c)", Array.of(a, b, c));

// challenge
const values = [1, 2, 3, 4, 5];
values.unshift(0);
values.push(6);
console.log("values.reverse()", values.reverse());

values.reverse();
const values02 = [6, 7, 8, 9];
// console.log(Array.from([...values, ...values02.splice(1, 4)]));
console.log("values.concat(values02.slice(1, values02.length))", values.concat(values02.slice(1, values02.length)));
