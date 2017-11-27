


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
        if(!lettersGuessed.includes(playerGuess)){
        //add the guessed letter to lettersGuessed array
        lettersGuessed.push(playerGuess);
        //Remove 1 from guessesLeft
        guessesLeft--; }
    } else { //If player guess is part of phrase, display it as shown above
        for(var i = 0; i < phraseChoice.length; i++){
        if (phraseChoice[i] === playerGuess){
        dashes.splice(i,1,playerGuess);
        }
    }
    }

    //convert the dashes array to a string 
    dashString = dashes.join('');
    
    //Restart the game if "Number of Guesses Remaining" is 0, or if player wins

    //If they win: 
    if (dashString === phraseChoice){
        wins++; 
        alert("You Win! Correct Phrase: " + phraseChoice);
        guessesLeft = 12;
        lettersGuessed = [];
        dashes = [];
        phraseChoice = phraseArray[Math.floor(Math.random() * phraseArray.length)];
        for (var i = 0; i < phraseChoice.length; i++) {
            dashes.push('-');}
        console.log(phraseChoice);
        console.log(dashes);
    }
    
    //If they lose:
    if (guessesLeft === 0) {
        alert("Better Luck Next Time! Correct Phrase: " + phraseChoice);
        guessesLeft = 12;
        lettersGuessed = [];
        dashes = [];
        phraseChoice = phraseArray[Math.floor(Math.random() * phraseArray.length)];
        for (var i = 0; i < phraseChoice.length; i++) {
            dashes.push('-');}
        console.log(phraseChoice);
        console.log(dashes);
    }

    console.log(dashes);

    //Create display for guessed letters via .join
    displayLettersGuessed = lettersGuessed.join(' ');

    //Display img/sound when the user wins 

    //variable references to HTML file
    document.querySelector("#wins").textContent = wins;
    document.querySelector("#dashes").textContent = dashes.join(' ');
    document.querySelector("#guessesLeft").textContent = guessesLeft;
    document.querySelector("#displayLettersGuessed").textContent = displayLettersGuessed;}
