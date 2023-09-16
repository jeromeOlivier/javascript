// type conversion methods
const clr = "color: orange; background: black;";

// type conversion to number (four methods)
console.group("original values");
let str = "123";
console.log("%c'123'", clr, str, typeof str); // string
let decimalStr = "123.45";
console.log("%c'123.45'", clr, decimalStr, typeof decimalStr); // string
let mixedStr = "abc123";
console.log("%c'abc123'", clr, mixedStr, typeof mixedStr); // string
let leadingStr = "123abc";
console.log("%c'123abc'", clr, leadingStr, typeof leadingStr); // string
let leadingStrFloat = "abc123.45";
console.log("%c'abc123.45'", clr, leadingStrFloat, typeof leadingStrFloat); // string
let trailingStrFloat = "123.45abc";
console.log("%c'123.45abc'", clr, trailingStrFloat, typeof trailingStrFloat); // string
let trailingStrFraction = "abc0.45";
console.log("%c'abc0.45'", clr, trailingStrFraction, typeof trailingStrFraction); // string
let untrimmedStr = " 123 ";
console.log("%c' 123 '", clr, untrimmedStr, typeof untrimmedStr); // string
let emptyStr = "";
console.log("%c''", clr, emptyStr, typeof emptyStr); // string
let spaceStr = " ";
console.log("%c' '", clr, spaceStr, typeof spaceStr); // string
let nullValue = null;
console.log("%cnull", clr, nullValue, typeof nullValue); // object
let undefinedValue = undefined;
console.log("%cundefined", clr, undefinedValue, typeof undefinedValue); // undefined
let booleanValue = true;
console.log("%ctrue", clr, booleanValue, typeof booleanValue); // boolean
let numberValue = 123;
console.log("%c123", clr, numberValue, typeof numberValue); // number
let decimal = 123.45;
console.log("%c123.45", clr, decimal, typeof decimal); // number
let obj = {};
console.log("%c{}", clr, obj, typeof obj); // object
let func = function() {};
console.log("%cfunction () {}", clr, func, typeof func); // function
console.groupEnd();

/** coerces any type of value to a number, including reference objects
 * @param {any} value - the value to be coerced to a number
 * @returns {number}
 */
const coerceToOneOrMore = (value) => {
    // if value is a string, trim any possible spaces
    if (typeof value === "string") value = value.trim();

    // if value is null or undefined, return 1
    if (value === null || value === undefined) return 1;

    // if value is a number and less than one, return 1
    if (typeof value === "number" && value < 1) return 1;

    // if value is a number and greater than one, return the number
    if (typeof value === "number" && value > 1) return value;

    // if value is a boolean, return 1
    if (typeof value === "boolean") return 1;

    // if string is of type object or function, return 1
    if (typeof value === "object" || typeof value === "function") return 1;

    // if value is an empty string, return 1
    if (value.length === 0) return 1;

    // if value is a string decimal number, return the number
    if (!isNaN(parseFloat(value))) {
        return parseFloat(value);
    }

    // if string contains a number with leading strings, remove the leading
    // strings and return the number
    for (let i = 0; i < value.length; i++) {
        if (!isNaN(value[i])) {
            return parseFloat(value.slice(i)) < 1 ? 1 : parseFloat(value.slice(i));
        }
    }

    // if all else fails, return 1
    return 1;
};

// test the function
console.group("coerceToNumber()");
let strCoerceToNumber = coerceToOneOrMore(str);
console.log("%c'123'", clr, strCoerceToNumber, typeof strCoerceToNumber); // number
let decimalCoerceToNumber = coerceToOneOrMore(decimalStr);
console.log("%c'123.45'", clr, decimalCoerceToNumber, typeof decimalCoerceToNumber); // 123.45
let mixedCoerceToNumber = coerceToOneOrMore(mixedStr);
console.log("%c'abc123'", clr, mixedCoerceToNumber, typeof mixedCoerceToNumber); // 123
let leadingCoerceToNumber = coerceToOneOrMore(leadingStr);
console.log("%c'123abc'", clr, leadingCoerceToNumber, typeof leadingCoerceToNumber); // 123
let leadingCoerceToNumberFloat = coerceToOneOrMore(leadingStrFloat);
console.log("%c'abc123.45'", clr, leadingCoerceToNumberFloat, typeof leadingCoerceToNumberFloat); // 123.45
let trailingCoerceToNumberFloat = coerceToOneOrMore(trailingStrFloat);
console.log("%c'123.45abc'", clr, trailingCoerceToNumberFloat, typeof trailingCoerceToNumberFloat); // 123.45
let trailingCoerceToNumberFraction = coerceToOneOrMore(trailingStrFraction);
console.log("%c'abc0.45'", clr, trailingCoerceToNumberFraction, typeof trailingCoerceToNumberFraction); // 0.45
let untrimmedCoerceToNumber = coerceToOneOrMore(untrimmedStr);
console.log("%c' 123 '", clr, untrimmedCoerceToNumber, typeof untrimmedCoerceToNumber); // 123
let emptyCoerceToNumber = coerceToOneOrMore(emptyStr);
console.log("%c''", clr, emptyCoerceToNumber, typeof emptyCoerceToNumber); // 0
let spaceCoerceToNumber = coerceToOneOrMore(spaceStr);
console.log("%c' '", clr, spaceCoerceToNumber, typeof spaceCoerceToNumber); // 0
let nullStrCoerceToNumber = coerceToOneOrMore(nullValue);
console.log("%cnull", clr, nullStrCoerceToNumber, typeof nullStrCoerceToNumber); // 0
let undefinedStrCoerceToNumber = coerceToOneOrMore(undefinedValue);
console.log("%cundefined", clr, undefinedStrCoerceToNumber, typeof undefinedStrCoerceToNumber); // 0
let boolCoerceToNumber = coerceToOneOrMore(booleanValue);
console.log("%ctrue", clr, boolCoerceToNumber, typeof boolCoerceToNumber); // 1
let numCoerceToNumber = coerceToOneOrMore(numberValue);
console.log("%c123", clr, numCoerceToNumber, typeof numCoerceToNumber); // 123
let decimalCoerceToNumber2 = coerceToOneOrMore(decimal);
console.log("%c123.45", clr, decimalCoerceToNumber2, typeof decimalCoerceToNumber2); // 123.45
let objCoerceToNumber = coerceToOneOrMore(obj);
console.log("%c{}", clr, objCoerceToNumber, typeof objCoerceToNumber); // 1
let funcCoerceToNumber = coerceToOneOrMore(func);
console.log("%cfunction () {}", clr, funcCoerceToNumber, typeof funcCoerceToNumber); // 1
console.groupEnd();
