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

// .forEach version
const foodElement = document.querySelector("#favorite-foods");
function createandAppendFoodItem(food) {
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = food;
    foodElement.appendChild(favoriteFood);
}
myInfo.favoriteFoods.forEach(createandAppendFoodItem);


// .map version
const foodsElement = document.querySelector("#favorite-foods");
function mapFoodItem(food) {
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = food;
    return favoriteFood;
}












