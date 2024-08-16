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
html {
  font-family: sans-serif;
}

body {
  width: 300px;
  max-width: 750px;
  min-width: 480px;
  margin: 0 auto;
  background-color: #212121;
}

.lastResult {
  color: white;
  padding: 7px;
}

.guesses {
  color: white;
  padding: 7px;
}

button {
  background-color: #141414;
  color: #fff;
  width: 250px;
  height: 50px;
  border-radius: 25px;
  font-size: 30px;
  border-style: none;
  margin-top: 30px;
  /* margin-left: 50px; */
}

#subt {
  background-color: #161616;
  color: #ffffff;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  border-style: none;
  margin-top: 50px;
  /* margin-left: 75px; */
}

#guessField {
  color: #000;
  width: 250px;
  height: 50px;
  font-size: 30px;
  border-style: none;
  margin-top: 25px;

  /* margin-left: 50px; */
  border: 5px solid #6c6d6d;
  text-align: center;
}

#guess {
  font-size: 55px;
  /* margin-left: 90px; */
  margin-top: 120px;
  color: #fff;
}

.guesses {
  background-color: #7a7a7a;
}

#wrapper {
  box-sizing: border-box;
  text-align: center;
  width: 450px;
  height: 550px;
  background-color: #474747;
  color: #fff;
  font-size: 25px;
}

h1 {
  background-color: #161616;
  color: #fff;
  text-align: center;
}

p {
  font-size: 16px;
  text-align: center;
  cursor:pointer
}

```