// .rowsEven .square:nth-child(even)
// .rowsOdd .square:nth-child(odd)

const boardEl = document.querySelector(".board");
const PiecesEl = document.querySelectorAll(".piece");
const displayEl = document.querySelector(".display");
const buttonEl = document.querySelector(".button");
const knightEl = document.querySelectorAll(".knight");
const wPawnEl = document.querySelectorAll(".whitePawn");
const blackKing = document.getElementById("blackKing");
//const stabEL = new Audio("Stab for chess.mp3");
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
    pawnMovement();
    kingMovement();
    rookMovement();
    e.target.style.border = "#9ccfce 1px solid"; // This will add a blue border to the clicked element.
  }

  if (selectedPiece) {
    //Function for capture pieces.
    if (
      currentPlayer === "white" &&
      e.target.classList.contains("black")
      //&& e.target.parentElement.classList.contains("highlightBlue")//This only allows to capture pieces in blue squares
    ) {
      console.log("I'm eating black");
      const capturedPiece = e.target;
      const targetSquare = capturedPiece.parentNode; // Get the parent square

      targetSquare.removeChild(capturedPiece); // Remove the captured black piece from the square.
      // stabEL.currentTime = 0.3;
      //stabEL.play(); //AUDIO SAMPLE
      targetSquare.appendChild(selectedPiece); // Add the capturing white piece to the same square.
      if (!document.getElementById("blackKing")) {
        console.log("White wins");
        PiecesEl.forEach((piece) => {
          piece.removeEventListener("click", clickedHandler);
        });
      }

      while (recentlyHighlightedElements.length) {
        const removedElement = recentlyHighlightedElements.pop();
        removedElement.classList.toggle("highlightBlue");
      }

      handlePlayer();
      selectedPiece = null;
    } else if (
      currentPlayer === "black" &&
      e.target.classList.contains("white") &&
      e.target.parentElement.classList.contains("highlightBlue")
    ) {
      console.log("I'm eating white");
      const capturedPiece = e.target;
      const targetSquare = capturedPiece.parentNode; // Get the parent square
      stabEL.currentTime = 0.3;
      stabEL.play();

      targetSquare.removeChild(capturedPiece); // Remove the captured white piece from the square.
      targetSquare.appendChild(selectedPiece); // Add the capturing black piece to the same square.

      if (!document.getElementById("whiteKing")) {
        //black wins game, event listener removed.
        console.log("Black wins");
        PiecesEl.forEach((piece) => {
          piece.removeEventListener("click", clickedHandler);
        });
      }

      while (recentlyHighlightedElements.length) {
        const removedElement = recentlyHighlightedElements.pop();
        removedElement.classList.toggle("highlightBlue");
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
  if (
    selectedPiece &&
    e.target.classList.contains("square")
    //&& e.target.classList.contains("highlightBlue")//This will let move only to blue squares
  ) {
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

// Color sWitch
const greenEl = document.querySelector(".green");
const blueEl = document.querySelector(".blue");
const purpleEl = document.querySelector(".purple");
const lightsOutEl = document.querySelector(".lightsOut");
const h1El = document.querySelector("h1");
const h2El = document.querySelector("h2");
const pEl = document.querySelector("p");
const bodyEl = document.querySelector("body");
const allElements = document.querySelectorAll("*");
const oddSquares = document.querySelectorAll(".rowsOdd .square:nth-child(odd)");
const squareEl = document.querySelectorAll(".square");
const defaultEl = document.querySelector(".default");

const colorSwitchDefault = () => {
  bodyEl.style.color = "black";
  greenEl.style.color = "black";
  purpleEl.style.color = "black";
  blueEl.style.color = "black";
  lightsOutEl.style.color = "black";
  buttonEl.style.color = "black";
  defaultEl.style.color = "black";
};

defaultEl.addEventListener("click", colorSwitchDefault);

const colorSwitchGreen = () => {
  bodyEl.style.color = "green";
  greenEl.style.color = "green";
  purpleEl.style.color = "green";
  blueEl.style.color = "green";
  lightsOutEl.style.color = "green";
  buttonEl.style.color = "green";
  defaultEl.style.color = "green";
};

greenEl.addEventListener("click", colorSwitchGreen);

const colorSwitchBlue = () => {
  bodyEl.style.color = "blue";
  greenEl.style.color = "blue";
  purpleEl.style.color = "blue";
  blueEl.style.color = "blue";
  lightsOutEl.style.color = "blue";
  buttonEl.style.color = "blue";
  defaultEl.style.color = "blue";
};

blueEl.addEventListener("click", colorSwitchBlue);

const colorSwitchPurple = () => {
  bodyEl.style.color = "purple";
  greenEl.style.color = "purple";
  purpleEl.style.color = "purple";
  blueEl.style.color = "purple";
  lightsOutEl.style.color = "purple";
  buttonEl.style.color = "purple";
  defaultEl.style.color = "purple";
};

purpleEl.addEventListener("click", colorSwitchPurple);

const colorSwitchLightsOut = () => {
  bodyEl.style.color = "white";
  greenEl.style.color = "white";
  purpleEl.style.color = "white";
  blueEl.style.color = "white";
  lightsOutEl.style.color = "white";
  buttonEl.style.color = "white";
  defaultEl.style.color = "white";

  const evenBtns = document.querySelectorAll(
    ".rowsEven .square:nth-child(even)"
  );
  const oddBtns = document.querySelectorAll(".rowsOdd .square:nth-child(odd)");
  [...evenBtns, ...oddBtns].forEach((btn) => {
    btn.style.backgroundColor = "blue";
  });
};

lightsOutEl.addEventListener("click", colorSwitchLightsOut);
