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
//console.log(isBigger(2, 2));

//random
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

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

//for loops
//let numeric = [1, 2, 69, 4, 5, 6 ]
for(let i = 0; i < numeric.length; i++ ){
    console.log(numeric[i])
}

//console.log(sumArray([1,2,3,4,5]));