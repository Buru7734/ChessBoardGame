const messageEl = document.querySelector("#message");
const squareEls = document.querySelectorAll(".sqr");
const resetBtnEl = document.querySelector("button");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => "Game ended in a Draw";
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn!`;

messageEl.innerText = currentPlayerTurn();

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const handleCellPlayed = (square, squareIndex) => {
  board[squareIndex] = currentPlayer; // Update the game board
  square.innerText = currentPlayer; // Update the UI
};

const handlePlayerChange = () => {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  messageEl.innerText = currentPlayerTurn();
};

const handleResultValidation = () => {
  let roundWon = false;

  for (let i = 0; i < winningCombos.length; i++) {
    const winCombo = winningCombos[i]; // [2, 4, 6] on last iteration

    let a = board[winCombo[0]]; // board[2]
    let b = board[winCombo[1]]; // board[4]
    let c = board[winCombo[2]]; // board[6]

    if (a === "" || b === "" || c === "") {
      continue;
    }

    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    messageEl.innerText = winningMessage();
    gameActive = false;
    return;
  }

  let roundDraw = !board.includes("");
  if (roundDraw) {
    messageEl.innerText = drawMessage();
    gameActive = false;
    return;
  }

  handlePlayerChange();
};

const handleSquareClick = (e) => {
  const clickedSquare = e.target;
  const clickedSquareIndex = parseInt(clickedSquare.id);

  if (board[clickedSquareIndex] !== "" || !gameActive) {
    return;
  }

  handleCellPlayed(clickedSquare, clickedSquareIndex);
  handleResultValidation();
};

squareEls.forEach((squareEl) => {
  squareEl.addEventListener("click", handleSquareClick);
});

// Reset Game
resetBtnEl.addEventListener("click", () => {
  gameActive = true;
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  messageEl.innerText = currentPlayerTurn();
  squareEls.forEach((sqr) => (sqr.innerText = ""));
});
