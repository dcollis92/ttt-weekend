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

console.log(players)

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
console.log(winningCombos)


/*---------------------------- Variables (state) ----------------------------*/
let squares, turn, winner;
    // 1.1 // 1.2 // 1.3

/*------------------------ Cached Element References ------------------------*/
const squaresArray = document.querySelectorAll('.square') // 2.1 Squares Array
const gameStatus = document.querySelector('#message') // 2.2
const resetButton = document.querySelector('#reset-button') // 6.2

/*----------------------------- Event Listeners -----------------------------*/

console.log(squaresArray)

squaresArray.forEach(square => square.addEventListener('click', handleClick)) // 3.2.1


/*-------------------------------- Functions --------------------------------*/
init() // 3.1

function init() {
    boardArray = [1, null, null, null, null, null, null, null, -1]
    turn = 1 // 3.2.2
    gameStatus.textContent = "Time to start! It's X's turn"
    winner = null // 3.2.3
    render () // 3.2.4
    //console.log(boardArray)
}

function render() {
	boardArray.forEach((square, idx) => {
    //console.log(squaresArray[idx], square, idx)
    if (square === 1) {
      squaresArray[idx].textContent = 'X'
      squaresArray[idx].style.backgroundColor = 'red';
      gameStatus.textContent = "It's O's turn"
    } else if (square === -1) {
      squaresArray[idx].textContent = 'O'
      squaresArray[idx].style.backgroundColor = 'blue';
      gameStatus.textContent = "It's X's turn"
    } else if (square === null) {
      squaresArray[idx].textContent = ''
    }
  });
    
}

function handleClick (event) {
  console.log(event.target.id)
}

function checkWinner() {
  if (!isWinner) {
    // indicate whose turn it is
  } else if (winner === "T") {
    // indicate a tie game
  } else {
    // congrats to the winner!
    gameMessage.textContent ='Congrats '
  }
}


