console.log("new Date(), typeof d", new Date(), typeof d);
console.log("new Date(1971, 3, 8, 1, 38, 33);", new Date(1971, 3, 8, 1, 38, 33));
console.log("new Date(\"2021-07-10T12:30:00Z\")", new Date("2021-07-10T12:30:00Z"));
console.log("new Date(\"2021-07-10\")", new Date("2021-07-10"));
console.log("new Date(\"07/10/2021 12:30:00\")", new Date("07/10/2021 12:30:00"));
console.log("new Date(\"07-10-2023\")", new Date("07-10-2023"));

/*
 To make sure the date entered is the date that gets stored, you could use a
 date-time string with a timezone indicator added (like
 "2022-04-01T00:00:00Z" for UTC), or use the UTC-specific methods
 (getUTCFullYear(), getUTCMonth(), and getUTCDate()) when creating your date
 objects.

 For example, to create a date in UTC:
 */
var dateString = "2022-04-01";
var dateParts = dateString.split("-");
var dateObject = new Date(Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2]));
console.log(dateObject);

console.log("Date.now()", Date.now());
console.log("new Date(1695352570614)", new Date(1695352570614));
console.log("Math.floor(Date.now() / 1000)", Math.floor(Date.now() / 1000));

// methods on Date object
console.log("new Date().getTime()", new Date().getTime());
console.log("new Date().valueOf()", new Date().valueOf());
console.log("new Date().getFullYear()", new Date().getFullYear());
console.log("new Date().getMonth() + 1", new Date().getMonth() + 1);
console.log("new Date().getDate()", new Date().getDate());

// Intl
console.log("Intl.DateTimeFormat(\"en-US\").format(new Date)",
    Intl.DateTimeFormat("en-CA").format(new Date));
console.log("(new Date).toLocaleDateString(\"en-US\", { month: \"long\" })",
    (new Date).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
    }));

// The toLocaleDateString() method in JavaScript is used to convert the date
// portion of a Date object into a string, using locale conventions. It has two
// optional parameters: locales: A string or array of strings that represents
// the language codes. For instance, passing the string 'en-US' will format the
// date to U.S. English. options: An object that can contain these properties:
// localeMatcher: The locale matching algorithm to use. Possible values are
// "lookup" and "best fit". weekday: Representation of the weekday. Possible
// values are "long", "short", "narrow". era: Representation of the era.
// Possible values are "long", "short", "narrow". year: Representation of the
// year. Possible values are "numeric", "2-digit". month: Representation of the
// month. Possible values are "numeric", "2-digit", "long", "short",
// "narrow". day: Representation of the day. Possible values are "numeric",
// "2-digit". hour: Representation of the hour. Possible values are
// "numeric", "2-digit". minute: Representation of the minute. Possible
// values are "numeric", "2-digit". second: Representation of the second.
// Possible values are "numeric", "2-digit". timeZoneName: Representation of
// the timezone. Possible values are "short", "long".

var date = new Date();

// toLocaleDateString using default locale (American English in this case)
console.log(date.toLocaleDateString());

// toLocaleDateString using Swedish locale
console.log(date.toLocaleDateString("sv-SE"));

// toLocaleDateString with options
console.log(date.toLocaleDateString("en-CA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
}));