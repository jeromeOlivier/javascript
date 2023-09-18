let x = "Hello World";
console.log(x);

// length is a property, not a method
console.log("x.length", x.length); // 11
console.log("x.__proto__;", x.__proto__);

// substring
console.log("x.substring(0, 4)", x.substring(0, 4)); // between string 0 and
// 3 inclusively

console.log("x.substring(6)", x.substring(6)); // start from x[6] onward
console.log("x.slice(-5)", x.slice(-5)); // start from the end
console.log("x.slice(-11, -5)", x.slice(-11, -5)); // start from the end, go
// back 11 and grab up to from the end to 5 Hello Wor

console.log("x.replace(\"World\", \"Howard\")", x.replace("World", "Howard"));
// Hello Howard

console.log("x.includes(\"World\")", x.includes("World")); // true
console.log("x.split(' ')", x.split(" "));
// returns an Array ['Hello', 'World']

const capitalize = (string) => string[0].toUpperCase() + string.substring(1);

console.log(capitalize("developer"));