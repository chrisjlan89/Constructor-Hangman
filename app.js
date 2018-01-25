

var chances = 5;
var words = ["jungleland" , "badlands" , "fire", "rosalita", "backstreets"]
var inquirer = require("inquirer");
var wordCon = require("./wordConstructor")
var letterCon = require("./letters.js")
var correctGuessesAndBlanks = [];
var incorrectGuesses = [];

// var randomWord = words[Math.floor(Math.random() * words.length)];

var spaces = " "


var randomWord = new wordCon(words)

var letter = new letterCon()
var chosenWord = randomWord.word

console.log("The random word which was generated : " + chosenWord)

for(var i=0; i < chosenWord.length; i++){
    // if(chosenWord.indexOf(spaces)){
    //     correctGuessesAndBlanks.push("_")
    // }
     correctGuessesAndBlanks.push("_")
 }

 
var incorrectGuesses  =  [];

// Load the NPM Package inquirer
var askLetter = function() {




    if(chances > 0){
        console.log("\n WELCOMEEE!!!! THE THEME IS....Bruce Springsteen Songs")    
        console.log("\n Your remaining chances don't mess it up...." + chances +"\n")  
   // console.log(correctGuessesAndBlanks.join(''));
   // console.log(chosenWord)
    letter.gameStatus(chosenWord,correctGuessesAndBlanks, chances)    
//Create a "Prompt" with a series of questions.
//gameStatus()
 inquirer.prompt([
     // Here we create a basic text prompt.
 
    

     {
     message: "Guess a letter",
     name  : "letter"
     }
   
   ])
   .then(function(inquirerResponse) {

    var guessedLetter = inquirerResponse.letter
    letter.gameStatus(chosenWord,correctGuessesAndBlanks, chances)
    var trueFalse = letter.letterInWord(chosenWord, guessedLetter, correctGuessesAndBlanks, incorrectGuesses)
     //console.log(ok);
    // console.log(correctGuessesAndBlanks);
    askLetter()


    if (trueFalse == false){
        letter.gameStatus(chosenWord,correctGuessesAndBlanks, chances)
        chances--
                 
    };



     });

    }
  
    

};


askLetter()

// function gameStatus(){
//     if(chosenWord == correctGuessesAndBlanks){
//         console.log("You've won")
        
//     }
//     else if(chosenWord !== correctGuessesAndBlanks && chances == 0){
//         console.log("Better luck next time")
//     }
// }


















// Originally line 57    
//     if(randomWord.indexOf(guessedLetter)!== -1){
       
//       // Need to call a func that handles the replacment of the letter with underscore.....
      
//         // incorrectGuesses.push(inquirerResponse.letter)
      
//         for(var i = 0; i < randomWord.length; i++){
// 			if (randomWord[i] === guessedLetter){
// 				correctGuessesAndBlanks[i] = guessedLetter;
				
// 				console.log(correctGuessesAndBlanks)
				
	           
// 			}
// 		}

//         word.replaceLetter(randomword, guessedLetter, correctGuessesAndBlanks)





//       console.log(guessedLetter);
      
     
//        console.log("yooooooooo");
//       // console.log(incorrectGuesses)
    
//      //word.letterInWord(randomWord,guessedLetter)
//     askLetter();
//    // gameStatus()
//     }
    // for(var j=0; chosenWord.length; j++){
   // if(inquirerResponse === incorrectGuesses ){
        // else{
        //     console.log(correctGuessesAndBlanks)    
        // incorrectGuesses.push(inquirerResponse.letter)
        // console.log("Incorrect guesses " + incorrectGuesses.toString())
        // askLetter();
        // }
   // }
//}
   //  word.letterInWord(word.word)


   // originally line 104 after the line 57 block
    // else{
    //     console.log("Game over")
    //     chances--;
    //    // gameStatus()
    //     // call a reset
    // }  