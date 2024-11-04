let userScore = 0;
let compScore = 0;
const userScore_span = document.querySelector('#user-score');
const compScore_span = document.querySelector('#comp-score');
const result_div = document.querySelector('#result');
const user_choice = document.querySelector('#user-choice');
const comp_choice = document.querySelector('#comp-choice');
const message = document.querySelector('#message');
const overlay = document.querySelector('#overlay');

function getComputerChoice() {
    const chioce = [ 'rock' , 'paper' , 'scissors'];
    return chioce[Math.floor(Math.random()*3)];
  }
  
  function win(userChoice, compChoice) {
    userScore_span.innerHTML = ++userScore;
    result_div.innerHTML = `${userChoice} beats ${compChoice}. You win!`;
    user_choice.classList.add('winner');
  }
  
  function loses(userChoice, compChoice) {
    userScore_span.innerHTML = ++userScore;
    result_div.innerHTML = `${compChoice} beats ${userChoice}. You lose!`;
    user_choice.classList.add('winner');
  }
  
  function draw(chioce) {
    ult_div.innerHTML = `It was a draw! You both chose ${chioce}.`;
  }
  
  function game(userChoice) {
    message.hidden = true;
    overlay.hidden = false;
    stage_div.classList.remove('ready');
    const compChoice = getComputerChoice();
    user_choice.setAttribute('src', `../images/${userChoice}.png`);
    user_choice.setAttribute('src', `../images/${compChoice}.png`);
    const battle = userChoice + compChoice ;
    if (['rockscissors','scissorspaper','paperrock'].includes(battle)) {
        win(userChoice, compChoice);
    }
    else if (['scissorsrock', 'paperscissors', 'rockpaper'].includes(battle)) {
        loses(userChoice, compChoice);
    }
    else {
        draw(userChoice);
    }
    setTimeout(()=>ready(),2000);
  }
  
  function ready() {
    const winner = document.querySelectorAll('.winner');
    winner.classList.remove('winner');
    stage_div.classList.add('ready');
    overlay.hidden = true;
    message.hidden = false;
  }

  const choices = document.querySelectorAll('.choice');
  for (let choice of choices) {
    choice.addEventListener('click',function() {
        game(this.id);
    });
  }

  ready();