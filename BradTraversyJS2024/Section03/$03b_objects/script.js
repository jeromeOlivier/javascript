const person = {
    name: "John Doe",
    age: 30,
    isAdmin: true,
    address: {
        street: "123 main",
        city: "JS Ville",
        state: "CO",
    },
    hobbies: ["music", "sports"],
};

console.log(person);
console.log(person["name"]);
console.log(person.address.state);
console.log(person.hobbies[1]);
person.hasChildren = true;
console.log(person);
person.greet = function() {
    console.log(`Hello, my name is ${ this.name }.`);
};
person.greet();

const todos = [
    { id: 1, name: "buy milk" },
    { id: 2, name: "clean litter box" },
    { id: 3, name: "take out trash" },
];

console.log(todos[0].name);

console.log(Object.keys(person)); // iterates all the keys of the objects
console.log(Object.keys(person).length); // 7
console.log(Object.values(person)); // creates an array of all the values
console.log(Object.entries(person)); // creates an array with the key, value pairs
console.log(person.hasOwnProperty('name')); // boolean with either true or false

// to access nested attributes using destructuring, call the key, open a new
// set of braces and apply the same principle to there
// state is renamed to province using :
const {
  name,
  age,
  address: { street, state: province, city },
} = person;
console.log(street, province, city);

// the same principle applies to arrays
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const [first, second, ...rest] = numbers;
console.log(first, second); // 1 2
console.log(first, second, ...rest); // 1 2 3 4 5 6 7 8
