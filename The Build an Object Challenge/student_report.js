var message = '';
var student;




function print (message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}


for ( var i = 0; i < students.length; i += 1 ){
        student = students[i];
        student += '<h2>Student: ' + student.name +'</h2>'; 
    }

print(message);