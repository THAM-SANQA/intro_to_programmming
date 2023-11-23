let words = ["special", "lucky", "winner", "gamechanger"];
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
let guessRemaining = 16;
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
let remainingLetters = word.length;
let guess;
while (remainingLetters > 0 && guessRemaining > 0) {
  alert(answerArray.join(" "));
  guess = prompt("Guess a letter, or click Cancel to stop playing. \nHint: words describing success");
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter. \nHint: words describing success");
  } else {
    guess = guess.toLowerCase();
    guessRemaining--;
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        if (answerArray[j] === "_") {
          answerArray[j] = guess;
          remainingLetters--;
        } else {
          alert("You have already guessed this letter. \nHint: words describing success");
        }
      }
    }
  }
}
if (guess === null) {
  alert("You quit");
} else if (guessRemaining === 0) {
  alert("You ran out of guesses. Answer is " + word);
} else {
  alert("Congratulations! You guessed correctly! " + word);
}
