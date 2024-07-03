let x = 5;

console.log("x = 5; x.toFixed(2)", x.toFixed(2), typeof x);

x = 5.415386;

console.log("x = 5.415386; x.toFixed(2)", x.toFixed(2), typeof x);

console.log("x = 5.415386; x.toPrecision(2)", x.toPrecision(2), typeof x);

/*

 Both .toFixed() and .toPrecision() are methods in JavaScript that format a
 number and return the result as a string. However, there is a significant
 difference in the way they format numbers.
 .toFixed(): This method formats a number using fixed-point notation. The
 parameter you pass in is the number of digits to appear after the decimal
 point. For example:

 let num = 123.456;
 console.log(num.toFixed(2));  // "123.46" - rounded to 2 decimal places

 .toPrecision(): This method formats a number to a specific length. The
 parameter you pass is the total number of digits in the resulting number
 (not counting a negative sign, decimal point or exponent notation). For
 example:

 let num = 123.456;
 console.log(num.toPrecision(3)); // "123" - total digits is 3

 Note: If there are more digits to the right of the decimal point than the
 precision, then the number is rounded to fit the precision, and exponents
 may be used.
 Remember, these methods do not modify the original number. Instead, they
 return a new string representing the formatted number.

 */

console.log("x.toLocaleString(\'fr-CA\')", x.toLocaleString("fr-CA"), typeof x);

console.log("x = Number.MAX_VALUE.toLocaleString(\"en-US\");", x = Number.MAX_VALUE.toLocaleString("en-US"), typeof x);
console.log("x = Number.MIN_VALUE;", x = Number.MIN_VALUE, typeof x);

// Math method
console.log("Math.sqrt(9)", x = Math.sqrt(9), typeof x);
console.log("Math.abs(-9)", x = Math.abs(-9), typeof x);
console.log("Math.round(4.5)", x = Math.round(4.5), typeof x);
console.log("Math.ceil(4.1)", x = Math.ceil(4.1), typeof x);
console.log("Math.floor(4.9)", x = Math.floor(4.9), typeof x);
console.log("Math.pow(3, 3)", x = Math.pow(3, 3), typeof x);
console.log("Math.min(3, 4, 5)", x = Math.min(3, 4, 5), typeof x);
console.log("Math.max(3, 4, 5)", x = Math.max(3, 4, 5), typeof x);
// generate a random number between 1 and 100
console.log("Math.floor(Math.random() * 100 + 1)", x = Math.floor(Math.random() * 100 + 1), typeof x);

const crazyMath = () => {
    const x = Math.floor(Math.random() * 100 + 1);
    const y = Math.floor(Math.random() * 50 + 1);
    return {
        "sum": `${ x } + ${ y } = ${ x + y }`,
        "difference": `${ x } - ${ y } = ${ x - y }`,
        "product": `${ x } * ${ y } = ${ x * y }`,
        "quotient": `${ x } / ${ y } = ${ x / y }`,
        "remainder": `${ x } % ${ y } = ${ x % y }`,
    };
};

console.log(crazyMath());