const post = {
    id: 1, title: "Post One", body: "This is the body",
};
console.log(post);

// Convert to JSON to send to server...
const str = JSON.stringify(post);
console.log(str);

// Convert JSON to JS Object
const parsed = JSON.parse(str);
console.log(parsed);

const posts = [
    {
        id: 1, title: "Post One", body: "This is the body",
    }, {
        id: 2, title: "Post Two", body: "This is the body",
    },
];

const str2 = JSON.stringify(posts);
console.log(str2);

const parsed2 = JSON.parse(str2);
console.log(parsed2);

const library = [
    {
        title: "1984",
        author: "George Orwell",
        status: { own: true, reading: false, read: false },
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        status: { own: true, reading: false, read: false },
    },
    {
        title: "Animal Farm",
        author: "George Orwell",
        status: { own: true, reading: false, read: false },
    },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];
console.log(firstBook);

const libStr = JSON.stringify(library);
console.log(libStr);