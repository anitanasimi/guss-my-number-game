// Generate a random secret number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Initialize the score
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Add event listener for the check button
document.querySelector(".check").addEventListener("click", function () {
  // Get the guessed number from the input field
  guess = Number(document.querySelector(".guess").value);

  // Check if no number was entered
  if (!guess) {
    displayMessage("No number");
  }
  // Check if the guessed number is correct
  else if (guess === secretNumber) {
    // Set the secret number text content
    document.querySelector(".number").textContent = secretNumber;
  displayMessage("Correct!");
    document.querySelector("body").style.backgroundColor = "#03C03C";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // Check if the guessed number is wrong
  else if (guess !== secretNumber) {
    // Check if there are remaining attempts
    if (score > 1) {
 displayMessage ( guess > secretNumber ? "too high!" : " too low!")
       
      // Decrease the score by 1
      score--;
      // Update the score text content
      document.querySelector(".score").textContent = score;
    } else {
      // Display "you lost the game!" message
      displayMessage("You lost the game!");
      // Set the score to 0
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(" start guessing");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = secretNumber = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
