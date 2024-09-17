let randomNumber = parseInt(Math.random() * 100 + 1);

const submit =  document.querySelector('#submit');
const userInput =  document.querySelector('#guessfield');
const remaining = document.querySelector('.remaining');
const guessSlot = document.querySelector('.guessed');
const lowOrHi = document.querySelector('.loworhigh');
const startOver = document.querySelector('.results');

const p = document.createElement('p')

let previousGuess = [];
let numGuess = 1
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        // console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid Number")        
    } else if (guess < 1){
        alert("please enter a number greater than 1")
    } else if (guess > 100){
        alert("Please enter a number less than 100")
    } else {
        previousGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Congratulations you guess it right`)
    } else if ( guess < randomNumber){
        displayMessage(`Number is Too Low`)
    } else if ( guess > randomNumber){
        displayMessage(`Number is Too High`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h3>${message}</h3>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button id="newgame">Start again</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newgame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        previousGuess = [];
        numGuess = 1
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        lowOrHi.innerHTML = '';
        playGame = true;
    })
}

