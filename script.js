var guessButton = document.getElementById('guess-button');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset-button');
var guessNumber = document.querySelector('.arrow-guess');
var userGuess = document.querySelector('.user-guess');
var lastGuessText = document.querySelector('.last-guess');
var highLowGuessText = document.querySelector('.high-low-text');
var userGuessNumber = parseInt(userGuess.value);

function initialNumber() {
  return Math.floor(Math.random() * 100 + 1);
};

var generatedNumber = initialNumber();

console.log(generatedNumber);

userGuess.addEventListener('keypress', function () {
  guessButton.disabled = false;
  clearButton.disabled = false;
});

userGuess.addEventListener('keyup', function () {
  if (userGuess.value === '') {
    guessButton.disabled = true;
    clearButton.disabled = true;
  } else {
    guessButton.disabled = false;
    clearButton.disabled = false;
  };
});

userGuess.addEventListener('blur', function () {
  if (parseInt(userGuess.value) > 100) {
    alert('ERROR!! Number is above the available range.  Please guess again.');
    userGuess.value = "";
    guessButton.disabled = true;
    clearButton.disabled = true;
  } else if (parseInt(userGuess.value) < 1) {
    alert('ERROR!! Number is below the available range.  Please guess again.');
    userGuess.value= "";
    guessButton.disabled = true;
    clearButton.disabled = true;
  };
});

guessButton.addEventListener('click', function () {
  guessNumber.innerText = userGuess.value;
  var userGuessNumber = parseInt(userGuess.value);
  guessNumber.className = 'guess-number';
  lastGuessText.innerText = 'Your last guess was';
  if (userGuessNumber < generatedNumber) {
    highLowGuessText.innerText = 'That is too low';
  } else if (userGuessNumber > generatedNumber) {
    highLowGuessText.innerText = 'That is too high';
  } else {
    highLowGuessText.innerText = 'BOOM!';
    highLowGuessText.className = 'correct-guess';
    setTimeout(function () {
      alert('You won the game!  Press reset to play again');
    }, 1500);
  };

  resetButton.disabled = false;
});

clearButton.addEventListener('click', function () {
  userGuess.value = '';
  clearButton.disabled = true;
  guessButton.disabled = true;
});

resetButton.addEventListener('click', function () {
  window.location.reload();
});
