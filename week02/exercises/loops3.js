myInfo = {
    name: "Charisse HL",
    photo: "images/photo.jpg",
    favoriteFoods: ["Japanese", "Hangi", "Raw fish", "Mum's meatloaf", "Chocolate"],
    hobbies: ["Reading", "Doodling", "Geeking", "Camping"],
    placesLived: [
        {
            place: "Auckland, NZ",
            length: "18 years + 8 years",
        },
        {
            place: "Wellington, NZ",
            length: "7 years",
        },
        {
            place: "Hamilton, NZ",
            length: "3 years",
        },
        {
            place: "Christchurch, NZ",
            length: "3 years",
        },
        {
            place: "Johannesburg, SA",
            length: "3 years",
        },
    ],
};

// resuable:
const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");
// requires a list, and a callback that will produce an html string for each item in the list
// returns a string of html
function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
}
// requires an food string
// returns that string embedded in HTML markup
function foodsTemplate(food) {
    return `<li>${food}</li>`;
}

// requires an place string
// returns that string embedded in HTML markup
function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

foodsElement.innerHTML = generateListMarkup(
    myInfo.favoriteFoods,
    foodsTemplate
);
placesElement.innerHTML = generateListMarkup(
    myInfo.placesLived,
    placesTemplate
);




