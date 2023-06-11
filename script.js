// Generate a random secret number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Initialize the score
let score = 20;

// Add event listener for the check button
document.querySelector(".check").addEventListener("click", function () {
  // Get the guessed number from the input field
  guess = Number(document.querySelector(".guess").value);

  // Check if no number was entered
  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  }
  // Check if the guessed number is correct
  else if (guess === secretNumber) {
    // Set the secret number text content
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "Correct!";
    document.querySelector("body").style.backgroundColor = "#03C03C";
    document.querySelector(".number").style.width = "30rem";
  }

  // Check if the guessed number is too high
  else if (guess > secretNumber) {
    // Check if there are remaining attempts
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      // Decrease the score by 1
      score--;
      // Update the score text content
      document.querySelector(".score").textContent = score;
    } else {
      // Display "you lost the game!" message
      document.querySelector(".message").textContent = "You lost the game!";
      // Set the score to 0
      document.querySelector(".score").textContent = 0;
    }
  }
  // Check if the guessed number is too low
  else if (guess < secretNumber) {
    // Check if there are remaining attempts
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      // Decrease the score by 1
      score--;
      // Update the score text content
      document.querySelector(".score").textContent = score;
    } else {
      // Display "you lost the game!" message
      document.querySelector(".message").textContent = "You lost the game!";
      // Set the score to 0
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = " start guessing";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = secretNumber = "?";
  document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});
