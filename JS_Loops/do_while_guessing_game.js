var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber(upper) {
    var num = Math.floor( Math.random() * upper ) + 1;
    return num;
  }

do {
    guess = prompt("I'm thinking of a number between 1 and 10. What is it?");
    guessCount += 1;
    if (parseInt(guess) === randomNumber) {
        correctGuess = true;
    }
} while (! correctGuess)

document.write("<h1>You guessed the number!</h1>");
document.write("<p>The number was " + randomNumber + ". It took you " + guessCount + " tries to get it.");

/* break a while:true loop

while (true) {
    guess = prompt("I'm thinking of a number between 1 and 10. What is it?");
    if (parseInt(guess) ===  randomNumber) {
        correctGuess = true;
        break;
    }
}

*/