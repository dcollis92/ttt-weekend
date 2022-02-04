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

/*---------------------------- Variables (state) ----------------------------*/
let squares, turn, winner



/*------------------------ Cached Element References ------------------------*/
const boardSquares = document.querySelectorAll('.square')
// 2.1
const gameStatus = document.querySelector('#message')
// 2.2
const resetButton = document.querySelector('#reset-button')

/*----------------------------- Event Listeners -----------------------------*/

console.log(boardSquares)

boardSquares
.forEach(square => 
  square.addEventListener('click', handleClick))


/*-------------------------------- Functions --------------------------------*/
init()
// 3.1

function init () {
    // gameStatus.className = ""
    boardSquares = [null, null, null, null, null, null, null, null, null]
    console.log(boardSquares)

  //resetButton.setAttribute("hidden", true)
  
  // 3.2.1
//   let squares = boardSquares
//   .map(square => )
 
// }
 
} 

function handleClick (event) {
  console.log(event.target.id)
}

function render() {
	renderHands();
	renderControls();
	if (winner) {
		renderWinnerMessage();
	} else {
		renderTurnMessage();
	}
}
/* adjust per example above */