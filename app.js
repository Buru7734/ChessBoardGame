const boardEl = document.querySelector(".board");
const PiecesEl = document.querySelectorAll(".piece");
const displayEl = document.querySelector(".display");
const buttonEl = document.querySelector(".button");
const knightEl = document.querySelectorAll(".knight");
const blackKing = document.getElementById("blackKing");
const arrayBoard = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
const recentlyHighlightedElements = [];

const clearHighlights = () => {
  document.querySelectorAll(".square").forEach((sq) => {
    sq.style.backgroundColor = "";
  });
};

PiecesEl.forEach((el) => {
  el.addEventListener("click", (e) => {
    // TODO: Make sure to remove this event listener from any other elements once you're done with turn
    e.target.style.cursor = "grabbing";
  });
});

let selectedPiece = null;
let currentPlayer = "white"; // Track the current player (white or black)
let targetSquare = null;
let currentSquare = null;

const handlePlayer = () => {
  // Switch turns between players
  currentPlayer = currentPlayer === "white" ? "black" : "white";
  if (
    document.getElementById("whiteKing") &&
    document.getElementById("blackKing")
  ) {
    displayMessage(`It's ${currentPlayer}'s turn`);
    console.log("Current player:", currentPlayer);
  } else if (
    !document.getElementById("whiteKing") &&
    document.getElementById("blackKing")
  ) {
    return (displayEl.textContent = "CheckMate Black's win");
  } else if (
    document.getElementById("whiteKing") &&
    !document.getElementById("blackKing")
  ) {
    return (displayEl.textContent = "CheckMate white's win");
  }
};

const clickedHandler = (e) => {
  // Deselect if clicking the same piece
  if (selectedPiece === e.target) {
    selectedPiece.style.border = "none";
    selectedPiece = null;
    clearHighlights();
    return;
  }

  if (selectedPiece) {
    selectedPiece.style.border = "none"; // Remove border from previously selected square
  }

  if (e.target.classList.contains(currentPlayer)) {
    selectedPiece = e.target; // Update the selected square to the currently clicked one
    console.log("current Square", e.target.parentNode.id); //logs current square
    currentSquare = e.target.parentNode.id;
    knightMovement();
    e.target.style.border = "#9ccfce 1px solid"; // This will add a blue border to the clicked element.
  }

  if (selectedPiece) {
    if (currentPlayer === "white" && e.target.classList.contains("black")) {
      const capturedPiece = e.target;
      const targetSquare = capturedPiece.parentNode; // Get the parent square

      targetSquare.removeChild(capturedPiece); // Remove the captured black piece from the square.
      targetSquare.appendChild(selectedPiece); // Add the capturing white piece to the same square.
      if (!document.getElementById("blackKing")) {
        console.log("White wins");
        PiecesEl.forEach((piece) => {
          piece.removeEventListener("click", clickedHandler);
        });
      }
      handlePlayer();
      selectedPiece = null;
    } else if (
      currentPlayer === "black" &&
      e.target.classList.contains("white")
    ) {
      const capturedPiece = e.target;
      const targetSquare = capturedPiece.parentNode; // Get the parent square

      targetSquare.removeChild(capturedPiece); // Remove the captured white piece from the square.
      targetSquare.appendChild(selectedPiece); // Add the capturing black piece to the same square.

      if (!document.getElementById("whiteKing")) {
        //black wins game, event listener removed.
        console.log("Black wins");
        PiecesEl.forEach((piece) => {
          piece.removeEventListener("click", clickedHandler);
        });
      }

      handlePlayer();
      selectedPiece = null;
    }
  }
};

const displayMessage = (message) => {
  //This will display messages to user, who's turn is it, who won, tie.

  displayEl.textContent = message;
  console.log(message);
};

PiecesEl.forEach((piece) => {
  //Adding event listener to each piece, selecting all the pieces in the board
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
    targetSquare = e.target.id;

    while (recentlyHighlightedElements.length) {
      const removedElement = recentlyHighlightedElements.pop();
      removedElement.classList.toggle("highlightBlue");
    }

    console.log("target square:", targetSquare);

    handlePlayer();
  }
});

buttonEl.addEventListener("click", () => {
  // Reset the game state
  window.location.reload(true);
});

// Each piece
