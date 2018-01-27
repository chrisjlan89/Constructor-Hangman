

     function Letter(letter){
        // this.gameStatus = function(word, blanks, chances,func){
        //     if(word == blanks.join('')){
        //         console.log("You've won")
                
                
                
        //     }
        //     else if(word != blanks && chances == 0){
        //         console.log("Better luck next time")
                
        //     }
        // }

        // checks to see if the letter user guesses is in the word we randomly selected
        this.letterInWord = function(word, letter, blanks, wrongs){
            if(word.indexOf(letter) !== -1){
              //console.log(word)
                for(var i= 0; i < word.length; i++){
                  

                    // if the user letter is anywhere in the index.....
                    if(word[i] == letter){
                       
                        // replace a blank on a cmd prompt
                       
                       blanks[i] = letter;
                      
                      
                      
                    }
                   
                }
                // updates user on status
                console.log("Your progress so far \n" + blanks.join(' ') + "\n")
                console.log("\n -----------------------------\n")  
                return true;
                
               
        }
        else{
           // if a wrong guess does not already exist within an array we created, we push that wrong letter
           if(wrongs.indexOf(letter) == -1){
            wrongs.push(letter)
            console.log("That guess was erroneous on all counts\n")
            console.log("Here are your incorrect guesses : \n " + wrongs)
           
            return false;
           }
            // however if the letter DOES exist  it will run this part of the else statement instead.
           console.log("\n -----------------------------")
           console.log("\nSorry that wrong, and you already guessed that!!!!")

           console.log("\nHere are your incorrect guesses in case you forgot...  " + wrongs)
           console.log("\n")
           
         
           
        }
       }




}

module.exports = Letter;