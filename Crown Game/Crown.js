//Ask at least five questions
'What is 1 x 1?'
'What is 1 x 2?'
'What is 1 x 3?'
'What is 1 x 4?'
'What is 1 x 5?'
var correct = 0;

var answer1 = prompt("Name a programming language that's also a gem");
if ( answer1.toUpperCase() === 'RUBY' ) {
 correct += 1; 
 document.write('<p> Ruby is correct! </p>');
} else {
document.write('<p> Sorry, no! </p>');
}

var answer = prompt('What is 1 x 1?'); 
if ( answer === '1' ) {
    correct += 1;
    document.write('<p> That is correct! </p>');
} else {
document.write('<p> Sorry, no! </p>');
}

var answer = prompt('What is 1 x 2?'); 
if ( answer === '2' ) {
    correct += 1;
    document.write('<p> That is correct! </p>');
} else {
document.write('<p> Sorry, no! </p>');
}

var answer = prompt('What is 1 x 3?'); 
if ( answer === '3' ) {
    correct += 1;
    document.write('<p> That is correct! </p>');
} else {
document.write('<p> Sorry, no! </p>');
}

var answer = prompt('What is 1 x 4?'); 
if ( answer === '4' ) {
    correct += 1;
    document.write('<p> That is correct! </p>');
} else {
document.write('<p> Sorry, no! </p>');
}

var answer = prompt('What is 1 x 5?'); 
if ( answer === '5' ) {
    correct += 1;
    document.write('<p> That is correct! </p>');
} else {
document.write('<p> Sorry, no! </p>');
}

//Keep track of the number of questions the user answered correctly

document.write("<p> You got " + correct + " correct! Good Job!")

//Provide a final message after the quiz letting the user know the number of questions he or she got right.

if ( correct === 6 ){
    document.write("<p><strong>You earned a Gold crown!</strong></p>")
} else if ( correct >= 3) {
    document.write("<p><strong>You earned a Silver crown!</strong></p>")
} else if (correct >= 2) {
    document.write("<p><strong>You earned a bronze crown.</strong></p>");  
  } else {
    document.write("<p><strong>No crown for you. You need to study.</strong></p>");
  }

//Rank the player. If the player answered all five correctly, give that player the gold crown: 3-4 is a silver crown; 1-2 correct answers is a bronze crown and 0 correct is no crown at all.