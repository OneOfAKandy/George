//random
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


//create function that adds 2 numbers together and checks if the sum is greater than 50 return if true or false.

function isGreater(a, b){
    let c = a + b;
    if(c < 50){
        return false;
    } else {
        return true;
    }
}
//console.log(isGreater(25, 30)


//create a function that gets a number from 1-2, then checks if the user inputed number is the same.

function randomInt(a){
    b = getRandomInt(3)
    console.log("number is " + b)
    console.log("you guessed " + a)
    if(a < b){
        return false;
    } else if(a > b){
        return false;
    } else {
        return true;
    }  
}
console.log(randomInt(1))

//calculate the sum of all numbers in an array
let myArray = [1, 3, 4, 5]
function calculateArray(arr){
    let sum = 0;
   for(let i = 0; i < arr.length; i++ ){
    sum += arr[i]
   }
   return sum
}
console.log(calculateArray(myArray))

