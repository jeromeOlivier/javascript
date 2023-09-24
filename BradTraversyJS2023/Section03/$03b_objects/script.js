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

console.log(Object.keys(person));
console.log(Object.keys(person).length);
console.log(Object.values(person));
console.log(Object.entries(person));
console.log(person.hasOwnProperty("name"));

// to access nested attributes using destructuring, call the key, open a new
// set of braces and apply the same principle to there
// state is renamed to province using :
const { name, age, address: { street, state: province, city } } = person;
console.log(street, province, city);

// the same principle applies to arrays
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const [first, second, ...rest] = numbers;
console.log(first, second, ...rest);
