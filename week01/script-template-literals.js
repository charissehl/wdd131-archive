`string text`

    `string text line 1
 string text line 2`

    `string text ${expression} string text`

tagFunction`string text ${expression} string text`

// string text
// The string text that will become part of the template literal. Almost all characters are allowed literally, including line breaks and other whitespace characters. However, invalid escape sequences will cause a syntax error, unless a tag function is used.

// expression
// An expression to be inserted in the current position, whose value is converted to a string or passed to tagFunction.

// tagFunction
// If specified, it will be called with the template strings array and substitution expressions, and the return value becomes the value of the template literal. See tagged templates.

/* 
To escape a backtick in a template literal, put a backslash (\) before the backtick.
eg
`\`` === "`"; // true

Dollar signs can be escaped as well to prevent interpolation.
eg
`\${1}` === "${1}"; // true
*/

//MULTI LINE STRINGS
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"

//STRING INTERPOLATION
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."

//NESTING
const classes = `header ${isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
    }`;


//Change this concatenated string into a template literal:
let output = "Welcome to " + courseSubject + " " + courseNumber + "!Credits: " + courseCredits + "Length: " + courseLength;

const output = `Welcome to ${courseSubject} ${courseNumber}!Credits: ${courseCredits}Length: ${courseLength}`;


//Given the following script, finish the code snippet to produce a list of three temples base on the temples array:
// let temples = ["Rome", "Salt Lake", "Nauvoo"];
// let listItems = "";
// for (const temple of temples) {
//   listItems += `<li>__________</li>`;
// }
document.querySelector("ul").innerHTML = listItems;

let temples = ["Rome", "Salt Lake", "Nauvoo"];
let listItems = "";
for (const temple of temples) {
    listItems += `<li>${temple}</li>`;
}
document.querySelector("ul").innerHTML = listItems;