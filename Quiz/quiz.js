var answer= prompt('What is the best programming language?'); 
if (answer.toUpperCase() === 'JavaScript') {
    document.write('<p> That is correct! </p>');
} else {
document.write('<p> Sorry, no! </p>');
}


/* var answer= prompt("What is the best programming language?");
if (answer === 'JavaScript') {
    window.alert("You are correct");
} else {
    window.alert("JavaScript is the best language!");
} */



//prompt()//dialogue to collect user input
//parseInt()//function to convert input to an interger
//Math.random() method to create a random numbers

/* var input1 = prompt("Please type a starting number");
var bottomNumber = parseInt(input1);
var numOne = prompt('What a another number?');
var topNumber = parseInt(numOne);
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + ".</p>"
document.write(message); */

//var numTwo = prompt('What a second random number?');
//parseInt(numOne);
//parseInt(numTwo);
//var guessNumber = Math.floor(Math.random() * (numOne - numTwo + 1) + 1);
//alert('You rolled a ' + guessNumber);
