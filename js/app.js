/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let squares
// 1.1
let turn
// 1.2
let winner
// 1.3




/*------------------------ Cached Element References ------------------------*/
const allSquares = document.querySelector('.square')
// 2.1
const gameStatus = document.querySelector('#message')
// 2.2
const resetButton = document.querySelector('#reset-button')

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()
// 3.1

function init () {
    gameStatus.className = ""
  // 3.2.1

  resetButton.setAttribute("hidden", true)
  squares = []
  winner = false
 
}

