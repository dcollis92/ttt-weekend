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

// console.log(players)

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
// console.log(winningCombos)

/*---------------------------- Variables (state) ----------------------------*/
let squares, turn, winner, seconds, tickInterval, waitingForTimeout;
    // 1.1 // 1.2 // 1.3

/*------------------------ Cached Element References ------------------------*/
const squaresArray = document.querySelectorAll('.square') // 2.1 Squares Array
const gameStatus = document.querySelector('#message') // 2.2
const resetDiv = document.getElementById('reset-div')
const resetBtn = document.querySelector('#reset-button') // 6.2

/*----------------------------- Event Listeners -----------------------------*/
squaresArray.forEach(square => square.addEventListener('click', handleClick)) // 3.2.1

resetBtn.addEventListener('click', function (evt) {
  if (evt.target.classList.contains("square")) {
    resetDiv.classList.remove("hidden")
  }
})
// DOES NOT WORK

/*-------------------------------- Functions --------------------------------*/
init() // 3.1

function init() {
    boardArray = 
      [ null, null, null, 
        null, null, null, 
        null, null, null ] // 3.2.1
    message = "let X starts the game"
    turn = 1 // 3.2.2
    winner = null // 3.2.3
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
    }
  });
    if (winner !== null) {
      gameStatus.textContent = `It's ${players} turn`
    } else if (winner === 1) {
      gameStatus.textContent = "Congrats! X won!"
    } else if (winner === -1) {
      gameStatus. textContent = "Congrats! O won!"
    } else if (winner === 'T') {
      gameStatus.textContent = "It's a tie! start again!"
    }
}

function handleClick (event) {
  const index = event.target.id.replace('sq', '') // 5.4
  if (boardArray[index] !== null) { // 5.2
    return
  }
  boardArray[index] = turn
  turn *= -1 // 5.5
  render()
}

function getWinner() {
  for (let i = 0; i <= winningCombos.length; i++) {
    winner = getWinner[i]
  }
 
}
console.log(winningCombos)


