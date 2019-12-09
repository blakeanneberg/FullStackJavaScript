//Create a story-telling program:

//1. Use the prompt() command several times to collect different types of words -- nouns, verbs, adjectives.
//2. Store the result of each prompt() command in a different variable.
//3. Combine the variables with other strings to create one or more non-sensical statements.
//4. Print the resulting story to the browser using the document.write() command.

var questions = 4;
var questionsLeft = ' [' + questions + ' questions left]';
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var visitor = prompt('what is your name?' + questionsLeft).toUpperCase();
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adj = prompt('Tell us an adjative?' + questionsLeft).toUpperCase();
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var verb = prompt('Tell us an verb?' + questionsLeft).toUpperCase();
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var noun = prompt('Tell us an noun?' + questionsLeft).toUpperCase();
var message = '<h2>Hello ' + visitor + "! Welcome to BlakeLibs!";
message += " 	There was once a ";
message += adj + " fellow";
message += " who was " + verb + " in the city of " + noun + "!";
document.write(message)
