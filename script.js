var guessButton = document.getElementById('guess-button');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset-button');
var guessNumber = document.querySelector('.arrow-guess');
var userGuess = document.querySelector('.user-guess');
var lastGuessText = document.querySelector('.last-guess');
var highLowGuessText = document.querySelector('.high-low-text');

guessButton.disabled = true;
clearButton.disabled = true;
resetButton.disabled = true;

function initialNumber() {
  return Math.floor(Math.random() * 99 + 1);
};

// alert(initialNumber());

userGuess.addEventListener('keypress', function () {
  guessButton.disabled = false;
  clearButton.disabled = false;
});

guessButton.addEventListener('click', function () {
  guessNumber.innerText = userGuess.value;
  guessNumber.classList.add('guess-number');

  lastGuessText.innerText = 'Your last guess was';
  if (userGuess.value < initialNumber()) {
    highLowGuessText.innerText = 'That is too low';
  } else if (userGuess.value > initialNumber()) {
    highLowGuessText.innerText = 'That is too high';
  } else {
    highLowGuessText.innerText = 'BOOM!';
  };
});

clearButton.addEventListener('click', function () {
  alert('hello');
});

resetButton.addEventListener('click', function () {
  alert('YO!');
});
