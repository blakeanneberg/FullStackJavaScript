var students = ['Sascha', 'Lynn', 'Jennifer', 'Paul', 'Blake'];
for (var i = 0; i < students.length; i +=1) {
    console.log(students[i]);
}
var studentString = students.join(', '); //makes a comma
console.log (studentString);




var playlist = [
    'Beasty Boys',
    'Sigur Ros',
    'Swidish Radio',
    'Thumbs up Playlist',
    'India Mix'
];

function print (message){
    document.write(message);
}

function printList( list ){
    var listHTML= '<ol>';
    for ( var i = 0; i < list.length; i +=1) {
        listHTML += '<li>' + list [i] + '</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
}
printList(playlist);


/*var studentPlaylist = playlist.concat( students );
console.log (studentPlaylist); */
console.log(playlist.concat(students)); // concats 2 arrays 


var fruit = ['Apple', 'Orange', 'Grapefruite'];
var position = fruit.indexOf('Grapefruite'); //or if you do lemon, you can see if item is in an array
console.log(position);