// let secret = 7;
// let answer = prompt("Please guess the secret number(1-10");
// let guess = parseInt(answer);

// if (guess == secret) {
//   alert("Correct");
// } else if (guess > secret) {
//   alert("Incorrect, too high");
// } else {
//   alert("Incorrect, too low");
// }


let secret = Math.floor(Math.random() * 10);
let guess;
while (true) {
  let answer = prompt("Number Guessing game.\nPlease guess any number(1-10)");
  let guess = parseInt(answer);

  if (guess == secret) {
    alert("Correct");
    break;
  } else if (guess > secret) {
    alert("Incorrect, too high");
  } else {
    alert("Incorrect, too low");
  }
}