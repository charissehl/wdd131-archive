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
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent = myInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent = myInfo.favoriteFoods[3];

let favoriteFood5 = document.createElement("li");
favoriteFood5.textContent = myInfo.favoriteFoods[4];

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector("#favorite-foods").appendChild(favoriteFood1);
document.querySelector("#favorite-foods").appendChild(favoriteFood2);
document.querySelector("#favorite-foods").appendChild(favoriteFood3);
document.querySelector("#favorite-foods").appendChild(favoriteFood4);