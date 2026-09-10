let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

let isAutoPlaying = false;
let intervalId;


//Stops the interval rom continuing
//we need the function variable that is being intervalled
//thats why we save the SetInterval function to a variable
function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;

    document.querySelector('.js-auto-play-button')
      .innerHTML = 'Stop Playing';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;

    document.querySelector('.js-auto-play-button')
      .innerHTML = 'Auto Play';
  }
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}

document.querySelector('.js-auto-play-button')
  .addEventListener('click', () => {
    autoPlay();
  })

document.querySelector('.js-reset-score-button')
  .addEventListener('click', () => {
    resetScore();
})

//playGame('rock') will not work as a function parameter because it returns nothing
//the parameter has to be a function itself
document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock')
});

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
})

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
})

//Substitute for onkeydown= attribute
//event parameter holds the key that was pressed
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'a') {
    autoPlay();
  } else if (event.key === 'Backspace') {
    resetScore();
  }
});

function playGame (playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
        result = 'You lose.';
        } else if (computerMove === 'paper') {
        result = 'You win.';
        } else if (computerMove === 'scissors') {
        result = 'Tie.';
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
        result = 'You win.';
        } else if (computerMove === 'paper') {
        result = 'Tie.';
        } else if (computerMove === 'scissors') {
        result = 'You lose.';
        }
        
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
        result = 'Tie.';
        } else if (computerMove === 'paper') {
        result = 'You lose.';
        } else if (computerMove === 'scissors') {
        result = 'You win.';
        }
    }

    if (result === 'You win.') {
        score.wins++;
    } else if (result === 'You lose.') {
        score.losses++;
    } else if (result === 'Tie.') {
        score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateResultElement(result);
    document.querySelector('.js-moves')
        .innerHTML = `You
        <img src="${playerMove}-emoji.png" class="move-icon">
        <img src="${computerMove}-emoji.png" class="move-icon">
        Computer`;
    updateScoreElement();
}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function updateResultElement(result) {
    document.querySelector('.js-result')
        .innerHTML = result;
}

function pickComputerMove () {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}