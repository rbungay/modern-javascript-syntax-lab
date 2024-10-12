// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const times2 = nums.map((num) => num * 2);

console.log(`Exercise 1 complete: ${times2}`);

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];

// Your code here

const [firstTopping, secondTopping] = pizzaToppings;

console.log(`Exercise 2 complete: ${firstTopping} and ${secondTopping}`);

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: "Audi",
  model: "q5",
};

// Your code here

const { make, model } = car;

console.log(`Exercise 3 complete: ${make} and ${model}`);

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings2 = ["Pineapple", "Olives", "Anchovies"];

// Your code here

const controversialPizzaToppings = [...pizzaToppings2];

console.log(`Exercise 4 complete: ${controversialPizzaToppings}`);

// Duplicate the following object and spread its values into a new variable `myCar`.

const car2 = {
  make: "Audi",
  model: "q5",
};

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here

const myCar = { ...car2 };
myCar.model = "q7";
console.log("Exercise 5 complete:");
console.log(myCar);

// Create an object named userProfile.
// Define a variable named propertyName and assign a string to it (like a username, age, or email).
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

const propertyName = "username";
const userProfile = {
  [propertyName]: "John Doe",
};

console.log("Exercise 6 complete:");
console.log(userProfile);

// Convert the following `if...else` statement in to a ternary:

let pizza = "tasty";

// if (pizza === "tasty") {
//   console.log("yum");
// } else {
//   console.log("yuck");
// }

// Your code here

let isTasty = pizza === "tasty" ? "yum" : "yuck";

console.log(`Exercise 9 complete: ${isTasty}`);
