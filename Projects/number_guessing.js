<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guess the Number</title>
    <style>
        body{
            background-color: gray;
            color: wheat;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;

        }
        #wrapper{
            height: 570px;
            width: 340px;
            background-color: black;
            border: 3px solid goldenrod;
        }
        #subt{
            cursor: pointer;
            margin-left: 50%;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div id="wrapper">
     <h1> Number Guessing Game</h1>
     <p>Try and Guess a Number between 1 and 100.</p>
     <p>You have 10 attempts to guess the right number.</p>
     <br/>
     <form class="form" action="">
     <label for="guessField" id="guess" > Guess a Number</label>
     <input type="text" id="guessField" class="guessField">
  <input type="submit" id="subt" value="Submit Guess" class="guessSubmit">
       </form>

       <div class="resultParas">
        <p>Previous Guess: <span class="guesses"></span></p>
        <p>Guess Remaining:  <span class="lastResult">10</span></p>
        <p class="lowOrHigh"></p>   
    </div>
       









    </div>
    
</body>

<script>

const randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot= document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh= document.querySelector('.lowOrHigh');
const startOver= document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let newGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
e.preventDefault();
const guess = parseInt(userInput.value);
console.log(guess);
validateGuess(guess);

    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }else if(guess<1){
        alert("Please enter a number greater than 0 ");
    }else if(guess>100){
        alert("Please enter a number less  than 101 ");
    }
    else{
        prevGuess.push(guess);
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
         endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)

        }
    }
    
}

function checkGuess(guess){
    if(guess===randomNumber){
      displayMessage(`you guessed it right`);
      endGame();

    } else if(guess<randomNumber){
        displayMessage(`Number is Too low`);

    } else if(guess>randomNumber){
        displayMessage(`Number is Too high`);
    }
  

}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML+=`${guess} `;
    newGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
 lowOrHigh.innerHTML = `<h2>${message }</h2>`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.innerHTML = `<h2 id = 'newGame'> Start new Game </h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100+1);
    prevGuess=[];
    numGuess=1;
    guessSlot.innerHTML='';
    remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;

    });
}

</script>

</html>
