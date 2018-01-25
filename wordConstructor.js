var chances =7;






function Word(words){
     this.word = words[Math.floor(Math.random() * words.length)];
   
     }

    //  this.letterInWord = function(word, letter, blanks){
    //      if(this.word.indexOf(letter) !== -1){
    //        console.log(word)
    //          for(var i= 0; i < this.word.length; i++){
    //             //  console.log(letter)
    //             //  console.log(word[i])
    //              if(this.word[i] == letter){
    //                  console.log("rep")
    //                  // replace a blank on a cmd prompt
    //                 //  console.log("Good guess")
    //                 blanks[i] = letter;
    //              }
    //              console.log("28" + blanks)  
    //          }
    //          return blanks;
    //          console.log(blanks)
    //  }
    //  else{
    //     // chances -- 
        
    //     // console.log(chances)
    //     console.log("Sorry that wrong")
        
    //  }
    
   


module.exports = Word;