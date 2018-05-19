
var computerChoices = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]

var correct = 0;
var incorrect = 0;
var guessesLeft = 9;
var letterUser = [];
var eachofLetters = null;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(guessesLeft)
function countGuessesLeft() {

	document.getElementById("guessesLeft").innerHTML = "guesses left " + guessesLeft
}

function farUserGuesses() {
	document.getElementById("letters").innerHTML = "guesses so far: " + letterUser.join(' ');
}

countGuessesLeft();

var restart = function() {
	guessesLeft = 9;
	letterUser = [];
}

document.onkeyup = function(event) {
	guessesLeft--;

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	letterUser.push(userGuess);
	countGuessesLeft();
	farUserGuesses();

	if (userGuess === computerGuess){
		wins++;
		document.getElementById("wins").innerHTML = "Correct: " + wins;
		restart();
	} 
	else if (guessesLeft === 0) {
		losses++;
		document.getElementById("lose").innerHTML = "Incorrect Guesses: " + losses;
		restart();
	}
  };
