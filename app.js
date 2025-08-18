const board = document.querySelector(".board");

const clickedHandler = (e) => {
  console.log(e.target.classList);
  e.target.style.border = "blue 1px solid"; // This will add a blue border to the clicked element.
  if (e.target.textContent === "") {
    //This will remove the border if the clicked square is empty.
    e.target.style.border = "none";
  }
};

board.addEventListener(
  "click",
  clickedHandler

  // if (e.target.textContent === "♙" || e.target.textContent === "♟") {
  //   e.target.style.border;
  // }
);
