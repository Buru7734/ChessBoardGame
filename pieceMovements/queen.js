const queenMovement = () => {
  if (selectedPiece.classList.contains("wQueen")) {
    if (currentSquare === "A1") {
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
      if (
        (!H8.firstElementChild ||
          !H8.firstElementChild.classList.contains("white")) &&
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("white")) &&
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("black")) &&
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("white")) &&
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("black")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("white")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black"))
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }
      if (
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("white")) &&
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("white")) &&
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("black")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("white")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black"))
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("white")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("white")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black"))
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black"))
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black"))
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black"))
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
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
        !A2.firstElementChild ||
        !A2.firstElementChild.classList.contains("white")
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
    }
  }
  // Black Queen
  if (selectedPiece.classList.contains("bQueen")) {
    if (currentSquare === "A1") {
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
      if (
        (!H8.firstElementChild ||
          !H8.firstElementChild.classList.contains("black")) &&
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("black")) &&
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("white")) &&
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("black")) &&
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("white")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("black")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white"))
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }
      if (
        (!G7.firstElementChild ||
          !G7.firstElementChild.classList.contains("black")) &&
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("black")) &&
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("white")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("black")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white"))
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        (!F6.firstElementChild ||
          !F6.firstElementChild.classList.contains("black")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("black")) &&
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white"))
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        (!E5.firstElementChild ||
          !E5.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white"))
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white"))
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white"))
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
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
        !A2.firstElementChild ||
        !A2.firstElementChild.classList.contains("black")
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
    }
  }
  // White Queen
  if (selectedPiece.classList.contains("wQueen")) {
    if (currentSquare === "C1") {
      // Horizontal right (D1, E1, F1, G1, H1)
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
          !D1.firstElementChild.classList.contains("white"))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("white")) &&
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("white")) &&
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("white"))
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("white")) &&
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("white")) &&
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("white")) &&
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("white"))
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        (!H1.firstElementChild ||
          !H1.firstElementChild.classList.contains("white")) &&
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("white")) &&
        (!F1.firstElementChild ||
          !F1.firstElementChild.classList.contains("white")) &&
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("white")) &&
        (!D1.firstElementChild ||
          !D1.firstElementChild.classList.contains("white"))
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }

      // Horizontal left (B1, A1)
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
          !B1.firstElementChild.classList.contains("white"))
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }

      // Vertical up (C2, C3, ..., C8)
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
          !C2.firstElementChild.classList.contains("white"))
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white"))
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white"))
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white"))
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("white")) &&
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white"))
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        (!C8.firstElementChild ||
          !C8.firstElementChild.classList.contains("white")) &&
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("white")) &&
        (!C6.firstElementChild ||
          !C6.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!C4.firstElementChild ||
          !C4.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white"))
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }

      // Diagonal up-right (D2, E3, F4, G5, H6)
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("white")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white"))
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white"))
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains("white")) &&
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white"))
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        (!H6.firstElementChild ||
          !H6.firstElementChild.classList.contains("white")) &&
        (!G5.firstElementChild ||
          !G5.firstElementChild.classList.contains("white")) &&
        (!F4.firstElementChild ||
          !F4.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white"))
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }

      // Diagonal up-left (B2, A3)
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        (!A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white"))
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
    }
  }
  // Black Queen
  if (selectedPiece.classList.contains("bQueen")) {
    if (currentSquare === "C1") {
      // Horizontal RIGHT (C1 → D1 → E1 → F1 → G1 → H1)
      if (
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("black")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);

        if (
          !E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("black")
        ) {
          E1.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(E1);

          if (
            !F1.firstElementChild ||
            !F1.firstElementChild.classList.contains("black")
          ) {
            F1.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F1);

            if (
              !G1.firstElementChild ||
              !G1.firstElementChild.classList.contains("black")
            ) {
              G1.classList.toggle("highlightBlue");
              recentlyHighlightedElements.push(G1);

              if (
                !H1.firstElementChild ||
                !H1.firstElementChild.classList.contains("black")
              ) {
                H1.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H1);
              }
            }
          }
        }
      }

      // Horizontal LEFT (C1 → B1 → A1)
      if (
        !B1.firstElementChild ||
        !B1.firstElementChild.classList.contains("black")
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);

        if (
          !A1.firstElementChild ||
          !A1.firstElementChild.classList.contains("black")
        ) {
          A1.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(A1);
        }
      }

      // Vertical UP (C1 → C2 → C3 → C4 → C5 → C6 → C7 → C8)
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);

        if (
          !C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")
        ) {
          C3.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(C3);

          if (
            !C4.firstElementChild ||
            !C4.firstElementChild.classList.contains("black")
          ) {
            C4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C4);

            if (
              !C5.firstElementChild ||
              !C5.firstElementChild.classList.contains("black")
            ) {
              C5.classList.toggle("highlightBlue");
              recentlyHighlightedElements.push(C5);

              if (
                !C6.firstElementChild ||
                !C6.firstElementChild.classList.contains("black")
              ) {
                C6.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(C6);

                if (
                  !C7.firstElementChild ||
                  !C7.firstElementChild.classList.contains("black")
                ) {
                  C7.classList.toggle("highlightBlue");
                  recentlyHighlightedElements.push(C7);

                  if (
                    !C8.firstElementChild ||
                    !C8.firstElementChild.classList.contains("black")
                  ) {
                    C8.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(C8);
                  }
                }
              }
            }
          }
        }
      }

      // Diagonal UP-RIGHT (C1 → D2 → E3 → F4 → G5 → H6)
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);

        if (
          !E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("black")
        ) {
          E3.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(E3);

          if (
            !F4.firstElementChild ||
            !F4.firstElementChild.classList.contains("black")
          ) {
            F4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F4);

            if (
              !G5.firstElementChild ||
              !G5.firstElementChild.classList.contains("black")
            ) {
              G5.classList.toggle("highlightBlue");
              recentlyHighlightedElements.push(G5);

              if (
                !H6.firstElementChild ||
                !H6.firstElementChild.classList.contains("black")
              ) {
                H6.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H6);
              }
            }
          }
        }
      }

      // Diagonal UP-LEFT (C1 → B2 → A3)
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);

        if (
          !A3.firstElementChild ||
          !A3.firstElementChild.classList.contains("black")
        ) {
          A3.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(A3);
        }
      }
    }
  }
  // Black Queen
  if (selectedPiece.classList.contains("bQueen")) {
    if (currentSquare === "B1") {
      // Horizontal rightwards (B1 → C1 → D1 → E1 → F1 → G1 → H1)
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
          !C1.firstElementChild.classList.contains("black")) &&
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("white"))
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
          !C1.firstElementChild.classList.contains("white"))
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
          !C1.firstElementChild.classList.contains("white"))
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
          !C1.firstElementChild.classList.contains("white"))
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
          !C1.firstElementChild.classList.contains("white"))
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }

      // Horizontal LEFT (B1 → A1)
      if (
        !A1.firstElementChild ||
        !A1.firstElementChild.classList.contains("black")
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }

      // Vertical UP (B1 → B2 → B3 … → B8)
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
          !B2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white"))
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white"))
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white"))
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white"))
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!B7.firstElementChild ||
          !B7.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white"))
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        (!B8.firstElementChild ||
          !B8.firstElementChild.classList.contains("black")) &&
        (!B7.firstElementChild ||
          !B7.firstElementChild.classList.contains("black")) &&
        (!B7.firstElementChild ||
          !B7.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("black")) &&
        (!B5.firstElementChild ||
          !B5.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("black")) &&
        (!B3.firstElementChild ||
          !B3.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white"))
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }

      // Diagonal UP-RIGHT (B1 → C2 → D3 → E4 …)
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white"))
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("black")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("black")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white"))
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("black")) &&
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("black")) &&
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("white")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("black")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white"))
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("black")) &&
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("black")) &&
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("white")) &&
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("black")) &&
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("white")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("black")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white"))
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        (!H7.firstElementChild ||
          !H7.firstElementChild.classList.contains("black")) &&
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("black")) &&
        (!G6.firstElementChild ||
          !G6.firstElementChild.classList.contains("white")) &&
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("black")) &&
        (!F5.firstElementChild ||
          !F5.firstElementChild.classList.contains("white")) &&
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("black")) &&
        (!E4.firstElementChild ||
          !E4.firstElementChild.classList.contains("white")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("black")) &&
        (!D3.firstElementChild ||
          !D3.firstElementChild.classList.contains("white")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("black")) &&
        (!C2.firstElementChild ||
          !C2.firstElementChild.classList.contains("white"))
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }
    }
  }
  // White piece on B1
  if (currentSquare === "B1") {
    if (
      !C1.firstElementChild ||
      !C1.firstElementChild.classList.contains("white")
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
        !C1.firstElementChild.classList.contains("black"))
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
        !C1.firstElementChild.classList.contains("black"))
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
        !C1.firstElementChild.classList.contains("black"))
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
        !C1.firstElementChild.classList.contains("black"))
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
        !C1.firstElementChild.classList.contains("black"))
    ) {
      H1.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H1);
    }

    // Diagonal to H7 / H8
    if (
      (!H7.firstElementChild ||
        !H7.firstElementChild.classList.contains("white")) &&
      (!G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("white")) &&
      (!G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("black")) &&
      (!F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("white")) &&
      (!F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("black")) &&
      (!E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("white")) &&
      (!E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("black")) &&
      (!D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("white")) &&
      (!D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("black")) &&
      (!C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("white")) &&
      (!C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black"))
    ) {
      H7.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(H7);
    }
    if (
      (!G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("white")) &&
      (!F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("white")) &&
      (!F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("black")) &&
      (!E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("white")) &&
      (!E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("black")) &&
      (!D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("white")) &&
      (!D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("black")) &&
      (!C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("white")) &&
      (!C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black"))
    ) {
      G6.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(G6);
    }
    if (
      (!F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("white")) &&
      (!E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("white")) &&
      (!E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("black")) &&
      (!D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("white")) &&
      (!D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("black")) &&
      (!C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("white")) &&
      (!C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black"))
    ) {
      F5.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(F5);
    }
    if (
      (!E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("white")) &&
      (!D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("white")) &&
      (!D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("black")) &&
      (!C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("white")) &&
      (!C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black"))
    ) {
      E4.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(E4);
    }
    if (
      (!D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("white")) &&
      (!C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("white")) &&
      (!C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black"))
    ) {
      D3.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(D3);
    }
    if (
      !C2.firstElementChild ||
      !C2.firstElementChild.classList.contains("white")
    ) {
      C2.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(C2);
    }

    // Vertical up A8
    if (
      (!B8.firstElementChild ||
        !B8.firstElementChild.classList.contains("white")) &&
      (!B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("white")) &&
      (!B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("black")) &&
      (!B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("white")) &&
      (!B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("black")) &&
      (!B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("white")) &&
      (!B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("black")) &&
      (!B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("white")) &&
      (!B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("black")) &&
      (!B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("white")) &&
      (!B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("black")) &&
      (!B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")) &&
      (!B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black"))
    ) {
      B8.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(B8);
    }
    if (
      (!B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("white")) &&
      (!B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("white")) &&
      (!B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("black")) &&
      (!B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("white")) &&
      (!B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("black")) &&
      (!B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("white")) &&
      (!B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("black")) &&
      (!B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("white")) &&
      (!B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("black")) &&
      (!B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")) &&
      (!B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black"))
    ) {
      B7.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(B7);
    }

    if (
      (!B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("white")) &&
      (!B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("white")) &&
      (!B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("black")) &&
      (!B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("white")) &&
      (!B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("black")) &&
      (!B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("white")) &&
      (!B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("black")) &&
      (!B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")) &&
      (!B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black"))
    ) {
      B6.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(B6);
    }

    if (
      (!B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("white")) &&
      (!B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("white")) &&
      (!B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("black")) &&
      (!B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("white")) &&
      (!B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("black")) &&
      (!B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")) &&
      (!B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black"))
    ) {
      B5.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(B5);
    }
    if (
      (!B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("white")) &&
      (!B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("white")) &&
      (!B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("black")) &&
      (!B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")) &&
      (!B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black"))
    ) {
      B4.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(B4);
    }
    if (
      (!B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("white")) &&
      (!B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")) &&
      (!B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black"))
    ) {
      B3.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(B3);
    }
    if (
      !B2.firstElementChild ||
      !B2.firstElementChild.classList.contains("white")
    ) {
      B2.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(B2);
    }

    // Left towards A file
    if (
      !A1.firstElementChild ||
      !A1.firstElementChild.classList.contains("white")
    ) {
      A1.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(A1);
    }
    if (
      !A2.firstElementChild ||
      !A2.firstElementChild.classList.contains("white")
    ) {
      A2.classList.toggle("highlightBlue");
      recentlyHighlightedElements.push(A2);
    }
  }
};
