// EXAMPLES

let firstName = 'Antonia';
let lastName = 'Francesca';


// Function declaration / definition
function fullName(first, last) {
    return `${first} ${last}`;   // string concatenation first + ' ' + last (not preferred)
  }


//   Anonymous Function Expression
const fullName = function (first, last) {
    return `${first} ${last}`;
  }


//   Arrow function expression
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;


// Calls fullName function declaration, writing result to existing HTML element's text node with id of fullName
document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);


