// ||= assigns the right side value only if the left is a falsy value

let a = false;

a = a || 10; // a is 10

// &&= assigns the right side value only if the left ir a truthy value.

let b = 5;

b = b && 2; // b is 2

// ??= assigns the right side value only if the left is null or undefined

let c;

c = c ?? 5; // c is 5

console.log('a', a);
console.log('b', b);
console.log('c', c);
