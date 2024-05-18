console.log("hello");

// these are variables
let number = 0;
const another = 5;
var word = "bird"
number += another;
//console.log(number);
let alive = false;

// functions
function addNumbers(a, b){
    return a + b;    
}
//console.log(addNumbers(1, 2))

function isBigger(a, b){
    if(a <= b){
        return false;
    } else {
        return true;
    }
}
console.log(isBigger(2, 2));
//create function that adds 2 numbers together and checks if the sum is greater than 50 return if true or false.

function isGreater(a, b){
    let c = a + b;
    if(c < 50){
        return false;
    } else {
        return true;
    }
}
console.log(isGreater(25, 30))

// arrays
let objects = [
    "dog",
    "cat",
    2
    ];
//console.log(objects);

// datatype



// objects
let person = {
    firstName: "steve", 
    lastName: "jobs"
}
person.firstName = "carl"