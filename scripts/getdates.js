// to add a leading zero if less than 10
function padWithZero(number) {
    return number < 10 ? '0' + number : number;
}

// select the DOM elements for output
const medium = document.querySelector("#medium");
const year = document.querySelector("#year");

// use the date object to get current time
const today = new Date();

// format date and time
const formatDate = new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "medium"
    }
).format(today);

// format time, with leading 0 if necessary
const formatTime = `${padWithZero(today.getHours())}:${padWithZero(today.getMinutes())}:${padWithZero(today.getSeconds())}`;

// medium and year content
medium.innerHTML = `Last modified: <span class="last-mod">${formatDate}, ${formatTime}</span>`;
year.innerHTML = `©${today.getFullYear()} 🐾 Charisse Hearns-Lemon 🐾 Auckland NZ`;

