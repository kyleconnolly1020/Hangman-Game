


//Variable for # of wins
var wins = 0;
var guessesLeft = 12;
var lettersGuessed = [];

//Function for displaying the Character image for the phrase
var imageHTML = '';
var imageLinks = ["http://southparkstudios.mtvnimages.com/shared/characters/kids/kenny-mccormick.png?height=165", "https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png", "http://southparkstudios.mtvnimages.com/shared/characters/kids/stan-marsh.png?height=165", "http://www.simpleimageresizer.com/_uploads/photos/eb75f18c/spfbw-kyle_1_27.png",
    "https://vignette.wikia.nocookie.net/southpark/images/9/9d/Tweek_pic.png/revision/latest/scale-to-width-down/310?cb=20160402115548",
    "https://upload.wikimedia.org/wikipedia/en/a/a3/MrGarrison.png", "http://www.simpleimageresizer.com/_uploads/photos/eb75f18c/Randy_transparent_cockmagic_50.png", "https://upload.wikimedia.org/wikipedia/en/1/1e/SouthParkChef.png", "http://www.simpleimageresizer.com/_uploads/photos/eb75f18c/token-black_1_24.png", "https://upload.wikimedia.org/wikipedia/en/0/06/ButtersStotch.png", "http://www.simpleimageresizer.com/_uploads/photos/eb75f18c/Wendyy_71.png", "https://vignette.wikia.nocookie.net/villains/images/c/c3/Pcprinc.png/revision/latest?cb=20160619003020", "http://www.simpleimageresizer.com/_uploads/photos/eb75f18c/Jimmy_valmer_here_1_27.png", "http://www.simpleimageresizer.com/_uploads/photos/eb75f18c/Ike_2_61.png", "http://www.simpleimageresizer.com/_uploads/photos/eb75f18c/Mr_Mackey_New_49.png", "http://www.simpleimageresizer.com/_uploads/photos/eb75f18c/Towelie-0_45.png", "https://vignette.wikia.nocookie.net/southpark/images/a/a6/Barbrady-family-barbrady-unhatted-police-officer.png/revision/latest/scale-to-width-down/279?cb=20171011064519"
];



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
        if (!lettersGuessed.includes(playerGuess)) {
            //add the guessed letter to lettersGuessed array
            lettersGuessed.push(playerGuess);
            //Remove 1 from guessesLeft
            guessesLeft--;
        }
    } else { //If player guess is part of phrase, display it as shown above
        for (var i = 0; i < phraseChoice.length; i++) {
            if (phraseChoice[i] === playerGuess) {
                dashes.splice(i, 1, playerGuess);
            }
        }
    }

    //convert the dashes array to a string 
    dashString = dashes.join('');

    //Restart the game if "Number of Guesses Remaining" is 0, or if player wins

    //If they win: 
    if (dashString === phraseChoice) {
        wins++;
        alert("You Win! Correct Phrase: " + phraseChoice);
        imageHTML = '<img src = "' + imageLinks[phraseArray.indexOf(phraseChoice)] + '">';
        guessesLeft = 12;
        lettersGuessed = [];
        dashes = [];
        phraseChoice = phraseArray[Math.floor(Math.random() * phraseArray.length)];
        for (var i = 0; i < phraseChoice.length; i++) {
            dashes.push('-');
        }
        console.log(phraseChoice);
        console.log(dashes);
    }

    //If they lose:
    if (guessesLeft === 0) {
        alert("Better Luck Next Time! Correct Phrase: " + phraseChoice);
        imageHTML = '<img src = "' + imageLinks[phraseArray.indexOf(phraseChoice)] + '">';
        guessesLeft = 12;
        lettersGuessed = [];
        dashes = [];
        phraseChoice = phraseArray[Math.floor(Math.random() * phraseArray.length)];
        for (var i = 0; i < phraseChoice.length; i++) {
            dashes.push('-');
        }
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
    document.querySelector("#displayLettersGuessed").textContent = displayLettersGuessed;
    document.querySelector("#image").innerHTML = imageHTML;
}