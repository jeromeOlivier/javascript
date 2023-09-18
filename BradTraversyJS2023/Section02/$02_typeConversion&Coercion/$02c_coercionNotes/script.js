let x;

x = 5 + "5";

console.log("x = 5 + '5';", x, typeof x); // 55 string

x = 5 + Number("5");

console.log("x = 5 + Number('5');", x, typeof x); // 10 number

x = 5 * "5";

console.log("x = 5 * '5';", x, typeof x); // 25 number

x = 5 + null;

console.log("x = 5 + null;", x, typeof x); // 5 number

x = Number(null);

console.log("x = Number(null);", x, typeof x); // 0 number

x = Number(true);

console.log("x = Number(true);", x, typeof x); // 1 number

x = Number(false);

console.log("x = Number(false);", x, typeof x); // 0 number

x = 5 + true;

console.log("x = 5 + true;", x, typeof x); // 6 number

x = 5 + undefined;

console.log("x = 5 + undefined;", x, typeof x); // NaN number


