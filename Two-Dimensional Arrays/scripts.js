/* var grades = [
    [80, 90, 100, 95],
    [75, 95, 85, 100],
    [60, 80, 77, 90]
]; */

var playList = [
    ['Post Malone & Young Thug', 'Goodbyes'],
    ['Miriam Bryant, Cherrie, Molly Sandén & Big', 'Mi Amor'],
    ['Hozier', 'Take Me To Church'],
    ['Winona Oak', 'Let Me Know'],
    ['Jubilee', 'Running Out Of Love'],
    ['Old', 'Songs From Before'],

]

function print (message) {
    document.write(message);
}

function printArtist  ( artist ) {
    var listHTML = '<ol>';
    for ( var i = 0; i < artist.length; i += 1 ) {
        listHTML += '<li>' + artist[i][1] + ' - ' + artist[i][0] + '</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
}

printArtist(playList);