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
  [sq0, sq1, sq2],
  [sq3, sq4, sq5],
  [sq6, sq7, sq8],
  [sq0, sq3, sq6],
  [sq1, sq4, sq7],
  [sq2, sq5, sq8],
  [sq0, sq4, sq8],
  [sq6, sq4, sq2],
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
    boardArray = [null, null, null, null, null, null, null, null, null]
    turn = 1 // 3.2.2
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
    } else if (square === -1) {
      squaresArray[idx].textContent = 'O'
      squaresArray[idx].style.backgroundColor = 'blue';
    } else if (square === null) {
      squaresArray[idx].textContent = ''
    }
  });
   
}

function handleClick (event) {
  console.log(event.target.id)
}


