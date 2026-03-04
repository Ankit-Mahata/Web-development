let guess=10;
console.log("guess a number between 1 and 20");
let user=prompt("Enter your guess");
while(guess != user){
    user=prompt("Wrong guess, try again");
}
console.log("Congratulations! You guessed the number.");
