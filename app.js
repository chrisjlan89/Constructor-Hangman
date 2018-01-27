// Set our global variables

var chances = 5;
var words = ["jungleland" , "badlands" , "fire", "rosalita", "backstreets"]
var inquirer = require("inquirer");
var wordCon = require("./wordConstructor")
var letterCon = require("./letters.js")
var correctGuessesAndBlanks = [];
var incorrectGuesses = [];
var randomWord;
var letter;
var chosenWord;

// Resets the varibles which are used in a new game
function newGame(){
    correctGuessesAndBlanks = [];
     randomWord = new wordCon(words)
     letter = new letterCon()
     chosenWord = randomWord.word
     chances = 5;
    console.log("The random word which was generated : " + chosenWord)
  
    // Pushes underscores out for each in index in the word
    for(var i=0; i < chosenWord.length; i++){
        // if(chosenWord.indexOf(spaces)){
        //     correctGuessesAndBlanks.push("_")
        // }
         correctGuessesAndBlanks.push("_")
     }
}


newGame()
var incorrectGuesses  =  [];
console.log("\n WELCOMEEE!!!! THE THEME IS....Bruce Springsteen Songs") 
// Load the NPM Package inquirer
var askLetter = function() {
   

  

    if(chances > -1){
      

    //letter.gameStatus(chosenWord,correctGuessesAndBlanks, chances)    
//Create a "Prompt" with a series of questions.
gameStatus()
 inquirer.prompt([
     // Here we create a basic text prompt.
 
    

     {
     message: "Guess a letter",
     name  : "letter"
     }
   
   ])
   .then(function(inquirerResponse) {
    var guessedLetter = inquirerResponse.letter
    var trueFalse = letter.letterInWord(chosenWord, guessedLetter, correctGuessesAndBlanks, incorrectGuesses)
    askLetter()

      if (trueFalse == false){
      //  letter.gameStatus(chosenWord,correctGuessesAndBlanks, chances)
        chances--
        console.log("\n Your remaining chances don't mess it up...." + chances +"\n")
        

                 
    };



     });

    }
  
};
askLetter();
//}


        function gameStatus(){
     if(chosenWord == correctGuessesAndBlanks.join('')){
      
      // functionality for inquirer to ask the user to begin a new game if they wish
      
        //  var inquirer = require("inquirer");

        // Created a series of questions
        // inquirer.prompt([
         
        //  {
        //     type: "confirm",
        //     name: "playAgain",
        //     message: "Would you like to play again?"
        //   },
        
        // ]).then(function(user) {
        //     console.log(user.playAgain)
        //    if(user.playAgain == true){
        //     newGame();
        //     console.log("---------- BEGIN NEW GAME ---------- \n ")

        //    }
        
        // });
        newGame();
        console.log("You've won\n")
        console.log("---------- BEGIN NEW GAME ---------- \n ")



         
         //console.log("---------- BEGIN NEW GAME ---------- \n ")
        
        
        
     }
     else if(chosenWord != correctGuessesAndBlanks && chances == 0){
         console.log("Better luck next time\n")
         console.log("---------- BEGIN NEW GAME ---------- \n ")
         newGame();
        
     }
 }























