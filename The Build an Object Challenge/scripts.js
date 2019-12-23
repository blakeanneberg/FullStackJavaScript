
var students = [
    {
        name: ' Blake', 
        track: 'iOS',
        achievements: 123,
        points: 2444
    },
    {
        name: ' Sara', 
        track: 'Front End',
        achievements: '32',
        points: '212'
    },
    {
        name: ' Mitch', 
        track: 'Backend',
        achievements: '66',
        points: '2314'
    },
    {
        name: ' Ben', 
        track: 'Ruby',
        achievements: '53',
        points: '23492'
    },
    {
        name: ' Ann', 
        track: 'Python',
        achievements: 62,
        points: 2002
    }
];

// var correctAnswers = 0;
// var question;
// var answer;
// var response;
// var correct = [];
// var wrong = [];


// function print (message) {
//     var outputDiv = document.getElementById('student');
//     outputDiv.innerHTML = message;
// }

// function buildList(arr){
//     var listHTML = '<ol>';
//         for (var i = 0; i < arr.length; i += 1) {
//             listHTML += '<li>' + arr[i] + '</li>';
//         }
//         listHTML += '</ol>';
//         return listHTML;
// }

// for ( var i = 0; i < questions.length; i += 1 ){
//     question = questions[i].question;
//     answer = questions[i].answer;
//     response = parseInt(prompt(question));
//     if (response === answer){
//         correctAnswers += 1;
//         correct.push(question);
//     } else {
//         wrong.push(question);
//     }
// }

// html = "You got " + correct + " question(s) right.";
// html += '<h2 You got these questions correct:</h2>';
// html += buildList(correct);
// html += '<h2> You got these questions wrong:</h2>';
// html += buildList(wrong);
// print(html);

/*

function printQuestions  ( questions ) {
    var listHTML = '<ol>';
    for ( var i = 0; i < questions.length; i += 1 ) {
        let sign = prompt(questions[i][0]);
        if (sign.toLowerCase() == questions[i][1]) {
            alert("Correct");
          }
        listHTML += '<li>' + questions[i][0] + ' - ' + questions[i][1] + '</li>';
    }
    listHTML += '</ol>';
    function print (message) {
        document.write(message);
}
}
printQuestions(questions);

*/

