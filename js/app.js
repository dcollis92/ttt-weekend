/*-------------------------------- Constants --------------------------------*/
const players = {
  '1': {
    name: 'playerX',
    score: 0
  },
  '-1': {
    name: 'playerO',
    score: 0
  }
};

const winningCombos = [ // 4.1 Array of Arrays
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
]

/*---------------------------- Variables (state) ----------------------------*/
let squares, turn, winner, T, seconds, tickInterval, waitingForTimeout, turnCount;
    // 1.1 // 1.2 // 1.3

/*------------------------ Cached Element References ------------------------*/
const squaresArray = document.querySelectorAll('.square') // 2.1 Squares Array
const gameStatus = document.querySelector('#message') // 2.2
const resetDiv = document.getElementById('reset-div') // 6.2
const resetBtn = document.querySelector('#reset-button') // 6.2


/*----------------------------- Event Listeners -----------------------------*/
squaresArray.forEach(square => square.addEventListener('click', handleClick)) 
 // 3.2.1

resetBtn.addEventListener('click', init) // 6.3   

// WHY ARE THE ARRAYS UNALLIGNED HELP ME JACKSON

/*-------------------------------- Functions --------------------------------*/
init() // 3.1

function init() {
    boardArray = 
      [ null, null, null, 
        null, null, null, 
        null, null, null ] // 3.2.1
    message = "let X starts the game"
    turn = 1 // 3.2.2
    turnCount = 0
    winner = null // 3.2.3
    T = 'tie'
    waitingForTimeout = false
    seconds = 0
    clearInterval(tickInterval)
    tickInterval = setInterval(tick, 1000)
    resetDiv.classList.add("hidden")
    render () // 3.2.4
}

function tick() {
  seconds++  
}

function render() {
  gameStatus.textContent = message
	boardArray.forEach((square, idx) => {
    if (square === 1) {
      squaresArray[idx].textContent = 'X'
      squaresArray[idx].style.backgroundColor = 'red';
    } else if (square === -1) {
      squaresArray[idx].textContent = 'O'
      squaresArray[idx].style.backgroundColor = 'blue';
    } else if (square === null) {
      squaresArray[idx].textContent = ''
      squaresArray[idx].style.backgroundColor = ''
    }
  });
}

function handleClick (event) {
  const index = event.target.id.replace('sq', '') // 5.4
  if (boardArray[index] !== null) { // 5.2
    return // is this the best way to structure this?
  }
  boardArray[index] = turn
  if (turn === 1) { 
    message = "It's O's Turn"
  } else if (turn === -1) {
    message = "It's X's Turn"
  }
  turn *= -1 // 5.5
  turnCount += 1
  getWinner()
  render()
  resetDiv.classList.remove("hidden")
  console.log(turnCount)
}


function getWinner() {
  winningCombos.forEach((combo) => {
   if (boardArray[combo[0]]+
       boardArray[combo[1]]+
       boardArray[combo[2]] === 3) {
        message = "Congrats! X won!"
        confetti.start(2000)
   } else if (boardArray[combo[0]]+
              boardArray[combo[1]]+
              boardArray[combo[2]] === -3) {
        message = "Congrats! O won!"
       confetti.start(2000)
   } else if (turnCount === 9) {
        message = "It's a Tie!"
        // stop game play and allow player to reset
   }
  })
  
  render ()
  
}
// DOES NOT WORK HELP ME JACKSON


// Need to get Confetti to work once Winner is chosen
