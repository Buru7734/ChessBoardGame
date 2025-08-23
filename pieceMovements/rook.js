console.log("rook here");
const rookMovement = () => {
  if (selectedPiece.classList.contains("whiteRook")) {
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
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "A1") {
      if (
        !A2.firstElementChild ||
        !A2.firstElementChild.classList.contains("black")
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
      if (
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white"))
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
      if (
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white"))
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }
      if (
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white"))
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }
      if (
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white"))
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
      if (
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("black")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white"))
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
      if (
        (!A8.firstElementChild ||
          !A8.firstElementChild.classList.contains("black")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("white")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("black")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white"))
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }

      if (
        !B1.firstElementChild ||
        !B1.firstElementChild.classList.contains("black")
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
      if (
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("black")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("black")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("white"))
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
      if (
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("black")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("black")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("white")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("black")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("white"))
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("black")) &&
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("black")) &&
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("white")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("black")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("white")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("black")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("white"))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("black")) &&
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("black")) &&
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("white")) &&
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("black")) &&
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("white")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("black")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("white")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("black")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("white"))
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("black")) &&
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("black")) &&
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("white")) &&
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("black")) &&
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("white")) &&
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("black")) &&
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("white")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("black")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("white")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("black")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("white"))
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        (!H1.firstElementChild ||
          !H1.firstElementChild.classList.contains("black")) &&
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("black")) &&
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("white")) &&
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("black")) &&
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("white")) &&
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("black")) &&
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("white")) &&
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("black")) &&
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("white")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("black")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("white")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("black")) &&
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("white"))
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }
    }
  }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // A2

  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "A2") {
      if (
        !A1.firstElementChild ||
        !A1.firstElementChild.classList.contains("white")
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }
      if (
        !A3.firstElementChild ||
        !A3.firstElementChild.classList.contains("white")
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
          !A3.firstElementChild.classList.contains("black"))
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }
      if (
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black"))
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
          !A4.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black"))
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
      if (
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("white")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black"))
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
      if (
        (!A8.firstElementChild ||
          !A8.firstElementChild.classList.contains("white")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("white")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("black")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black"))
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }

      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black"))
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black"))
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("white")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black"))
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("white")) &&
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("white")) &&
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("black")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black"))
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!G2.firstElementChild ||
          !G2.firstElementChild.classList.contains("white")) &&
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("white")) &&
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("black")) &&
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("white")) &&
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("black")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black"))
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        (!H2.firstElementChild ||
          !H2.firstElementChild.classList.contains("white")) &&
        (!G2.firstElementChild ||
          !G2.firstElementChild.classList.contains("white")) &&
        (!G2.firstElementChild ||
          !G2.firstElementChild.classList.contains("black")) &&
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("white")) &&
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("black")) &&
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("white")) &&
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("black")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black"))
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
    }
  }
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "A2") {
      if (
        !A1.firstElementChild ||
        !A1.firstElementChild.classList.contains("black")
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }
      if (
        !A3.firstElementChild ||
        !A3.firstElementChild.classList.contains("black")
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
      if (
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white"))
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }
      if (
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white"))
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }
      if (
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white"))
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
      if (
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("black")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white"))
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
      if (
        (!A8.firstElementChild ||
          !A8.firstElementChild.classList.contains("black")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("black")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("white")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white"))
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }

      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white"))
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white"))
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("black")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("black")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white"))
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("black")) &&
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("black")) &&
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("white")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("black")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white"))
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!G2.firstElementChild ||
          !G2.firstElementChild.classList.contains("black")) &&
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("black")) &&
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("white")) &&
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("black")) &&
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("white")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("black")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white"))
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        (!H2.firstElementChild ||
          !H2.firstElementChild.classList.contains("black")) &&
        (!G2.firstElementChild ||
          !G2.firstElementChild.classList.contains("black")) &&
        (!G2.firstElementChild ||
          !G2.firstElementChild.classList.contains("white")) &&
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("black")) &&
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("white")) &&
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("black")) &&
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("white")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("black")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white"))
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
    }
  }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "A3") {
      if (
        !A2.firstElementChild ||
        !A2.firstElementChild.classList.contains("white")
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
      if (
        !A4.firstElementChild ||
        !A4.firstElementChild.classList.contains("white")
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }
      if (
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black"))
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
          !A4.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black"))
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
      if (
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("white")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black"))
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
      if (
        (!A8.firstElementChild ||
          !A8.firstElementChild.classList.contains("white")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("white")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("black")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black"))
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("white")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black"))
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }

      // Horizontal moves
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("white")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black"))
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black"))
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("white")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black"))
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("black")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("white")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black"))
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!G3.firstElementChild ||
          !G3.firstElementChild.classList.contains("white")) &&
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("white")) &&
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("black")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("black")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("white")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black"))
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        (!H3.firstElementChild ||
          !H3.firstElementChild.classList.contains("white")) &&
        (!G3.firstElementChild ||
          !G3.firstElementChild.classList.contains("white")) &&
        (!G3.firstElementChild ||
          !G3.firstElementChild.classList.contains("black")) &&
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("white")) &&
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("black")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("black")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("white")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black"))
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
    }
  }
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "A3") {
      if (
        !A2.firstElementChild ||
        !A2.firstElementChild.classList.contains("black")
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
      if (
        !A4.firstElementChild ||
        !A4.firstElementChild.classList.contains("black")
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }
      if (
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white"))
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }
      if (
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white"))
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
      if (
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("black")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white"))
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
      if (
        (!A8.firstElementChild ||
          !A8.firstElementChild.classList.contains("black")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("black")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("white")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white"))
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("black")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white"))
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }

      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("black")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white"))
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white"))
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("black")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("black")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white"))
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("black")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("black")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("black")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white"))
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!G3.firstElementChild ||
          !G3.firstElementChild.classList.contains("black")) &&
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("black")) &&
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("black")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("black")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white"))
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        (!H3.firstElementChild ||
          !H3.firstElementChild.classList.contains("black")) &&
        (!G3.firstElementChild ||
          !G3.firstElementChild.classList.contains("black")) &&
        (!G3.firstElementChild ||
          !G3.firstElementChild.classList.contains("white")) &&
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("black")) &&
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("black")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("black")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white"))
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
    }
  }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "A4") {
      // Vertical moves
      if (
        !A3.firstElementChild ||
        !A3.firstElementChild.classList.contains("black")
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
      if (
        !A5.firstElementChild ||
        !A5.firstElementChild.classList.contains("black")
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }
      if (
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white"))
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
      if (
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("black")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white"))
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
      if (
        (!A8.firstElementChild ||
          !A8.firstElementChild.classList.contains("black")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("black")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("white")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white"))
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("black")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black"))
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }
      if (
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white"))
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }

      // Horizontal moves
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("black")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white"))
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("black")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white"))
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("black")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white"))
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("black")) &&
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("black")) &&
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("black")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white"))
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!G4.firstElementChild ||
          !G4.firstElementChild.classList.contains("black")) &&
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("black")) &&
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("white")) &&
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("black")) &&
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("black")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white"))
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        (!H4.firstElementChild ||
          !H4.firstElementChild.classList.contains("black")) &&
        (!G4.firstElementChild ||
          !G4.firstElementChild.classList.contains("black")) &&
        (!G4.firstElementChild ||
          !G4.firstElementChild.classList.contains("white")) &&
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("black")) &&
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("white")) &&
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("black")) &&
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("black")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white"))
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
    }
  }
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "A4") {
      // Vertical moves
      if (
        !A3.firstElementChild ||
        !A3.firstElementChild.classList.contains("white")
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
      if (
        !A5.firstElementChild ||
        !A5.firstElementChild.classList.contains("white")
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
          !A5.firstElementChild.classList.contains("black"))
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
      if (
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("white")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black"))
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
      if (
        (!A8.firstElementChild ||
          !A8.firstElementChild.classList.contains("white")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("white")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("black")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black"))
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("white")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white"))
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }
      if (
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black"))
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }

      // Horizontal moves
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("white")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black"))
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black"))
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black"))
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("white")) &&
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("white")) &&
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black"))
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!G4.firstElementChild ||
          !G4.firstElementChild.classList.contains("white")) &&
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("white")) &&
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("black")) &&
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("white")) &&
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black"))
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        (!H4.firstElementChild ||
          !H4.firstElementChild.classList.contains("white")) &&
        (!G4.firstElementChild ||
          !G4.firstElementChild.classList.contains("white")) &&
        (!G4.firstElementChild ||
          !G4.firstElementChild.classList.contains("black")) &&
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("white")) &&
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("black")) &&
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("white")) &&
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black"))
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
    }
  }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "A5") {
      // Vertical moves
      if (
        !A4.firstElementChild ||
        !A4.firstElementChild.classList.contains("white")
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }
      if (
        !A6.firstElementChild ||
        !A6.firstElementChild.classList.contains("white")
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
      if (
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("white")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black"))
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
      if (
        (!A8.firstElementChild ||
          !A8.firstElementChild.classList.contains("white")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("white")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("black")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black"))
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("white")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white"))
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }
      if (
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black"))
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
      if (
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white"))
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }

      // Horizontal moves
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("white")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black"))
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black"))
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("white")) &&
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("white")) &&
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black"))
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("white")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("white")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("black")) &&
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("white")) &&
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black"))
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains("white")) &&
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("white")) &&
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("black")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("white")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("black")) &&
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("white")) &&
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black"))
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        (!H5.firstElementChild ||
          !H5.firstElementChild.classList.contains("white")) &&
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains("white")) &&
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains("black")) &&
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("white")) &&
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("black")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("white")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("black")) &&
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("white")) &&
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black"))
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
    }
  }
  // This for black rook
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "A5") {
      // Vertical moves
      if (
        !A4.firstElementChild ||
        !A4.firstElementChild.classList.contains("black")
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }
      if (
        !A6.firstElementChild ||
        !A6.firstElementChild.classList.contains("black")
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
      if (
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("black")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white"))
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
      if (
        (!A8.firstElementChild ||
          !A8.firstElementChild.classList.contains("black")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("black")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("white")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white"))
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("black")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black"))
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }
      if (
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white"))
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
      if (
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black"))
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }

      // Horizontal moves
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("black")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("white"))
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("white"))
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("black")) &&
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("black")) &&
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("white"))
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("black")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("black")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("white")) &&
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("black")) &&
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("white"))
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains("black")) &&
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("black")) &&
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("white")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("black")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("white")) &&
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("black")) &&
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("white"))
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        (!H5.firstElementChild ||
          !H5.firstElementChild.classList.contains("black")) &&
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains("black")) &&
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains("white")) &&
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("black")) &&
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("white")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("black")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("white")) &&
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("black")) &&
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("white"))
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
    }
  }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "A6") {
      // Vertical moves
      if (
        !A5.firstElementChild ||
        !A5.firstElementChild.classList.contains("white")
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }
      if (
        !A7.firstElementChild ||
        !A7.firstElementChild.classList.contains("white")
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
      if (
        (!A8.firstElementChild ||
          !A8.firstElementChild.classList.contains("white")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("white")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("black"))
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("white")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white"))
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }
      if (
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black"))
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
      if (
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white"))
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
      if (
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black"))
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }

      // Horizontal moves
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("white")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black"))
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("white")) &&
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black"))
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("white")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("white")) &&
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black"))
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("white")) &&
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("white")) &&
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("black")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("white")) &&
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black"))
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("white")) &&
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("white")) &&
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("black")) &&
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("white")) &&
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("black")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("white")) &&
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black"))
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!H6.firstElementChild ||
          !H6.firstElementChild.classList.contains("white")) &&
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("white")) &&
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("black")) &&
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("white")) &&
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("black")) &&
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("white")) &&
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("black")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("white")) &&
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black"))
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
    }
  }
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "A6") {
      // Vertical moves
      if (
        !A5.firstElementChild ||
        !A5.firstElementChild.classList.contains("black")
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }
      if (
        !A7.firstElementChild ||
        !A7.firstElementChild.classList.contains("black")
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
      if (
        (!A8.firstElementChild ||
          !A8.firstElementChild.classList.contains("black")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("black")) &&
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("white"))
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("black")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black"))
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }
      if (
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white"))
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
      if (
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black"))
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
      if (
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white"))
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }

      // Horizontal moves
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("black")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white"))
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("black")) &&
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white"))
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("black")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("black")) &&
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white"))
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("black")) &&
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("black")) &&
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("white")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("black")) &&
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white"))
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("black")) &&
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("black")) &&
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("white")) &&
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("black")) &&
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("white")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("black")) &&
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white"))
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!H6.firstElementChild ||
          !H6.firstElementChild.classList.contains("black")) &&
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("black")) &&
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("white")) &&
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("black")) &&
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("white")) &&
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("black")) &&
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("white")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("black")) &&
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white"))
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
    }
  }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  ///
  //
  //
  //
  //
  //
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "A7") {
      // Vertical moves
      if (
        !A6.firstElementChild ||
        !A6.firstElementChild.classList.contains("white")
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
      if (
        !A8.firstElementChild ||
        !A8.firstElementChild.classList.contains("white")
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }

      // Lower squares blocked by A6
      if (
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A6.firstElementChild ||
          (!A6.firstElementChild.classList.contains("white") &&
            !A6.firstElementChild.classList.contains("black")))
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }
      if (
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          (!A5.firstElementChild.classList.contains("white") &&
            !A5.firstElementChild.classList.contains("black"))) &&
        (!A6.firstElementChild ||
          (!A6.firstElementChild.classList.contains("white") &&
            !A6.firstElementChild.classList.contains("black")))
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }
      if (
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          (!A4.firstElementChild.classList.contains("white") &&
            !A4.firstElementChild.classList.contains("black"))) &&
        (!A5.firstElementChild ||
          (!A5.firstElementChild.classList.contains("white") &&
            !A5.firstElementChild.classList.contains("black"))) &&
        (!A6.firstElementChild ||
          (!A6.firstElementChild.classList.contains("white") &&
            !A6.firstElementChild.classList.contains("black")))
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
      if (
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          (!A3.firstElementChild.classList.contains("white") &&
            !A3.firstElementChild.classList.contains("black"))) &&
        (!A4.firstElementChild ||
          (!A4.firstElementChild.classList.contains("white") &&
            !A4.firstElementChild.classList.contains("black"))) &&
        (!A5.firstElementChild ||
          (!A5.firstElementChild.classList.contains("white") &&
            !A5.firstElementChild.classList.contains("black"))) &&
        (!A6.firstElementChild ||
          (!A6.firstElementChild.classList.contains("white") &&
            !A6.firstElementChild.classList.contains("black")))
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("white")) &&
        (!A2.firstElementChild ||
          (!A2.firstElementChild.classList.contains("white") &&
            !A2.firstElementChild.classList.contains("black"))) &&
        (!A3.firstElementChild ||
          (!A3.firstElementChild.classList.contains("white") &&
            !A3.firstElementChild.classList.contains("black"))) &&
        (!A4.firstElementChild ||
          (!A4.firstElementChild.classList.contains("white") &&
            !A4.firstElementChild.classList.contains("black"))) &&
        (!A5.firstElementChild ||
          (!A5.firstElementChild.classList.contains("white") &&
            !A5.firstElementChild.classList.contains("black"))) &&
        (!A6.firstElementChild ||
          (!A6.firstElementChild.classList.contains("white") &&
            !A6.firstElementChild.classList.contains("black")))
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }

      // Horizontal moves
      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("white")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("white")) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("white") &&
            !B7.firstElementChild.classList.contains("black")))
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!D7.firstElementChild ||
          !D7.firstElementChild.classList.contains("white")) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black"))) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("white") &&
            !B7.firstElementChild.classList.contains("black")))
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("white")) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black"))) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black"))) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("white") &&
            !B7.firstElementChild.classList.contains("black")))
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!F7.firstElementChild ||
          !F7.firstElementChild.classList.contains("white")) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black"))) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black"))) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black"))) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("white") &&
            !B7.firstElementChild.classList.contains("black")))
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("white")) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black"))) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black"))) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black"))) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("white") &&
            !B7.firstElementChild.classList.contains("black")))
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        (!H7.firstElementChild ||
          !H7.firstElementChild.classList.contains("white")) &&
        (!G7.firstElementChild ||
          (!G7.firstElementChild.classList.contains("white") &&
            !G7.firstElementChild.classList.contains("black"))) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black"))) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black"))) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black"))) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("white") &&
            !B7.firstElementChild.classList.contains("black")))
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }
    }
  }
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "A7") {
      // Vertical moves
      if (
        !A6.firstElementChild ||
        !A6.firstElementChild.classList.contains("black")
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
      if (
        !A8.firstElementChild ||
        !A8.firstElementChild.classList.contains("black")
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }

      // Lower squares blocked by A6
      if (
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A6.firstElementChild ||
          (!A6.firstElementChild.classList.contains("black") &&
            !A6.firstElementChild.classList.contains("white")))
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }
      if (
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          (!A5.firstElementChild.classList.contains("black") &&
            !A5.firstElementChild.classList.contains("white"))) &&
        (!A6.firstElementChild ||
          (!A6.firstElementChild.classList.contains("black") &&
            !A6.firstElementChild.classList.contains("white")))
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }
      if (
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          (!A4.firstElementChild.classList.contains("black") &&
            !A4.firstElementChild.classList.contains("white"))) &&
        (!A5.firstElementChild ||
          (!A5.firstElementChild.classList.contains("black") &&
            !A5.firstElementChild.classList.contains("white"))) &&
        (!A6.firstElementChild ||
          (!A6.firstElementChild.classList.contains("black") &&
            !A6.firstElementChild.classList.contains("white")))
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
      if (
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          (!A3.firstElementChild.classList.contains("black") &&
            !A3.firstElementChild.classList.contains("white"))) &&
        (!A4.firstElementChild ||
          (!A4.firstElementChild.classList.contains("black") &&
            !A4.firstElementChild.classList.contains("white"))) &&
        (!A5.firstElementChild ||
          (!A5.firstElementChild.classList.contains("black") &&
            !A5.firstElementChild.classList.contains("white"))) &&
        (!A6.firstElementChild ||
          (!A6.firstElementChild.classList.contains("black") &&
            !A6.firstElementChild.classList.contains("white")))
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("black")) &&
        (!A2.firstElementChild ||
          (!A2.firstElementChild.classList.contains("black") &&
            !A2.firstElementChild.classList.contains("white"))) &&
        (!A3.firstElementChild ||
          (!A3.firstElementChild.classList.contains("black") &&
            !A3.firstElementChild.classList.contains("white"))) &&
        (!A4.firstElementChild ||
          (!A4.firstElementChild.classList.contains("black") &&
            !A4.firstElementChild.classList.contains("white"))) &&
        (!A5.firstElementChild ||
          (!A5.firstElementChild.classList.contains("black") &&
            !A5.firstElementChild.classList.contains("white"))) &&
        (!A6.firstElementChild ||
          (!A6.firstElementChild.classList.contains("black") &&
            !A6.firstElementChild.classList.contains("white")))
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }

      // Horizontal moves
      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("black")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("black")) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("black") &&
            !B7.firstElementChild.classList.contains("white")))
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!D7.firstElementChild ||
          !D7.firstElementChild.classList.contains("black")) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("black") &&
            !C7.firstElementChild.classList.contains("white"))) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("black") &&
            !B7.firstElementChild.classList.contains("white")))
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("black")) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("black") &&
            !D7.firstElementChild.classList.contains("white"))) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("black") &&
            !C7.firstElementChild.classList.contains("white"))) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("black") &&
            !B7.firstElementChild.classList.contains("white")))
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!F7.firstElementChild ||
          !F7.firstElementChild.classList.contains("black")) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("black") &&
            !E7.firstElementChild.classList.contains("white"))) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("black") &&
            !D7.firstElementChild.classList.contains("white"))) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("black") &&
            !C7.firstElementChild.classList.contains("white"))) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("black") &&
            !B7.firstElementChild.classList.contains("white")))
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("black")) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("black") &&
            !F7.firstElementChild.classList.contains("white"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("black") &&
            !E7.firstElementChild.classList.contains("white"))) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("black") &&
            !D7.firstElementChild.classList.contains("white"))) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("black") &&
            !C7.firstElementChild.classList.contains("white"))) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("black") &&
            !B7.firstElementChild.classList.contains("white")))
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        (!H7.firstElementChild ||
          !H7.firstElementChild.classList.contains("black")) &&
        (!G7.firstElementChild ||
          (!G7.firstElementChild.classList.contains("black") &&
            !G7.firstElementChild.classList.contains("white"))) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("black") &&
            !F7.firstElementChild.classList.contains("white"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("black") &&
            !E7.firstElementChild.classList.contains("white"))) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("black") &&
            !D7.firstElementChild.classList.contains("white"))) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("black") &&
            !C7.firstElementChild.classList.contains("white"))) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("black") &&
            !B7.firstElementChild.classList.contains("white")))
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }
    }
  }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "A8") {
      // Vertical moves (only downwards)
      if (
        !A7.firstElementChild ||
        !A7.firstElementChild.classList.contains("white")
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
      if (
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!A7.firstElementChild ||
          (!A7.firstElementChild.classList.contains("white") &&
            !A7.firstElementChild.classList.contains("black")))
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
      if (
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!A6.firstElementChild ||
          (!A6.firstElementChild.classList.contains("white") &&
            !A6.firstElementChild.classList.contains("black"))) &&
        (!A7.firstElementChild ||
          (!A7.firstElementChild.classList.contains("white") &&
            !A7.firstElementChild.classList.contains("black")))
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }
      if (
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!A5.firstElementChild ||
          (!A5.firstElementChild.classList.contains("white") &&
            !A5.firstElementChild.classList.contains("black"))) &&
        (!A6.firstElementChild ||
          (!A6.firstElementChild.classList.contains("white") &&
            !A6.firstElementChild.classList.contains("black"))) &&
        (!A7.firstElementChild ||
          (!A7.firstElementChild.classList.contains("white") &&
            !A7.firstElementChild.classList.contains("black")))
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }
      if (
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!A4.firstElementChild ||
          (!A4.firstElementChild.classList.contains("white") &&
            !A4.firstElementChild.classList.contains("black"))) &&
        (!A5.firstElementChild ||
          (!A5.firstElementChild.classList.contains("white") &&
            !A5.firstElementChild.classList.contains("black"))) &&
        (!A6.firstElementChild ||
          (!A6.firstElementChild.classList.contains("white") &&
            !A6.firstElementChild.classList.contains("black"))) &&
        (!A7.firstElementChild ||
          (!A7.firstElementChild.classList.contains("white") &&
            !A7.firstElementChild.classList.contains("black")))
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
      if (
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        (!A3.firstElementChild ||
          (!A3.firstElementChild.classList.contains("white") &&
            !A3.firstElementChild.classList.contains("black"))) &&
        (!A4.firstElementChild ||
          (!A4.firstElementChild.classList.contains("white") &&
            !A4.firstElementChild.classList.contains("black"))) &&
        (!A5.firstElementChild ||
          (!A5.firstElementChild.classList.contains("white") &&
            !A5.firstElementChild.classList.contains("black"))) &&
        (!A6.firstElementChild ||
          (!A6.firstElementChild.classList.contains("white") &&
            !A6.firstElementChild.classList.contains("black"))) &&
        (!A7.firstElementChild ||
          (!A7.firstElementChild.classList.contains("white") &&
            !A7.firstElementChild.classList.contains("black")))
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("white")) &&
        (!A2.firstElementChild ||
          (!A2.firstElementChild.classList.contains("white") &&
            !A2.firstElementChild.classList.contains("black"))) &&
        (!A3.firstElementChild ||
          (!A3.firstElementChild.classList.contains("white") &&
            !A3.firstElementChild.classList.contains("black"))) &&
        (!A4.firstElementChild ||
          (!A4.firstElementChild.classList.contains("white") &&
            !A4.firstElementChild.classList.contains("black"))) &&
        (!A5.firstElementChild ||
          (!A5.firstElementChild.classList.contains("white") &&
            !A5.firstElementChild.classList.contains("black"))) &&
        (!A6.firstElementChild ||
          (!A6.firstElementChild.classList.contains("white") &&
            !A6.firstElementChild.classList.contains("black"))) &&
        (!A7.firstElementChild ||
          (!A7.firstElementChild.classList.contains("white") &&
            !A7.firstElementChild.classList.contains("black")))
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }

      // Horizontal moves
      if (
        !B8.firstElementChild ||
        !B8.firstElementChild.classList.contains("white")
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }
      if (
        (!C8.firstElementChild ||
          !C8.firstElementChild.classList.contains("white")) &&
        (!B8.firstElementChild ||
          (!B8.firstElementChild.classList.contains("white") &&
            !B8.firstElementChild.classList.contains("black")))
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }
      if (
        (!D8.firstElementChild ||
          !D8.firstElementChild.classList.contains("white")) &&
        (!C8.firstElementChild ||
          (!C8.firstElementChild.classList.contains("white") &&
            !C8.firstElementChild.classList.contains("black"))) &&
        (!B8.firstElementChild ||
          (!B8.firstElementChild.classList.contains("white") &&
            !B8.firstElementChild.classList.contains("black")))
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }
      if (
        (!E8.firstElementChild ||
          !E8.firstElementChild.classList.contains("white")) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black"))) &&
        (!C8.firstElementChild ||
          (!C8.firstElementChild.classList.contains("white") &&
            !C8.firstElementChild.classList.contains("black"))) &&
        (!B8.firstElementChild ||
          (!B8.firstElementChild.classList.contains("white") &&
            !B8.firstElementChild.classList.contains("black")))
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }
      if (
        (!F8.firstElementChild ||
          !F8.firstElementChild.classList.contains("white")) &&
        (!E8.firstElementChild ||
          (!E8.firstElementChild.classList.contains("white") &&
            !E8.firstElementChild.classList.contains("black"))) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black"))) &&
        (!C8.firstElementChild ||
          (!C8.firstElementChild.classList.contains("white") &&
            !C8.firstElementChild.classList.contains("black"))) &&
        (!B8.firstElementChild ||
          (!B8.firstElementChild.classList.contains("white") &&
            !B8.firstElementChild.classList.contains("black")))
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
      if (
        (!G8.firstElementChild ||
          !G8.firstElementChild.classList.contains("white")) &&
        (!F8.firstElementChild ||
          (!F8.firstElementChild.classList.contains("white") &&
            !F8.firstElementChild.classList.contains("black"))) &&
        (!E8.firstElementChild ||
          (!E8.firstElementChild.classList.contains("white") &&
            !E8.firstElementChild.classList.contains("black"))) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black"))) &&
        (!C8.firstElementChild ||
          (!C8.firstElementChild.classList.contains("white") &&
            !C8.firstElementChild.classList.contains("black"))) &&
        (!B8.firstElementChild ||
          (!B8.firstElementChild.classList.contains("white") &&
            !B8.firstElementChild.classList.contains("black")))
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }
      if (
        (!H8.firstElementChild ||
          !H8.firstElementChild.classList.contains("white")) &&
        (!G8.firstElementChild ||
          (!G8.firstElementChild.classList.contains("white") &&
            !G8.firstElementChild.classList.contains("black"))) &&
        (!F8.firstElementChild ||
          (!F8.firstElementChild.classList.contains("white") &&
            !F8.firstElementChild.classList.contains("black"))) &&
        (!E8.firstElementChild ||
          (!E8.firstElementChild.classList.contains("white") &&
            !E8.firstElementChild.classList.contains("black"))) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black"))) &&
        (!C8.firstElementChild ||
          (!C8.firstElementChild.classList.contains("white") &&
            !C8.firstElementChild.classList.contains("black"))) &&
        (!B8.firstElementChild ||
          (!B8.firstElementChild.classList.contains("white") &&
            !B8.firstElementChild.classList.contains("black")))
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }
    }
  }

  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "A8") {
      // Vertical moves (downwards)
      if (
        !A7.firstElementChild ||
        !A7.firstElementChild.classList.contains("black")
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
      if (
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!A7.firstElementChild ||
          (!A7.firstElementChild.classList.contains("white") &&
            !A7.firstElementChild.classList.contains("black")))
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
      if (
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!A6.firstElementChild ||
          (!A6.firstElementChild.classList.contains("white") &&
            !A6.firstElementChild.classList.contains("black"))) &&
        (!A7.firstElementChild ||
          (!A7.firstElementChild.classList.contains("white") &&
            !A7.firstElementChild.classList.contains("black")))
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }
      if (
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!A5.firstElementChild ||
          (!A5.firstElementChild.classList.contains("white") &&
            !A5.firstElementChild.classList.contains("black"))) &&
        (!A6.firstElementChild ||
          (!A6.firstElementChild.classList.contains("white") &&
            !A6.firstElementChild.classList.contains("black"))) &&
        (!A7.firstElementChild ||
          (!A7.firstElementChild.classList.contains("white") &&
            !A7.firstElementChild.classList.contains("black")))
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }
      if (
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!A4.firstElementChild ||
          (!A4.firstElementChild.classList.contains("white") &&
            !A4.firstElementChild.classList.contains("black"))) &&
        (!A5.firstElementChild ||
          (!A5.firstElementChild.classList.contains("white") &&
            !A5.firstElementChild.classList.contains("black"))) &&
        (!A6.firstElementChild ||
          (!A6.firstElementChild.classList.contains("white") &&
            !A6.firstElementChild.classList.contains("black"))) &&
        (!A7.firstElementChild ||
          (!A7.firstElementChild.classList.contains("white") &&
            !A7.firstElementChild.classList.contains("black")))
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
      if (
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        (!A3.firstElementChild ||
          (!A3.firstElementChild.classList.contains("white") &&
            !A3.firstElementChild.classList.contains("black"))) &&
        (!A4.firstElementChild ||
          (!A4.firstElementChild.classList.contains("white") &&
            !A4.firstElementChild.classList.contains("black"))) &&
        (!A5.firstElementChild ||
          (!A5.firstElementChild.classList.contains("white") &&
            !A5.firstElementChild.classList.contains("black"))) &&
        (!A6.firstElementChild ||
          (!A6.firstElementChild.classList.contains("white") &&
            !A6.firstElementChild.classList.contains("black"))) &&
        (!A7.firstElementChild ||
          (!A7.firstElementChild.classList.contains("white") &&
            !A7.firstElementChild.classList.contains("black")))
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("black")) &&
        (!A2.firstElementChild ||
          (!A2.firstElementChild.classList.contains("white") &&
            !A2.firstElementChild.classList.contains("black"))) &&
        (!A3.firstElementChild ||
          (!A3.firstElementChild.classList.contains("white") &&
            !A3.firstElementChild.classList.contains("black"))) &&
        (!A4.firstElementChild ||
          (!A4.firstElementChild.classList.contains("white") &&
            !A4.firstElementChild.classList.contains("black"))) &&
        (!A5.firstElementChild ||
          (!A5.firstElementChild.classList.contains("white") &&
            !A5.firstElementChild.classList.contains("black"))) &&
        (!A6.firstElementChild ||
          (!A6.firstElementChild.classList.contains("white") &&
            !A6.firstElementChild.classList.contains("black"))) &&
        (!A7.firstElementChild ||
          (!A7.firstElementChild.classList.contains("white") &&
            !A7.firstElementChild.classList.contains("black")))
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }

      // Horizontal moves
      if (
        !B8.firstElementChild ||
        !B8.firstElementChild.classList.contains("black")
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }
      if (
        (!C8.firstElementChild ||
          !C8.firstElementChild.classList.contains("black")) &&
        (!B8.firstElementChild ||
          (!B8.firstElementChild.classList.contains("white") &&
            !B8.firstElementChild.classList.contains("black")))
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }
      if (
        (!D8.firstElementChild ||
          !D8.firstElementChild.classList.contains("black")) &&
        (!C8.firstElementChild ||
          (!C8.firstElementChild.classList.contains("white") &&
            !C8.firstElementChild.classList.contains("black"))) &&
        (!B8.firstElementChild ||
          (!B8.firstElementChild.classList.contains("white") &&
            !B8.firstElementChild.classList.contains("black")))
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }
      if (
        (!E8.firstElementChild ||
          !E8.firstElementChild.classList.contains("black")) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black"))) &&
        (!C8.firstElementChild ||
          (!C8.firstElementChild.classList.contains("white") &&
            !C8.firstElementChild.classList.contains("black"))) &&
        (!B8.firstElementChild ||
          (!B8.firstElementChild.classList.contains("white") &&
            !B8.firstElementChild.classList.contains("black")))
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }
      if (
        (!F8.firstElementChild ||
          !F8.firstElementChild.classList.contains("black")) &&
        (!E8.firstElementChild ||
          (!E8.firstElementChild.classList.contains("white") &&
            !E8.firstElementChild.classList.contains("black"))) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black"))) &&
        (!C8.firstElementChild ||
          (!C8.firstElementChild.classList.contains("white") &&
            !C8.firstElementChild.classList.contains("black"))) &&
        (!B8.firstElementChild ||
          (!B8.firstElementChild.classList.contains("white") &&
            !B8.firstElementChild.classList.contains("black")))
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
      if (
        (!G8.firstElementChild ||
          !G8.firstElementChild.classList.contains("black")) &&
        (!F8.firstElementChild ||
          (!F8.firstElementChild.classList.contains("white") &&
            !F8.firstElementChild.classList.contains("black"))) &&
        (!E8.firstElementChild ||
          (!E8.firstElementChild.classList.contains("white") &&
            !E8.firstElementChild.classList.contains("black"))) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black"))) &&
        (!C8.firstElementChild ||
          (!C8.firstElementChild.classList.contains("white") &&
            !C8.firstElementChild.classList.contains("black"))) &&
        (!B8.firstElementChild ||
          (!B8.firstElementChild.classList.contains("white") &&
            !B8.firstElementChild.classList.contains("black")))
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }
      if (
        (!H8.firstElementChild ||
          !H8.firstElementChild.classList.contains("black")) &&
        (!G8.firstElementChild ||
          (!G8.firstElementChild.classList.contains("white") &&
            !G8.firstElementChild.classList.contains("black"))) &&
        (!F8.firstElementChild ||
          (!F8.firstElementChild.classList.contains("white") &&
            !F8.firstElementChild.classList.contains("black"))) &&
        (!E8.firstElementChild ||
          (!E8.firstElementChild.classList.contains("white") &&
            !E8.firstElementChild.classList.contains("black"))) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black"))) &&
        (!C8.firstElementChild ||
          (!C8.firstElementChild.classList.contains("white") &&
            !C8.firstElementChild.classList.contains("black"))) &&
        (!B8.firstElementChild ||
          (!B8.firstElementChild.classList.contains("white") &&
            !B8.firstElementChild.classList.contains("black")))
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }
    }
  }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "B1") {
      // Vertical moves (upwards)
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black")))
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black")))
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black")))
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black")))
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!B7.firstElementChild ||
          !B7.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black"))) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black")))
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!B8.firstElementChild ||
          !B8.firstElementChild.classList.contains("white")) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("white") &&
            !B7.firstElementChild.classList.contains("black"))) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black"))) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black")))
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }

      // Horizontal moves (left)
      if (
        !A1.firstElementChild ||
        !A1.firstElementChild.classList.contains("white")
      ) {
        if (
          !B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("white")
        ) {
          A1.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(A1);
        }
      }

      // Horizontal moves (right: C1 -> H1)
      if (
        !C1.firstElementChild ||
        !C1.firstElementChild.classList.contains("white")
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
        if (
          !B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("white")
        ) {
          C1.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(C1);
        }
      }
      if (
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("white")) &&
        (!C1.firstElementChild ||
          (!C1.firstElementChild.classList.contains("white") &&
            !C1.firstElementChild.classList.contains("black")))
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("white")) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!C1.firstElementChild ||
          (!C1.firstElementChild.classList.contains("white") &&
            !C1.firstElementChild.classList.contains("black")))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("white")) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black"))) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!C1.firstElementChild ||
          (!C1.firstElementChild.classList.contains("white") &&
            !C1.firstElementChild.classList.contains("black")))
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("white")) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black"))) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!C1.firstElementChild ||
          (!C1.firstElementChild.classList.contains("white") &&
            !C1.firstElementChild.classList.contains("black")))
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        (!H1.firstElementChild ||
          !H1.firstElementChild.classList.contains("white")) &&
        (!G1.firstElementChild ||
          (!G1.firstElementChild.classList.contains("white") &&
            !G1.firstElementChild.classList.contains("black"))) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black"))) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!C1.firstElementChild ||
          (!C1.firstElementChild.classList.contains("white") &&
            !C1.firstElementChild.classList.contains("black")))
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }
    }
  }
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "B1") {
      // Vertical moves (upwards)
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black")))
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black")))
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black")))
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black")))
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!B7.firstElementChild ||
          !B7.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black"))) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black")))
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!B8.firstElementChild ||
          !B8.firstElementChild.classList.contains("black")) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("white") &&
            !B7.firstElementChild.classList.contains("black"))) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black"))) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black")))
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }

      // Horizontal moves (left)
      if (
        !A1.firstElementChild ||
        !A1.firstElementChild.classList.contains("black")
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }

      // Horizontal moves (right: C1 -> H1)
      if (
        !C1.firstElementChild ||
        !C1.firstElementChild.classList.contains("black")
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
      if (
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("black")) &&
        (!C1.firstElementChild ||
          (!C1.firstElementChild.classList.contains("white") &&
            !C1.firstElementChild.classList.contains("black")))
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("black")) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!C1.firstElementChild ||
          (!C1.firstElementChild.classList.contains("white") &&
            !C1.firstElementChild.classList.contains("black")))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("black")) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black"))) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!C1.firstElementChild ||
          (!C1.firstElementChild.classList.contains("white") &&
            !C1.firstElementChild.classList.contains("black")))
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("black")) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black"))) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!C1.firstElementChild ||
          (!C1.firstElementChild.classList.contains("white") &&
            !C1.firstElementChild.classList.contains("black")))
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        (!H1.firstElementChild ||
          !H1.firstElementChild.classList.contains("black")) &&
        (!G1.firstElementChild ||
          (!G1.firstElementChild.classList.contains("white") &&
            !G1.firstElementChild.classList.contains("black"))) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black"))) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!C1.firstElementChild ||
          (!C1.firstElementChild.classList.contains("white") &&
            !C1.firstElementChild.classList.contains("black")))
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }
    }
  }

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "B2") {
      // Vertical moves (up)
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("white")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black")))
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black")))
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black")))
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!B7.firstElementChild ||
          !B7.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black"))) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black")))
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!B8.firstElementChild ||
          !B8.firstElementChild.classList.contains("white")) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("white") &&
            !B7.firstElementChild.classList.contains("black"))) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black"))) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black")))
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }

      // Vertical moves (down)
      if (
        !B1.firstElementChild ||
        !B1.firstElementChild.classList.contains("white")
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }

      // Horizontal moves (left)
      if (
        !A2.firstElementChild ||
        !A2.firstElementChild.classList.contains("white")
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }

      // Horizontal moves (right)
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("white")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black")))
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("white")) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black")))
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("white")) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black")))
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!G2.firstElementChild ||
          !G2.firstElementChild.classList.contains("white")) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black")))
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        (!H2.firstElementChild ||
          !H2.firstElementChild.classList.contains("white")) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black")))
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
    }
  }

  // BLACK ROOK for B2
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "B2") {
      // The same logic as above but replace 'white' checks with 'black' and vice versa
      // Vertical moves (up)
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("black")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("black") &&
            !B3.firstElementChild.classList.contains("white")))
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("black") &&
            !B4.firstElementChild.classList.contains("white"))) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("black") &&
            !B3.firstElementChild.classList.contains("white")))
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("black") &&
            !B5.firstElementChild.classList.contains("white"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("black") &&
            !B4.firstElementChild.classList.contains("white"))) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("black") &&
            !B3.firstElementChild.classList.contains("white")))
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!B7.firstElementChild ||
          !B7.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("black") &&
            !B6.firstElementChild.classList.contains("white"))) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("black") &&
            !B5.firstElementChild.classList.contains("white"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("black") &&
            !B4.firstElementChild.classList.contains("white"))) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("black") &&
            !B3.firstElementChild.classList.contains("white")))
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!B8.firstElementChild ||
          !B8.firstElementChild.classList.contains("black")) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("black") &&
            !B7.firstElementChild.classList.contains("white"))) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("black") &&
            !B6.firstElementChild.classList.contains("white"))) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("black") &&
            !B5.firstElementChild.classList.contains("white"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("black") &&
            !B4.firstElementChild.classList.contains("white"))) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("black") &&
            !B3.firstElementChild.classList.contains("white")))
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }

      // Vertical moves (down)
      if (
        !B1.firstElementChild ||
        !B1.firstElementChild.classList.contains("black")
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }

      // Horizontal moves (left)
      if (
        !A2.firstElementChild ||
        !A2.firstElementChild.classList.contains("black")
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }

      // Horizontal moves (right)
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("black") &&
            !C2.firstElementChild.classList.contains("white")))
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("black")) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("black") &&
            !D2.firstElementChild.classList.contains("white"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("black") &&
            !C2.firstElementChild.classList.contains("white")))
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("black")) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("black") &&
            !E2.firstElementChild.classList.contains("white"))) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("black") &&
            !D2.firstElementChild.classList.contains("white"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("black") &&
            !C2.firstElementChild.classList.contains("white")))
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!G2.firstElementChild ||
          !G2.firstElementChild.classList.contains("black")) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("black") &&
            !F2.firstElementChild.classList.contains("white"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("black") &&
            !E2.firstElementChild.classList.contains("white"))) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("black") &&
            !D2.firstElementChild.classList.contains("white"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("black") &&
            !C2.firstElementChild.classList.contains("white")))
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        (!H2.firstElementChild ||
          !H2.firstElementChild.classList.contains("black")) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("black") &&
            !G2.firstElementChild.classList.contains("white"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("black") &&
            !F2.firstElementChild.classList.contains("white"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("black") &&
            !E2.firstElementChild.classList.contains("white"))) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("black") &&
            !D2.firstElementChild.classList.contains("white"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("black") &&
            !C2.firstElementChild.classList.contains("white")))
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
    }
  }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "B3") {
      // Vertical moves (up)
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("white")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black")))
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black")))
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!B7.firstElementChild ||
          !B7.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black"))) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black")))
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!B8.firstElementChild ||
          !B8.firstElementChild.classList.contains("white")) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("white") &&
            !B7.firstElementChild.classList.contains("black"))) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black"))) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black")))
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }

      // Vertical moves (down)
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black"))
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }

      // Horizontal moves (left)
      if (
        !A3.firstElementChild ||
        !A3.firstElementChild.classList.contains("white")
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }

      // Horizontal moves (right)
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("white")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black")))
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black")))
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black")))
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!G3.firstElementChild ||
          !G3.firstElementChild.classList.contains("white")) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black")))
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        (!H3.firstElementChild ||
          !H3.firstElementChild.classList.contains("white")) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black")))
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
    }
  }
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "B3") {
      // Vertical moves (up)
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("black")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black")))
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black")))
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!B7.firstElementChild ||
          !B7.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black"))) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black")))
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!B8.firstElementChild ||
          !B8.firstElementChild.classList.contains("black")) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("white") &&
            !B7.firstElementChild.classList.contains("black"))) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black"))) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black")))
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }

      // Vertical moves (down)
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white"))
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }

      // Horizontal moves (left)
      if (
        !A3.firstElementChild ||
        !A3.firstElementChild.classList.contains("black")
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }

      // Horizontal moves (right)
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("black")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black")))
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("black")) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black")))
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("black")) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black")))
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!G3.firstElementChild ||
          !G3.firstElementChild.classList.contains("black")) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black")))
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        (!H3.firstElementChild ||
          !H3.firstElementChild.classList.contains("black")) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black")))
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
    }
  }
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "B4") {
      // Vertical moves (up)
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("black")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black")))
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!B7.firstElementChild ||
          !B7.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black"))) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black")))
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!B8.firstElementChild ||
          !B8.firstElementChild.classList.contains("black")) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("white") &&
            !B7.firstElementChild.classList.contains("black"))) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black"))) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black")))
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }

      // Vertical moves (down)
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("black")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black")))
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black"))) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black")))
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }

      // Horizontal moves (left)
      if (
        !A4.firstElementChild ||
        !A4.firstElementChild.classList.contains("black")
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }

      // Horizontal moves (right)
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("black")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black")))
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black")))
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("black")) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black")))
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!G4.firstElementChild ||
          !G4.firstElementChild.classList.contains("black")) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black")))
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        (!H4.firstElementChild ||
          !H4.firstElementChild.classList.contains("black")) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black")))
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
    }
  }

  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "B4") {
      // Vertical moves (up)
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("white")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black")))
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!B7.firstElementChild ||
          !B7.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black"))) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black")))
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!B8.firstElementChild ||
          !B8.firstElementChild.classList.contains("white")) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("white") &&
            !B7.firstElementChild.classList.contains("black"))) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black"))) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black")))
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }

      // Vertical moves (down)
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("white")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black")))
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black"))) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black")))
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }

      // Horizontal moves (left)
      if (
        !A4.firstElementChild ||
        !A4.firstElementChild.classList.contains("white")
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }

      // Horizontal moves (right)
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("white")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black")))
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black")))
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("white")) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black")))
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!G4.firstElementChild ||
          !G4.firstElementChild.classList.contains("white")) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black")))
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        (!H4.firstElementChild ||
          !H4.firstElementChild.classList.contains("white")) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black")))
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
    }
  }
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "B5") {
      // Vertical moves (up)
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("white")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!B7.firstElementChild ||
          !B7.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black")))
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!B8.firstElementChild ||
          !B8.firstElementChild.classList.contains("white")) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("white") &&
            !B7.firstElementChild.classList.contains("black"))) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black")))
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }

      // Vertical moves (down)
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("white")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black")))
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black")))
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black"))) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black")))
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }

      // Horizontal moves (left)
      if (
        !A5.firstElementChild ||
        !A5.firstElementChild.classList.contains("white")
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }

      // Horizontal moves (right)
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("white")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black")))
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("white")) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black")))
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("white")) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black")))
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains("white")) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black")))
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        (!H5.firstElementChild ||
          !H5.firstElementChild.classList.contains("white")) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black")))
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
    }
  }
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "B5") {
      // Vertical moves (up)
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("black")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!B7.firstElementChild ||
          !B7.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black")))
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!B8.firstElementChild ||
          !B8.firstElementChild.classList.contains("black")) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("white") &&
            !B7.firstElementChild.classList.contains("black"))) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black")))
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }

      // Vertical moves (down)
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("black")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black")))
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black")))
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black"))) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black")))
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }

      // Horizontal moves (left)
      if (
        !A5.firstElementChild ||
        !A5.firstElementChild.classList.contains("black")
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }

      // Horizontal moves (right)
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("black")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black")))
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("black")) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black")))
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("black")) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black")))
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains("black")) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black")))
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        (!H5.firstElementChild ||
          !H5.firstElementChild.classList.contains("black")) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black")))
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
    }
  }
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "B6") {
      // Vertical moves (up)
      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("white")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!B8.firstElementChild ||
          !B8.firstElementChild.classList.contains("white")) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("white") &&
            !B7.firstElementChild.classList.contains("black")))
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }

      // Vertical moves (down)
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("white")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black")))
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black")))
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black")))
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black"))) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black")))
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }

      // Horizontal moves (left)
      if (
        !A6.firstElementChild ||
        !A6.firstElementChild.classList.contains("white")
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }

      // Horizontal moves (right)
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("white")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black")))
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("white")) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black")))
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("white")) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black")))
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("white")) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black")))
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!H6.firstElementChild ||
          !H6.firstElementChild.classList.contains("white")) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black")))
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
    }
  }
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "B6") {
      // Vertical moves (up)
      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("black")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!B8.firstElementChild ||
          !B8.firstElementChild.classList.contains("black")) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("white") &&
            !B7.firstElementChild.classList.contains("black")))
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }

      // Vertical moves (down)
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("black")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black")))
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black")))
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black")))
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black"))) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black")))
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }

      // Horizontal moves (left)
      if (
        !A6.firstElementChild ||
        !A6.firstElementChild.classList.contains("black")
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }

      // Horizontal moves (right)
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("black")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black")))
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("black")) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black")))
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("black")) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black")))
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("black")) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black")))
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!H6.firstElementChild ||
          !H6.firstElementChild.classList.contains("black")) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black")))
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
    }
  }
  // White Rook B7
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "B7") {
      // ===== Vertical (Up) =====
      if (
        !B8.firstElementChild ||
        !B8.firstElementChild.classList.contains("white")
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }

      // ===== Vertical (Down) =====
      if (!B6.firstElementChild) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);

        if (!B5.firstElementChild) {
          B5.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(B5);

          if (!B4.firstElementChild) {
            B4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B4);

            if (!B3.firstElementChild) {
              B3.classList.toggle("highlightBlue");
              recentlyHighlightedElements.push(B3);

              if (!B2.firstElementChild) {
                B2.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(B2);

                if (
                  !B1.firstElementChild ||
                  !B1.firstElementChild.classList.contains("white")
                ) {
                  B1.classList.toggle("highlightBlue");
                  recentlyHighlightedElements.push(B1);
                }
              } else if (B2.firstElementChild.classList.contains("black")) {
                B2.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(B2);
              }
            } else if (B3.firstElementChild.classList.contains("black")) {
              B3.classList.toggle("highlightBlue");
              recentlyHighlightedElements.push(B3);
            }
          } else if (B4.firstElementChild.classList.contains("black")) {
            B4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B4);
          }
        } else if (B5.firstElementChild.classList.contains("black")) {
          B5.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(B5);
        }
      } else if (B6.firstElementChild.classList.contains("black")) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }

      // ===== Horizontal (Right) =====
      if (!C7.firstElementChild) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);

        if (!D7.firstElementChild) {
          D7.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(D7);

          if (!E7.firstElementChild) {
            E7.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E7);

            if (!F7.firstElementChild) {
              F7.classList.toggle("highlightBlue");
              recentlyHighlightedElements.push(F7);

              if (!G7.firstElementChild) {
                G7.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(G7);

                if (
                  !H7.firstElementChild ||
                  !H7.firstElementChild.classList.contains("white")
                ) {
                  H7.classList.toggle("highlightBlue");
                  recentlyHighlightedElements.push(H7);
                }
              } else if (G7.firstElementChild.classList.contains("black")) {
                G7.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(G7);
              }
            } else if (F7.firstElementChild.classList.contains("black")) {
              F7.classList.toggle("highlightBlue");
              recentlyHighlightedElements.push(F7);
            }
          } else if (E7.firstElementChild.classList.contains("black")) {
            E7.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E7);
          }
        } else if (D7.firstElementChild.classList.contains("black")) {
          D7.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(D7);
        }
      } else if (C7.firstElementChild.classList.contains("black")) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }

      // ===== Horizontal (Left) =====
      if (
        !A7.firstElementChild ||
        !A7.firstElementChild.classList.contains("white")
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
    }
  }
  // Black Rook on B7
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "B7") {
      // ---- Vertical Down ----
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("black")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);

        if (!B6.firstElementChild) {
          if (
            !B5.firstElementChild ||
            !B5.firstElementChild.classList.contains("black")
          ) {
            B5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B5);

            if (!B5.firstElementChild) {
              if (
                !B4.firstElementChild ||
                !B4.firstElementChild.classList.contains("black")
              ) {
                B4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(B4);

                if (!B4.firstElementChild) {
                  if (
                    !B3.firstElementChild ||
                    !B3.firstElementChild.classList.contains("black")
                  ) {
                    B3.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(B3);

                    if (!B3.firstElementChild) {
                      if (
                        !B2.firstElementChild ||
                        !B2.firstElementChild.classList.contains("black")
                      ) {
                        B2.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(B2);

                        if (!B2.firstElementChild) {
                          if (
                            !B1.firstElementChild ||
                            !B1.firstElementChild.classList.contains("black")
                          ) {
                            B1.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(B1);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      // ---- Vertical Up ----
      if (
        !B8.firstElementChild ||
        !B8.firstElementChild.classList.contains("black")
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }

      // ---- Horizontal Left ----
      if (
        !A7.firstElementChild ||
        !A7.firstElementChild.classList.contains("black")
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }

      // ---- Horizontal Right ----
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("black")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);

        if (!C7.firstElementChild) {
          if (
            !D7.firstElementChild ||
            !D7.firstElementChild.classList.contains("black")
          ) {
            D7.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D7);

            if (!D7.firstElementChild) {
              if (
                !E7.firstElementChild ||
                !E7.firstElementChild.classList.contains("black")
              ) {
                E7.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E7);

                if (!E7.firstElementChild) {
                  if (
                    !F7.firstElementChild ||
                    !F7.firstElementChild.classList.contains("black")
                  ) {
                    F7.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(F7);

                    if (!F7.firstElementChild) {
                      if (
                        !G7.firstElementChild ||
                        !G7.firstElementChild.classList.contains("black")
                      ) {
                        G7.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(G7);

                        if (!G7.firstElementChild) {
                          if (
                            !H7.firstElementChild ||
                            !H7.firstElementChild.classList.contains("black")
                          ) {
                            H7.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(H7);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // White Rook on B8
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "B8") {
      // ---- Vertical Down ----
      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("white")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);

        if (!B7.firstElementChild) {
          if (
            !B6.firstElementChild ||
            !B6.firstElementChild.classList.contains("white")
          ) {
            B6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B6);

            if (!B6.firstElementChild) {
              if (
                !B5.firstElementChild ||
                !B5.firstElementChild.classList.contains("white")
              ) {
                B5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(B5);

                if (!B5.firstElementChild) {
                  if (
                    !B4.firstElementChild ||
                    !B4.firstElementChild.classList.contains("white")
                  ) {
                    B4.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(B4);

                    if (!B4.firstElementChild) {
                      if (
                        !B3.firstElementChild ||
                        !B3.firstElementChild.classList.contains("white")
                      ) {
                        B3.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(B3);

                        if (!B3.firstElementChild) {
                          if (
                            !B2.firstElementChild ||
                            !B2.firstElementChild.classList.contains("white")
                          ) {
                            B2.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(B2);

                            if (!B2.firstElementChild) {
                              if (
                                !B1.firstElementChild ||
                                !B1.firstElementChild.classList.contains(
                                  "white"
                                )
                              ) {
                                B1.classList.toggle("highlightBlue");
                                recentlyHighlightedElements.push(B1);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      // ---- Horizontal Left ----
      if (
        !A8.firstElementChild ||
        !A8.firstElementChild.classList.contains("white")
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }

      // ---- Horizontal Right ----
      if (
        !C8.firstElementChild ||
        !C8.firstElementChild.classList.contains("white")
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);

        if (!C8.firstElementChild) {
          if (
            !D8.firstElementChild ||
            !D8.firstElementChild.classList.contains("white")
          ) {
            D8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D8);

            if (!D8.firstElementChild) {
              if (
                !E8.firstElementChild ||
                !E8.firstElementChild.classList.contains("white")
              ) {
                E8.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E8);

                if (!E8.firstElementChild) {
                  if (
                    !F8.firstElementChild ||
                    !F8.firstElementChild.classList.contains("white")
                  ) {
                    F8.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(F8);

                    if (!F8.firstElementChild) {
                      if (
                        !G8.firstElementChild ||
                        !G8.firstElementChild.classList.contains("white")
                      ) {
                        G8.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(G8);

                        if (!G8.firstElementChild) {
                          if (
                            !H8.firstElementChild ||
                            !H8.firstElementChild.classList.contains("white")
                          ) {
                            H8.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(H8);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "C1") {
      // Vertical moves
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("white")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black")))
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black")))
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black")))
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black")))
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("white")) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black")))
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!C8.firstElementChild ||
          !C8.firstElementChild.classList.contains("white")) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black")))
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }

      // Horizontal moves (left)
      if (
        !B1.firstElementChild ||
        !B1.firstElementChild.classList.contains("white")
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("white")) &&
        (!B1.firstElementChild ||
          (!B1.firstElementChild.classList.contains("white") &&
            !B1.firstElementChild.classList.contains("black")))
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }

      // Horizontal moves (right)
      if (
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("white")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("white")) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black")))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("white")) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black"))) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black")))
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("white")) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black"))) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black")))
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        (!H1.firstElementChild ||
          !H1.firstElementChild.classList.contains("white")) &&
        (!G1.firstElementChild ||
          (!G1.firstElementChild.classList.contains("white") &&
            !G1.firstElementChild.classList.contains("black"))) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black"))) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black")))
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }
    }
  }
  // Black Rook - C1
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "C1") {
      // Vertical moves
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("black") &&
            !C2.firstElementChild.classList.contains("white")))
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("black") &&
            !C3.firstElementChild.classList.contains("white"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("black") &&
            !C2.firstElementChild.classList.contains("white")))
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("black") &&
            !C4.firstElementChild.classList.contains("white"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("black") &&
            !C3.firstElementChild.classList.contains("white"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("black") &&
            !C2.firstElementChild.classList.contains("white")))
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("black") &&
            !C5.firstElementChild.classList.contains("white"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("black") &&
            !C4.firstElementChild.classList.contains("white"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("black") &&
            !C3.firstElementChild.classList.contains("white"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("black") &&
            !C2.firstElementChild.classList.contains("white")))
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("black")) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("black") &&
            !C6.firstElementChild.classList.contains("white"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("black") &&
            !C5.firstElementChild.classList.contains("white"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("black") &&
            !C4.firstElementChild.classList.contains("white"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("black") &&
            !C3.firstElementChild.classList.contains("white"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("black") &&
            !C2.firstElementChild.classList.contains("white")))
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!C8.firstElementChild ||
          !C8.firstElementChild.classList.contains("black")) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("black") &&
            !C7.firstElementChild.classList.contains("white"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("black") &&
            !C6.firstElementChild.classList.contains("white"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("black") &&
            !C5.firstElementChild.classList.contains("white"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("black") &&
            !C4.firstElementChild.classList.contains("white"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("black") &&
            !C3.firstElementChild.classList.contains("white"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("black") &&
            !C2.firstElementChild.classList.contains("white")))
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }

      // Horizontal moves (left)
      if (
        !B1.firstElementChild ||
        !B1.firstElementChild.classList.contains("black")
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("black")) &&
        (!B1.firstElementChild ||
          (!B1.firstElementChild.classList.contains("black") &&
            !B1.firstElementChild.classList.contains("white")))
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }

      // Horizontal moves (right)
      if (
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("black")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("black")) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("black") &&
            !D1.firstElementChild.classList.contains("white")))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("black")) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("black") &&
            !E1.firstElementChild.classList.contains("white"))) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("black") &&
            !D1.firstElementChild.classList.contains("white")))
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("black")) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("black") &&
            !F1.firstElementChild.classList.contains("white"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("black") &&
            !E1.firstElementChild.classList.contains("white"))) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("black") &&
            !D1.firstElementChild.classList.contains("white")))
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        (!H1.firstElementChild ||
          !H1.firstElementChild.classList.contains("black")) &&
        (!G1.firstElementChild ||
          (!G1.firstElementChild.classList.contains("black") &&
            !G1.firstElementChild.classList.contains("white"))) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("black") &&
            !F1.firstElementChild.classList.contains("white"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("black") &&
            !E1.firstElementChild.classList.contains("white"))) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("black") &&
            !D1.firstElementChild.classList.contains("white")))
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }
    }
  }

  // White Rook C2
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "C2") {
      // Vertical UP (C3 → C8)
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("white")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black")))
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black")))
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black")))
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("white")) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black")))
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!C8.firstElementChild ||
          !C8.firstElementChild.classList.contains("white")) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black")))
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }

      // Vertical DOWN (C1)
      if (
        !C1.firstElementChild ||
        !C1.firstElementChild.classList.contains("white")
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }

      // Horizontal LEFT (B2 → A2)
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black")))
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }

      // Horizontal RIGHT (D2 → H2)
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("white")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("white")) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black")))
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("white")) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black")))
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!G2.firstElementChild ||
          !G2.firstElementChild.classList.contains("white")) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black")))
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        (!H2.firstElementChild ||
          !H2.firstElementChild.classList.contains("white")) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black")))
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
    }
  }

  // Black Rook - C2
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "C2") {
      // Vertical UP (C3 → C8)
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("black")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("black") &&
            !C3.firstElementChild.classList.contains("white")))
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("black") &&
            !C4.firstElementChild.classList.contains("white"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("black") &&
            !C3.firstElementChild.classList.contains("white")))
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("black") &&
            !C5.firstElementChild.classList.contains("white"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("black") &&
            !C4.firstElementChild.classList.contains("white"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("black") &&
            !C3.firstElementChild.classList.contains("white")))
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("black")) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("black") &&
            !C6.firstElementChild.classList.contains("white"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("black") &&
            !C5.firstElementChild.classList.contains("white"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("black") &&
            !C4.firstElementChild.classList.contains("white"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("black") &&
            !C3.firstElementChild.classList.contains("white")))
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!C8.firstElementChild ||
          !C8.firstElementChild.classList.contains("black")) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("black") &&
            !C7.firstElementChild.classList.contains("white"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("black") &&
            !C6.firstElementChild.classList.contains("white"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("black") &&
            !C5.firstElementChild.classList.contains("white"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("black") &&
            !C4.firstElementChild.classList.contains("white"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("black") &&
            !C3.firstElementChild.classList.contains("white")))
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }

      // Vertical DOWN (C1)
      if (
        !C1.firstElementChild ||
        !C1.firstElementChild.classList.contains("black")
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }

      // Horizontal LEFT (B2 → A2)
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("black") &&
            !B2.firstElementChild.classList.contains("white")))
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }

      // Horizontal RIGHT (D2 → H2)
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("black")) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("black") &&
            !D2.firstElementChild.classList.contains("white")))
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("black")) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("black") &&
            !E2.firstElementChild.classList.contains("white"))) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("black") &&
            !D2.firstElementChild.classList.contains("white")))
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!G2.firstElementChild ||
          !G2.firstElementChild.classList.contains("black")) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("black") &&
            !F2.firstElementChild.classList.contains("white"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("black") &&
            !E2.firstElementChild.classList.contains("white"))) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("black") &&
            !D2.firstElementChild.classList.contains("white")))
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        (!H2.firstElementChild ||
          !H2.firstElementChild.classList.contains("black")) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("black") &&
            !G2.firstElementChild.classList.contains("white"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("black") &&
            !F2.firstElementChild.classList.contains("white"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("black") &&
            !E2.firstElementChild.classList.contains("white"))) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("black") &&
            !D2.firstElementChild.classList.contains("white")))
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
    }
  }
  // White Rook - C3
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "C3") {
      // Vertical UP (C4 → C8)
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("white")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black")))
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black")))
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("white")) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black")))
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!C8.firstElementChild ||
          !C8.firstElementChild.classList.contains("white")) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black")))
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }

      // Vertical DOWN (C2 → C1)
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("white")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("white"))
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }

      // Horizontal LEFT (B3 → A3)
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("white")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black"))
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }

      // Horizontal RIGHT (D3 → H3)
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("white")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black")))
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black")))
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!G3.firstElementChild ||
          !G3.firstElementChild.classList.contains("white")) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black")))
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        (!H3.firstElementChild ||
          !H3.firstElementChild.classList.contains("white")) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black")))
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
    }
  }
  // Black Rook - C3
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "C3") {
      // Vertical UP (C4 → C8)
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("black")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black")))
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black")))
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("black")) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black")))
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!C8.firstElementChild ||
          !C8.firstElementChild.classList.contains("black")) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black")))
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }

      // Vertical DOWN (C2 → C1)
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("black"))
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }

      // Horizontal LEFT (B3 → A3)
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("black")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white"))
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }

      // Horizontal RIGHT (D3 → H3)
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("black")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("black")) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black")))
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("black")) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black")))
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!G3.firstElementChild ||
          !G3.firstElementChild.classList.contains("black")) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black")))
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        (!H3.firstElementChild ||
          !H3.firstElementChild.classList.contains("black")) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black")))
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
    }
  }
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "C4") {
      // Vertical UP (C5 → C8)
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("white")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black")))
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("white")) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black")))
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!C8.firstElementChild ||
          !C8.firstElementChild.classList.contains("white")) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black")))
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }

      // Vertical DOWN (C3 → C1)
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("white")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black")))
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black")))
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }

      // Horizontal LEFT (B4 → A4)
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("white")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black")))
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }

      // Horizontal RIGHT (D4 → H4)
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("white")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black")))
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("white")) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black")))
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!G4.firstElementChild ||
          !G4.firstElementChild.classList.contains("white")) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black")))
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        (!H4.firstElementChild ||
          !H4.firstElementChild.classList.contains("white")) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black")))
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
    }
  }
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "C4") {
      // Vertical UP (C5 → C8)
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("black")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black")))
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("black")) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black")))
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!C8.firstElementChild ||
          !C8.firstElementChild.classList.contains("black")) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black")))
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }

      // Vertical DOWN (C3 → C1)
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("black")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black")))
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black")))
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }

      // Horizontal LEFT (B4 → A4)
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("black")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black")))
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }

      // Horizontal RIGHT (D4 → H4)
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black")))
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("black")) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black")))
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!G4.firstElementChild ||
          !G4.firstElementChild.classList.contains("black")) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black")))
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        (!H4.firstElementChild ||
          !H4.firstElementChild.classList.contains("black")) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black")))
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
    }
  }
  // White Rook - C5
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "C5") {
      // Vertical moves (up)
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("white")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("white")) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black")))
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!C8.firstElementChild ||
          !C8.firstElementChild.classList.contains("white")) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black")))
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }

      // Vertical moves (down)
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("white")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black")))
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black")))
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black")))
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }

      // Horizontal moves (left)
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("white")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black")))
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }

      // Horizontal moves (right)
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("white")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("white")) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black")))
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("white")) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black")))
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains("white")) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black")))
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        (!H5.firstElementChild ||
          !H5.firstElementChild.classList.contains("white")) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black")))
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
    }
  }
  // Black Rook at C5
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "C5") {
      // Up
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("black")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("black")) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("black") &&
            !C6.firstElementChild.classList.contains("white")))
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!C8.firstElementChild ||
          !C8.firstElementChild.classList.contains("black")) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("black") &&
            !C7.firstElementChild.classList.contains("white"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("black") &&
            !C6.firstElementChild.classList.contains("white")))
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }

      // Down
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("black")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("black") &&
            !C4.firstElementChild.classList.contains("white")))
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("black") &&
            !C3.firstElementChild.classList.contains("white"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("black") &&
            !C4.firstElementChild.classList.contains("white")))
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("black") &&
            !C2.firstElementChild.classList.contains("white"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("black") &&
            !C3.firstElementChild.classList.contains("white"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("black") &&
            !C4.firstElementChild.classList.contains("white")))
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }

      // Right
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("black")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("black")) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("black") &&
            !D5.firstElementChild.classList.contains("white")))
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("black")) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("black") &&
            !E5.firstElementChild.classList.contains("white"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("black") &&
            !D5.firstElementChild.classList.contains("white")))
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains("black")) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("black") &&
            !F5.firstElementChild.classList.contains("white"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("black") &&
            !E5.firstElementChild.classList.contains("white"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("black") &&
            !D5.firstElementChild.classList.contains("white")))
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        (!H5.firstElementChild ||
          !H5.firstElementChild.classList.contains("black")) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("black") &&
            !G5.firstElementChild.classList.contains("white"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("black") &&
            !F5.firstElementChild.classList.contains("white"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("black") &&
            !E5.firstElementChild.classList.contains("white"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("black") &&
            !D5.firstElementChild.classList.contains("white")))
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }

      // Left
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("black")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("black") &&
            !B5.firstElementChild.classList.contains("white")))
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }
    }
  }
  // White Rook at C6
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "C6") {
      // Vertical moves (up)
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("white")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!C8.firstElementChild ||
          !C8.firstElementChild.classList.contains("white")) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black")))
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }

      // Vertical moves (down)
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("white")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black")))
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black")))
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black")))
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black")))
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }

      // Horizontal moves (right)
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("white")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("white")) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black")))
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("white")) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black")))
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("white")) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black")))
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!H6.firstElementChild ||
          !H6.firstElementChild.classList.contains("white")) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black")))
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }

      // Horizontal moves (left)
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("white")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black")))
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
    }
  }
  // Black Rook - C6
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "C6") {
      // === Vertical Moves (Up) ===
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("black")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!C8.firstElementChild ||
          !C8.firstElementChild.classList.contains("black")) &&
        !C7.firstElementChild
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }

      // === Vertical Moves (Down) ===
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("black")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("black")) &&
        !C5.firstElementChild
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        !C5.firstElementChild &&
        !C4.firstElementChild
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        !C5.firstElementChild &&
        !C4.firstElementChild &&
        !C3.firstElementChild
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("black")) &&
        !C5.firstElementChild &&
        !C4.firstElementChild &&
        !C3.firstElementChild &&
        !C2.firstElementChild
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }

      // === Horizontal Moves (Right) ===
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("black")) &&
        !D6.firstElementChild
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("black")) &&
        !D6.firstElementChild &&
        !E6.firstElementChild
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("black")) &&
        !D6.firstElementChild &&
        !E6.firstElementChild &&
        !F6.firstElementChild
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!H6.firstElementChild ||
          !H6.firstElementChild.classList.contains("black")) &&
        !D6.firstElementChild &&
        !E6.firstElementChild &&
        !F6.firstElementChild &&
        !G6.firstElementChild
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }

      // === Horizontal Moves (Left) ===
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("black")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        !B6.firstElementChild
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
    }
  }
  // White Rook - C7
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "C7") {
      // === Vertical UP (C8) ===
      if (
        !C8.firstElementChild ||
        !C8.firstElementChild.classList.contains("white")
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }

      // === Vertical DOWN (C6 → C1) ===
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("white")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        !C6.firstElementChild
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        !C6.firstElementChild &&
        !C5.firstElementChild
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        !C6.firstElementChild &&
        !C5.firstElementChild &&
        !C4.firstElementChild
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white")) &&
        !C6.firstElementChild &&
        !C5.firstElementChild &&
        !C4.firstElementChild &&
        !C3.firstElementChild
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("white")) &&
        !C6.firstElementChild &&
        !C5.firstElementChild &&
        !C4.firstElementChild &&
        !C3.firstElementChild &&
        !C2.firstElementChild
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }

      // === Horizontal RIGHT (D7 → H7) ===
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("white")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("white")) &&
        !D7.firstElementChild
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!F7.firstElementChild ||
          !F7.firstElementChild.classList.contains("white")) &&
        !D7.firstElementChild &&
        !E7.firstElementChild
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("white")) &&
        !D7.firstElementChild &&
        !E7.firstElementChild &&
        !F7.firstElementChild
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        (!H7.firstElementChild ||
          !H7.firstElementChild.classList.contains("white")) &&
        !D7.firstElementChild &&
        !E7.firstElementChild &&
        !F7.firstElementChild &&
        !G7.firstElementChild
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }

      // === Horizontal LEFT (B7 → A7) ===
      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("white")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("white")) &&
        !B7.firstElementChild
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
    }
  }
  // Black Rook - C7
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "C7") {
      // === Vertical UP (C8) ===
      if (
        !C8.firstElementChild ||
        !C8.firstElementChild.classList.contains("black")
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }

      // === Vertical DOWN (C6 → C1) ===
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("black")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        !C6.firstElementChild
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("black")) &&
        !C6.firstElementChild &&
        !C5.firstElementChild
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        !C6.firstElementChild &&
        !C5.firstElementChild &&
        !C4.firstElementChild
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        !C6.firstElementChild &&
        !C5.firstElementChild &&
        !C4.firstElementChild &&
        !C3.firstElementChild
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("black")) &&
        !C6.firstElementChild &&
        !C5.firstElementChild &&
        !C4.firstElementChild &&
        !C3.firstElementChild &&
        !C2.firstElementChild
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }

      // === Horizontal RIGHT (D7 → H7) ===
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("black")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("black")) &&
        !D7.firstElementChild
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!F7.firstElementChild ||
          !F7.firstElementChild.classList.contains("black")) &&
        !D7.firstElementChild &&
        !E7.firstElementChild
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("black")) &&
        !D7.firstElementChild &&
        !E7.firstElementChild &&
        !F7.firstElementChild
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        (!H7.firstElementChild ||
          !H7.firstElementChild.classList.contains("black")) &&
        !D7.firstElementChild &&
        !E7.firstElementChild &&
        !F7.firstElementChild &&
        !G7.firstElementChild
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }

      // === Horizontal LEFT (B7 → A7) ===
      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("black")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("black")) &&
        !B7.firstElementChild
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
    }
  }
  // White Rook - C8
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "C8") {
      // === Vertical DOWN (C7 → C1) ===
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("white")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("white")) &&
        !C7.firstElementChild
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        !C7.firstElementChild &&
        !C6.firstElementChild
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        !C7.firstElementChild &&
        !C6.firstElementChild &&
        !C5.firstElementChild
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        !C7.firstElementChild &&
        !C6.firstElementChild &&
        !C5.firstElementChild &&
        !C4.firstElementChild
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white")) &&
        !C7.firstElementChild &&
        !C6.firstElementChild &&
        !C5.firstElementChild &&
        !C4.firstElementChild &&
        !C3.firstElementChild
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("white")) &&
        !C7.firstElementChild &&
        !C6.firstElementChild &&
        !C5.firstElementChild &&
        !C4.firstElementChild &&
        !C3.firstElementChild &&
        !C2.firstElementChild
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }

      // === Horizontal LEFT (B8 → A8) ===
      if (
        !B8.firstElementChild ||
        !B8.firstElementChild.classList.contains("white")
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }
      if (
        (!A8.firstElementChild ||
          !A8.firstElementChild.classList.contains("white")) &&
        !B8.firstElementChild
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }

      // === Horizontal RIGHT (D8 → H8) ===
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("white")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }
      if (
        (!E8.firstElementChild ||
          !E8.firstElementChild.classList.contains("white")) &&
        !D8.firstElementChild
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }
      if (
        (!F8.firstElementChild ||
          !F8.firstElementChild.classList.contains("white")) &&
        !D8.firstElementChild &&
        !E8.firstElementChild
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
      if (
        (!G8.firstElementChild ||
          !G8.firstElementChild.classList.contains("white")) &&
        !D8.firstElementChild &&
        !E8.firstElementChild &&
        !F8.firstElementChild
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }
      if (
        (!H8.firstElementChild ||
          !H8.firstElementChild.classList.contains("white")) &&
        !D8.firstElementChild &&
        !E8.firstElementChild &&
        !F8.firstElementChild &&
        !G8.firstElementChild
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }
    }
  }
  // Black Rook - C8
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "C8") {
      // === Vertical DOWN (C7 → C1) ===
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("black")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("black")) &&
        !C7.firstElementChild
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        !C7.firstElementChild &&
        !C6.firstElementChild
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("black")) &&
        !C7.firstElementChild &&
        !C6.firstElementChild &&
        !C5.firstElementChild
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        !C7.firstElementChild &&
        !C6.firstElementChild &&
        !C5.firstElementChild &&
        !C4.firstElementChild
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        !C7.firstElementChild &&
        !C6.firstElementChild &&
        !C5.firstElementChild &&
        !C4.firstElementChild &&
        !C3.firstElementChild
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("black")) &&
        !C7.firstElementChild &&
        !C6.firstElementChild &&
        !C5.firstElementChild &&
        !C4.firstElementChild &&
        !C3.firstElementChild &&
        !C2.firstElementChild
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }

      // === Horizontal LEFT (B8 → A8) ===
      if (
        !B8.firstElementChild ||
        !B8.firstElementChild.classList.contains("black")
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }
      if (
        (!A8.firstElementChild ||
          !A8.firstElementChild.classList.contains("black")) &&
        !B8.firstElementChild
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }

      // === Horizontal RIGHT (D8 → H8) ===
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("black")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }
      if (
        (!E8.firstElementChild ||
          !E8.firstElementChild.classList.contains("black")) &&
        !D8.firstElementChild
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }
      if (
        (!F8.firstElementChild ||
          !F8.firstElementChild.classList.contains("black")) &&
        !D8.firstElementChild &&
        !E8.firstElementChild
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
      if (
        (!G8.firstElementChild ||
          !G8.firstElementChild.classList.contains("black")) &&
        !D8.firstElementChild &&
        !E8.firstElementChild &&
        !F8.firstElementChild
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }
      if (
        (!H8.firstElementChild ||
          !H8.firstElementChild.classList.contains("black")) &&
        !D8.firstElementChild &&
        !E8.firstElementChild &&
        !F8.firstElementChild &&
        !G8.firstElementChild
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }
    }
  }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // White Rook - D1
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "D1") {
      // === Vertical UP (D2 → D8) ===
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("white")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("white")) &&
        !D2.firstElementChild
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        !D2.firstElementChild &&
        !D3.firstElementChild
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("white")) &&
        !D2.firstElementChild &&
        !D3.firstElementChild &&
        !D4.firstElementChild
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        !D2.firstElementChild &&
        !D3.firstElementChild &&
        !D4.firstElementChild &&
        !D5.firstElementChild
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!D7.firstElementChild ||
          !D7.firstElementChild.classList.contains("white")) &&
        !D2.firstElementChild &&
        !D3.firstElementChild &&
        !D4.firstElementChild &&
        !D5.firstElementChild &&
        !D6.firstElementChild
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!D8.firstElementChild ||
          !D8.firstElementChild.classList.contains("white")) &&
        !D2.firstElementChild &&
        !D3.firstElementChild &&
        !D4.firstElementChild &&
        !D5.firstElementChild &&
        !D6.firstElementChild &&
        !D7.firstElementChild
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }

      // === Vertical DOWN (D1 → already at bottom, no squares below) ===

      // === Horizontal LEFT (C1 → A1) ===
      if (
        !C1.firstElementChild ||
        !C1.firstElementChild.classList.contains("white")
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
      if (
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("white")) &&
        !C1.firstElementChild
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("white")) &&
        !C1.firstElementChild &&
        !B1.firstElementChild
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }

      // === Horizontal RIGHT (E1 → H1) ===
      if (
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("white")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("white")) &&
        !E1.firstElementChild
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("white")) &&
        !E1.firstElementChild &&
        !F1.firstElementChild
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        (!H1.firstElementChild ||
          !H1.firstElementChild.classList.contains("white")) &&
        !E1.firstElementChild &&
        !F1.firstElementChild &&
        !G1.firstElementChild
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }
    }
  }
  // Black Rook - D1
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "D1") {
      // === Vertical UP (D2 → D8) ===
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("black")) &&
        !D2.firstElementChild
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        !D2.firstElementChild &&
        !D3.firstElementChild
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("black")) &&
        !D2.firstElementChild &&
        !D3.firstElementChild &&
        !D4.firstElementChild
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        !D2.firstElementChild &&
        !D3.firstElementChild &&
        !D4.firstElementChild &&
        !D5.firstElementChild
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!D7.firstElementChild ||
          !D7.firstElementChild.classList.contains("black")) &&
        !D2.firstElementChild &&
        !D3.firstElementChild &&
        !D4.firstElementChild &&
        !D5.firstElementChild &&
        !D6.firstElementChild
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!D8.firstElementChild ||
          !D8.firstElementChild.classList.contains("black")) &&
        !D2.firstElementChild &&
        !D3.firstElementChild &&
        !D4.firstElementChild &&
        !D5.firstElementChild &&
        !D6.firstElementChild &&
        !D7.firstElementChild
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }

      // === Vertical DOWN (D1 → bottom row, no squares below) ===

      // === Horizontal LEFT (C1 → A1) ===
      if (
        !C1.firstElementChild ||
        !C1.firstElementChild.classList.contains("black")
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
      if (
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("black")) &&
        !C1.firstElementChild
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("black")) &&
        !C1.firstElementChild &&
        !B1.firstElementChild
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }

      // === Horizontal RIGHT (E1 → H1) ===
      if (
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("black")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("black")) &&
        !E1.firstElementChild
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("black")) &&
        !E1.firstElementChild &&
        !F1.firstElementChild
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        (!H1.firstElementChild ||
          !H1.firstElementChild.classList.contains("black")) &&
        !E1.firstElementChild &&
        !F1.firstElementChild &&
        !G1.firstElementChild
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }
    }
  }
  // White Rook - D2
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "D2") {
      // === Vertical UP (D3 → D8) ===
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("white")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        !D3.firstElementChild
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("white")) &&
        !D3.firstElementChild &&
        !D4.firstElementChild
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        !D3.firstElementChild &&
        !D4.firstElementChild &&
        !D5.firstElementChild
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!D7.firstElementChild ||
          !D7.firstElementChild.classList.contains("white")) &&
        !D3.firstElementChild &&
        !D4.firstElementChild &&
        !D5.firstElementChild &&
        !D6.firstElementChild
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!D8.firstElementChild ||
          !D8.firstElementChild.classList.contains("white")) &&
        !D3.firstElementChild &&
        !D4.firstElementChild &&
        !D5.firstElementChild &&
        !D6.firstElementChild &&
        !D7.firstElementChild
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }

      // === Vertical DOWN (D1) ===
      if (
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("white")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }

      // === Horizontal LEFT (C2 → A2) ===
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("white")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white")) &&
        !C2.firstElementChild
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        !C2.firstElementChild &&
        !B2.firstElementChild
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }

      // === Horizontal RIGHT (E2 → H2) ===
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("white")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("white")) &&
        !E2.firstElementChild
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!G2.firstElementChild ||
          !G2.firstElementChild.classList.contains("white")) &&
        !E2.firstElementChild &&
        !F2.firstElementChild
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        (!H2.firstElementChild ||
          !H2.firstElementChild.classList.contains("white")) &&
        !E2.firstElementChild &&
        !F2.firstElementChild &&
        !G2.firstElementChild
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
    }
  }
  // Black Rook - D2
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "D2") {
      // === Vertical UP (D3 → D8) ===
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("black")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        !D3.firstElementChild
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("black")) &&
        !D3.firstElementChild &&
        !D4.firstElementChild
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        !D3.firstElementChild &&
        !D4.firstElementChild &&
        !D5.firstElementChild
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!D7.firstElementChild ||
          !D7.firstElementChild.classList.contains("black")) &&
        !D3.firstElementChild &&
        !D4.firstElementChild &&
        !D5.firstElementChild &&
        !D6.firstElementChild
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!D8.firstElementChild ||
          !D8.firstElementChild.classList.contains("black")) &&
        !D3.firstElementChild &&
        !D4.firstElementChild &&
        !D5.firstElementChild &&
        !D6.firstElementChild &&
        !D7.firstElementChild
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }

      // === Vertical DOWN (D1) ===
      if (
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("black")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }

      // === Horizontal LEFT (C2 → A2) ===
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        !C2.firstElementChild
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        !C2.firstElementChild &&
        !B2.firstElementChild
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }

      // === Horizontal RIGHT (E2 → H2) ===
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("black")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("black")) &&
        !E2.firstElementChild
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!G2.firstElementChild ||
          !G2.firstElementChild.classList.contains("black")) &&
        !E2.firstElementChild &&
        !F2.firstElementChild
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        (!H2.firstElementChild ||
          !H2.firstElementChild.classList.contains("black")) &&
        !E2.firstElementChild &&
        !F2.firstElementChild &&
        !G2.firstElementChild
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
    }
  }
  // White Rook - D3
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "D3") {
      // === Vertical UP (D4 → D8) ===
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("white")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("white")) &&
        !D4.firstElementChild
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        !D4.firstElementChild &&
        !D5.firstElementChild
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!D7.firstElementChild ||
          !D7.firstElementChild.classList.contains("white")) &&
        !D4.firstElementChild &&
        !D5.firstElementChild &&
        !D6.firstElementChild
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!D8.firstElementChild ||
          !D8.firstElementChild.classList.contains("white")) &&
        !D4.firstElementChild &&
        !D5.firstElementChild &&
        !D6.firstElementChild &&
        !D7.firstElementChild
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }

      // === Vertical DOWN (D2 → D1) ===
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("white")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("white")) &&
        !D2.firstElementChild
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }

      // === Horizontal LEFT (C3 → A3) ===
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("white")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white")) &&
        !C3.firstElementChild
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        !C3.firstElementChild &&
        !B3.firstElementChild
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }

      // === Horizontal RIGHT (E3 → H3) ===
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("white")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("white")) &&
        !E3.firstElementChild
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!G3.firstElementChild ||
          !G3.firstElementChild.classList.contains("white")) &&
        !E3.firstElementChild &&
        !F3.firstElementChild
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        (!H3.firstElementChild ||
          !H3.firstElementChild.classList.contains("white")) &&
        !E3.firstElementChild &&
        !F3.firstElementChild &&
        !G3.firstElementChild
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
    }
  }
  // Black Rook - D3
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "D3") {
      // === Vertical UP (D4 → D8) ===
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("black")) &&
        !D4.firstElementChild
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        !D4.firstElementChild &&
        !D5.firstElementChild
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!D7.firstElementChild ||
          !D7.firstElementChild.classList.contains("black")) &&
        !D4.firstElementChild &&
        !D5.firstElementChild &&
        !D6.firstElementChild
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!D8.firstElementChild ||
          !D8.firstElementChild.classList.contains("black")) &&
        !D4.firstElementChild &&
        !D5.firstElementChild &&
        !D6.firstElementChild &&
        !D7.firstElementChild
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }

      // === Vertical DOWN (D2 → D1) ===
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("black")) &&
        !D2.firstElementChild
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }

      // === Horizontal LEFT (C3 → A3) ===
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("black")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black")) &&
        !C3.firstElementChild
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        !C3.firstElementChild &&
        !B3.firstElementChild
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }

      // === Horizontal RIGHT (E3 → H3) ===
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("black")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("black")) &&
        !E3.firstElementChild
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!G3.firstElementChild ||
          !G3.firstElementChild.classList.contains("black")) &&
        !E3.firstElementChild &&
        !F3.firstElementChild
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        (!H3.firstElementChild ||
          !H3.firstElementChild.classList.contains("black")) &&
        !E3.firstElementChild &&
        !F3.firstElementChild &&
        !G3.firstElementChild
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
    }
  }
  // White Rook - D4
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "D4") {
      // === Vertical UP (D5 → D8) ===
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("white")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        !D5.firstElementChild
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!D7.firstElementChild ||
          !D7.firstElementChild.classList.contains("white")) &&
        !D5.firstElementChild &&
        !D6.firstElementChild
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!D8.firstElementChild ||
          !D8.firstElementChild.classList.contains("white")) &&
        !D5.firstElementChild &&
        !D6.firstElementChild &&
        !D7.firstElementChild
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }

      // === Vertical DOWN (D3 → D1) ===
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("white")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white")) &&
        !D3.firstElementChild
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("white")) &&
        !D3.firstElementChild &&
        !D2.firstElementChild
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }

      // === Horizontal LEFT (C4 → A4) ===
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("white")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        !C4.firstElementChild
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        !C4.firstElementChild &&
        !B4.firstElementChild
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }

      // === Horizontal RIGHT (E4 → H4) ===
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("white")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("white")) &&
        !E4.firstElementChild
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!G4.firstElementChild ||
          !G4.firstElementChild.classList.contains("white")) &&
        !E4.firstElementChild &&
        !F4.firstElementChild
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        (!H4.firstElementChild ||
          !H4.firstElementChild.classList.contains("white")) &&
        !E4.firstElementChild &&
        !F4.firstElementChild &&
        !G4.firstElementChild
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
    }
  }
  // Black Rook - D4
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "D4") {
      // === Vertical UP (D5 → D8) ===
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("black")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black")))
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!D7.firstElementChild ||
          !D7.firstElementChild.classList.contains("black")) &&
        !D5.firstElementChild &&
        !D6.firstElementChild
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!D8.firstElementChild ||
          !D8.firstElementChild.classList.contains("black")) &&
        !D5.firstElementChild &&
        !D6.firstElementChild &&
        !D7.firstElementChild
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }

      // === Vertical DOWN (D3 → D1) ===
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("black")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("black")) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black")))
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("black")) &&
        !D3.firstElementChild &&
        !D2.firstElementChild
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }

      // === Horizontal LEFT (C4 → A4) ===
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("black")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black")))
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        !C4.firstElementChild &&
        !B4.firstElementChild
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }

      // === Horizontal RIGHT (E4 → H4) ===
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("black")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("black")) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!G4.firstElementChild ||
          !G4.firstElementChild.classList.contains("black")) &&
        !E4.firstElementChild &&
        !F4.firstElementChild
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        (!H4.firstElementChild ||
          !H4.firstElementChild.classList.contains("black")) &&
        !E4.firstElementChild &&
        !F4.firstElementChild &&
        !G4.firstElementChild
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
    }
  }
  // White Rook - D5
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "D5") {
      // === Vertical UP (D6 → D8) ===
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("white")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!D7.firstElementChild ||
          !D7.firstElementChild.classList.contains("white")) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black")))
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!D8.firstElementChild ||
          !D8.firstElementChild.classList.contains("white")) &&
        !D6.firstElementChild &&
        !D7.firstElementChild
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }

      // === Vertical DOWN (D4 → D1) ===
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("white")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black")))
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white")) &&
        !D4.firstElementChild &&
        !D3.firstElementChild
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("white")) &&
        !D4.firstElementChild &&
        !D3.firstElementChild &&
        !D2.firstElementChild
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }

      // === Horizontal LEFT (C5 → A5) ===
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("white")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black")))
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        !C5.firstElementChild &&
        !B5.firstElementChild
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }

      // === Horizontal RIGHT (E5 → H5) ===
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("white")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("white")) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains("white")) &&
        !E5.firstElementChild &&
        !F5.firstElementChild
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        (!H5.firstElementChild ||
          !H5.firstElementChild.classList.contains("white")) &&
        !E5.firstElementChild &&
        !F5.firstElementChild &&
        !G5.firstElementChild
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
    }
  }
  // Black Rook - D5
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "D5") {
      // === Vertical UP (D6 → D8) ===
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!D7.firstElementChild ||
          !D7.firstElementChild.classList.contains("black")) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black")))
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!D8.firstElementChild ||
          !D8.firstElementChild.classList.contains("black")) &&
        !D6.firstElementChild &&
        !D7.firstElementChild
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }

      // === Vertical DOWN (D4 → D1) ===
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black")))
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("black")) &&
        !D4.firstElementChild &&
        !D3.firstElementChild
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("black")) &&
        !D4.firstElementChild &&
        !D3.firstElementChild &&
        !D2.firstElementChild
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }

      // === Horizontal LEFT (C5 → A5) ===
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("black")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black")))
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        !C5.firstElementChild &&
        !B5.firstElementChild
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }

      // === Horizontal RIGHT (E5 → H5) ===
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("black")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("black")) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains("black")) &&
        !E5.firstElementChild &&
        !F5.firstElementChild
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        (!H5.firstElementChild ||
          !H5.firstElementChild.classList.contains("black")) &&
        !E5.firstElementChild &&
        !F5.firstElementChild &&
        !G5.firstElementChild
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
    }
  }
  // White Rook - D6
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "D6") {
      // === Vertical UP (D7 → D8) ===
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("white")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!D8.firstElementChild ||
          !D8.firstElementChild.classList.contains("white")) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black")))
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }

      // === Vertical DOWN (D5 → D1) ===
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("white")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black")))
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("white")) &&
        !D5.firstElementChild &&
        !D4.firstElementChild
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white")) &&
        !D5.firstElementChild &&
        !D4.firstElementChild &&
        !D3.firstElementChild
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("white")) &&
        !D5.firstElementChild &&
        !D4.firstElementChild &&
        !D3.firstElementChild &&
        !D2.firstElementChild
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }

      // === Horizontal LEFT (C6 → A6) ===
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("white")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white")) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black")))
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        !C6.firstElementChild &&
        !B6.firstElementChild
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }

      // === Horizontal RIGHT (E6 → H6) ===
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("white")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("white")) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("white")) &&
        !E6.firstElementChild &&
        !F6.firstElementChild
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!H6.firstElementChild ||
          !H6.firstElementChild.classList.contains("white")) &&
        !E6.firstElementChild &&
        !F6.firstElementChild &&
        !G6.firstElementChild
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
    }
  }
  // Black Rook - D6
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "D6") {
      // === Vertical UP (D7 → D8) ===
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("black")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!D8.firstElementChild ||
          !D8.firstElementChild.classList.contains("black")) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black")))
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }

      // === Vertical DOWN (D5 → D1) ===
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("black")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black")))
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("black")) &&
        !D5.firstElementChild &&
        !D4.firstElementChild
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("black")) &&
        !D5.firstElementChild &&
        !D4.firstElementChild &&
        !D3.firstElementChild
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("black")) &&
        !D5.firstElementChild &&
        !D4.firstElementChild &&
        !D3.firstElementChild &&
        !D2.firstElementChild
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }

      // === Horizontal LEFT (C6 → A6) ===
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("black")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black")) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black")))
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        !C6.firstElementChild &&
        !B6.firstElementChild
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }

      // === Horizontal RIGHT (E6 → H6) ===
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("black")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("black")) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("black")) &&
        !E6.firstElementChild &&
        !F6.firstElementChild
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!H6.firstElementChild ||
          !H6.firstElementChild.classList.contains("black")) &&
        !E6.firstElementChild &&
        !F6.firstElementChild &&
        !G6.firstElementChild
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
    }
  }
  // White Rook - D7
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "D7") {
      // === Vertical UP (D8) ===
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("white")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }

      // === Vertical DOWN (D6 → D1) ===
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("white")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("white")) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black")))
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        !D6.firstElementChild &&
        !D5.firstElementChild
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("white")) &&
        !D6.firstElementChild &&
        !D5.firstElementChild &&
        !D4.firstElementChild
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white")) &&
        !D6.firstElementChild &&
        !D5.firstElementChild &&
        !D4.firstElementChild &&
        !D3.firstElementChild
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("white")) &&
        !D6.firstElementChild &&
        !D5.firstElementChild &&
        !D4.firstElementChild &&
        !D3.firstElementChild &&
        !D2.firstElementChild
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }

      // === Horizontal LEFT (C7 → A7) ===
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("white")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!B7.firstElementChild ||
          !B7.firstElementChild.classList.contains("white")) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black")))
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("white")) &&
        !C7.firstElementChild &&
        !B7.firstElementChild
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }

      // === Horizontal RIGHT (E7 → H7) ===
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("white")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!F7.firstElementChild ||
          !F7.firstElementChild.classList.contains("white")) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("white")) &&
        !E7.firstElementChild &&
        !F7.firstElementChild
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        (!H7.firstElementChild ||
          !H7.firstElementChild.classList.contains("white")) &&
        !E7.firstElementChild &&
        !F7.firstElementChild &&
        !G7.firstElementChild
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }
    }
  }

  // Black Rook - D7
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "D7") {
      // === Vertical UP (D8) ===
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("black")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }

      // === Vertical DOWN (D6 → D1) ===
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("black")) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black")))
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        !D6.firstElementChild &&
        !D5.firstElementChild
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("black")) &&
        !D6.firstElementChild &&
        !D5.firstElementChild &&
        !D4.firstElementChild
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("black")) &&
        !D6.firstElementChild &&
        !D5.firstElementChild &&
        !D4.firstElementChild &&
        !D3.firstElementChild
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("black")) &&
        !D6.firstElementChild &&
        !D5.firstElementChild &&
        !D4.firstElementChild &&
        !D3.firstElementChild &&
        !D2.firstElementChild
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }

      // === Horizontal LEFT (C7 → A7) ===
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("black")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!B7.firstElementChild ||
          !B7.firstElementChild.classList.contains("black")) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black")))
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("black")) &&
        !C7.firstElementChild &&
        !B7.firstElementChild
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }

      // === Horizontal RIGHT (E7 → H7) ===
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("black")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!F7.firstElementChild ||
          !F7.firstElementChild.classList.contains("black")) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("black")) &&
        !E7.firstElementChild &&
        !F7.firstElementChild
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        (!H7.firstElementChild ||
          !H7.firstElementChild.classList.contains("black")) &&
        !E7.firstElementChild &&
        !F7.firstElementChild &&
        !G7.firstElementChild
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }
    }
  }
  // White Rook - D8
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "D8") {
      // === Vertical UP (no squares above D8) ===

      // === Vertical DOWN (D7 → D1) ===
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("white")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black")))
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("white")) &&
        !D7.firstElementChild &&
        !D6.firstElementChild
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        !D7.firstElementChild &&
        !D6.firstElementChild &&
        !D5.firstElementChild
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("white")) &&
        !D7.firstElementChild &&
        !D6.firstElementChild &&
        !D5.firstElementChild &&
        !D4.firstElementChild
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white")) &&
        !D7.firstElementChild &&
        !D6.firstElementChild &&
        !D5.firstElementChild &&
        !D4.firstElementChild &&
        !D3.firstElementChild
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("white")) &&
        !D7.firstElementChild &&
        !D6.firstElementChild &&
        !D5.firstElementChild &&
        !D4.firstElementChild &&
        !D3.firstElementChild &&
        !D2.firstElementChild
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }

      // === Horizontal LEFT (C8 → A8) ===
      if (
        !C8.firstElementChild ||
        !C8.firstElementChild.classList.contains("white")
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }
      if (
        (!B8.firstElementChild ||
          !B8.firstElementChild.classList.contains("white")) &&
        (!C8.firstElementChild ||
          (!C8.firstElementChild.classList.contains("white") &&
            !C8.firstElementChild.classList.contains("black")))
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }
      if (
        (!A8.firstElementChild ||
          !A8.firstElementChild.classList.contains("white")) &&
        !C8.firstElementChild &&
        !B8.firstElementChild
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }

      // === Horizontal RIGHT (E8 → H8) ===
      if (
        !E8.firstElementChild ||
        !E8.firstElementChild.classList.contains("white")
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }
      if (
        (!F8.firstElementChild ||
          !F8.firstElementChild.classList.contains("white")) &&
        (!E8.firstElementChild ||
          (!E8.firstElementChild.classList.contains("white") &&
            !E8.firstElementChild.classList.contains("black")))
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
      if (
        (!G8.firstElementChild ||
          !G8.firstElementChild.classList.contains("white")) &&
        !E8.firstElementChild &&
        !F8.firstElementChild
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }
      if (
        (!H8.firstElementChild ||
          !H8.firstElementChild.classList.contains("white")) &&
        !E8.firstElementChild &&
        !F8.firstElementChild &&
        !G8.firstElementChild
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }
    }
  }
  // Black Rook - D8
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "D8") {
      // === Vertical UP (no squares above D8) ===

      // === Vertical DOWN (D7 → D1) ===
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("black")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black")))
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("black")) &&
        !D7.firstElementChild &&
        !D6.firstElementChild
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        !D7.firstElementChild &&
        !D6.firstElementChild &&
        !D5.firstElementChild
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("black")) &&
        !D7.firstElementChild &&
        !D6.firstElementChild &&
        !D5.firstElementChild &&
        !D4.firstElementChild
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("black")) &&
        !D7.firstElementChild &&
        !D6.firstElementChild &&
        !D5.firstElementChild &&
        !D4.firstElementChild &&
        !D3.firstElementChild
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("black")) &&
        !D7.firstElementChild &&
        !D6.firstElementChild &&
        !D5.firstElementChild &&
        !D4.firstElementChild &&
        !D3.firstElementChild &&
        !D2.firstElementChild
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }

      // === Horizontal LEFT (C8 → A8) ===
      if (
        !C8.firstElementChild ||
        !C8.firstElementChild.classList.contains("black")
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }
      if (
        (!B8.firstElementChild ||
          !B8.firstElementChild.classList.contains("black")) &&
        (!C8.firstElementChild ||
          (!C8.firstElementChild.classList.contains("white") &&
            !C8.firstElementChild.classList.contains("black")))
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }
      if (
        (!A8.firstElementChild ||
          !A8.firstElementChild.classList.contains("black")) &&
        !C8.firstElementChild &&
        !B8.firstElementChild
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }

      // === Horizontal RIGHT (E8 → H8) ===
      if (
        !E8.firstElementChild ||
        !E8.firstElementChild.classList.contains("black")
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }
      if (
        (!F8.firstElementChild ||
          !F8.firstElementChild.classList.contains("black")) &&
        (!E8.firstElementChild ||
          (!E8.firstElementChild.classList.contains("white") &&
            !E8.firstElementChild.classList.contains("black")))
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
      if (
        (!G8.firstElementChild ||
          !G8.firstElementChild.classList.contains("black")) &&
        !E8.firstElementChild &&
        !F8.firstElementChild
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }
      if (
        (!H8.firstElementChild ||
          !H8.firstElementChild.classList.contains("black")) &&
        !E8.firstElementChild &&
        !F8.firstElementChild &&
        !G8.firstElementChild
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }
    }
  }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // White Rook on E1
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "E1") {
      // Vertical UP (E2 → E8)
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("white")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black")))
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("white")) &&
        !E3.firstElementChild &&
        !E2.firstElementChild
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("white")) &&
        !E4.firstElementChild &&
        !E3.firstElementChild &&
        !E2.firstElementChild
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("white")) &&
        !E5.firstElementChild &&
        !E4.firstElementChild &&
        !E3.firstElementChild &&
        !E2.firstElementChild
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("white")) &&
        !E6.firstElementChild &&
        !E5.firstElementChild &&
        !E4.firstElementChild &&
        !E3.firstElementChild &&
        !E2.firstElementChild
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!E8.firstElementChild ||
          !E8.firstElementChild.classList.contains("white")) &&
        !E7.firstElementChild &&
        !E6.firstElementChild &&
        !E5.firstElementChild &&
        !E4.firstElementChild &&
        !E3.firstElementChild &&
        !E2.firstElementChild
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }

      // Horizontal LEFT (D1 → A1)
      if (
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("white")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("white")) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black")))
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
      if (
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("white")) &&
        !C1.firstElementChild &&
        !D1.firstElementChild
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("white")) &&
        !B1.firstElementChild &&
        !C1.firstElementChild &&
        !D1.firstElementChild
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }

      // Horizontal RIGHT (F1 → H1)
      if (
        !F1.firstElementChild ||
        !F1.firstElementChild.classList.contains("white")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("white")) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black")))
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        (!H1.firstElementChild ||
          !H1.firstElementChild.classList.contains("white")) &&
        !F1.firstElementChild &&
        !G1.firstElementChild
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }
    }
  }

  // Black Rook on E1
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "E1") {
      // Vertical UP (E2 → E8)
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("black")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("black")) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black")))
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("black")) &&
        !E3.firstElementChild &&
        !E2.firstElementChild
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("black")) &&
        !E4.firstElementChild &&
        !E3.firstElementChild &&
        !E2.firstElementChild
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("black")) &&
        !E5.firstElementChild &&
        !E4.firstElementChild &&
        !E3.firstElementChild &&
        !E2.firstElementChild
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("black")) &&
        !E6.firstElementChild &&
        !E5.firstElementChild &&
        !E4.firstElementChild &&
        !E3.firstElementChild &&
        !E2.firstElementChild
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!E8.firstElementChild ||
          !E8.firstElementChild.classList.contains("black")) &&
        !E7.firstElementChild &&
        !E6.firstElementChild &&
        !E5.firstElementChild &&
        !E4.firstElementChild &&
        !E3.firstElementChild &&
        !E2.firstElementChild
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }

      // Horizontal LEFT (D1 → A1)
      if (
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("black")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("black")) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black")))
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
      if (
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("black")) &&
        !C1.firstElementChild &&
        !D1.firstElementChild
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("black")) &&
        !B1.firstElementChild &&
        !C1.firstElementChild &&
        !D1.firstElementChild
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }

      // Horizontal RIGHT (F1 → H1)
      if (
        !F1.firstElementChild ||
        !F1.firstElementChild.classList.contains("black")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("black")) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black")))
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        (!H1.firstElementChild ||
          !H1.firstElementChild.classList.contains("black")) &&
        !F1.firstElementChild &&
        !G1.firstElementChild
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }
    }
  }
  // White Rook on E2
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "E2") {
      // Vertical UP (E3 → E8)
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("white")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black")))
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("white")) &&
        !E4.firstElementChild &&
        !E3.firstElementChild
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("white")) &&
        !E5.firstElementChild &&
        !E4.firstElementChild &&
        !E3.firstElementChild
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("white")) &&
        !E6.firstElementChild &&
        !E5.firstElementChild &&
        !E4.firstElementChild &&
        !E3.firstElementChild
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!E8.firstElementChild ||
          !E8.firstElementChild.classList.contains("white")) &&
        !E7.firstElementChild &&
        !E6.firstElementChild &&
        !E5.firstElementChild &&
        !E4.firstElementChild &&
        !E3.firstElementChild
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }

      // Vertical DOWN (E1)
      if (
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("white")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }

      // Horizontal LEFT (D2 → A2)
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("white")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white")) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black")))
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white")) &&
        !C2.firstElementChild &&
        !D2.firstElementChild
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        !B2.firstElementChild &&
        !C2.firstElementChild &&
        !D2.firstElementChild
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }

      // Horizontal RIGHT (F2 → H2)
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("white")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!G2.firstElementChild ||
          !G2.firstElementChild.classList.contains("white")) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        (!H2.firstElementChild ||
          !H2.firstElementChild.classList.contains("white")) &&
        !F2.firstElementChild &&
        !G2.firstElementChild
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
    }
  }

  // Black Rook on E2
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "E2") {
      // Vertical UP (E3 → E8)
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("black")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("black")) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black")))
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("black")) &&
        !E4.firstElementChild &&
        !E3.firstElementChild
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("black")) &&
        !E5.firstElementChild &&
        !E4.firstElementChild &&
        !E3.firstElementChild
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("black")) &&
        !E6.firstElementChild &&
        !E5.firstElementChild &&
        !E4.firstElementChild &&
        !E3.firstElementChild
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!E8.firstElementChild ||
          !E8.firstElementChild.classList.contains("black")) &&
        !E7.firstElementChild &&
        !E6.firstElementChild &&
        !E5.firstElementChild &&
        !E4.firstElementChild &&
        !E3.firstElementChild
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }

      // Vertical DOWN (E1)
      if (
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("black")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }

      // Horizontal LEFT (D2 → A2)
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black")))
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        !C2.firstElementChild &&
        !D2.firstElementChild
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        !B2.firstElementChild &&
        !C2.firstElementChild &&
        !D2.firstElementChild
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }

      // Horizontal RIGHT (F2 → H2)
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("black")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!G2.firstElementChild ||
          !G2.firstElementChild.classList.contains("black")) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        (!H2.firstElementChild ||
          !H2.firstElementChild.classList.contains("black")) &&
        !F2.firstElementChild &&
        !G2.firstElementChild
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
    }
  }
  // White Rook on E3
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "E3") {
      // Vertical UP (E4 → E8)
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("white")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("white")) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("white")) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("white")) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!E8.firstElementChild ||
          !E8.firstElementChild.classList.contains("white")) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }

      // Vertical DOWN (E2 → E1)
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("white")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("white")) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black")))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }

      // Horizontal LEFT (D3 → A3)
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("white")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black")))
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black")))
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black")))
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }

      // Horizontal RIGHT (F3 → H3)
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("white")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!G3.firstElementChild ||
          !G3.firstElementChild.classList.contains("white")) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        (!H3.firstElementChild ||
          !H3.firstElementChild.classList.contains("white")) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
    }
  }

  // Black Rook on E3
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "E3") {
      // Vertical UP (E4 → E8)
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("black")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("black")) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("black")) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("black")) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!E8.firstElementChild ||
          !E8.firstElementChild.classList.contains("black")) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }

      // Vertical DOWN (E2 → E1)
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("black")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("black")) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black")))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }

      // Horizontal LEFT (D3 → A3)
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("black")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black")))
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black")))
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black")))
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }

      // Horizontal RIGHT (F3 → H3)
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("black")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!G3.firstElementChild ||
          !G3.firstElementChild.classList.contains("black")) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        (!H3.firstElementChild ||
          !H3.firstElementChild.classList.contains("black")) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
    }
  }
  // White Rook on E4
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "E4") {
      // Vertical UP (E5 → E8)
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("white")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("white")) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("white")) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!E8.firstElementChild ||
          !E8.firstElementChild.classList.contains("white")) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }

      // Vertical DOWN (E3 → E1)
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("white")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black")))
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("white")) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black")))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }

      // Horizontal LEFT (D4 → A4)
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("white")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black")))
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black")))
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black")))
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }

      // Horizontal RIGHT (F4 → H4)
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("white")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!G4.firstElementChild ||
          !G4.firstElementChild.classList.contains("white")) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        (!H4.firstElementChild ||
          !H4.firstElementChild.classList.contains("white")) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
    }
  }

  // Black Rook on E4
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "E4") {
      // Vertical UP (E5 → E8)
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("black")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("black")) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("black")) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!E8.firstElementChild ||
          !E8.firstElementChild.classList.contains("black")) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }

      // Vertical DOWN (E3 → E1)
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("black")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("black")) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black")))
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("black")) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black")))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }

      // Horizontal LEFT (D4 → A4)
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black")))
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black")))
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black")))
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }

      // Horizontal RIGHT (F4 → H4)
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("black")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!G4.firstElementChild ||
          !G4.firstElementChild.classList.contains("black")) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        (!H4.firstElementChild ||
          !H4.firstElementChild.classList.contains("black")) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
    }
  }
  // White Rook on E5
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "E5") {
      // Vertical UP (E6 → E8)
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("white")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("white")) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!E8.firstElementChild ||
          !E8.firstElementChild.classList.contains("white")) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }

      // Vertical DOWN (E4 → E1)
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("white")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("white")) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }

      // Horizontal LEFT (D5 → A5)
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("white")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black")))
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black")))
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black")))
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }

      // Horizontal RIGHT (F5 → H5)
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("white")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains("white")) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        (!H5.firstElementChild ||
          !H5.firstElementChild.classList.contains("white")) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
    }
  }

  // Black Rook on E5
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "E5") {
      // Vertical UP (E6 → E8)
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("black")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("black")) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!E8.firstElementChild ||
          !E8.firstElementChild.classList.contains("black")) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }

      // Vertical DOWN (E4 → E1)
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("black")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("black")) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("black")) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("black")) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }

      // Horizontal LEFT (D5 → A5)
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("black")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black")))
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black")))
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black")))
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }

      // Horizontal RIGHT (F5 → H5)
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("black")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains("black")) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        (!H5.firstElementChild ||
          !H5.firstElementChild.classList.contains("black")) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
    }
  }
  // White Rook on E6
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "E6") {
      // Vertical UP (E7 → E8)
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("white")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!E8.firstElementChild ||
          !E8.firstElementChild.classList.contains("white")) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }

      // Vertical DOWN (E5 → E1)
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("white")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("white")) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("white")) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }

      // Horizontal LEFT (D6 → A6)
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("white")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("white")) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black")))
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white")) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black"))) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black")))
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black"))) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black")))
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }

      // Horizontal RIGHT (F6 → H6)
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("white")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("white")) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!H6.firstElementChild ||
          !H6.firstElementChild.classList.contains("white")) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
    }
  }

  // Black Rook on E6
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "E6") {
      // Vertical UP (E7 → E8)
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("black")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!E8.firstElementChild ||
          !E8.firstElementChild.classList.contains("black")) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }

      // Vertical DOWN (E5 → E1)
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("black")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("black")) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("black")) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("black")) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("black")) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }

      // Horizontal LEFT (D6 → A6)
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("black")) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black")))
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black")) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black"))) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black")))
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black"))) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black")))
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }

      // Horizontal RIGHT (F6 → H6)
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("black")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("black")) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!H6.firstElementChild ||
          !H6.firstElementChild.classList.contains("black")) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
    }
  }
  // White Rook on E7
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "E7") {
      // Vertical UP (E8)
      if (
        !E8.firstElementChild ||
        !E8.firstElementChild.classList.contains("white")
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }

      // Vertical DOWN (E6 → E1)
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("white")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("white")) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("white")) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("white")) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }

      // Horizontal LEFT (D7 → A7)
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("white")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("white")) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black")))
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!B7.firstElementChild ||
          !B7.firstElementChild.classList.contains("white")) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black"))) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black")))
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("white")) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("white") &&
            !B7.firstElementChild.classList.contains("black"))) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black"))) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black")))
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }

      // Horizontal RIGHT (F7 → H7)
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("white")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("white")) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        (!H7.firstElementChild ||
          !H7.firstElementChild.classList.contains("white")) &&
        (!G7.firstElementChild ||
          (!G7.firstElementChild.classList.contains("white") &&
            !G7.firstElementChild.classList.contains("black"))) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }
    }
  }

  // Black Rook on E7
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "E7") {
      // Vertical UP (E8)
      if (
        !E8.firstElementChild ||
        !E8.firstElementChild.classList.contains("black")
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }

      // Vertical DOWN (E6 → E1)
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("black")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("black")) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("black")) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("black")) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("black")) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("black")) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }

      // Horizontal LEFT (D7 → A7)
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("black")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("black")) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black")))
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!B7.firstElementChild ||
          !B7.firstElementChild.classList.contains("black")) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black"))) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black")))
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("black")) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("white") &&
            !B7.firstElementChild.classList.contains("black"))) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black"))) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black")))
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }

      // Horizontal RIGHT (F7 → H7)
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("black")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("black")) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        (!H7.firstElementChild ||
          !H7.firstElementChild.classList.contains("black")) &&
        (!G7.firstElementChild ||
          (!G7.firstElementChild.classList.contains("white") &&
            !G7.firstElementChild.classList.contains("black"))) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }
    }
  }
  // White Rook on E8
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "E8") {
      // Vertical DOWN (E7 → E1)
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("white")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("white")) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("white")) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("white")) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("white")) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }

      // Horizontal LEFT (D8 → A8)
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("white")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }
      if (
        (!C8.firstElementChild ||
          !C8.firstElementChild.classList.contains("white")) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black")))
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }
      if (
        (!B8.firstElementChild ||
          !B8.firstElementChild.classList.contains("white")) &&
        (!C8.firstElementChild ||
          (!C8.firstElementChild.classList.contains("white") &&
            !C8.firstElementChild.classList.contains("black"))) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black")))
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }
      if (
        (!A8.firstElementChild ||
          !A8.firstElementChild.classList.contains("white")) &&
        (!B8.firstElementChild ||
          (!B8.firstElementChild.classList.contains("white") &&
            !B8.firstElementChild.classList.contains("black"))) &&
        (!C8.firstElementChild ||
          (!C8.firstElementChild.classList.contains("white") &&
            !C8.firstElementChild.classList.contains("black"))) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black")))
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }

      // Horizontal RIGHT (F8 → H8)
      if (
        !F8.firstElementChild ||
        !F8.firstElementChild.classList.contains("white")
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
      if (
        (!G8.firstElementChild ||
          !G8.firstElementChild.classList.contains("white")) &&
        (!F8.firstElementChild ||
          (!F8.firstElementChild.classList.contains("white") &&
            !F8.firstElementChild.classList.contains("black")))
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }
      if (
        (!H8.firstElementChild ||
          !H8.firstElementChild.classList.contains("white")) &&
        (!G8.firstElementChild ||
          (!G8.firstElementChild.classList.contains("white") &&
            !G8.firstElementChild.classList.contains("black"))) &&
        (!F8.firstElementChild ||
          (!F8.firstElementChild.classList.contains("white") &&
            !F8.firstElementChild.classList.contains("black")))
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }
    }
  }

  // Black Rook on E8
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "E8") {
      // Vertical DOWN (E7 → E1)
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("black")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains("black")) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("black")) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("black")) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("black")) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("black")) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("black")) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }

      // Horizontal LEFT (D8 → A8)
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("black")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }
      if (
        (!C8.firstElementChild ||
          !C8.firstElementChild.classList.contains("black")) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black")))
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }
      if (
        (!B8.firstElementChild ||
          !B8.firstElementChild.classList.contains("black")) &&
        (!C8.firstElementChild ||
          (!C8.firstElementChild.classList.contains("white") &&
            !C8.firstElementChild.classList.contains("black"))) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black")))
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }
      if (
        (!A8.firstElementChild ||
          !A8.firstElementChild.classList.contains("black")) &&
        (!B8.firstElementChild ||
          (!B8.firstElementChild.classList.contains("white") &&
            !B8.firstElementChild.classList.contains("black"))) &&
        (!C8.firstElementChild ||
          (!C8.firstElementChild.classList.contains("white") &&
            !C8.firstElementChild.classList.contains("black"))) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black")))
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }

      // Horizontal RIGHT (F8 → H8)
      if (
        !F8.firstElementChild ||
        !F8.firstElementChild.classList.contains("black")
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
      if (
        (!G8.firstElementChild ||
          !G8.firstElementChild.classList.contains("black")) &&
        (!F8.firstElementChild ||
          (!F8.firstElementChild.classList.contains("white") &&
            !F8.firstElementChild.classList.contains("black")))
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }
      if (
        (!H8.firstElementChild ||
          !H8.firstElementChild.classList.contains("black")) &&
        (!G8.firstElementChild ||
          (!G8.firstElementChild.classList.contains("white") &&
            !G8.firstElementChild.classList.contains("black"))) &&
        (!F8.firstElementChild ||
          (!F8.firstElementChild.classList.contains("white") &&
            !F8.firstElementChild.classList.contains("black")))
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }
    }
  }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // White Rook on F1
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "F1") {
      // Vertical UP (F2 → F8)
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("white")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("white")) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("white")) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("white")) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("white")) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!F7.firstElementChild ||
          !F7.firstElementChild.classList.contains("white")) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!F8.firstElementChild ||
          !F8.firstElementChild.classList.contains("white")) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }

      // Horizontal LEFT (E1 → A1)
      if (
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("white")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("white")) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black")))
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("white")) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black")))
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
      if (
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("white")) &&
        (!C1.firstElementChild ||
          (!C1.firstElementChild.classList.contains("white") &&
            !C1.firstElementChild.classList.contains("black"))) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black")))
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("white")) &&
        (!B1.firstElementChild ||
          (!B1.firstElementChild.classList.contains("white") &&
            !B1.firstElementChild.classList.contains("black"))) &&
        (!C1.firstElementChild ||
          (!C1.firstElementChild.classList.contains("white") &&
            !C1.firstElementChild.classList.contains("black"))) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black")))
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }

      // Horizontal RIGHT (G1 → H1)
      if (
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains("white")
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        !H1.firstElementChild ||
        !H1.firstElementChild.classList.contains("white")
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }
    }
  }

  // Black Rook on F1
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "F1") {
      // Vertical UP (F2 → F8)
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("black")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("black")) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("black")) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("black")) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("black")) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!F7.firstElementChild ||
          !F7.firstElementChild.classList.contains("black")) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!F8.firstElementChild ||
          !F8.firstElementChild.classList.contains("black")) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }

      // Horizontal LEFT (E1 → A1)
      if (
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("black")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("black")) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black")))
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("black")) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black")))
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
      if (
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("black")) &&
        (!C1.firstElementChild ||
          (!C1.firstElementChild.classList.contains("white") &&
            !C1.firstElementChild.classList.contains("black"))) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black")))
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("black")) &&
        (!B1.firstElementChild ||
          (!B1.firstElementChild.classList.contains("white") &&
            !B1.firstElementChild.classList.contains("black"))) &&
        (!C1.firstElementChild ||
          (!C1.firstElementChild.classList.contains("white") &&
            !C1.firstElementChild.classList.contains("black"))) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black")))
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }

      // Horizontal RIGHT (G1 → H1)
      if (
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains("black")
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        !H1.firstElementChild ||
        !H1.firstElementChild.classList.contains("black")
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }
    }
  }
  // Black Rook on F2
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "F2") {
      // Vertical UP (F3 → F8)
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("black")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("black")) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("black")) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("black")) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!F7.firstElementChild ||
          !F7.firstElementChild.classList.contains("black")) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!F8.firstElementChild ||
          !F8.firstElementChild.classList.contains("black")) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }

      // Vertical DOWN (F1)
      if (
        !F1.firstElementChild ||
        !F1.firstElementChild.classList.contains("black")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }

      // Horizontal LEFT (E2 → A2)
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("black")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("black")) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black")))
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black")))
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black"))) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black")))
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black"))) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black")))
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }

      // Horizontal RIGHT (G2 → H2) — fixed
      let rightBlocked = false;

      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("black")
      ) {
        if (!rightBlocked) {
          G2.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(G2);
        }
        if (G2.firstElementChild) rightBlocked = true;
      } else {
        rightBlocked = true;
      }

      if (
        !H2.firstElementChild ||
        !H2.firstElementChild.classList.contains("black")
      ) {
        if (!rightBlocked) {
          H2.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(H2);
        }
        if (H2.firstElementChild) rightBlocked = true;
      }
    }
  }
  // White Rook on F2
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "F2") {
      // Vertical UP (F3 → F8)
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("white")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("white")) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("white")) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("white")) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!F7.firstElementChild ||
          !F7.firstElementChild.classList.contains("white")) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!F8.firstElementChild ||
          !F8.firstElementChild.classList.contains("white")) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }

      // Vertical DOWN (F1)
      if (
        !F1.firstElementChild ||
        !F1.firstElementChild.classList.contains("white")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }

      // Horizontal LEFT (E2 → A2)
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("white")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white")) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black")))
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white")) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black")))
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black"))) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black")))
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black"))) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black")))
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }

      // Horizontal RIGHT (G2 → H2) — fixed
      let rightBlocked = false;

      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("white")
      ) {
        if (!rightBlocked) {
          G2.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(G2);
        }
        if (G2.firstElementChild) rightBlocked = true;
      } else {
        rightBlocked = true;
      }

      if (
        !H2.firstElementChild ||
        !H2.firstElementChild.classList.contains("white")
      ) {
        if (!rightBlocked) {
          H2.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(H2);
        }
        if (H2.firstElementChild) rightBlocked = true;
      }
    }
  }
  // White Rook on F3
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "F3") {
      // Vertical UP (F4 → F8)
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("white")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("white")) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("white")) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!F7.firstElementChild ||
          !F7.firstElementChild.classList.contains("white")) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!F8.firstElementChild ||
          !F8.firstElementChild.classList.contains("white")) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }

      // Vertical DOWN (F2 → F1)
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("white")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("white")) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }

      // Horizontal LEFT (E3 → A3)
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("white")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black")))
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black")))
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black")))
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black")))
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }

      // Horizontal RIGHT (G3 → H3) — fixed
      let rightBlocked = false;

      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("white")
      ) {
        if (!rightBlocked) {
          G3.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(G3);
        }
        if (G3.firstElementChild) rightBlocked = true;
      } else {
        rightBlocked = true;
      }

      if (
        !H3.firstElementChild ||
        !H3.firstElementChild.classList.contains("white")
      ) {
        if (!rightBlocked) {
          H3.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(H3);
        }
        if (H3.firstElementChild) rightBlocked = true;
      }
    }
  }
  // Black Rook on F3
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "F3") {
      // Vertical UP (F4 → F8)
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("black")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("black")) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("black")) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!F7.firstElementChild ||
          !F7.firstElementChild.classList.contains("black")) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!F8.firstElementChild ||
          !F8.firstElementChild.classList.contains("black")) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }

      // Vertical DOWN (F2 → F1)
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("black")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("black")) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }

      // Horizontal LEFT (E3 → A3)
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("black")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("black")) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black")))
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black")))
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black")))
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black")))
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }

      // Horizontal RIGHT (G3 → H3) — fixed
      let rightBlocked = false;

      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("black")
      ) {
        if (!rightBlocked) {
          G3.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(G3);
        }
        if (G3.firstElementChild) rightBlocked = true;
      } else {
        rightBlocked = true;
      }

      if (
        !H3.firstElementChild ||
        !H3.firstElementChild.classList.contains("black")
      ) {
        if (!rightBlocked) {
          H3.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(H3);
        }
        if (H3.firstElementChild) rightBlocked = true;
      }
    }
  }
  // White Rook on F4
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "F4") {
      // Vertical UP (F5 → F8)
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("white")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("white")) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!F7.firstElementChild ||
          !F7.firstElementChild.classList.contains("white")) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!F8.firstElementChild ||
          !F8.firstElementChild.classList.contains("white")) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }

      // Vertical DOWN (F3 → F1)
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("white")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("white")) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("white")) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }

      // Horizontal LEFT (E4 → A4)
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("white")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }

      // Horizontal RIGHT (G4 → H4)
      let rightBlocked = false;
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("white")
      ) {
        if (!rightBlocked) {
          G4.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(G4);
        }
        if (G4.firstElementChild) rightBlocked = true;
      } else {
        rightBlocked = true;
      }
      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("white")
      ) {
        if (!rightBlocked) {
          H4.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(H4);
        }
        if (H4.firstElementChild) rightBlocked = true;
      }
    }
  }

  // Black Rook on F4
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "F4") {
      // Vertical UP (F5 → F8)
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("black")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("black")) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!F7.firstElementChild ||
          !F7.firstElementChild.classList.contains("black")) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!F8.firstElementChild ||
          !F8.firstElementChild.classList.contains("black")) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }

      // Vertical DOWN (F3 → F1)
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("black")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("black")) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("black")) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }

      // Horizontal LEFT (E4 → A4)
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("black")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black")))
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }

      // Horizontal RIGHT (G4 → H4)
      let rightBlocked = false;
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("black")
      ) {
        if (!rightBlocked) {
          G4.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(G4);
        }
        if (G4.firstElementChild) rightBlocked = true;
      } else {
        rightBlocked = true;
      }
      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("black")
      ) {
        if (!rightBlocked) {
          H4.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(H4);
        }
        if (H4.firstElementChild) rightBlocked = true;
      }
    }
  }
  // White Rook on F5
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "F5") {
      // Vertical UP (F6 → F8)
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("white")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!F7.firstElementChild ||
          !F7.firstElementChild.classList.contains("white")) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!F8.firstElementChild ||
          !F8.firstElementChild.classList.contains("white")) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }

      // Vertical DOWN (F4 → F1)
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("white")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("white")) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("white")) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("white")) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }

      // Horizontal LEFT (E5 → A5)
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("white")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("white")) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }

      // Horizontal RIGHT (G5 → H5)
      let rightBlocked = false;
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("white")
      ) {
        if (!rightBlocked) {
          G5.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(G5);
        }
        if (G5.firstElementChild) rightBlocked = true;
      } else {
        rightBlocked = true;
      }
      if (
        !H5.firstElementChild ||
        !H5.firstElementChild.classList.contains("white")
      ) {
        if (!rightBlocked) {
          H5.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(H5);
        }
        if (H5.firstElementChild) rightBlocked = true;
      }
    }
  }

  // Black Rook on F5
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "F5") {
      // Vertical UP (F6 → F8)
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("black")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!F7.firstElementChild ||
          !F7.firstElementChild.classList.contains("black")) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!F8.firstElementChild ||
          !F8.firstElementChild.classList.contains("black")) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }

      // Vertical DOWN (F4 → F1)
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("black")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("black")) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("black")) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("black")) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }

      // Horizontal LEFT (E5 → A5)
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("black")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("black")) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black")))
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }

      // Horizontal RIGHT (G5 → H5)
      let rightBlocked = false;
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("black")
      ) {
        if (!rightBlocked) {
          G5.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(G5);
        }
        if (G5.firstElementChild) rightBlocked = true;
      } else {
        rightBlocked = true;
      }
      if (
        !H5.firstElementChild ||
        !H5.firstElementChild.classList.contains("black")
      ) {
        if (!rightBlocked) {
          H5.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(H5);
        }
        if (H5.firstElementChild) rightBlocked = true;
      }
    }
  }
  // White Rook on F6
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "F6") {
      // Vertical UP (F7 → F8)
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("white")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!F8.firstElementChild ||
          !F8.firstElementChild.classList.contains("white")) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }

      // Vertical DOWN (F5 → F1)
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("white")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("white")) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("white")) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("white")) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("white")) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }

      // Horizontal LEFT (E6 → A6)
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("white")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("white")) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white")) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black"))) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black"))) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }

      // Horizontal RIGHT (G6 → H6)
      let rightBlocked = false;
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("white")
      ) {
        if (!rightBlocked) {
          G6.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(G6);
        }
        if (G6.firstElementChild) rightBlocked = true;
      } else {
        rightBlocked = true;
      }
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("white")
      ) {
        if (!rightBlocked) {
          H6.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(H6);
        }
        if (H6.firstElementChild) rightBlocked = true;
      }
    }
  }

  // Black Rook on F6
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "F6") {
      // Vertical UP (F7 → F8)
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("black")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!F8.firstElementChild ||
          !F8.firstElementChild.classList.contains("black")) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }

      // Vertical DOWN (F5 → F1)
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("black")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("black")) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("black")) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("black")) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("black")) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }

      // Horizontal LEFT (E6 → A6)
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("black")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("black")) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black")) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black"))) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black"))) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black")))
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }

      // Horizontal RIGHT (G6 → H6)
      let rightBlocked = false;
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("black")
      ) {
        if (!rightBlocked) {
          G6.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(G6);
        }
        if (G6.firstElementChild) rightBlocked = true;
      } else {
        rightBlocked = true;
      }
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("black")
      ) {
        if (!rightBlocked) {
          H6.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(H6);
        }
        if (H6.firstElementChild) rightBlocked = true;
      }
    }
  }
  // White Rook on F7
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "F7") {
      // Vertical UP (F8)
      if (
        !F8.firstElementChild ||
        !F8.firstElementChild.classList.contains("white")
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }

      // Vertical DOWN (F6 → F1)
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("white")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("white")) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("white")) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("white")) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("white")) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("white")) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }

      // Horizontal LEFT (E7 → A7)
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("white")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!D7.firstElementChild ||
          !D7.firstElementChild.classList.contains("white")) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("white")) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!B7.firstElementChild ||
          !B7.firstElementChild.classList.contains("white")) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black"))) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("white")) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("white") &&
            !B7.firstElementChild.classList.contains("black"))) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black"))) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }

      // Horizontal RIGHT (G7 → H7)
      let rightBlocked = false;
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("white")
      ) {
        if (!rightBlocked) {
          G7.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(G7);
        }
        if (G7.firstElementChild) rightBlocked = true;
      } else {
        rightBlocked = true;
      }
      if (
        !H7.firstElementChild ||
        !H7.firstElementChild.classList.contains("white")
      ) {
        if (!rightBlocked) {
          H7.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(H7);
        }
        if (H7.firstElementChild) rightBlocked = true;
      }
    }
  }

  // Black Rook on F7
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "F7") {
      // Vertical UP (F8)
      if (
        !F8.firstElementChild ||
        !F8.firstElementChild.classList.contains("black")
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }

      // Vertical DOWN (F6 → F1)
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("black")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("black")) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("black")) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("black")) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("black")) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("black")) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }

      // Horizontal LEFT (E7 → A7)
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("black")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!D7.firstElementChild ||
          !D7.firstElementChild.classList.contains("black")) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("black")) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!B7.firstElementChild ||
          !B7.firstElementChild.classList.contains("black")) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black"))) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains("black")) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("white") &&
            !B7.firstElementChild.classList.contains("black"))) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black"))) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black")))
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }

      // Horizontal RIGHT (G7 → H7)
      let rightBlocked = false;
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("black")
      ) {
        if (!rightBlocked) {
          G7.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(G7);
        }
        if (G7.firstElementChild) rightBlocked = true;
      } else {
        rightBlocked = true;
      }
      if (
        !H7.firstElementChild ||
        !H7.firstElementChild.classList.contains("black")
      ) {
        if (!rightBlocked) {
          H7.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(H7);
        }
        if (H7.firstElementChild) rightBlocked = true;
      }
    }
  }
  // White Rook on F8
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "F8") {
      // Vertical DOWN (F7 → F1)
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("white")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("white")) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("white")) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("white")) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("white")) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("white")) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("white")) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }

      // Horizontal LEFT (E8 → A8)
      if (
        !E8.firstElementChild ||
        !E8.firstElementChild.classList.contains("white")
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }
      if (
        (!D8.firstElementChild ||
          !D8.firstElementChild.classList.contains("white")) &&
        (!E8.firstElementChild ||
          (!E8.firstElementChild.classList.contains("white") &&
            !E8.firstElementChild.classList.contains("black")))
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }
      if (
        (!C8.firstElementChild ||
          !C8.firstElementChild.classList.contains("white")) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black"))) &&
        (!E8.firstElementChild ||
          (!E8.firstElementChild.classList.contains("white") &&
            !E8.firstElementChild.classList.contains("black")))
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }
      if (
        (!B8.firstElementChild ||
          !B8.firstElementChild.classList.contains("white")) &&
        (!C8.firstElementChild ||
          (!C8.firstElementChild.classList.contains("white") &&
            !C8.firstElementChild.classList.contains("black"))) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black"))) &&
        (!E8.firstElementChild ||
          (!E8.firstElementChild.classList.contains("white") &&
            !E8.firstElementChild.classList.contains("black")))
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }
      if (
        (!A8.firstElementChild ||
          !A8.firstElementChild.classList.contains("white")) &&
        (!B8.firstElementChild ||
          (!B8.firstElementChild.classList.contains("white") &&
            !B8.firstElementChild.classList.contains("black"))) &&
        (!C8.firstElementChild ||
          (!C8.firstElementChild.classList.contains("white") &&
            !C8.firstElementChild.classList.contains("black"))) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black"))) &&
        (!E8.firstElementChild ||
          (!E8.firstElementChild.classList.contains("white") &&
            !E8.firstElementChild.classList.contains("black")))
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }

      // Horizontal RIGHT (G8 → H8)
      let rightBlocked = false;
      if (
        !G8.firstElementChild ||
        !G8.firstElementChild.classList.contains("white")
      ) {
        if (!rightBlocked) {
          G8.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(G8);
        }
        if (G8.firstElementChild) rightBlocked = true;
      } else {
        rightBlocked = true;
      }
      if (
        !H8.firstElementChild ||
        !H8.firstElementChild.classList.contains("white")
      ) {
        if (!rightBlocked) {
          H8.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(H8);
        }
        if (H8.firstElementChild) rightBlocked = true;
      }
    }
  }

  // Black Rook on F8
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "F8") {
      // Vertical DOWN (F7 → F1)
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("black")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("black")) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("black")) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("black")) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("black")) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("black")) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("black")) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black"))) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }

      // Horizontal LEFT (E8 → A8)
      if (
        !E8.firstElementChild ||
        !E8.firstElementChild.classList.contains("black")
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }
      if (
        (!D8.firstElementChild ||
          !D8.firstElementChild.classList.contains("black")) &&
        (!E8.firstElementChild ||
          (!E8.firstElementChild.classList.contains("white") &&
            !E8.firstElementChild.classList.contains("black")))
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }
      if (
        (!C8.firstElementChild ||
          !C8.firstElementChild.classList.contains("black")) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black"))) &&
        (!E8.firstElementChild ||
          (!E8.firstElementChild.classList.contains("white") &&
            !E8.firstElementChild.classList.contains("black")))
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }
      if (
        (!B8.firstElementChild ||
          !B8.firstElementChild.classList.contains("black")) &&
        (!C8.firstElementChild ||
          (!C8.firstElementChild.classList.contains("white") &&
            !C8.firstElementChild.classList.contains("black"))) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black"))) &&
        (!E8.firstElementChild ||
          (!E8.firstElementChild.classList.contains("white") &&
            !E8.firstElementChild.classList.contains("black")))
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }
      if (
        (!A8.firstElementChild ||
          !A8.firstElementChild.classList.contains("black")) &&
        (!B8.firstElementChild ||
          (!B8.firstElementChild.classList.contains("white") &&
            !B8.firstElementChild.classList.contains("black"))) &&
        (!C8.firstElementChild ||
          (!C8.firstElementChild.classList.contains("white") &&
            !C8.firstElementChild.classList.contains("black"))) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black"))) &&
        (!E8.firstElementChild ||
          (!E8.firstElementChild.classList.contains("white") &&
            !E8.firstElementChild.classList.contains("black")))
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }

      // Horizontal RIGHT (G8 → H8)
      let rightBlocked = false;
      if (
        !G8.firstElementChild ||
        !G8.firstElementChild.classList.contains("black")
      ) {
        if (!rightBlocked) {
          G8.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(G8);
        }
        if (G8.firstElementChild) rightBlocked = true;
      } else {
        rightBlocked = true;
      }
      if (
        !H8.firstElementChild ||
        !H8.firstElementChild.classList.contains("black")
      ) {
        if (!rightBlocked) {
          H8.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(H8);
        }
        if (H8.firstElementChild) rightBlocked = true;
      }
    }
  }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  ///
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // White Rook on G1
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "G1") {
      // Vertical UP (G2 → G8)
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("white")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        (!G3.firstElementChild ||
          !G3.firstElementChild.classList.contains("white")) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black")))
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        (!G4.firstElementChild ||
          !G4.firstElementChild.classList.contains("white")) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black")))
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains("white")) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black")))
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("white")) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black")))
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("white")) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black")))
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        (!G8.firstElementChild ||
          !G8.firstElementChild.classList.contains("white")) &&
        (!G7.firstElementChild ||
          (!G7.firstElementChild.classList.contains("white") &&
            !G7.firstElementChild.classList.contains("black"))) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black")))
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }

      // Horizontal LEFT (F1 → A1)
      if (
        !F1.firstElementChild ||
        !F1.firstElementChild.classList.contains("white")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("white")) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black")))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("white")) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black"))) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black")))
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("white")) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black"))) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black")))
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
      if (
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("white")) &&
        (!C1.firstElementChild ||
          (!C1.firstElementChild.classList.contains("white") &&
            !C1.firstElementChild.classList.contains("black"))) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black"))) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black")))
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("white")) &&
        (!B1.firstElementChild ||
          (!B1.firstElementChild.classList.contains("white") &&
            !B1.firstElementChild.classList.contains("black"))) &&
        (!C1.firstElementChild ||
          (!C1.firstElementChild.classList.contains("white") &&
            !C1.firstElementChild.classList.contains("black"))) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black"))) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black")))
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }

      // Horizontal RIGHT (H1)
      if (
        !H1.firstElementChild ||
        !H1.firstElementChild.classList.contains("white")
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }
    }
  }

  // Black Rook on G1
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "G1") {
      // Vertical UP (G2 → G8)
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("black")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        (!G3.firstElementChild ||
          !G3.firstElementChild.classList.contains("black")) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black")))
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        (!G4.firstElementChild ||
          !G4.firstElementChild.classList.contains("black")) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black")))
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains("black")) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black")))
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("black")) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black")))
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("black")) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black")))
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        (!G8.firstElementChild ||
          !G8.firstElementChild.classList.contains("black")) &&
        (!G7.firstElementChild ||
          (!G7.firstElementChild.classList.contains("white") &&
            !G7.firstElementChild.classList.contains("black"))) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black")))
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }

      // Horizontal LEFT (F1 → A1)
      if (
        !F1.firstElementChild ||
        !F1.firstElementChild.classList.contains("black")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("black")) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black")))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("black")) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black"))) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black")))
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("black")) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black"))) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black")))
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
      if (
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains("black")) &&
        (!C1.firstElementChild ||
          (!C1.firstElementChild.classList.contains("white") &&
            !C1.firstElementChild.classList.contains("black"))) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black"))) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black")))
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("black")) &&
        (!B1.firstElementChild ||
          (!B1.firstElementChild.classList.contains("white") &&
            !B1.firstElementChild.classList.contains("black"))) &&
        (!C1.firstElementChild ||
          (!C1.firstElementChild.classList.contains("white") &&
            !C1.firstElementChild.classList.contains("black"))) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black"))) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black")))
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }

      // Horizontal RIGHT (H1)
      if (
        !H1.firstElementChild ||
        !H1.firstElementChild.classList.contains("black")
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }
    }
  }
  // White Rook on G2
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "G2") {
      // Vertical UP (G3 → G8)
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("white")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        (!G4.firstElementChild ||
          !G4.firstElementChild.classList.contains("white")) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black")))
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains("white")) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black")))
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("white")) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black")))
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("white")) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black")))
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        (!G8.firstElementChild ||
          !G8.firstElementChild.classList.contains("white")) &&
        (!G7.firstElementChild ||
          (!G7.firstElementChild.classList.contains("white") &&
            !G7.firstElementChild.classList.contains("black"))) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black")))
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }

      // Vertical DOWN (G1)
      if (
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains("white")
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }

      // Horizontal LEFT (F2 → A2)
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("white")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("white")) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white")) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white")) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black"))) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black"))) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }

      // Horizontal RIGHT (H2)
      if (
        !H2.firstElementChild ||
        !H2.firstElementChild.classList.contains("white")
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
    }
  }

  // Black Rook on G2
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "G2") {
      // Vertical UP (G3 → G8)
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("black")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        (!G4.firstElementChild ||
          !G4.firstElementChild.classList.contains("black")) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black")))
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains("black")) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black")))
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("black")) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black")))
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("black")) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black")))
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        (!G8.firstElementChild ||
          !G8.firstElementChild.classList.contains("black")) &&
        (!G7.firstElementChild ||
          (!G7.firstElementChild.classList.contains("white") &&
            !G7.firstElementChild.classList.contains("black"))) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black")))
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }

      // Vertical DOWN (G1)
      if (
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains("black")
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }

      // Horizontal LEFT (F2 → A2)
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("black")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains("black")) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("black")) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black"))) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black"))) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black")))
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }

      // Horizontal RIGHT (H2)
      if (
        !H2.firstElementChild ||
        !H2.firstElementChild.classList.contains("black")
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
    }
  }
  // White Rook on G3
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "G3") {
      // Vertical UP (G4 → G8)
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("white")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains("white")) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black")))
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("white")) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black")))
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("white")) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black")))
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        (!G8.firstElementChild ||
          !G8.firstElementChild.classList.contains("white")) &&
        (!G7.firstElementChild ||
          (!G7.firstElementChild.classList.contains("white") &&
            !G7.firstElementChild.classList.contains("black"))) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black")))
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }

      // Vertical DOWN (G2 → G1)
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("white")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("white")) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black")))
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }

      // Horizontal LEFT (F3 → A3)
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("white")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }

      // Horizontal RIGHT (H3)
      if (
        !H3.firstElementChild ||
        !H3.firstElementChild.classList.contains("white")
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
    }
  }

  // Black Rook on G3
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "G3") {
      // Vertical UP (G4 → G8)
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("black")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains("black")) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black")))
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("black")) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black")))
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("black")) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black")))
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        (!G8.firstElementChild ||
          !G8.firstElementChild.classList.contains("black")) &&
        (!G7.firstElementChild ||
          (!G7.firstElementChild.classList.contains("white") &&
            !G7.firstElementChild.classList.contains("black"))) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black")))
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }

      // Vertical DOWN (G2 → G1)
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("black")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("black")) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black")))
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }

      // Horizontal LEFT (F3 → A3)
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("black")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("black")) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("black")) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          (!B3.firstElementChild.classList.contains("white") &&
            !B3.firstElementChild.classList.contains("black"))) &&
        (!C3.firstElementChild ||
          (!C3.firstElementChild.classList.contains("white") &&
            !C3.firstElementChild.classList.contains("black"))) &&
        (!D3.firstElementChild ||
          (!D3.firstElementChild.classList.contains("white") &&
            !D3.firstElementChild.classList.contains("black"))) &&
        (!E3.firstElementChild ||
          (!E3.firstElementChild.classList.contains("white") &&
            !E3.firstElementChild.classList.contains("black"))) &&
        (!F3.firstElementChild ||
          (!F3.firstElementChild.classList.contains("white") &&
            !F3.firstElementChild.classList.contains("black")))
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }

      // Horizontal RIGHT (H3)
      if (
        !H3.firstElementChild ||
        !H3.firstElementChild.classList.contains("black")
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
    }
  }
  // White Rook on G4
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "G4") {
      // Vertical UP (G5 → G8)
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("white")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("white")) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black")))
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("white")) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black")))
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        (!G8.firstElementChild ||
          !G8.firstElementChild.classList.contains("white")) &&
        (!G7.firstElementChild ||
          (!G7.firstElementChild.classList.contains("white") &&
            !G7.firstElementChild.classList.contains("black"))) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black")))
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }

      // Vertical DOWN (G3 → G1)
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("white")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        (!G2.firstElementChild ||
          !G2.firstElementChild.classList.contains("white")) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black")))
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("white")) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black")))
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }

      // Horizontal LEFT (F4 → A4)
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("white")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("white")) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }

      // Horizontal RIGHT (H4)
      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("white")
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
    }
  }

  // Black Rook on G4
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "G4") {
      // Vertical UP (G5 → G8)
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("black")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("black")) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black")))
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("black")) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black")))
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        (!G8.firstElementChild ||
          !G8.firstElementChild.classList.contains("black")) &&
        (!G7.firstElementChild ||
          (!G7.firstElementChild.classList.contains("white") &&
            !G7.firstElementChild.classList.contains("black"))) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black")))
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }

      // Vertical DOWN (G3 → G1)
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("black")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        (!G2.firstElementChild ||
          !G2.firstElementChild.classList.contains("black")) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black")))
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("black")) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black")))
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }

      // Horizontal LEFT (F4 → A4)
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("black")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("black")) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!A4.firstElementChild ||
          !A4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          (!B4.firstElementChild.classList.contains("white") &&
            !B4.firstElementChild.classList.contains("black"))) &&
        (!C4.firstElementChild ||
          (!C4.firstElementChild.classList.contains("white") &&
            !C4.firstElementChild.classList.contains("black"))) &&
        (!D4.firstElementChild ||
          (!D4.firstElementChild.classList.contains("white") &&
            !D4.firstElementChild.classList.contains("black"))) &&
        (!E4.firstElementChild ||
          (!E4.firstElementChild.classList.contains("white") &&
            !E4.firstElementChild.classList.contains("black"))) &&
        (!F4.firstElementChild ||
          (!F4.firstElementChild.classList.contains("white") &&
            !F4.firstElementChild.classList.contains("black")))
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }

      // Horizontal RIGHT (H4)
      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("black")
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
    }
  }
  // White Rook on G5
  if (selectedPiece.classList.contains("whiteRook")) {
    if (currentSquare === "G5") {
      // Vertical UP (G6 → G8)
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("white")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("white")) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black")))
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        (!G8.firstElementChild ||
          !G8.firstElementChild.classList.contains("white")) &&
        (!G7.firstElementChild ||
          (!G7.firstElementChild.classList.contains("white") &&
            !G7.firstElementChild.classList.contains("black"))) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black")))
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }

      // Vertical DOWN (G4 → G1)
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("white")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        (!G3.firstElementChild ||
          !G3.firstElementChild.classList.contains("white")) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black")))
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        (!G2.firstElementChild ||
          !G2.firstElementChild.classList.contains("white")) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black")))
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("white")) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black")))
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }

      // Horizontal LEFT (F5 → A5)
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("white")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("white")) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("white")) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }

      // Horizontal RIGHT (H5)
      if (
        !H5.firstElementChild ||
        !H5.firstElementChild.classList.contains("white")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
    }
  }
  // Black Rook on G5
  if (selectedPiece.classList.contains("blackRook")) {
    if (currentSquare === "G5") {
      // Vertical UP (G6 → G8)
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("black")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("black")) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black")))
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        (!G8.firstElementChild ||
          !G8.firstElementChild.classList.contains("black")) &&
        (!G7.firstElementChild ||
          (!G7.firstElementChild.classList.contains("white") &&
            !G7.firstElementChild.classList.contains("black"))) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black")))
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }

      // Vertical DOWN (G4 → G1)
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("black")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        (!G3.firstElementChild ||
          !G3.firstElementChild.classList.contains("black")) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black")))
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        (!G2.firstElementChild ||
          !G2.firstElementChild.classList.contains("black")) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black")))
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("black")) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black")))
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }

      // Horizontal LEFT (F5 → A5)
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("black")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("black")) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!D5.firstElementChild ||
          !D5.firstElementChild.classList.contains("black")) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!A5.firstElementChild ||
          !A5.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          (!B5.firstElementChild.classList.contains("white") &&
            !B5.firstElementChild.classList.contains("black"))) &&
        (!C5.firstElementChild ||
          (!C5.firstElementChild.classList.contains("white") &&
            !C5.firstElementChild.classList.contains("black"))) &&
        (!D5.firstElementChild ||
          (!D5.firstElementChild.classList.contains("white") &&
            !D5.firstElementChild.classList.contains("black"))) &&
        (!E5.firstElementChild ||
          (!E5.firstElementChild.classList.contains("white") &&
            !E5.firstElementChild.classList.contains("black"))) &&
        (!F5.firstElementChild ||
          (!F5.firstElementChild.classList.contains("white") &&
            !F5.firstElementChild.classList.contains("black")))
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }

      // Horizontal RIGHT (H5)
      if (
        !H5.firstElementChild ||
        !H5.firstElementChild.classList.contains("black")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
    }
  }
  // Rook on G6 (White or Black)
  if (
    selectedPiece.classList.contains("whiteRook") ||
    selectedPiece.classList.contains("blackRook")
  ) {
    if (currentSquare === "G6") {
      const color = selectedPiece.classList.contains("whiteRook")
        ? "white"
        : "black";

      // Vertical UP (G7 → G8)
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains(color)
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        (!G8.firstElementChild ||
          !G8.firstElementChild.classList.contains(color)) &&
        (!G7.firstElementChild ||
          (!G7.firstElementChild.classList.contains("white") &&
            !G7.firstElementChild.classList.contains("black")))
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }

      // Vertical DOWN (G5 → G1)
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains(color)
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        (!G4.firstElementChild ||
          !G4.firstElementChild.classList.contains(color)) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black")))
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        (!G3.firstElementChild ||
          !G3.firstElementChild.classList.contains(color)) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black")))
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        (!G2.firstElementChild ||
          !G2.firstElementChild.classList.contains(color)) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black")))
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains(color)) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black")))
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }

      // Horizontal LEFT (F6 → A6)
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains(color)
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!E6.firstElementChild ||
          !E6.firstElementChild.classList.contains(color)) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains(color)) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains(color)) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.firstElementChild.classList.contains(
              "black"
            ))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains(color)) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black"))) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!A6.firstElementChild ||
          !A6.firstElementChild.classList.contains(color)) &&
        (!B6.firstElementChild ||
          (!B6.firstElementChild.classList.contains("white") &&
            !B6.firstElementChild.classList.contains("black"))) &&
        (!C6.firstElementChild ||
          (!C6.firstElementChild.classList.contains("white") &&
            !C6.firstElementChild.classList.contains("black"))) &&
        (!D6.firstElementChild ||
          (!D6.firstElementChild.classList.contains("white") &&
            !D6.firstElementChild.classList.contains("black"))) &&
        (!E6.firstElementChild ||
          (!E6.firstElementChild.classList.contains("white") &&
            !E6.firstElementChild.classList.contains("black"))) &&
        (!F6.firstElementChild ||
          (!F6.firstElementChild.classList.contains("white") &&
            !F6.firstElementChild.classList.contains("black")))
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }

      // Horizontal RIGHT (H6)
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains(color)
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
    }
  }
  // Rook on G7 (White or Black)
  if (
    selectedPiece.classList.contains("whiteRook") ||
    selectedPiece.classList.contains("blackRook")
  ) {
    if (currentSquare === "G7") {
      const color = selectedPiece.classList.contains("whiteRook")
        ? "white"
        : "black";

      // Vertical UP (G8)
      if (
        !G8.firstElementChild ||
        !G8.firstElementChild.classList.contains(color)
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }

      // Vertical DOWN (G6 → G1)
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains(color)
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains(color)) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black")))
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        (!G4.firstElementChild ||
          !G4.firstElementChild.classList.contains(color)) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black")))
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        (!G3.firstElementChild ||
          !G3.firstElementChild.classList.contains(color)) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black")))
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        (!G2.firstElementChild ||
          !G2.firstElementChild.classList.contains(color)) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black")))
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains(color)) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black")))
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }

      // Horizontal LEFT (F7 → A7)
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains(color)
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains(color)) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!D7.firstElementChild ||
          !D7.firstElementChild.classList.contains(color)) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black"))) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains(color)) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black"))) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!B7.firstElementChild ||
          !B7.firstElementChild.classList.contains(color)) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black"))) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black"))) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!A7.firstElementChild ||
          !A7.firstElementChild.classList.contains(color)) &&
        (!B7.firstElementChild ||
          (!B7.firstElementChild.classList.contains("white") &&
            !B7.firstElementChild.classList.contains("black"))) &&
        (!C7.firstElementChild ||
          (!C7.firstElementChild.classList.contains("white") &&
            !C7.firstElementChild.classList.contains("black"))) &&
        (!D7.firstElementChild ||
          (!D7.firstElementChild.classList.contains("white") &&
            !D7.firstElementChild.classList.contains("black"))) &&
        (!E7.firstElementChild ||
          (!E7.firstElementChild.classList.contains("white") &&
            !E7.firstElementChild.classList.contains("black"))) &&
        (!F7.firstElementChild ||
          (!F7.firstElementChild.classList.contains("white") &&
            !F7.firstElementChild.classList.contains("black")))
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }

      // Horizontal RIGHT (H7)
      if (
        !H7.firstElementChild ||
        !H7.firstElementChild.classList.contains(color)
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }
    }
  }
  // Rook on G8 (White or Black)
  if (
    selectedPiece.classList.contains("whiteRook") ||
    selectedPiece.classList.contains("blackRook")
  ) {
    if (currentSquare === "G8") {
      const color = selectedPiece.classList.contains("whiteRook")
        ? "white"
        : "black";

      // Vertical DOWN (G7 → G1)
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains(color)
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains(color)) &&
        (!G7.firstElementChild ||
          (!G7.firstElementChild.classList.contains("white") &&
            !G7.firstElementChild.classList.contains("black")))
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains(color)) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!G7.firstElementChild ||
          (!G7.firstElementChild.classList.contains("white") &&
            !G7.firstElementChild.classList.contains("black")))
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        (!G4.firstElementChild ||
          !G4.firstElementChild.classList.contains(color)) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!G7.firstElementChild ||
          (!G7.firstElementChild.classList.contains("white") &&
            !G7.firstElementChild.classList.contains("black")))
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        (!G3.firstElementChild ||
          !G3.firstElementChild.classList.contains(color)) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!G7.firstElementChild ||
          (!G7.firstElementChild.classList.contains("white") &&
            !G7.firstElementChild.classList.contains("black")))
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        (!G2.firstElementChild ||
          !G2.firstElementChild.classList.contains(color)) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!G7.firstElementChild ||
          (!G7.firstElementChild.classList.contains("white") &&
            !G7.firstElementChild.classList.contains("black")))
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains(color)) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black"))) &&
        (!G3.firstElementChild ||
          (!G3.firstElementChild.classList.contains("white") &&
            !G3.firstElementChild.classList.contains("black"))) &&
        (!G4.firstElementChild ||
          (!G4.firstElementChild.classList.contains("white") &&
            !G4.firstElementChild.classList.contains("black"))) &&
        (!G5.firstElementChild ||
          (!G5.firstElementChild.classList.contains("white") &&
            !G5.firstElementChild.classList.contains("black"))) &&
        (!G6.firstElementChild ||
          (!G6.firstElementChild.classList.contains("white") &&
            !G6.firstElementChild.classList.contains("black"))) &&
        (!G7.firstElementChild ||
          (!G7.firstElementChild.classList.contains("white") &&
            !G7.firstElementChild.classList.contains("black")))
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }

      // Horizontal LEFT (F8 → A8)
      if (
        !F8.firstElementChild ||
        !F8.firstElementChild.classList.contains(color)
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
      if (
        (!E8.firstElementChild ||
          !E8.firstElementChild.classList.contains(color)) &&
        (!F8.firstElementChild ||
          (!F8.firstElementChild.classList.contains("white") &&
            !F8.firstElementChild.classList.contains("black")))
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }
      if (
        (!D8.firstElementChild ||
          !D8.firstElementChild.classList.contains(color)) &&
        (!E8.firstElementChild ||
          (!E8.firstElementChild.classList.contains("white") &&
            !E8.firstElementChild.classList.contains("black"))) &&
        (!F8.firstElementChild ||
          (!F8.firstElementChild.classList.contains("white") &&
            !F8.firstElementChild.classList.contains("black")))
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }
      if (
        (!C8.firstElementChild ||
          !C8.firstElementChild.classList.contains(color)) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black"))) &&
        (!E8.firstElementChild ||
          (!E8.firstElementChild.classList.contains("white") &&
            !E8.firstElementChild.classList.contains("black"))) &&
        (!F8.firstElementChild ||
          (!F8.firstElementChild.classList.contains("white") &&
            !F8.firstElementChild.classList.contains("black")))
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }
      if (
        (!B8.firstElementChild ||
          !B8.firstElementChild.classList.contains(color)) &&
        (!C8.firstElementChild ||
          (!C8.firstElementChild.classList.contains("white") &&
            !C8.firstElementChild.classList.contains("black"))) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black"))) &&
        (!E8.firstElementChild ||
          (!E8.firstElementChild.classList.contains("white") &&
            !E8.firstElementChild.classList.contains("black"))) &&
        (!F8.firstElementChild ||
          (!F8.firstElementChild.classList.contains("white") &&
            !F8.firstElementChild.classList.contains("black")))
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }
      if (
        (!A8.firstElementChild ||
          !A8.firstElementChild.classList.contains(color)) &&
        (!B8.firstElementChild ||
          (!B8.firstElementChild.classList.contains("white") &&
            !B8.firstElementChild.classList.contains("black"))) &&
        (!C8.firstElementChild ||
          (!C8.firstElementChild.classList.contains("white") &&
            !C8.firstElementChild.classList.contains("black"))) &&
        (!D8.firstElementChild ||
          (!D8.firstElementChild.classList.contains("white") &&
            !D8.firstElementChild.classList.contains("black"))) &&
        (!E8.firstElementChild ||
          (!E8.firstElementChild.classList.contains("white") &&
            !E8.firstElementChild.classList.contains("black"))) &&
        (!F8.firstElementChild ||
          (!F8.firstElementChild.classList.contains("white") &&
            !F8.firstElementChild.classList.contains("black")))
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }

      // Horizontal RIGHT (H8)
      if (
        !H8.firstElementChild ||
        !H8.firstElementChild.classList.contains(color)
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }
    }
  }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // Rook on H1 (White or Black)
  if (
    selectedPiece.classList.contains("whiteRook") ||
    selectedPiece.classList.contains("blackRook")
  ) {
    if (currentSquare === "H1") {
      const color = selectedPiece.classList.contains("whiteRook")
        ? "white"
        : "black";

      // Vertical UP (H2 → H8)
      if (
        !H2.firstElementChild ||
        !H2.firstElementChild.classList.contains(color)
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
      if (
        (!H3.firstElementChild ||
          !H3.firstElementChild.classList.contains(color)) &&
        (!H2.firstElementChild ||
          (!H2.firstElementChild.classList.contains("white") &&
            !H2.firstElementChild.classList.contains("black")))
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
      if (
        (!H4.firstElementChild ||
          !H4.firstElementChild.classList.contains(color)) &&
        (!H3.firstElementChild ||
          (!H3.firstElementChild.classList.contains("white") &&
            !H3.firstElementChild.classList.contains("black"))) &&
        (!H2.firstElementChild ||
          (!H2.firstElementChild.classList.contains("white") &&
            !H2.firstElementChild.classList.contains("black")))
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
      if (
        (!H5.firstElementChild ||
          !H5.firstElementChild.classList.contains(color)) &&
        (!H4.firstElementChild ||
          (!H4.firstElementChild.classList.contains("white") &&
            !H4.firstElementChild.classList.contains("black"))) &&
        (!H3.firstElementChild ||
          (!H3.firstElementChild.classList.contains("white") &&
            !H3.firstElementChild.classList.contains("black"))) &&
        (!H2.firstElementChild ||
          (!H2.firstElementChild.classList.contains("white") &&
            !H2.firstElementChild.classList.contains("black")))
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
      if (
        (!H6.firstElementChild ||
          !H6.firstElementChild.classList.contains(color)) &&
        (!H5.firstElementChild ||
          (!H5.firstElementChild.classList.contains("white") &&
            !H5.firstElementChild.classList.contains("black"))) &&
        (!H4.firstElementChild ||
          (!H4.firstElementChild.classList.contains("white") &&
            !H4.firstElementChild.classList.contains("black"))) &&
        (!H3.firstElementChild ||
          (!H3.firstElementChild.classList.contains("white") &&
            !H3.firstElementChild.classList.contains("black"))) &&
        (!H2.firstElementChild ||
          (!H2.firstElementChild.classList.contains("white") &&
            !H2.firstElementChild.classList.contains("black")))
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
      if (
        (!H7.firstElementChild ||
          !H7.firstElementChild.classList.contains(color)) &&
        (!H6.firstElementChild ||
          (!H6.firstElementChild.classList.contains("white") &&
            !H6.firstElementChild.classList.contains("black"))) &&
        (!H5.firstElementChild ||
          (!H5.firstElementChild.classList.contains("white") &&
            !H5.firstElementChild.classList.contains("black"))) &&
        (!H4.firstElementChild ||
          (!H4.firstElementChild.classList.contains("white") &&
            !H4.firstElementChild.classList.contains("black"))) &&
        (!H3.firstElementChild ||
          (!H3.firstElementChild.classList.contains("white") &&
            !H3.firstElementChild.classList.contains("black"))) &&
        (!H2.firstElementChild ||
          (!H2.firstElementChild.classList.contains("white") &&
            !H2.firstElementChild.classList.contains("black")))
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }
      if (
        (!H8.firstElementChild ||
          !H8.firstElementChild.classList.contains(color)) &&
        (!H7.firstElementChild ||
          (!H7.firstElementChild.classList.contains("white") &&
            !H7.firstElementChild.classList.contains("black"))) &&
        (!H6.firstElementChild ||
          (!H6.firstElementChild.classList.contains("white") &&
            !H6.firstElementChild.classList.contains("black"))) &&
        (!H5.firstElementChild ||
          (!H5.firstElementChild.classList.contains("white") &&
            !H5.firstElementChild.classList.contains("black"))) &&
        (!H4.firstElementChild ||
          (!H4.firstElementChild.classList.contains("white") &&
            !H4.firstElementChild.classList.contains("black"))) &&
        (!H3.firstElementChild ||
          (!H3.firstElementChild.classList.contains("white") &&
            !H3.firstElementChild.classList.contains("black"))) &&
        (!H2.firstElementChild ||
          (!H2.firstElementChild.classList.contains("white") &&
            !H2.firstElementChild.classList.contains("black")))
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }

      // Horizontal LEFT (G1 → A1)
      if (
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains(color)
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains(color)) &&
        (!G1.firstElementChild ||
          (!G1.firstElementChild.classList.contains("white") &&
            !G1.firstElementChild.classList.contains("black")))
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains(color)) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black"))) &&
        (!G1.firstElementChild ||
          (!G1.firstElementChild.classList.contains("white") &&
            !G1.firstElementChild.classList.contains("black")))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains(color)) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black"))) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black"))) &&
        (!G1.firstElementChild ||
          (!G1.firstElementChild.classList.contains("white") &&
            !G1.firstElementChild.classList.contains("black")))
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains(color)) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black"))) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black"))) &&
        (!G1.firstElementChild ||
          (!G1.firstElementChild.classList.contains("white") &&
            !G1.firstElementChild.classList.contains("black")))
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
      if (
        (!B1.firstElementChild ||
          !B1.firstElementChild.classList.contains(color)) &&
        (!C1.firstElementChild ||
          (!C1.firstElementChild.classList.contains("white") &&
            !C1.firstElementChild.classList.contains("black"))) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black"))) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black"))) &&
        (!G1.firstElementChild ||
          (!G1.firstElementChild.classList.contains("white") &&
            !G1.firstElementChild.classList.contains("black")))
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
      if (
        (!A1.firstElementChild ||
          !A1.firstElementChild.classList.contains(color)) &&
        (!B1.firstElementChild ||
          (!B1.firstElementChild.classList.contains("white") &&
            !B1.firstElementChild.classList.contains("black"))) &&
        (!C1.firstElementChild ||
          (!C1.firstElementChild.classList.contains("white") &&
            !C1.firstElementChild.classList.contains("black"))) &&
        (!D1.firstElementChild ||
          (!D1.firstElementChild.classList.contains("white") &&
            !D1.firstElementChild.classList.contains("black"))) &&
        (!E1.firstElementChild ||
          (!E1.firstElementChild.classList.contains("white") &&
            !E1.firstElementChild.classList.contains("black"))) &&
        (!F1.firstElementChild ||
          (!F1.firstElementChild.classList.contains("white") &&
            !F1.firstElementChild.classList.contains("black"))) &&
        (!G1.firstElementChild ||
          (!G1.firstElementChild.classList.contains("white") &&
            !G1.firstElementChild.classList.contains("black")))
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }
    }
  }
  // Rook on H2 (White or Black)
  if (
    selectedPiece.classList.contains("whiteRook") ||
    selectedPiece.classList.contains("blackRook")
  ) {
    if (currentSquare === "H2") {
      const color = selectedPiece.classList.contains("whiteRook")
        ? "white"
        : "black";

      // Vertical UP (H3 → H8)
      if (
        !H3.firstElementChild ||
        !H3.firstElementChild.classList.contains(color)
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
      if (
        (!H4.firstElementChild ||
          !H4.firstElementChild.classList.contains(color)) &&
        (!H3.firstElementChild ||
          (!H3.firstElementChild.classList.contains("white") &&
            !H3.firstElementChild.classList.contains("black")))
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
      if (
        (!H5.firstElementChild ||
          !H5.firstElementChild.classList.contains(color)) &&
        (!H4.firstElementChild ||
          (!H4.firstElementChild.classList.contains("white") &&
            !H4.firstElementChild.classList.contains("black"))) &&
        (!H3.firstElementChild ||
          (!H3.firstElementChild.classList.contains("white") &&
            !H3.firstElementChild.classList.contains("black")))
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
      if (
        (!H6.firstElementChild ||
          !H6.firstElementChild.classList.contains(color)) &&
        (!H5.firstElementChild ||
          (!H5.firstElementChild.classList.contains("white") &&
            !H5.firstElementChild.classList.contains("black"))) &&
        (!H4.firstElementChild ||
          (!H4.firstElementChild.classList.contains("white") &&
            !H4.firstElementChild.classList.contains("black"))) &&
        (!H3.firstElementChild ||
          (!H3.firstElementChild.classList.contains("white") &&
            !H3.firstElementChild.classList.contains("black")))
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
      if (
        (!H7.firstElementChild ||
          !H7.firstElementChild.classList.contains(color)) &&
        (!H6.firstElementChild ||
          (!H6.firstElementChild.classList.contains("white") &&
            !H6.firstElementChild.classList.contains("black"))) &&
        (!H5.firstElementChild ||
          (!H5.firstElementChild.classList.contains("white") &&
            !H5.firstElementChild.classList.contains("black"))) &&
        (!H4.firstElementChild ||
          (!H4.firstElementChild.classList.contains("white") &&
            !H4.firstElementChild.classList.contains("black"))) &&
        (!H3.firstElementChild ||
          (!H3.firstElementChild.classList.contains("white") &&
            !H3.firstElementChild.classList.contains("black")))
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }
      if (
        (!H8.firstElementChild ||
          !H8.firstElementChild.classList.contains(color)) &&
        (!H7.firstElementChild ||
          (!H7.firstElementChild.classList.contains("white") &&
            !H7.firstElementChild.classList.contains("black"))) &&
        (!H6.firstElementChild ||
          (!H6.firstElementChild.classList.contains("white") &&
            !H6.firstElementChild.classList.contains("black"))) &&
        (!H5.firstElementChild ||
          (!H5.firstElementChild.classList.contains("white") &&
            !H5.firstElementChild.classList.contains("black"))) &&
        (!H4.firstElementChild ||
          (!H4.firstElementChild.classList.contains("white") &&
            !H4.firstElementChild.classList.contains("black"))) &&
        (!H3.firstElementChild ||
          (!H3.firstElementChild.classList.contains("white") &&
            !H3.firstElementChild.classList.contains("black")))
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }

      // Vertical DOWN (H1)
      if (
        !H1.firstElementChild ||
        !H1.firstElementChild.classList.contains(color)
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }

      // Horizontal LEFT (G2 → A2)
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains(color)
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains(color)) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black")))
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!E2.firstElementChild ||
          !E2.firstElementChild.classList.contains(color)) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black"))) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black")))
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains(color)) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black"))) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black")))
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains(color)) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black"))) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black")))
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains(color)) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black"))) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black"))) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black")))
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!A2.firstElementChild ||
          !A2.firstElementChild.classList.contains(color)) &&
        (!B2.firstElementChild ||
          (!B2.firstElementChild.classList.contains("white") &&
            !B2.firstElementChild.classList.contains("black"))) &&
        (!C2.firstElementChild ||
          (!C2.firstElementChild.classList.contains("white") &&
            !C2.firstElementChild.classList.contains("black"))) &&
        (!D2.firstElementChild ||
          (!D2.firstElementChild.classList.contains("white") &&
            !D2.firstElementChild.classList.contains("black"))) &&
        (!E2.firstElementChild ||
          (!E2.firstElementChild.classList.contains("white") &&
            !E2.firstElementChild.classList.contains("black"))) &&
        (!F2.firstElementChild ||
          (!F2.firstElementChild.classList.contains("white") &&
            !F2.firstElementChild.classList.contains("black"))) &&
        (!G2.firstElementChild ||
          (!G2.firstElementChild.classList.contains("white") &&
            !G2.firstElementChild.classList.contains("black")))
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
    }
  }

  if (currentSquare === "H3") {
    const color = selectedPiece.classList.contains("whiteRook")
      ? "white"
      : "black";

    // Vertical UP (H4 → H8)
    if (
      !H4.firstElementChild ||
      !H4.firstElementChild.classList.contains(color)
    ) {
      H4.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H4);
    }
    if (
      (!H5.firstElementChild ||
        !H5.firstElementChild.classList.contains(color)) &&
      (!H4.firstElementChild ||
        (!H4.firstElementChild.classList.contains("white") &&
          !H4.firstElementChild.classList.contains("black")))
    ) {
      H5.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H5);
    }
    if (
      (!H6.firstElementChild ||
        !H6.firstElementChild.classList.contains(color)) &&
      (!H5.firstElementChild ||
        (!H5.firstElementChild.classList.contains("white") &&
          !H5.firstElementChild.classList.contains("black"))) &&
      (!H4.firstElementChild ||
        (!H4.firstElementChild.classList.contains("white") &&
          !H4.firstElementChild.classList.contains("black")))
    ) {
      H6.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H6);
    }
    if (
      (!H7.firstElementChild ||
        !H7.firstElementChild.classList.contains(color)) &&
      (!H6.firstElementChild ||
        (!H6.firstElementChild.classList.contains("white") &&
          !H6.firstElementChild.classList.contains("black"))) &&
      (!H5.firstElementChild ||
        (!H5.firstElementChild.classList.contains("white") &&
          !H5.firstElementChild.classList.contains("black"))) &&
      (!H4.firstElementChild ||
        (!H4.firstElementChild.classList.contains("white") &&
          !H4.firstElementChild.classList.contains("black")))
    ) {
      H7.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H7);
    }
    if (
      (!H8.firstElementChild ||
        !H8.firstElementChild.classList.contains(color)) &&
      (!H7.firstElementChild ||
        (!H7.firstElementChild.classList.contains("white") &&
          !H7.firstElementChild.classList.contains("black"))) &&
      (!H6.firstElementChild ||
        (!H6.firstElementChild.classList.contains("white") &&
          !H6.firstElementChild.classList.contains("black"))) &&
      (!H5.firstElementChild ||
        (!H5.firstElementChild.classList.contains("white") &&
          !H5.firstElementChild.classList.contains("black"))) &&
      (!H4.firstElementChild ||
        (!H4.firstElementChild.classList.contains("white") &&
          !H4.firstElementChild.classList.contains("black")))
    ) {
      H8.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H8);
    }

    // Vertical DOWN (H2 → H1)
    if (
      !H2.firstElementChild ||
      !H2.firstElementChild.classList.contains(color)
    ) {
      H2.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H2);
    }
    if (
      (!H1.firstElementChild ||
        !H1.firstElementChild.classList.contains(color)) &&
      (!H2.firstElementChild ||
        (!H2.firstElementChild.classList.contains("white") &&
          !H2.firstElementChild.classList.contains("black")))
    ) {
      H1.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H1);
    }

    // Horizontal LEFT (G3 → A3)
    if (
      !G3.firstElementChild ||
      !G3.firstElementChild.classList.contains(color)
    ) {
      G3.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(G3);
    }
    if (
      (!F3.firstElementChild ||
        !F3.firstElementChild.classList.contains(color)) &&
      (!G3.firstElementChild ||
        (!G3.firstElementChild.classList.contains("white") &&
          !G3.firstElementChild.classList.contains("black")))
    ) {
      F3.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(F3);
    }
    if (
      (!E3.firstElementChild ||
        !E3.firstElementChild.classList.contains(color)) &&
      (!F3.firstElementChild ||
        (!F3.firstElementChild.classList.contains("white") &&
          !F3.firstElementChild.classList.contains("black"))) &&
      (!G3.firstElementChild ||
        (!G3.firstElementChild.classList.contains("white") &&
          !G3.firstElementChild.classList.contains("black")))
    ) {
      E3.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(E3);
    }
    if (
      (!D3.firstElementChild ||
        !D3.firstElementChild.classList.contains(color)) &&
      (!E3.firstElementChild ||
        (!E3.firstElementChild.classList.contains("white") &&
          !E3.firstElementChild.classList.contains("black"))) &&
      (!F3.firstElementChild ||
        (!F3.firstElementChild.classList.contains("white") &&
          !F3.firstElementChild.classList.contains("black"))) &&
      (!G3.firstElementChild ||
        (!G3.firstElementChild.classList.contains("white") &&
          !G3.firstElementChild.classList.contains("black")))
    ) {
      D3.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(D3);
    }
    if (
      (!C3.firstElementChild ||
        !C3.firstElementChild.classList.contains(color)) &&
      (!D3.firstElementChild ||
        (!D3.firstElementChild.classList.contains("white") &&
          !D3.firstElementChild.classList.contains("black"))) &&
      (!E3.firstElementChild ||
        (!E3.firstElementChild.classList.contains("white") &&
          !E3.firstElementChild.classList.contains("black"))) &&
      (!F3.firstElementChild ||
        (!F3.firstElementChild.classList.contains("white") &&
          !F3.firstElementChild.classList.contains("black"))) &&
      (!G3.firstElementChild ||
        (!G3.firstElementChild.classList.contains("white") &&
          !G3.firstElementChild.classList.contains("black")))
    ) {
      C3.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(C3);
    }
    if (
      (!B3.firstElementChild ||
        !B3.firstElementChild.classList.contains(color)) &&
      (!C3.firstElementChild ||
        (!C3.firstElementChild.classList.contains("white") &&
          !C3.firstElementChild.classList.contains("black"))) &&
      (!D3.firstElementChild ||
        (!D3.firstElementChild.classList.contains("white") &&
          !D3.firstElementChild.classList.contains("black"))) &&
      (!E3.firstElementChild ||
        (!E3.firstElementChild.classList.contains("white") &&
          !E3.firstElementChild.classList.contains("black"))) &&
      (!F3.firstElementChild ||
        (!F3.firstElementChild.classList.contains("white") &&
          !F3.firstElementChild.classList.contains("black"))) &&
      (!G3.firstElementChild ||
        (!G3.firstElementChild.classList.contains("white") &&
          !G3.firstElementChild.classList.contains("black")))
    ) {
      B3.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(B3);
    }
    if (
      (!A3.firstElementChild ||
        !A3.firstElementChild.classList.contains(color)) &&
      (!B3.firstElementChild ||
        (!B3.firstElementChild.classList.contains("white") &&
          !B3.firstElementChild.classList.contains("black"))) &&
      (!C3.firstElementChild ||
        (!C3.firstElementChild.classList.contains("white") &&
          !C3.firstElementChild.classList.contains("black"))) &&
      (!D3.firstElementChild ||
        (!D3.firstElementChild.classList.contains("white") &&
          !D3.firstElementChild.classList.contains("black"))) &&
      (!E3.firstElementChild ||
        (!E3.firstElementChild.classList.contains("white") &&
          !E3.firstElementChild.classList.contains("black"))) &&
      (!F3.firstElementChild ||
        (!F3.firstElementChild.classList.contains("white") &&
          !F3.firstElementChild.classList.contains("black"))) &&
      (!G3.firstElementChild ||
        (!G3.firstElementChild.classList.contains("white") &&
          !G3.firstElementChild.classList.contains("black")))
    ) {
      A3.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(A3);
    }
  }
  if (currentSquare === "H4") {
    const color = selectedPiece.classList.contains("whiteRook")
      ? "white"
      : "black";

    // Vertical UP (H5 → H8)
    if (
      !H5.firstElementChild ||
      !H5.firstElementChild.classList.contains(color)
    ) {
      H5.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H5);
    }
    if (
      (!H6.firstElementChild ||
        !H6.firstElementChild.classList.contains(color)) &&
      (!H5.firstElementChild ||
        (!H5.firstElementChild.classList.contains("white") &&
          !H5.firstElementChild.classList.contains("black")))
    ) {
      H6.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H6);
    }
    if (
      (!H7.firstElementChild ||
        !H7.firstElementChild.classList.contains(color)) &&
      (!H6.firstElementChild ||
        (!H6.firstElementChild.classList.contains("white") &&
          !H6.firstElementChild.classList.contains("black"))) &&
      (!H5.firstElementChild ||
        (!H5.firstElementChild.classList.contains("white") &&
          !H5.firstElementChild.classList.contains("black")))
    ) {
      H7.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H7);
    }
    if (
      (!H8.firstElementChild ||
        !H8.firstElementChild.classList.contains(color)) &&
      (!H7.firstElementChild ||
        (!H7.firstElementChild.classList.contains("white") &&
          !H7.firstElementChild.classList.contains("black"))) &&
      (!H6.firstElementChild ||
        (!H6.firstElementChild.classList.contains("white") &&
          !H6.firstElementChild.classList.contains("black"))) &&
      (!H5.firstElementChild ||
        (!H5.firstElementChild.classList.contains("white") &&
          !H5.firstElementChild.classList.contains("black")))
    ) {
      H8.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H8);
    }

    // Vertical DOWN (H3 → H1)
    if (
      !H3.firstElementChild ||
      !H3.firstElementChild.classList.contains(color)
    ) {
      H3.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H3);
    }
    if (
      (!H2.firstElementChild ||
        !H2.firstElementChild.classList.contains(color)) &&
      (!H3.firstElementChild ||
        (!H3.firstElementChild.classList.contains("white") &&
          !H3.firstElementChild.classList.contains("black")))
    ) {
      H2.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H2);
    }
    if (
      (!H1.firstElementChild ||
        !H1.firstElementChild.classList.contains(color)) &&
      (!H2.firstElementChild ||
        (!H2.firstElementChild.classList.contains("white") &&
          !H2.firstElementChild.classList.contains("black"))) &&
      (!H3.firstElementChild ||
        (!H3.firstElementChild.classList.contains("white") &&
          !H3.firstElementChild.classList.contains("black")))
    ) {
      H1.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H1);
    }

    // Horizontal LEFT (G4 → A4)
    if (
      !G4.firstElementChild ||
      !G4.firstElementChild.classList.contains(color)
    ) {
      G4.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(G4);
    }
    if (
      (!F4.firstElementChild ||
        !F4.firstElementChild.classList.contains(color)) &&
      (!G4.firstElementChild ||
        (!G4.firstElementChild.classList.contains("white") &&
          !G4.firstElementChild.classList.contains("black")))
    ) {
      F4.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(F4);
    }
    if (
      (!E4.firstElementChild ||
        !E4.firstElementChild.classList.contains(color)) &&
      (!F4.firstElementChild ||
        (!F4.firstElementChild.classList.contains("white") &&
          !F4.firstElementChild.classList.contains("black"))) &&
      (!G4.firstElementChild ||
        (!G4.firstElementChild.classList.contains("white") &&
          !G4.firstElementChild.classList.contains("black")))
    ) {
      E4.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(E4);
    }
    if (
      (!D4.firstElementChild ||
        !D4.firstElementChild.classList.contains(color)) &&
      (!E4.firstElementChild ||
        (!E4.firstElementChild.classList.contains("white") &&
          !E4.firstElementChild.classList.contains("black"))) &&
      (!F4.firstElementChild ||
        (!F4.firstElementChild.classList.contains("white") &&
          !F4.firstElementChild.classList.contains("black"))) &&
      (!G4.firstElementChild ||
        (!G4.firstElementChild.classList.contains("white") &&
          !G4.firstElementChild.classList.contains("black")))
    ) {
      D4.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(D4);
    }
    if (
      (!C4.firstElementChild ||
        !C4.firstElementChild.classList.contains(color)) &&
      (!D4.firstElementChild ||
        (!D4.firstElementChild.classList.contains("white") &&
          !D4.firstElementChild.classList.contains("black"))) &&
      (!E4.firstElementChild ||
        (!E4.firstElementChild.classList.contains("white") &&
          !E4.firstElementChild.classList.contains("black"))) &&
      (!F4.firstElementChild ||
        (!F4.firstElementChild.classList.contains("white") &&
          !F4.firstElementChild.classList.contains("black"))) &&
      (!G4.firstElementChild ||
        (!G4.firstElementChild.classList.contains("white") &&
          !G4.firstElementChild.classList.contains("black")))
    ) {
      C4.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(C4);
    }
    if (
      (!B4.firstElementChild ||
        !B4.firstElementChild.classList.contains(color)) &&
      (!C4.firstElementChild ||
        (!C4.firstElementChild.classList.contains("white") &&
          !C4.firstElementChild.classList.contains("black"))) &&
      (!D4.firstElementChild ||
        (!D4.firstElementChild.classList.contains("white") &&
          !D4.firstElementChild.classList.contains("black"))) &&
      (!E4.firstElementChild ||
        (!E4.firstElementChild.classList.contains("white") &&
          !E4.firstElementChild.classList.contains("black"))) &&
      (!F4.firstElementChild ||
        (!F4.firstElementChild.classList.contains("white") &&
          !F4.firstElementChild.classList.contains("black"))) &&
      (!G4.firstElementChild ||
        (!G4.firstElementChild.classList.contains("white") &&
          !G4.firstElementChild.classList.contains("black")))
    ) {
      B4.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(B4);
    }
    if (
      (!A4.firstElementChild ||
        !A4.firstElementChild.classList.contains(color)) &&
      (!B4.firstElementChild ||
        (!B4.firstElementChild.classList.contains("white") &&
          !B4.firstElementChild.classList.contains("black"))) &&
      (!C4.firstElementChild ||
        (!C4.firstElementChild.classList.contains("white") &&
          !C4.firstElementChild.classList.contains("black"))) &&
      (!D4.firstElementChild ||
        (!D4.firstElementChild.classList.contains("white") &&
          !D4.firstElementChild.classList.contains("black"))) &&
      (!E4.firstElementChild ||
        (!E4.firstElementChild.classList.contains("white") &&
          !E4.firstElementChild.classList.contains("black"))) &&
      (!F4.firstElementChild ||
        (!F4.firstElementChild.classList.contains("white") &&
          !F4.firstElementChild.classList.contains("black"))) &&
      (!G4.firstElementChild ||
        (!G4.firstElementChild.classList.contains("white") &&
          !G4.firstElementChild.classList.contains("black")))
    ) {
      A4.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(A4);
    }
  }
  if (currentSquare === "H5") {
    const color = selectedPiece.classList.contains("whiteRook")
      ? "white"
      : "black";

    // Vertical UP (H6 → H8)
    if (
      !H6.firstElementChild ||
      !H6.firstElementChild.classList.contains(color)
    ) {
      H6.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H6);
    }
    if (
      (!H7.firstElementChild ||
        !H7.firstElementChild.classList.contains(color)) &&
      (!H6.firstElementChild ||
        (!H6.firstElementChild.classList.contains("white") &&
          !H6.firstElementChild.classList.contains("black")))
    ) {
      H7.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H7);
    }
    if (
      (!H8.firstElementChild ||
        !H8.firstElementChild.classList.contains(color)) &&
      (!H7.firstElementChild ||
        (!H7.firstElementChild.classList.contains("white") &&
          !H7.firstElementChild.classList.contains("black"))) &&
      (!H6.firstElementChild ||
        (!H6.firstElementChild.classList.contains("white") &&
          !H6.firstElementChild.classList.contains("black")))
    ) {
      H8.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H8);
    }

    // Vertical DOWN (H4 → H1)
    if (
      !H4.firstElementChild ||
      !H4.firstElementChild.classList.contains(color)
    ) {
      H4.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H4);
    }
    if (
      (!H3.firstElementChild ||
        !H3.firstElementChild.classList.contains(color)) &&
      (!H4.firstElementChild ||
        (!H4.firstElementChild.classList.contains("white") &&
          !H4.firstElementChild.classList.contains("black")))
    ) {
      H3.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H3);
    }
    if (
      (!H2.firstElementChild ||
        !H2.firstElementChild.classList.contains(color)) &&
      (!H3.firstElementChild ||
        (!H3.firstElementChild.classList.contains("white") &&
          !H3.firstElementChild.classList.contains("black"))) &&
      (!H4.firstElementChild ||
        (!H4.firstElementChild.classList.contains("white") &&
          !H4.firstElementChild.classList.contains("black")))
    ) {
      H2.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H2);
    }
    if (
      (!H1.firstElementChild ||
        !H1.firstElementChild.classList.contains(color)) &&
      (!H2.firstElementChild ||
        (!H2.firstElementChild.classList.contains("white") &&
          !H2.firstElementChild.classList.contains("black"))) &&
      (!H3.firstElementChild ||
        (!H3.firstElementChild.classList.contains("white") &&
          !H3.firstElementChild.classList.contains("black"))) &&
      (!H4.firstElementChild ||
        (!H4.firstElementChild.classList.contains("white") &&
          !H4.firstElementChild.classList.contains("black")))
    ) {
      H1.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H1);
    }

    // Horizontal LEFT (G5 → A5)
    if (
      !G5.firstElementChild ||
      !G5.firstElementChild.classList.contains(color)
    ) {
      G5.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(G5);
    }
    if (
      (!F5.firstElementChild ||
        !F5.firstElementChild.classList.contains(color)) &&
      (!G5.firstElementChild ||
        (!G5.firstElementChild.classList.contains("white") &&
          !G5.firstElementChild.classList.contains("black")))
    ) {
      F5.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(F5);
    }
    if (
      (!E5.firstElementChild ||
        !E5.firstElementChild.classList.contains(color)) &&
      (!F5.firstElementChild ||
        (!F5.firstElementChild.classList.contains("white") &&
          !F5.firstElementChild.classList.contains("black"))) &&
      (!G5.firstElementChild ||
        (!G5.firstElementChild.classList.contains("white") &&
          !G5.firstElementChild.classList.contains("black")))
    ) {
      E5.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(E5);
    }
    if (
      (!D5.firstElementChild ||
        !D5.firstElementChild.classList.contains(color)) &&
      (!E5.firstElementChild ||
        (!E5.firstElementChild.classList.contains("white") &&
          !E5.firstElementChild.classList.contains("black"))) &&
      (!F5.firstElementChild ||
        (!F5.firstElementChild.classList.contains("white") &&
          !F5.firstElementChild.classList.contains("black"))) &&
      (!G5.firstElementChild ||
        (!G5.firstElementChild.classList.contains("white") &&
          !G5.firstElementChild.classList.contains("black")))
    ) {
      D5.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(D5);
    }
    if (
      (!C5.firstElementChild ||
        !C5.firstElementChild.classList.contains(color)) &&
      (!D5.firstElementChild ||
        (!D5.firstElementChild.classList.contains("white") &&
          !D5.firstElementChild.classList.contains("black"))) &&
      (!E5.firstElementChild ||
        (!E5.firstElementChild.classList.contains("white") &&
          !E5.firstElementChild.classList.contains("black"))) &&
      (!F5.firstElementChild ||
        (!F5.firstElementChild.classList.contains("white") &&
          !F5.firstElementChild.classList.contains("black"))) &&
      (!G5.firstElementChild ||
        (!G5.firstElementChild.classList.contains("white") &&
          !G5.firstElementChild.classList.contains("black")))
    ) {
      C5.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(C5);
    }
    if (
      (!B5.firstElementChild ||
        !B5.firstElementChild.classList.contains(color)) &&
      (!C5.firstElementChild ||
        (!C5.firstElementChild.classList.contains("white") &&
          !C5.firstElementChild.classList.contains("black"))) &&
      (!D5.firstElementChild ||
        (!D5.firstElementChild.classList.contains("white") &&
          !D5.firstElementChild.classList.contains("black"))) &&
      (!E5.firstElementChild ||
        (!E5.firstElementChild.classList.contains("white") &&
          !E5.firstElementChild.classList.contains("black"))) &&
      (!F5.firstElementChild ||
        (!F5.firstElementChild.classList.contains("white") &&
          !F5.firstElementChild.classList.contains("black"))) &&
      (!G5.firstElementChild ||
        (!G5.firstElementChild.classList.contains("white") &&
          !G5.firstElementChild.classList.contains("black")))
    ) {
      B5.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(B5);
    }
    if (
      (!A5.firstElementChild ||
        !A5.firstElementChild.classList.contains(color)) &&
      (!B5.firstElementChild ||
        (!B5.firstElementChild.classList.contains("white") &&
          !B5.firstElementChild.classList.contains("black"))) &&
      (!C5.firstElementChild ||
        (!C5.firstElementChild.classList.contains("white") &&
          !C5.firstElementChild.classList.contains("black"))) &&
      (!D5.firstElementChild ||
        (!D5.firstElementChild.classList.contains("white") &&
          !D5.firstElementChild.classList.contains("black"))) &&
      (!E5.firstElementChild ||
        (!E5.firstElementChild.classList.contains("white") &&
          !E5.firstElementChild.classList.contains("black"))) &&
      (!F5.firstElementChild ||
        (!F5.firstElementChild.classList.contains("white") &&
          !F5.firstElementChild.classList.contains("black"))) &&
      (!G5.firstElementChild ||
        (!G5.firstElementChild.classList.contains("white") &&
          !G5.firstElementChild.classList.contains("black")))
    ) {
      A5.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(A5);
    }
  }
  if (currentSquare === "H6") {
    const color = selectedPiece.classList.contains("whiteRook")
      ? "white"
      : "black";

    // Vertical UP (H7 → H8)
    if (
      !H7.firstElementChild ||
      !H7.firstElementChild.classList.contains(color)
    ) {
      H7.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H7);
    }
    if (
      (!H8.firstElementChild ||
        !H8.firstElementChild.classList.contains(color)) &&
      (!H7.firstElementChild ||
        (!H7.firstElementChild.classList.contains("white") &&
          !H7.firstElementChild.classList.contains("black")))
    ) {
      H8.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H8);
    }

    // Vertical DOWN (H5 → H1)
    if (
      !H5.firstElementChild ||
      !H5.firstElementChild.classList.contains(color)
    ) {
      H5.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H5);
    }
    if (
      (!H4.firstElementChild ||
        !H4.firstElementChild.classList.contains(color)) &&
      (!H5.firstElementChild ||
        (!H5.firstElementChild.classList.contains("white") &&
          !H5.firstElementChild.classList.contains("black")))
    ) {
      H4.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H4);
    }
    if (
      (!H3.firstElementChild ||
        !H3.firstElementChild.classList.contains(color)) &&
      (!H4.firstElementChild ||
        (!H4.firstElementChild.classList.contains("white") &&
          !H4.firstElementChild.classList.contains("black"))) &&
      (!H5.firstElementChild ||
        (!H5.firstElementChild.classList.contains("white") &&
          !H5.firstElementChild.classList.contains("black")))
    ) {
      H3.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H3);
    }
    if (
      (!H2.firstElementChild ||
        !H2.firstElementChild.classList.contains(color)) &&
      (!H3.firstElementChild ||
        (!H3.firstElementChild.classList.contains("white") &&
          !H3.firstElementChild.classList.contains("black"))) &&
      (!H4.firstElementChild ||
        (!H4.firstElementChild.classList.contains("white") &&
          !H4.firstElementChild.classList.contains("black"))) &&
      (!H5.firstElementChild ||
        (!H5.firstElementChild.classList.contains("white") &&
          !H5.firstElementChild.classList.contains("black")))
    ) {
      H2.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H2);
    }
    if (
      (!H1.firstElementChild ||
        !H1.firstElementChild.classList.contains(color)) &&
      (!H2.firstElementChild ||
        (!H2.firstElementChild.classList.contains("white") &&
          !H2.firstElementChild.classList.contains("black"))) &&
      (!H3.firstElementChild ||
        (!H3.firstElementChild.classList.contains("white") &&
          !H3.firstElementChild.classList.contains("black"))) &&
      (!H4.firstElementChild ||
        (!H4.firstElementChild.classList.contains("white") &&
          !H4.firstElementChild.classList.contains("black"))) &&
      (!H5.firstElementChild ||
        (!H5.firstElementChild.classList.contains("white") &&
          !H5.firstElementChild.classList.contains("black")))
    ) {
      H1.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H1);
    }

    // Horizontal LEFT (G6 → A6)
    if (
      !G6.firstElementChild ||
      !G6.firstElementChild.classList.contains(color)
    ) {
      G6.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(G6);
    }
    if (
      (!F6.firstElementChild ||
        !F6.firstElementChild.classList.contains(color)) &&
      (!G6.firstElementChild ||
        (!G6.firstElementChild.classList.contains("white") &&
          !G6.firstElementChild.classList.contains("black")))
    ) {
      F6.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(F6);
    }
    if (
      (!E6.firstElementChild ||
        !E6.firstElementChild.classList.contains(color)) &&
      (!F6.firstElementChild ||
        (!F6.firstElementChild.classList.contains("white") &&
          !F6.firstElementChild.classList.contains("black"))) &&
      (!G6.firstElementChild ||
        (!G6.firstElementChild.classList.contains("white") &&
          !G6.firstElementChild.classList.contains("black")))
    ) {
      E6.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(E6);
    }
    if (
      (!D6.firstElementChild ||
        !D6.firstElementChild.classList.contains(color)) &&
      (!E6.firstElementChild ||
        (!E6.firstElementChild.classList.contains("white") &&
          !E6.firstElementChild.classList.contains("black"))) &&
      (!F6.firstElementChild ||
        (!F6.firstElementChild.classList.contains("white") &&
          !F6.firstElementChild.classList.contains("black"))) &&
      (!G6.firstElementChild ||
        (!G6.firstElementChild.classList.contains("white") &&
          !G6.firstElementChild.classList.contains("black")))
    ) {
      D6.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(D6);
    }
    if (
      (!C6.firstElementChild ||
        !C6.firstElementChild.classList.contains(color)) &&
      (!D6.firstElementChild ||
        (!D6.firstElementChild.classList.contains("white") &&
          !D6.firstElementChild.classList.contains("black"))) &&
      (!E6.firstElementChild ||
        (!E6.firstElementChild.classList.contains("white") &&
          !E6.firstElementChild.classList.contains("black"))) &&
      (!F6.firstElementChild ||
        (!F6.firstElementChild.classList.contains("white") &&
          !F6.firstElementChild.classList.contains("black"))) &&
      (!G6.firstElementChild ||
        (!G6.firstElementChild.classList.contains("white") &&
          !G6.firstElementChild.classList.contains("black")))
    ) {
      C6.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(C6);
    }
    if (
      (!B6.firstElementChild ||
        !B6.firstElementChild.classList.contains(color)) &&
      (!C6.firstElementChild ||
        (!C6.firstElementChild.classList.contains("white") &&
          !C6.firstElementChild.classList.contains("black"))) &&
      (!D6.firstElementChild ||
        (!D6.firstElementChild.classList.contains("white") &&
          !D6.firstElementChild.classList.contains("black"))) &&
      (!E6.firstElementChild ||
        (!E6.firstElementChild.classList.contains("white") &&
          !E6.firstElementChild.classList.contains("black"))) &&
      (!F6.firstElementChild ||
        (!F6.firstElementChild.classList.contains("white") &&
          !F6.firstElementChild.classList.contains("black"))) &&
      (!G6.firstElementChild ||
        (!G6.firstElementChild.classList.contains("white") &&
          !G6.firstElementChild.classList.contains("black")))
    ) {
      B6.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(B6);
    }
    if (
      (!A6.firstElementChild ||
        !A6.firstElementChild.classList.contains(color)) &&
      (!B6.firstElementChild ||
        (!B6.firstElementChild.classList.contains("white") &&
          !B6.firstElementChild.classList.contains("black"))) &&
      (!C6.firstElementChild ||
        (!C6.firstElementChild.classList.contains("white") &&
          !C6.firstElementChild.classList.contains("black"))) &&
      (!D6.firstElementChild ||
        (!D6.firstElementChild.classList.contains("white") &&
          !D6.firstElementChild.classList.contains("black"))) &&
      (!E6.firstElementChild ||
        (!E6.firstElementChild.classList.contains("white") &&
          !E6.firstElementChild.classList.contains("black"))) &&
      (!F6.firstElementChild ||
        (!F6.firstElementChild.classList.contains("white") &&
          !F6.firstElementChild.classList.contains("black"))) &&
      (!G6.firstElementChild ||
        (!G6.firstElementChild.classList.contains("white") &&
          !G6.firstElementChild.classList.contains("black")))
    ) {
      A6.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(A6);
    }
  }
  if (currentSquare === "H7") {
    const color = selectedPiece.classList.contains("whiteRook")
      ? "white"
      : "black";

    // Vertical UP (H8)
    if (
      !H8.firstElementChild ||
      !H8.firstElementChild.classList.contains(color)
    ) {
      H8.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H8);
    }

    // Vertical DOWN (H6 → H1)
    if (
      !H6.firstElementChild ||
      !H6.firstElementChild.classList.contains(color)
    ) {
      H6.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H6);
    }
    if (
      (!H5.firstElementChild ||
        !H5.firstElementChild.classList.contains(color)) &&
      (!H6.firstElementChild ||
        (!H6.firstElementChild.classList.contains("white") &&
          !H6.firstElementChild.classList.contains("black")))
    ) {
      H5.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H5);
    }
    if (
      (!H4.firstElementChild ||
        !H4.firstElementChild.classList.contains(color)) &&
      (!H5.firstElementChild ||
        (!H5.firstElementChild.classList.contains("white") &&
          !H5.firstElementChild.classList.contains("black"))) &&
      (!H6.firstElementChild ||
        (!H6.firstElementChild.classList.contains("white") &&
          !H6.firstElementChild.classList.contains("black")))
    ) {
      H4.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H4);
    }
    if (
      (!H3.firstElementChild ||
        !H3.firstElementChild.classList.contains(color)) &&
      (!H4.firstElementChild ||
        (!H4.firstElementChild.classList.contains("white") &&
          !H4.firstElementChild.classList.contains("black"))) &&
      (!H5.firstElementChild ||
        (!H5.firstElementChild.classList.contains("white") &&
          !H5.firstElementChild.classList.contains("black"))) &&
      (!H6.firstElementChild ||
        (!H6.firstElementChild.classList.contains("white") &&
          !H6.firstElementChild.classList.contains("black")))
    ) {
      H3.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H3);
    }
    if (
      (!H2.firstElementChild ||
        !H2.firstElementChild.classList.contains(color)) &&
      (!H3.firstElementChild ||
        (!H3.firstElementChild.classList.contains("white") &&
          !H3.firstElementChild.classList.contains("black"))) &&
      (!H4.firstElementChild ||
        (!H4.firstElementChild.classList.contains("white") &&
          !H4.firstElementChild.classList.contains("black"))) &&
      (!H5.firstElementChild ||
        (!H5.firstElementChild.classList.contains("white") &&
          !H5.firstElementChild.classList.contains("black"))) &&
      (!H6.firstElementChild ||
        (!H6.firstElementChild.classList.contains("white") &&
          !H6.firstElementChild.classList.contains("black")))
    ) {
      H2.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H2);
    }
    if (
      (!H1.firstElementChild ||
        !H1.firstElementChild.classList.contains(color)) &&
      (!H2.firstElementChild ||
        (!H2.firstElementChild.classList.contains("white") &&
          !H2.firstElementChild.classList.contains("black"))) &&
      (!H3.firstElementChild ||
        (!H3.firstElementChild.classList.contains("white") &&
          !H3.firstElementChild.classList.contains("black"))) &&
      (!H4.firstElementChild ||
        (!H4.firstElementChild.classList.contains("white") &&
          !H4.firstElementChild.classList.contains("black"))) &&
      (!H5.firstElementChild ||
        (!H5.firstElementChild.classList.contains("white") &&
          !H5.firstElementChild.classList.contains("black"))) &&
      (!H6.firstElementChild ||
        (!H6.firstElementChild.classList.contains("white") &&
          !H6.firstElementChild.classList.contains("black")))
    ) {
      H1.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H1);
    }

    // Horizontal LEFT (G7 → A7)
    if (
      !G7.firstElementChild ||
      !G7.firstElementChild.classList.contains(color)
    ) {
      G7.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(G7);
    }
    if (
      (!F7.firstElementChild ||
        !F7.firstElementChild.classList.contains(color)) &&
      (!G7.firstElementChild ||
        (!G7.firstElementChild.classList.contains("white") &&
          !G7.firstElementChild.classList.contains("black")))
    ) {
      F7.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(F7);
    }
    if (
      (!E7.firstElementChild ||
        !E7.firstElementChild.classList.contains(color)) &&
      (!F7.firstElementChild ||
        (!F7.firstElementChild.classList.contains("white") &&
          !F7.firstElementChild.classList.contains("black"))) &&
      (!G7.firstElementChild ||
        (!G7.firstElementChild.classList.contains("white") &&
          !G7.firstElementChild.classList.contains("black")))
    ) {
      E7.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(E7);
    }
    if (
      (!D7.firstElementChild ||
        !D7.firstElementChild.classList.contains(color)) &&
      (!E7.firstElementChild ||
        (!E7.firstElementChild.classList.contains("white") &&
          !E7.firstElementChild.classList.contains("black"))) &&
      (!F7.firstElementChild ||
        (!F7.firstElementChild.classList.contains("white") &&
          !F7.firstElementChild.classList.contains("black"))) &&
      (!G7.firstElementChild ||
        (!G7.firstElementChild.classList.contains("white") &&
          !G7.firstElementChild.classList.contains("black")))
    ) {
      D7.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(D7);
    }
    if (
      (!C7.firstElementChild ||
        !C7.firstElementChild.classList.contains(color)) &&
      (!D7.firstElementChild ||
        (!D7.firstElementChild.classList.contains("white") &&
          !D7.firstElementChild.classList.contains("black"))) &&
      (!E7.firstElementChild ||
        (!E7.firstElementChild.classList.contains("white") &&
          !E7.firstElementChild.classList.contains("black"))) &&
      (!F7.firstElementChild ||
        (!F7.firstElementChild.classList.contains("white") &&
          !F7.firstElementChild.classList.contains("black"))) &&
      (!G7.firstElementChild ||
        (!G7.firstElementChild.classList.contains("white") &&
          !G7.firstElementChild.classList.contains("black")))
    ) {
      C7.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(C7);
    }
    if (
      (!B7.firstElementChild ||
        !B7.firstElementChild.classList.contains(color)) &&
      (!C7.firstElementChild ||
        (!C7.firstElementChild.classList.contains("white") &&
          !C7.firstElementChild.classList.contains("black"))) &&
      (!D7.firstElementChild ||
        (!D7.firstElementChild.classList.contains("white") &&
          !D7.firstElementChild.classList.contains("black"))) &&
      (!E7.firstElementChild ||
        (!E7.firstElementChild.classList.contains("white") &&
          !E7.firstElementChild.classList.contains("black"))) &&
      (!F7.firstElementChild ||
        (!F7.firstElementChild.classList.contains("white") &&
          !F7.firstElementChild.classList.contains("black"))) &&
      (!G7.firstElementChild ||
        (!G7.firstElementChild.classList.contains("white") &&
          !G7.firstElementChild.classList.contains("black")))
    ) {
      B7.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(B7);
    }
    if (
      (!A7.firstElementChild ||
        !A7.firstElementChild.classList.contains(color)) &&
      (!B7.firstElementChild ||
        (!B7.firstElementChild.classList.contains("white") &&
          !B7.firstElementChild.classList.contains("black"))) &&
      (!C7.firstElementChild ||
        (!C7.firstElementChild.classList.contains("white") &&
          !C7.firstElementChild.classList.contains("black"))) &&
      (!D7.firstElementChild ||
        (!D7.firstElementChild.classList.contains("white") &&
          !D7.firstElementChild.classList.contains("black"))) &&
      (!E7.firstElementChild ||
        (!E7.firstElementChild.classList.contains("white") &&
          !E7.firstElementChild.classList.contains("black"))) &&
      (!F7.firstElementChild ||
        (!F7.firstElementChild.classList.contains("white") &&
          !F7.firstElementChild.classList.contains("black"))) &&
      (!G7.firstElementChild ||
        (!G7.firstElementChild.classList.contains("white") &&
          !G7.firstElementChild.classList.contains("black")))
    ) {
      A7.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(A7);
    }
  }
  if (currentSquare === "H8") {
    const color = selectedPiece.classList.contains("whiteRook")
      ? "white"
      : "black";

    // Vertical DOWN (H7 → H1)
    if (
      !H7.firstElementChild ||
      !H7.firstElementChild.classList.contains(color)
    ) {
      H7.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H7);
    }
    if (
      (!H6.firstElementChild ||
        !H6.firstElementChild.classList.contains(color)) &&
      (!H7.firstElementChild ||
        (!H7.firstElementChild.classList.contains("white") &&
          !H7.firstElementChild.classList.contains("black")))
    ) {
      H6.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H6);
    }
    if (
      (!H5.firstElementChild ||
        !H5.firstElementChild.classList.contains(color)) &&
      (!H6.firstElementChild ||
        (!H6.firstElementChild.classList.contains("white") &&
          !H6.firstElementChild.classList.contains("black"))) &&
      (!H7.firstElementChild ||
        (!H7.firstElementChild.classList.contains("white") &&
          !H7.firstElementChild.classList.contains("black")))
    ) {
      H5.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H5);
    }
    if (
      (!H4.firstElementChild ||
        !H4.firstElementChild.classList.contains(color)) &&
      (!H5.firstElementChild ||
        (!H5.firstElementChild.classList.contains("white") &&
          !H5.firstElementChild.classList.contains("black"))) &&
      (!H6.firstElementChild ||
        (!H6.firstElementChild.classList.contains("white") &&
          !H6.firstElementChild.classList.contains("black"))) &&
      (!H7.firstElementChild ||
        (!H7.firstElementChild.classList.contains("white") &&
          !H7.firstElementChild.classList.contains("black")))
    ) {
      H4.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H4);
    }
    if (
      (!H3.firstElementChild ||
        !H3.firstElementChild.classList.contains(color)) &&
      (!H4.firstElementChild ||
        (!H4.firstElementChild.classList.contains("white") &&
          !H4.firstElementChild.classList.contains("black"))) &&
      (!H5.firstElementChild ||
        (!H5.firstElementChild.classList.contains("white") &&
          !H5.firstElementChild.classList.contains("black"))) &&
      (!H6.firstElementChild ||
        (!H6.firstElementChild.classList.contains("white") &&
          !H6.firstElementChild.classList.contains("black"))) &&
      (!H7.firstElementChild ||
        (!H7.firstElementChild.classList.contains("white") &&
          !H7.firstElementChild.classList.contains("black")))
    ) {
      H3.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H3);
    }
    if (
      (!H2.firstElementChild ||
        !H2.firstElementChild.classList.contains(color)) &&
      (!H3.firstElementChild ||
        (!H3.firstElementChild.classList.contains("white") &&
          !H3.firstElementChild.classList.contains("black"))) &&
      (!H4.firstElementChild ||
        (!H4.firstElementChild.classList.contains("white") &&
          !H4.firstElementChild.classList.contains("black"))) &&
      (!H5.firstElementChild ||
        (!H5.firstElementChild.classList.contains("white") &&
          !H5.firstElementChild.classList.contains("black"))) &&
      (!H6.firstElementChild ||
        (!H6.firstElementChild.classList.contains("white") &&
          !H6.firstElementChild.classList.contains("black"))) &&
      (!H7.firstElementChild ||
        (!H7.firstElementChild.classList.contains("white") &&
          !H7.firstElementChild.classList.contains("black")))
    ) {
      H2.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H2);
    }
    if (
      (!H1.firstElementChild ||
        !H1.firstElementChild.classList.contains(color)) &&
      (!H2.firstElementChild ||
        (!H2.firstElementChild.classList.contains("white") &&
          !H2.firstElementChild.classList.contains("black"))) &&
      (!H3.firstElementChild ||
        (!H3.firstElementChild.classList.contains("white") &&
          !H3.firstElementChild.classList.contains("black"))) &&
      (!H4.firstElementChild ||
        (!H4.firstElementChild.classList.contains("white") &&
          !H4.firstElementChild.classList.contains("black"))) &&
      (!H5.firstElementChild ||
        (!H5.firstElementChild.classList.contains("white") &&
          !H5.firstElementChild.classList.contains("black"))) &&
      (!H6.firstElementChild ||
        (!H6.firstElementChild.classList.contains("white") &&
          !H6.firstElementChild.classList.contains("black"))) &&
      (!H7.firstElementChild ||
        (!H7.firstElementChild.classList.contains("white") &&
          !H7.firstElementChild.classList.contains("black")))
    ) {
      H1.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H1);
    }

    // Horizontal LEFT (G8 → A8)
    if (
      !G8.firstElementChild ||
      !G8.firstElementChild.classList.contains(color)
    ) {
      G8.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(G8);
    }
    if (
      (!F8.firstElementChild ||
        !F8.firstElementChild.classList.contains(color)) &&
      (!G8.firstElementChild ||
        (!G8.firstElementChild.classList.contains("white") &&
          !G8.firstElementChild.classList.contains("black")))
    ) {
      F8.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(F8);
    }
    if (
      (!E8.firstElementChild ||
        !E8.firstElementChild.classList.contains(color)) &&
      (!F8.firstElementChild ||
        (!F8.firstElementChild.classList.contains("white") &&
          !F8.firstElementChild.classList.contains("black"))) &&
      (!G8.firstElementChild ||
        (!G8.firstElementChild.classList.contains("white") &&
          !G8.firstElementChild.classList.contains("black")))
    ) {
      E8.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(E8);
    }
    if (
      (!D8.firstElementChild ||
        !D8.firstElementChild.classList.contains(color)) &&
      (!E8.firstElementChild ||
        (!E8.firstElementChild.classList.contains("white") &&
          !E8.firstElementChild.classList.contains("black"))) &&
      (!F8.firstElementChild ||
        (!F8.firstElementChild.classList.contains("white") &&
          !F8.firstElementChild.classList.contains("black"))) &&
      (!G8.firstElementChild ||
        (!G8.firstElementChild.classList.contains("white") &&
          !G8.firstElementChild.classList.contains("black")))
    ) {
      D8.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(D8);
    }
    if (
      (!C8.firstElementChild ||
        !C8.firstElementChild.classList.contains(color)) &&
      (!D8.firstElementChild ||
        (!D8.firstElementChild.classList.contains("white") &&
          !D8.firstElementChild.classList.contains("black"))) &&
      (!E8.firstElementChild ||
        (!E8.firstElementChild.classList.contains("white") &&
          !E8.firstElementChild.classList.contains("black"))) &&
      (!F8.firstElementChild ||
        (!F8.firstElementChild.classList.contains("white") &&
          !F8.firstElementChild.classList.contains("black"))) &&
      (!G8.firstElementChild ||
        (!G8.firstElementChild.classList.contains("white") &&
          !G8.firstElementChild.classList.contains("black")))
    ) {
      C8.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(C8);
    }
    if (
      (!B8.firstElementChild ||
        !B8.firstElementChild.classList.contains(color)) &&
      (!C8.firstElementChild ||
        (!C8.firstElementChild.classList.contains("white") &&
          !C8.firstElementChild.classList.contains("black"))) &&
      (!D8.firstElementChild ||
        (!D8.firstElementChild.classList.contains("white") &&
          !D8.firstElementChild.classList.contains("black"))) &&
      (!E8.firstElementChild ||
        (!E8.firstElementChild.classList.contains("white") &&
          !E8.firstElementChild.classList.contains("black"))) &&
      (!F8.firstElementChild ||
        (!F8.firstElementChild.classList.contains("white") &&
          !F8.firstElementChild.classList.contains("black"))) &&
      (!G8.firstElementChild ||
        (!G8.firstElementChild.classList.contains("white") &&
          !G8.firstElementChild.classList.contains("black")))
    ) {
      B8.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(B8);
    }
    if (
      (!A8.firstElementChild ||
        !A8.firstElementChild.classList.contains(color)) &&
      (!B8.firstElementChild ||
        (!B8.firstElementChild.classList.contains("white") &&
          !B8.firstElementChild.classList.contains("black"))) &&
      (!C8.firstElementChild ||
        (!C8.firstElementChild.classList.contains("white") &&
          !C8.firstElementChild.classList.contains("black"))) &&
      (!D8.firstElementChild ||
        (!D8.firstElementChild.classList.contains("white") &&
          !D8.firstElementChild.classList.contains("black"))) &&
      (!E8.firstElementChild ||
        (!E8.firstElementChild.classList.contains("white") &&
          !E8.firstElementChild.classList.contains("black"))) &&
      (!F8.firstElementChild ||
        (!F8.firstElementChild.classList.contains("white") &&
          !F8.firstElementChild.classList.contains("black"))) &&
      (!G8.firstElementChild ||
        (!G8.firstElementChild.classList.contains("white") &&
          !G8.firstElementChild.classList.contains("black")))
    ) {
      A8.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(A8);
    }
  }
};
