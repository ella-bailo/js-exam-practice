function getRandomNumber(){
    return Math.ceil(Math.random() * 10);
}

let firstNumber = getRandomNumber();
let secondNumber = getRandomNumber();

console.log(firstNumber)
console.log(secondNumber)

if(firstNumber < secondNumber){
    console.log("first number is less than second number")
}

if(firstNumber > secondNumber){
    console.log("first number is greater than second number")
}

if(firstNumber <= secondNumber){
    console.log("first number is less than or equal to second number")
}

if(firstNumber >= secondNumber){
    console.log("first number is greater than or equal to second number")
}

//pt 2

let x = 10;

if(!x){
    console.log("statment false")
}