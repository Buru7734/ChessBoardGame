const boardEl = document.querySelector(".board");
const whitePiecesEl = document.querySelectorAll(".white");
const blackPiecesEl = document.querySelectorAll(".black");
const displayEl = document.querySelector(".display");
const buttonEl = document.querySelector(".button");
const knightEl = document.querySelectorAll(".knight");

[...whitePiecesEl, ...blackPiecesEl].forEach((el) => {
  el.addEventListener("click", (e) => {
    // TODO: Make sure to remove this event listener from any other elements once you're done with turn
    e.target.style.cursor = "grabbing";
  });
});

let selectedPiece = null;
let currentPlayer = "white"; // Track the current player (white or black)
let targetSquare = null;

const handlePlayer = () => {
  // Switch turns between players
  currentPlayer = currentPlayer === "white" ? "black" : "white";
  displayMessage(`It's ${currentPlayer}'s turn`);
  console.log("Current player:", currentPlayer);
};

const clickedHandler = (e) => {
  if (selectedPiece) {
    selectedPiece.style.border = "none"; // Remove border from previously selected square
  }

  if (e.target.classList.contains(currentPlayer)) {
    selectedPiece = e.target; // Update the selected square to the currently clicked one
    e.target.style.border = "blue 1px solid"; // This will add a blue border to the clicked element.
  }

  if (currentPlayer === "white" && e.target.classList.contains("black")) {
    //White Captures black
    e.target.classList = selectedPiece.classList;
    e.target.textContent = "";
    e.target.appendChild(selectedPiece);
    console.log("capture", e.target);
    handlePlayer();
  } else if (
    currentPlayer === "black" &&
    e.target.classList.contains("white")
  ) {
    e.target.classList = selectedPiece.classList;
    e.target.textContent = "";
    e.target.appendChild(selectedPiece);
    console.log("capture", e.target);
    handlePlayer();
  }
};

const displayMessage = (message) => {
  //This will display messages to user, who's turn is it, who won, tie.

  displayEl.textContent = message;
  console.log(message);
};

whitePiecesEl.forEach((piece) => {
  //Adding event listener to each piece, selecting all the pieces in the board
  piece.addEventListener("click", clickedHandler);
});

blackPiecesEl.forEach((piece) => {
  //Adding event listener to each piece selecting all the pieces in the board
  piece.addEventListener("click", clickedHandler);
});

boardEl.addEventListener("click", (e) => {
  //Moves piece
  // Add event listener to the board
  if (selectedPiece && e.target.classList.contains("square")) {
    // Ensure a piece is selected and the clicked target is a square
    e.target.appendChild(selectedPiece); // Move the selected piece to the clicked square
    selectedPiece.style.border = "none"; // Remove border after moving
    selectedPiece = null; // Reset selected square
    console.log("target square:", e.target.id);
    handlePlayer();
  }

  if (
    e.target.classList.contains("square") ||
    e.target.childNodes.length !== 0
  ) {
    console.log("BoardSquare", e.target.id || e.target.parentNode.id);
  }
});

buttonEl.addEventListener("click", () => {
  // Reset the game state
  window.location.reload(true);
});

// Each piece
