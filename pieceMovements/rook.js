console.log("rook here");
const rookMovement = () => {
  if (selectedPiece.classList.contains("rook")) {
    if (currentSquare === "A1") {
      if (
        !A2.firstElementChild ||
        !A2.firstElementChild.classList.contains("white")
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
      if (
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black"))
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
      if (
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black"))
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }
      if (
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black"))
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }
      if (
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black"))
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
      if (
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("white")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black"))
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
      if (
        (!A8.firstElementChild ||
          !A8.firstElementChild.classList.contains("white")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("black")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("white")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black"))
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }
      if (
        !B1.firstElementChild ||
        !B1.firstElementChild.classList.contains("white")
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
      if (
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("white")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("white")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("black"))
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
      if (
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("white")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("white")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("black")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("white")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("black"))
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("white")) &&
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("white")) &&
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("black")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("white")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("black")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("white")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("black"))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("white")) &&
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("white")) &&
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("black")) &&
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("white")) &&
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("black")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("white")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("black")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("white")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("black"))
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("white")) &&
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("white")) &&
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("black")) &&
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("white")) &&
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("black")) &&
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("white")) &&
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("black")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("white")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("black")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("white")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("black"))
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        (!H1.firstElementChild ||
          !H1.firstElementChild.classList.contains("white")) &&
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("white")) &&
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("black")) &&
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("white")) &&
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("black")) &&
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("white")) &&
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("black")) &&
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("white")) &&
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("black")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("white")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("black")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("white")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("black"))
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }
    }
  }
};
