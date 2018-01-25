

     function Letter(letter){
        this.gameStatus = function(word, blanks, chances){
            //console.log(blanks.toString())
            if(word.toString() === blanks.join('')){
                console.log("You've won")
                
                
            }
            else if(word !== blanks && chances == 0){
                console.log("Better luck next time")
                
            }
        }
        
        this.letterInWord = function(word, letter, blanks, wrongs){
            if(word.indexOf(letter) !== -1){
              //console.log(word)
                for(var i= 0; i < word.length; i++){
                  
                    if(word[i] == letter){
                       
                        // replace a blank on a cmd prompt
                       //  console.log("Good guess")
                       blanks[i] = letter;
                       console.log("\n -----------------------------")
                       console.log("Here are your incorrect guesses : \n " + wrongs)
                      // blanks.join('')
                      // console.log("")
                    }
                   
                }
                console.log("Your progress so far \n" + blanks.join(' ') + "\n")
                console.log("\n -----------------------------\n")  
                return true;
                
               
        }
        else{
           // chances -- 
           if(wrongs.indexOf(letter) == -1){
            wrongs.push(letter)
            console.log("That guess was erroneous on all counts\n")
            console.log("Here are your incorrect guesses : \n " + wrongs)
            console.log("\n -----------------------------")
            return false;
           }
           // console.log(chances)
           console.log("\n -----------------------------")
           console.log("\nSorry that wrong, and you already guessed that!!!!")

           console.log("\nHere are your incorrect guesses in case you forgot...  " + wrongs)
           console.log("\n -----------------------------\n")
           
          // console.log(wrongs)
           
        }
       }




}

module.exports = Letter;