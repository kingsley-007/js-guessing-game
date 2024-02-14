// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Function to check the user's guess
function checkGuess() {
  const userGuess = document.getElementById('userGuess').value;
  const messageElement = document.getElementById('message');

  if (userGuess == secretNumber) {
    messageElement.textContent = 'Congratulations! You guessed the correct number!';
    messageElement.style.color = 'green';
    disableInputAndButton();
  } else if (userGuess < secretNumber) {
    messageElement.textContent = 'Too low! Try again.';
    messageElement.style.color = 'red';
  } else {
    messageElement.textContent = 'Too high! Try again.';
    messageElement.style.color = 'red';
  }
}

// Function to disable input and button after correct guess
function disableInputAndButton() {
  document.getElementById('userGuess').disabled = true;
  document.querySelector('button').disabled = true;
}
