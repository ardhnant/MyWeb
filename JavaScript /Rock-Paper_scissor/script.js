
const autoBtn = document.querySelector('#auto-btn');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissors');
const wholeGame = document.querySelector('.whole-game');

let isAuto = false;
let intervalId;


let score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  lose: 0,
  tie: 0
};
let result;

rockBtn.addEventListener('click', () => {
  gamePlay('rock');
});

paperBtn.addEventListener('click', () => {
  gamePlay('paper');
});

scissorBtn.addEventListener('click', () => {
  gamePlay('scissors');
});

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r'){
    gamePlay('rock');
  } else if (event.key === 'p'){
    gamePlay('paper');
  } else if (event.key === 's'){
    gamePlay('scissors');
  }
});

function gamePlay(playerMove) {

  const computerMove = playComputermove()

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You Lose';
    } else {
      result = 'You Win';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You Win';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else {
      result = 'You Lose';
    }
  } else {
    if (computerMove === 'rock') {
      result = 'You Lose';
    } else if (computerMove === 'paper') {
      result = 'You Win';
    } else {
      result = 'Tie';
    }
  }
  
  document.querySelector('#result').innerText = `${result}`;

  document.querySelector('#moves').innerHTML = `Your move: <img src="${playerMove}.png" id="dumb-img">   Computer Move: <img src="${computerMove}.png" id="dumb-img">`;

  if(result === 'You Win'){
    score.win++;
  } else if (result === 'You Lose'){
    score.lose++;
  } else {
    score.tie++;
  }

  localStorage.setItem('score', JSON.stringify(score))

  document.querySelector('#score').innerText = `Win: ${score.win} Lose: ${score.lose} Tie: ${score.tie}`;
}

function playComputermove() {
  let num = Math.random();

  if (num < 1 / 3) {
    computerMove = 'rock';
  } else if (num < 2 / 3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }
  return computerMove;
}

function reset(){

  wholeGame.style.display = 'none';
  document.querySelector('.confirm-reset').style.display = 'block';

  document.querySelector('#reset-yes').addEventListener('click', () => {
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    localStorage.removeItem('score');
    clearInterval(intervalId);
    isAuto = false;

    document.querySelector('#score').innerText = `Win: ${score.win} Lose: ${score.lose} Tie: ${score.tie}`;
    document.querySelector('.confirm-reset').style.display = 'none';
    wholeGame.style.display = 'block';
  });

  document.querySelector('#reset-no').addEventListener('click', () => {
    document.querySelector('.confirm-reset').style.display = 'none';
    wholeGame.style.display = 'block';    
  });
}

autoBtn.addEventListener('click', () => {
  const move = playComputermove();
  gamePlay(move);

  if(!isAuto){
    intervalId = setInterval(() => {
    const move = playComputermove();
    gamePlay(move);
  }, 800);
  isAuto = true;
  } else {
    clearInterval(intervalId);
    isAuto = false;
  }
});
