const originalBodyHtml = document.body.innerHTML; // Store the original HTML of the body
const boardEl = document.querySelector(".board");
const piecesEl = document.querySelectorAll(".piece");
const displayEl = document.querySelector(".display");
const buttonEl = document.querySelector(".button");

let selectedSquare = null;
let currentPlayer = "white"; // Track the current player (white or black)

const handlePlayer = () => {
  currentPlayer = currentPlayer === "white" ? "black" : "white"; // Switch turns between players
  displayMessage(`It's ${currentPlayer}'s turn`);
  console.log("Current player:", currentPlayer);
};

const clickedHandler = (e) => {
  e.target.style.border = "blue 1px solid"; // This will add a blue border to the clicked element.
  if (selectedSquare) {
    selectedSquare.style.border = "none"; // Remove border from previously selected square
  }
  selectedSquare = e.target; // Update the selected square to the currently clicked one
  console.log("Selected square:", selectedSquare);
};

const displayMessage = (message) => {
  //This will display messages to user, who's turn is it, who won, tie.
  displayEl.textContent = message;
  console.log(message);
};

piecesEl.forEach((piece) => {
  //Adding event listener to each piece
  //selecting all the pieces in the board
  piece.addEventListener("click", clickedHandler);
});

boardEl.addEventListener("click", (e) => {
  // Add event listener to the board
  if (selectedSquare && e.target.classList.contains("square")) {
    // Ensure a piece is selected and the clicked target is a square
    e.target.appendChild(selectedSquare); // Move the selected piece to the clicked square
    selectedSquare.style.border = "none"; // Remove border after moving
    selectedSquare = null; // Reset selected square
    handlePlayer();
  }
});

buttonEl.addEventListener("click", () => {
  console.log("Resetting the game...");
  document.body.innerHTML = originalBodyHtml;
  currentPlayer = "white"; // Reset to white player
  console.log("Current player:", currentPlayer);
  displayMessage(`It's ${currentPlayer}'s turn`);
});
selectedSquare = null; // Reset selected square
// }); // Reset the game when the button is clicked
