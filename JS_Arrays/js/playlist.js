// practice adding to arrays
/*
var playList = [];
playList.push('I Did It My Way');
playList.push('Respect', 'Imagine');
playList.unshift('Born to Run');
playList.unshift('Louie Louie', 'Lady Madonna');
printList(playList);
*/

var playList = [
    ['I Did It My Way', 'Frank Sinatra'],
    ['Respect', 'Aretha Franklin'],
    ['Imagine', 'John Lennon'],
    ['Born To Run', 'Bruce Springsteen'],
    ['Louie Louie', 'The Kingsmen'],
    ['Maybellene', 'Chuck Berry'],
    ['Lady Madonna', 'The Beatles']
]

function print(message) {
    document.write(message);
}

function printSongs(someList) {
    var listHTML = '<ol>';
    for (var i=0; i < someList.length; i+=1) {
        listHTML += '<li>' + someList[i][0] + ' by ' + someList[i][1] + '.</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
}
printSongs(playList);