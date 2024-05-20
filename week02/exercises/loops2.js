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

// Simplified .map on one line:
document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods
    .map((food) => `<li>${food}</li>`)
    .join("");


// // Simplified .map long version:
// const foodsElement = document.querySelector("#favorite-foods");
// const foodListElements = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
// // we need to flatten the array of strings into one big string. .join does this.
// foodsElement.innerHTML = foodListElements.join("");









