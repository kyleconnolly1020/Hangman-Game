

//Variable for # of wins
var wins = 0; 
var guessesLeft = 12;
var lettersGuessed = [];

/* Display the following: 
    "Press any key to get started!"
    "Wins: "
    (the word like this -->) '- - - - - - -'
    as the user guesses correctly, reveal them ^^
    "Number of Guesses Remaining: "
    "Letters Already Guessed: ('L Z Y H [example])" */


//create the main phrases 
var phraseArray = ['kenny', 'cartman', 'stan', 'kyle', 'tweek', 'mrgarrison', 'randy', 'chef', 'token', 'butters', 'wendy', 'pcprincipal', 'jimmy', 'ike', 'mrmackey', 'towelie', 'officerbarbrady'];

//have the computer pick a random phrase
var phraseChoice = phraseArray[Math.floor(Math.random() * phraseArray.length)];
console.log(phraseChoice);

//store the phrase and display it as shown above
var dashes = '';
for (var i = 0; i < phraseChoice.length; i++) {
    dashes += '-';
}
console.log(dashes);

    //listen for player's letter input
    //If player guess is part of phrase, display it as shown above
    //If player guess is not part of phrase, display it in "Letters already guessed"
    //Remove 1 from "Number of Guesses Remaining" if incorrect
    //Restart the game if "Number of Guesses Remaining" is 0, or if player wins
    //Display img/sound when the user wins 
    //Add 1 to Wins if the player wins

    var html = "<p> Press any key to get started! </p>" +
    "<p> Wins: " + wins + "</p>" +
    "<p>" + dashes + "</p>" + 
    "<p> Number of Guesses Remaining: " + guessesLeft + "</p>" + 
    "<p> Letters Already Guessed: " + lettersGuessed + "</p>";

document.querySelector('#container').innerHTML = html; 