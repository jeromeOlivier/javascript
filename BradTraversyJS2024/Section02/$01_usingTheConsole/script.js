const people = [
    { name: "John", age: 34 },
    { name: "Amy", age: 20 },
    { name: "camperCat", age: 10 },
    { name: "camperDog", age: 5 },
    { name: "camperCamper", age: 15 },
];

const styles = "color: orange; font-size: 1rem"; // $01_usingTheConsole.log can
                                                 // be styled!
console.group("%cgroup name here", styles); // logs can be grouped together
console.table(people); // will print users as a table
console.warn("this is a warning message"); // to generate a warning
console.error("this is an error message"); // to generate an error
console.groupEnd(); // to close the group