var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
var secondsPerAlive = secondsPerDay * daysPerWeek * weeksPerYear * yearsAlive;
document.write('There are '+ secondsPerDay +' seconds in a day');
var yearsAlive = 34;
document.write('I have been alive for more than ' + secondsPerAlive)
