const knightMovement = () => {
  //B1
  if (selectedPiece.classList.contains("wKnight")) {
    const A3 = document.getElementById("A3");
    const C3 = document.getElementById("C3");
    const D2 = document.getElementById("D2");
    if (currentSquare === "B1") {
      if (
        !A3.firstElementChild ||
        !A3.firstElementChild.classList.contains("white")
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("white")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("white")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
    }
    console.log("this is the knight:", selectedPiece.textContent);
  }
  if (selectedPiece.classList.contains("bKnight")) {
    const A3 = document.getElementById("A3");
    const C3 = document.getElementById("C3");
    const D2 = document.getElementById("D2");
    if (currentSquare === "B1") {
      if (
        !A3.firstElementChild ||
        !A3.firstElementChild.classList.contains("black")
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("black")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
    }
    console.log("this is the knight:", selectedPiece.textContent);
  }
};
