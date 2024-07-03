// parameters vs arguments
// when defining a function, we establish the parameters
// when invoking the function, we pass through arguments

function add(num1, num2) {
  // num1 and num2 are parameters
  console.log(num1 + num2);
}

add(1, 2); // 1 and 2 are arguments

// challenge 1
function getCelcius(deg) {
  return Math.round(((deg - 32) * 5) / 9); // returns it as a number
  // return ((deg - 32) * 5/9).toFixed; // returns it as a string
}

console.log(getCelcius(80));

// challenge 2
function minMax(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);
  return { min, max };
}

console.log(minMax([1, 2, 3, 4, 5]));

// challenge 3
(function area(width, height) {
  console.log(
    `the area of a rectangle with a width of ${width} and a height of ${height} is ${
      width * height
    }`
  );
})(5, 6);

// call stack (last will get run first)
function first() {
  second();
  console.log('first');
}

function second() {
  third();
  console.log('second');
}

function third() {
  console.log('third');
}

first();
