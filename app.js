//Create a variable that contains your name as a value
let name = "Sajid Zaman";

//Create a constant that contains the number of states in the U.S. and name it appropriately
const number_of_states_in_US = 134;

//Compute the result of adding 5 and 4 and store it in an appropriately named variable
let result = number_of_states_in_US + 5 + 4;

//Write a function called sayHello that displays an alert that says Hello World!
function sayHello () {
    return "Hello World!";
}

//Write a function called checkAge that takes two arguments: one for a name and one for an age. If the age is less than 21, display an alert that says, "Sorry " + name + ", you aren't old enough to view this page!"
function checkAge (name, age) {
    if (age < 21) {
        return "Sorry " + name + ", you aren't old enough to view this page!";
    }

    else {
        return "Welcome to the page, " + name + ".";
    }
}

//Create an array of your favorite vegetables and name it accordingly
let vegetables = ["Potatoes", "Carrots", "Peas", "Cauliflower", "Beans", "Ladyfinger"];

//Use a loop to display each of your favorite vegetables to the developer console
for (let i in vegetables) {
    console.log(vegetables[i]);
}

//Create an array of 5 objects that contain name and age properties. Make up names and ages for each object, making sure some are younger than 21 and some are 21+
let people = [{'name': 'Andy', 'age': 18}, {'name': 'Susan', 'age': 20}, {'name': 'Joe', 'age': 21}, {'name': 'Robert', 'age': 25}, {'name': 'Jodie', 'age': 28}];

//Use a loop to call the checkAge function for each object in the array, passing the object's name and age as arguments
for (let i in people) {
    console.log(checkAge(people[i].name, people[i].age));
}

//Create a function called getLength that takes any word as an argument. The function should return the number of characters in the string.
function getLength(string) {
    return string.length;
}
//Call the getLength function, passing 'Hello World' as the argument. Store the returned result of that function in a variable.
let length = getLength("Hello World");
//If the number is even, display 'The world is nice and even!' in the developer console. Otherwise if the number is odd, display 'The world is an odd place!' in the developer console.
if (length % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}