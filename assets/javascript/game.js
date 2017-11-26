


//Variable for # of wins
var wins = 0;
var guessesLeft = 12;
var lettersGuessed = [];

//create the main phrases 
var phraseArray = ['kenny', 'cartman', 'stan', 'kyle', 'tweek', 'mrgarrison', 'randy', 'chef', 'token', 'butters', 'wendy', 'pcprincipal', 'jimmy', 'ike', 'mrmackey', 'towelie', 'officerbarbrady'];

//have the computer pick a random phrase
var phraseChoice = phraseArray[Math.floor(Math.random() * phraseArray.length)];
console.log(phraseChoice);

//store the phrase and display it as shown above
var dashes = [];
for (var i = 0; i < phraseChoice.length; i++) {
    dashes.push('-');
}

//create the dashes display (no commas)
dashesDisplay = dashes.join(' ');
document.querySelector("#dashes").textContent = dashesDisplay;

//listen for player's letter input
document.onkeyup = function (event) {
    var playerGuess = event.key.toLowerCase();

    //If player guess is not part of phrase, display it in "Letters already guessed"
    if (phraseChoice.indexOf(playerGuess) < 0) {
        //add the guessed letter to lettersGuessed array
        lettersGuessed.push(playerGuess);
    } else {
        dashes.splice(phraseChoice.indexOf(playerGuess),playerGuess); 
    }
    //Create display for guessed letters via .join
    displayLettersGuessed = lettersGuessed.join(' ');

    //If player guess is part of phrase, display it as shown above

    //Remove 1 from "Number of Guesses Remaining" if incorrect
    //Restart the game if "Number of Guesses Remaining" is 0, or if player wins
    //Display img/sound when the user wins 
    //Add 1 to Wins if the player wins

    //variable references to HTML file
    document.querySelector("#wins").textContent = wins;
    document.querySelector("#dashes").textContent = dashesDisplay;
    document.querySelector("#guessesLeft").textContent = guessesLeft;
    document.querySelector("#displayLettersGuessed").textContent = displayLettersGuessed;}
