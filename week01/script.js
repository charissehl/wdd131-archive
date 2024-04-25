/* This is a long comment
...
...
...
*/

function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
}

// This code is for a single button:
// const buttons = document.querySelectorAll("button");

// for (const button of buttons) {
//     button.addEventListener("click", createParagraph);
// }


// Instead of including JavaScript in your HTML, use a pure JavaScript construct. The querySelectorAll() function allows you to select all the buttons on a page. You can then loop through the buttons, assigning a handler for each using addEventListener(). The code for this is shown below:

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}