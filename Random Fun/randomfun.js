function getRandomNumber() {
    var randomNumber = Math.floor( Math.random() * 6) + 1;
    return  randomNumber;
}
alert( getRandomNumber);
/* OTHER THINGS YOU CAN PUT INSTEAD OF THE ALERT BOX
console.log( getRandomNumber() );
var dieRoll = getRandomNumber(); */


~~~~~~~
/* GETS A RANDOM NUMBER

var alertRandom = function () {
    var randomNumber = Math.floor(Math.random() * 6 ) + 1;
    alert(randomNumber);
};
alertRandom(); */



~~~~~~
CODE BELOW IS FOR A FORM FIELD TO MAKE SURE ITS EMPTY

function isEmailEmpty() {
    var field = document.getElementById('email');
if (field.value === '') {
    return true;
} else {
    return false;
}
}
var fieldTest = isEmailEmpty();
if (fieldTest === true) {
    alert('Please provide your email addres');
}
