var temperature = 20;

if(temperature < 0){
    console.log("It's freezing!");
}
else if ( temperature >= 0 && temperature <= 15){
    console.log("It's cold");
}
else if ( temperature >= 16 && temperature <= 25){
    console.log("Its mild");
}
else{
    console.log("Its warm");
}

var temperature = 20;
var message;

switch (true){
    case (temperature < 0):
        message = "It's freezing!";
        break;
    case (temperature >= 0 && temperature <=15):
        message = "Its cold.";
        break;
    case (temperature >= 16 && temperature <= 25):
        message = "Its mild";
        break;
    default:
        message = "Its warm";
}
console.log(message);



var number = 6;

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} 
else if (number % 2 === 0) {
    console.log("Divisible by 2.");
}
 else if (number % 3 === 0) {
    console.log("Divisible by 3.");
}
 else {
    console.log("Not divisible by 2 or 3.");
}

var number = 6;
var message;

switch (true) {
    case (number % 2 === 0 && number % 3 === 0):
        message = "Divisible by both.";
        break;
    case (number % 2 === 0):
        message = "Divisible by 2.";
        break;
    case (number % 3 === 0):
        message = "Divisible by 3.";
        break;
    default:
        message = "Not divisible by 2 or 3.";
}

console.log(message);


for (var i = 1; i <= 10; i++) {
    console.log(i);
}
for (var i = 2; i <= 20; i += 2) {
    console.log(i);
}
var sum = 0;

for (var i = 1; i <= 100; i++) {
    sum += i;
}

console.log("The sum of all numbers from 1 to 100 is:", sum);

const numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


const num = [3, 7, 2, 5, 10, 6];
var largest = numbers[0]; // Assume the first number is the largest

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("The largest number is:", largest);


var i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

var number = 2;

while (number <= 20) {
    console.log(number);
    number += 2;
}
var sum = 0;

for (var i = 1; i <= 100; i++) {
    sum += i;
}

console.log("The sum of all numbers from 1 to 100 is:", sum);

console.log("Multiples of 5 less than 50:");

for (var i = 5; i < 50; i += 5) {
    console.log(i);
}



var i = 1;

do {
    console.log(i);
    i++;
} while (i <= 10);

var sum = 0;

for (var i = 1; i <= 100; i++) {
    sum += i;
}

console.log("The sum of all numbers from 1 to 100 is:", sum);

var number;

do {
    number = parseInt(prompt("Enter a number greater than 10:"));
} while (isNaN(number) || number <= 10);

console.log("You entered:", number); 



correct_number = random.randint(1, 10)
    guess = int(input("Guess a number between 1 and 10: "))
    if guess == correct_number:
        print("Congratulations! You guessed the correct number.")
        break
    else:
        print("Incorrect guess. Try again!")

