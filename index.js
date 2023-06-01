const startBtn = document.getElementById('start-btn');
const preGame = document.querySelector('.pregame')
const duringGame = document.querySelector('.during-game')
const ChangingImg = document.querySelector('#changingImg')
const choicesDiv = document.querySelector('.choices')
const rock = document.getElementById('rock')
const scissor = document.getElementById('scissor')
const paper = document.getElementById('paper')
const afterChoiceDiv = document.querySelector('.after-choice')
const roundHeader = document.getElementById('round')
const playerPointHeader = document.getElementById('p-score')
const compPointHeader = document.getElementById('c-score')
const postGameDiv = document.querySelector('.post-game')
const Msg = document.getElementById('msg')
const finalScore = document.getElementById('final-score')
const playAgain = document.getElementById('playagain-btn')
const goHome = document.getElementById('home-btn')

let hasGameStarted = false
let playerPoints = 0;
let compPoints = 0;
let Round = 1;

const imageSrc = ['./static/paper.svg', './static/rock.svg', './static/scissors.svg']
const choice = ['paper', 'rock', 'scissor']

startBtn.addEventListener('click', () => {
    preGame.style.display = 'none';
    duringGame.style.display = 'flex';
    hasGameStarted = true
})

rock.addEventListener('click', () => {
    paper.style.display = "none"
    scissor.style.display = "none"
    let randomNum = randomNumnerGenerator();
    ChangingImg.src = imageSrc[randomNum];
    const val = choice[randomNum];
    if(val === 'rock'){
        compPoints += 0
    }else if(val === 'paper') {
        compPoints += 1
    }
    else {
        playerPoints += 1
    }
    setTimeout(GameBoardcont, 1200)
})
paper.addEventListener('click', () => {
    rock.style.display = "none"
    scissor.style.display = "none"
    let randomNum = randomNumnerGenerator();
    ChangingImg.src = imageSrc[randomNum];
    const val = choice[randomNum];
    if(val === 'paper'){
        compPoints += 0
    }else if(val === 'scissor') {
        compPoints += 1
    }
    else {
        playerPoints += 1
    }
    setTimeout(GameBoardcont, 1300)
})
scissor.addEventListener('click', () => {
    paper.style.display = "none"
    rock.style.display = "none"
    let randomNum = randomNumnerGenerator();
    ChangingImg.src = imageSrc[randomNum];
    const val = choice[randomNum];
    if(val === 'scissor'){
        compPoints += 0
    }else if(val === 'rock') {
        compPoints += 1
    }
    else {
        playerPoints += 1
    }
    setTimeout(GameBoardcont, 1300)
})
playAgain.addEventListener('click', () => {
    postGameDiv.style.display = 'none';
    duringGame.style.display = 'flex';
    startFresh()
})
goHome.addEventListener('click', () => {
    postGameDiv.style.display = 'none';
    preGame.style.display = 'flex';
    startFresh()
})
function GameBoardcont(){
    if (playerPoints < 3 && compPoints < 3){
        paper.style.display = "block"
        rock.style.display = "block"
        scissor.style.display = "block"
        ChangingImg.src = "./static/tick.png";
        playerPointHeader.textContent = playerPoints
        compPointHeader.textContent = compPoints
        Round += 1;
        roundHeader.textContent = Round;
    }else {
        duringGame.style.display = 'none';
        postGameDiv.style.display = 'block';
        if (playerPoints === 3){
            Msg.textContent = "Congo! You Won The Game"
        }else{
            Msg.textContent = "Better Luck Next Time"
        }
        finalScore.textContent = `Score -> ${playerPoints}:${compPoints}`
    }

}

function startFresh(){
    paper.style.display = "block"
    rock.style.display = "block"
    scissor.style.display = "block"
    ChangingImg.src = "./static/tick.png";
    playerPoints = 0;
    compPoints = 0;
    playerPointHeader.textContent = playerPoints
    compPointHeader.textContent = compPoints
    Round = 1;
    roundHeader.textContent = Round;
}

function randomNumnerGenerator(){
    let a = Math.floor(Math.random()*3);
    return a;
}