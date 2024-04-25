// select the DOM elements for output
const medium = document.querySelector("#medium");
const year = document.querySelector("#year");


// use the date object
const today = new Date();

medium.innerHTML = `Last modified: <span class="last-mod">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "medium"
    }
).format(today)}, ${today.getHours()}:${today.getMinutes()}</span>`;

year.innerHTML = `©${today.getFullYear()} 🐾 Charisse Hearns-Lemon 🐾 Auckland NZ`;

