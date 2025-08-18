const boardEl = document.querySelector(".board");
const piecesEl = document.querySelectorAll(".piece");
let selectedSquare = null;

const clickedHandler = (e) => {
  e.target.style.border = "blue 1px solid"; // This will add a blue border to the clicked element.
  if (selectedSquare) {
    selectedSquare.style.border = "none"; // Remove border from previously selected square
  }
  selectedSquare = e.target; // Update the selected square to the currently clicked one
  console.log("Selected square:", selectedSquare);
};
and;
piecesEl.forEach((piece) => {
  //selecting all the pieces in the board
  piece.addEventListener("click", clickedHandler);
});

boardEl.addEventListener("click", (e) => {
  if (selectedSquare && e.target.classList.contains("square")) {
    // Ensure a piece is selected and the clicked target is a square
    e.target.appendChild(selectedSquare); // Move the selected piece to the clicked square
    selectedSquare.style.border = "none"; // Remove border after moving
    selectedSquare = null; // Reset selected square
  }
});
