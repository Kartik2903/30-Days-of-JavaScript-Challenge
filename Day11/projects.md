# DOM project

### Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code
##### Note: Although the solution code was provided, I did this on my own with my utmost honesty and saw the part of the code only when I wasn't able to get what to do next.

## Project 1

```javascript
let buttons = document.querySelectorAll('.button');
let background = document.body;

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.id === 'grey') background.style.backgroundColor = e.target.id;
    if (e.target.id === 'white') background.style.backgroundColor = e.target.id;
    if (e.target.id === 'blue') background.style.backgroundColor = e.target.id;
    if (e.target.id === 'yellow')
      background.style.backgroundColor = e.target.id;
  });
});

```

## Project 2
```javascript
const form = document.querySelector('form')
let results = document.getElementById('results')

form.addEventListener('submit',(e)=>{
  e.preventDefault()

  let height = parseInt(document.getElementById('height').value)
  let weight = parseInt(document.getElementById('weight').value)

  if(height ===''|| height<0 || isNaN(height)){
    results.innerHTML = 'Please give valid Height'
  }
  else if(weight ===''|| weight<0 || isNaN(weight)){
    results.innerHTML = 'Please give valid Weight'
  }
  else {
    let bmi = (weight/((height * height)/10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`
    if(bmi < 18.6){
      results.innerHTML+=' - Underweight'
    }
    if(bmi > 18.6 && bmi < 24.9){
      results.innerHTML += ' - Normal Weight'
    }
    if(bmi > 24.9){
      results.innerHTML += ' - Overweight'
    }
  }
})
```

## Project 3
```javascript
let clock = document.querySelector('#clock')
let day = document.querySelector('#date')
setInterval(function(){
  let date = new Date()
  day.innerHTML = date.toLocaleDateString()
  clock.innerHTML = date.toLocaleTimeString()
},1000)

```

## Project 4
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1); //generating a random number
const submit = document.querySelector('#subt'); 
const userInput = document.querySelector('#guessField');
const prevGuessBox = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      showmsg(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    showmsg(`Congratulations! You guessed it right!🥳`);
    endGame();
  } else if (guess < randomNumber) {
    showmsg(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    showmsg(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  prevGuessBox.innerHTML = prevGuess;
  numGuess++;
  remainingGuesses.innerHTML = `${11 - numGuess} `;
}

function showmsg(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  playGame = false;
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  userInput.setAttribute('cursor', 'none');
  submit.setAttribute('disabled','')

  p.classList.add('button');
  p.innerHTML = `<h3 id="newGame">Play Again?</h3>`;
  resultParas.appendChild(p);
  window.scrollTo(0, document.body.scrollHeight);
  playAgain();
}

function playAgain() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    prevGuessBox.innerHTML = '';
    remainingGuesses.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    userInput.removeAttribute('cursor');
    submit.removeAttribute('disabled');
    resultParas.removeChild(p);

    playGame = true;
  });
}

```

## Project 5
```javascript
let insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  `;
});

```

## Project 6
```javascript
//generating a random color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let pos = 0; pos < 6; pos++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalID;
const startChangingColor = () => {
  if (!intervalID) {
    intervalID = setInterval(changeBGColor, 1000);
  }

  function changeBGColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = () => {
  clearInterval(intervalID);
  intervalID = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```