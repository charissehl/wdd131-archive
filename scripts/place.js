//WEATHER

// Define the temperature and wind speed values
let tempC = 12; // example temperature value in Celsius
let windSpeedKmh = 30; // example wind speed value in km/h

// One-liner function to calculate wind chill
const calculateWindChill = (tempC, windSpeedKmh) =>
    (tempC <= 10 && windSpeedKmh > 4.8)
        ? (13.12 + 0.6215 * tempC - 11.37 * Math.pow(windSpeedKmh / 3.6, 0.16) + 0.3965 * tempC * Math.pow(windSpeedKmh / 3.6, 0.16)).toFixed(2)
        : "N/A";

function updateDisplay() {
    const windChill = calculateWindChill(tempC, windSpeedKmh);
    document.getElementById('temperature-display').textContent = tempC;
    document.getElementById('wind-speed-display').textContent = windSpeedKmh;
    document.getElementById('result').textContent = windChill === "N/A"
        ? "N/A"
        : `${windChill} °C`;
}

// Update the display initially
updateDisplay();







// FOOTER

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
medium.innerHTML = `Last modified: ${formatDate}, ${formatTime}`;
year.innerHTML = `©${today.getFullYear()} 🥝 Charisse Hearns-Lemon 🥝 Auckland NZ`;

