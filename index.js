const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
const correctMessage = document.getElementById('correct');
const notValid = document.getElementById('not-valid')
const isNotANumber = document.getElementById('is-NAN')
const tooHigh = document.getElementById('over-max')
const numberNotEntered = document.getElementById('not-entered')


let targetNumber;
let attempts = 0;


// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min+1)+ min) ;
}

function checkGuess(event) {
  // Get value from guess input element
  event.preventDefault()
  const guess = parseInt(guessInput.value, 10);
  if(guess === ''){
    return numberNotEntered.style.display = ''
  }else if (guess<1) {
    return notValid.style.display = '';
  } else if (isNaN(guess)){
    return isNotANumber.style.display = '';
  } else if(guess>99){
    return tooHigh.style.display = ''
  }

  
  let maxNumberOfAttempts = 5;
  attempts++;


   hideAllMessages();


  
    if (guess === targetNumber) {
      numberOfGuessesMessage.style.display = '';
      numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;
    
      correctMessage.style.display = '';
    
      submitButton.disabled = true;
      guessInput.disabled = true;
      } else if (guess > targetNumber){
        tooHighMessage.style.display = '';
      } else if (guess < targetNumber){
        tooLowMessage.style.display = ''
      } 



    let remainingAttempts = maxNumberOfAttempts - attempts;
    console.log(remainingAttempts);
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
  

  if (attempts === maxNumberOfAttempts && attempts > 0) {
    submitButton.disabled = true;
    guessInput.disabled = true;
    maxGuessesMessage.style.display = ''
  }

  guessInput.value = '';
  resetButton.style.display = '';
}

function hideAllMessages() {
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
    messages[elementIndex].style.display = 'none';
  }
}

function setup() {
  
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
  maxNumberOfAttempts = 0;

  // Enable the input and submit button
  submitButton.disabeld = false;
  guessInput.disabled = false;

  hideAllMessages();
  resetButton.style.display = 'none';
}
setup()

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', function(){
  location.reload()
});














