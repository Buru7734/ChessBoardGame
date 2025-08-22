const knightMovement = () => {
  const A1 = document.getElementById("A1");
  const A2 = document.getElementById("A2");
  const A3 = document.getElementById("A3");
  const A4 = document.getElementById("A4");
  const A5 = document.getElementById("A5");
  const A6 = document.getElementById("A6");
  const A7 = document.getElementById("A7");
  const A8 = document.getElementById("A8");

  const B1 = document.getElementById("B1");
  const B2 = document.getElementById("B2");
  const B3 = document.getElementById("B3");
  const B4 = document.getElementById("B4");
  const B5 = document.getElementById("B5");
  const B6 = document.getElementById("B6");
  const B7 = document.getElementById("B7");
  const B8 = document.getElementById("B8");

  const C1 = document.getElementById("C1");
  const C2 = document.getElementById("C2");
  const C3 = document.getElementById("C3");
  const C4 = document.getElementById("C4");
  const C5 = document.getElementById("C5");
  const C6 = document.getElementById("C6");
  const C7 = document.getElementById("C7");
  const C8 = document.getElementById("C8");

  const D1 = document.getElementById("D1");
  const D2 = document.getElementById("D2");
  const D3 = document.getElementById("D3");
  const D4 = document.getElementById("D4");
  const D5 = document.getElementById("D5");
  const D6 = document.getElementById("D6");
  const D7 = document.getElementById("D7");
  const D8 = document.getElementById("D8");

  const E1 = document.getElementById("E1");
  const E2 = document.getElementById("E2");
  const E3 = document.getElementById("E3");
  const E4 = document.getElementById("E4");
  const E5 = document.getElementById("E5");
  const E6 = document.getElementById("E6");
  const E7 = document.getElementById("E7");
  const E8 = document.getElementById("E8");

  const F1 = document.getElementById("F1");
  const F2 = document.getElementById("F2");
  const F3 = document.getElementById("F3");
  const F4 = document.getElementById("F4");
  const F5 = document.getElementById("F5");
  const F6 = document.getElementById("F6");
  const F7 = document.getElementById("F7");
  const F8 = document.getElementById("F8");

  const G1 = document.getElementById("G1");
  const G2 = document.getElementById("G2");
  const G3 = document.getElementById("G3");
  const G4 = document.getElementById("G4");
  const G5 = document.getElementById("G5");
  const G6 = document.getElementById("G6");
  const G7 = document.getElementById("G7");
  const G8 = document.getElementById("G8");

  const H1 = document.getElementById("H1");
  const H2 = document.getElementById("H2");
  const H3 = document.getElementById("H3");
  const H4 = document.getElementById("H4");
  const H5 = document.getElementById("H5");
  const H6 = document.getElementById("H6");
  const H7 = document.getElementById("H7");
  const H8 = document.getElementById("H8");

  //A1 White

  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "A1") {
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("white")
      ) {
        console.log(B3);
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("white")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
    }
  }
  console.log("Hello 1");
  //A1 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "A1") {
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("black")
      ) {
        console.log("Hello 2");
        console.log(B3);
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
    }
  }

  //B1 White
  if (selectedPiece.classList.contains("wKnight")) {
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
  } //B1 Black
  if (selectedPiece.classList.contains("bKnight")) {
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
  }

  //C1 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "C1") {
      if (
        !A2.firstElementChild ||
        !A2.firstElementChild.classList.contains("white")
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("white")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("white")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("white")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
    }
  }
  //C1 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "C1") {
      if (
        !A2.firstElementChild ||
        !A2.firstElementChild.classList.contains("black")
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("black")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("black")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("black")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
    }
  }
  //D1 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "D1") {
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("white")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("white")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("white")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
    }
  }
  //D1 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "D1") {
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("black")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
        if (
          !E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("black")
        ) {
          E3.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(E3);
        }
      }
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("black")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
    }
  }
  //E1 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "E1") {
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("white")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("white")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("white")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("white")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
    }
  }
  //E1 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "E1") {
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("black")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
        if (
          !F3.firstElementChild ||
          !F3.firstElementChild.classList.contains("black")
        ) {
          F3.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(F3);
        }
      }
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("black")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
    }
  }
  //F1 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "F1") {
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("white")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("white")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("white")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        !H2.firstElementChild ||
        !H2.firstElementChild.classList.contains("white")
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
    }
  }
  //F1 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "F1") {
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("black")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
        if (
          !G3.firstElementChild ||
          !G3.firstElementChild.classList.contains("black")
        ) {
          G3.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(G3);
        }
      }
      if (
        !H2.firstElementChild ||
        !H2.firstElementChild.classList.contains("black")
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
    }
  }
  //G1 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "G1") {
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("white")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("white")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        !H3.firstElementChild ||
        !H3.firstElementChild.classList.contains("white")
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
    }
  }
  //G1 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "G1") {
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("black")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("black")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
        if (
          !H3.firstElementChild ||
          !H3.firstElementChild.classList.contains("black")
        ) {
          H3.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(H3);
        }
      }
    }
  }
  //H1 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "H1") {
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("white")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("white")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
    }
  }
  //H1 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "H1") {
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("black")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("black")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
    }
  }

  //SECOND ROW

  //A2 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "A2") {
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("white")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("white")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        !C1.firstElementChild ||
        !C1.firstElementChild.classList.contains("white")
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
    }
  }
  //A2 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "A2") {
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("black")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("black")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        !C1.firstElementChild ||
        !C1.firstElementChild.classList.contains("black")
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
    }
  }

  //B2 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "B2") {
      if (
        !A4.firstElementChild ||
        !A4.firstElementChild.classList.contains("white")
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("white")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("white")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("white")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
    }
  }
  //B2 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "B2") {
      if (
        !A4.firstElementChild ||
        !A4.firstElementChild.classList.contains("black")
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("black")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("black")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("black")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
    }
  }

  //C2 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "C2") {
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
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("white")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("white")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("white")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("white")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
    }
  }
  //C2 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "C2") {
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
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("black")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("black")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("black")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
    }
  }
  //D2 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "D2") {
      if (
        !B1.firstElementChild ||
        !B1.firstElementChild.classList.contains("white")
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("white")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("white")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("white")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("white")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        !F1.firstElementChild ||
        !F1.firstElementChild.classList.contains("white")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
    }
  }
  //D2 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "D2") {
      if (
        !B1.firstElementChild ||
        !B1.firstElementChild.classList.contains("black")
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("black")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("black")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("black")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("black")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        !F1.firstElementChild ||
        !F1.firstElementChild.classList.contains("black")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
    }
  }

  //E2 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "E2") {
      if (
        !C1.firstElementChild ||
        !C1.firstElementChild.classList.contains("white")
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("white")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("white")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("white")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("white")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains("white")
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
    }
  }
  //E2 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "E2") {
      if (
        !C1.firstElementChild ||
        !C1.firstElementChild.classList.contains("black")
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("black")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("black")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("black")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains("black")
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
    }
  }

  //F2 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "F2") {
      if (
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("white")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("white")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("white")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("white")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        !H3.firstElementChild ||
        !H3.firstElementChild.classList.contains("white")
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
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
  //F2 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "F2") {
      if (
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("black")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("black")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("black")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("black")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        !H3.firstElementChild ||
        !H3.firstElementChild.classList.contains("black")
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
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

  //G2 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "G2") {
      if (
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("white")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("white")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("white")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("white")
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
    }
  }
  //G2 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "G2") {
      if (
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("black")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("black")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("black")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("black")
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
    }
  }

  //H2 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "H2") {
      if (
        !F1.firstElementChild ||
        !F1.firstElementChild.classList.contains("white")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("white")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("white")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
    }
  }
  //H2 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "H2") {
      if (
        !F1.firstElementChild ||
        !F1.firstElementChild.classList.contains("black")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("black")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("black")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
    }
  }

  //ROW THREE

  //A3 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "A3") {
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("white")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("white")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("white")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
    }
  }
  //A3 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "A3") {
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("black")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("black")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
    }
  }

  //B3 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "B3") {
      if (
        !A5.firstElementChild ||
        !A5.firstElementChild.classList.contains("white")
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("white")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("white")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("white")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
    }
  }
  //B3 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "B3") {
      if (
        !A5.firstElementChild ||
        !A5.firstElementChild.classList.contains("black")
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("black")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
    }
  }

  //C3 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "C3") {
      if (
        !B1.firstElementChild ||
        !B1.firstElementChild.classList.contains("white")
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
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
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("white")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("white")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("white")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("white")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("white")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
    }
  }
  //C3 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "C3") {
      if (
        !B1.firstElementChild ||
        !B1.firstElementChild.classList.contains("black")
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
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
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("black")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("black")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("black")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("black")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("black")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
    }
  }

  //D3 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "D3") {
      if (
        !C1.firstElementChild ||
        !C1.firstElementChild.classList.contains("white")
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("white")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("white")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("white")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("white")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("white")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("white")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
    }
  }
  //D3 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "D3") {
      if (
        !C1.firstElementChild ||
        !C1.firstElementChild.classList.contains("black")
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("black")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("black")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("black")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("black")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("black")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("black")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
    }
  }

  //E3 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "E3") {
      if (
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("white")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("white")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("white")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("white")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("white")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("white")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("white")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        !F1.firstElementChild ||
        !F1.firstElementChild.classList.contains("white")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
    }
  }
  //E3 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "E3") {
      if (
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("black")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("black")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("black")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("black")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("black")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("black")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        !F1.firstElementChild ||
        !F1.firstElementChild.classList.contains("black")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
    }
  }

  //F3 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "F3") {
      if (
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("white")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("white")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("white")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("white")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("white")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("white")
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
      if (
        !H2.firstElementChild ||
        !H2.firstElementChild.classList.contains("white")
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
      if (
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains("white")
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
    }
  }
  //F3 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "F3") {
      if (
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("black")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("black")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("black")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("black")
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
      if (
        !H2.firstElementChild ||
        !H2.firstElementChild.classList.contains("black")
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
      if (
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains("black")
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
    }
  }

  //G3 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "G3") {
      if (
        !F1.firstElementChild ||
        !F1.firstElementChild.classList.contains("white")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("white")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("white")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("white")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        !H5.firstElementChild ||
        !H5.firstElementChild.classList.contains("white")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
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
  //G3 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "G3") {
      if (
        !F1.firstElementChild ||
        !F1.firstElementChild.classList.contains("black")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("black")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("black")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("black")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        !H5.firstElementChild ||
        !H5.firstElementChild.classList.contains("black")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
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

  //H3 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "H3") {
      if (
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains("white")
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("white")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("white")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("white")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
    }
  }
  //H3 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "H3") {
      if (
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains("black")
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("black")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("black")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("black")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
    }
  }
  //ROW FOUR

  //A4 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "A4") {
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("white")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("white")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("white")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
    }
  }
  //A4 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "A4") {
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("black")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("black")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("black")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
    }
  }

  //B4 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "B4") {
      if (
        !A2.firstElementChild ||
        !A2.firstElementChild.classList.contains("white")
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
      if (
        !A6.firstElementChild ||
        !A6.firstElementChild.classList.contains("white")
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("white")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("white")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("white")
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
    }
  }
  //B4 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "B4") {
      if (
        !A2.firstElementChild ||
        !A2.firstElementChild.classList.contains("black")
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
      if (
        !A6.firstElementChild ||
        !A6.firstElementChild.classList.contains("black")
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("black")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("black")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("black")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
    }
  }

  //C4 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "C4") {
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }

      if (
        !A3.firstElementChild ||
        !A3.firstElementChild.classList.contains("white")
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("white")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }

      if (
        !A5.firstElementChild ||
        !A5.firstElementChild.classList.contains("white")
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }

      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("white")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("white")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("white")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("white")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
    }
  }
  //C4 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "C4") {
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }

      if (
        !A3.firstElementChild ||
        !A3.firstElementChild.classList.contains("black")
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("black")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }

      if (
        !A5.firstElementChild ||
        !A5.firstElementChild.classList.contains("black")
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }

      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("black")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("black")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
    }
  }

  //D4 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "D4") {
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("white")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }

      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("white")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("white")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("white")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }

      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("white")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }

      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("white")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("white")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("white")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
    }
  }
  //D4 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "D4") {
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }

      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("black")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("black")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("black")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }

      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("black")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }

      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("black")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("black")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("black")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
    }
  }

  //E4 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "E4") {
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("white")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }

      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("white")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("white")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("white")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }

      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("white")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }

      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("white")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("white")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("white")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
    }
  }
  //E4 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "E4") {
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }

      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("black")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("black")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }

      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("black")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }

      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("black")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("black")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("black")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
    }
  }

  //F4 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "F4") {
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("white")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }

      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("white")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("white")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("white")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }

      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("white")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }

      if (
        !H5.firstElementChild ||
        !H5.firstElementChild.classList.contains("white")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
      if (
        !H3.firstElementChild ||
        !H3.firstElementChild.classList.contains("white")
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("white")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
    }
  }
  //F4 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "F4") {
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("black")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }

      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("black")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("black")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("black")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }

      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("black")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }

      if (
        !H5.firstElementChild ||
        !H5.firstElementChild.classList.contains("black")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
      if (
        !H3.firstElementChild ||
        !H3.firstElementChild.classList.contains("black")
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("black")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
    }
  }

  //G4 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "G4") {
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("white")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }

      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("white")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("white")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("white")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }

      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("white")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }

      if (
        !H2.firstElementChild ||
        !H2.firstElementChild.classList.contains("white")
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
    }
  }
  //G4 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "G4") {
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("black")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }

      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("black")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("black")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("black")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }

      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("black")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }

      if (
        !H2.firstElementChild ||
        !H2.firstElementChild.classList.contains("black")
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
    }
  }

  //H4 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "H4") {
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("white")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }

      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("white")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("white")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("white")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
    }
  }
  //H4 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "H4") {
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("black")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }

      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("black")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("black")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("black")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
    }
  }

  //ROW FIVE

  //A5 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "A5") {
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("white")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }

      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("white")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("white")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("white")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
    }
  }
  //A5 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "A5") {
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("black")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }

      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("black")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("black")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("black")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
    }
  }
  //H5 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "H5") {
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("white")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }

      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("white")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("white")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("white")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
    }
  }
  //H5 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "H5") {
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("black")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }

      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("black")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("black")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("black")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
    }
  }

  //B5 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "B5") {
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
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("white")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("white")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("white")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        !A7.firstElementChild ||
        !A7.firstElementChild.classList.contains("white")
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
    }
  }
  //B5 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "B5") {
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
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("black")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        !A7.firstElementChild ||
        !A7.firstElementChild.classList.contains("black")
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
    }
  }

  //G5 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "G5") {
      if (
        !H3.firstElementChild ||
        !H3.firstElementChild.classList.contains("white")
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }

      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("white")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("white")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("white")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("white")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        !H7.firstElementChild ||
        !H7.firstElementChild.classList.contains("white")
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }
    }
  }
  //G5 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "G5") {
      if (
        !H3.firstElementChild ||
        !H3.firstElementChild.classList.contains("black")
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }

      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("black")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("black")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("black")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("black")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        !H7.firstElementChild ||
        !H7.firstElementChild.classList.contains("black")
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }
    }
  }

  //C5 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "C5") {
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("white")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }

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
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("white")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("white")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("white")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("white")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("white")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
    }
  }
  //C5 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "C5") {
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("black")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }

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
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("black")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("black")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("black")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("black")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("black")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
    }
  }

  //D5 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "D5") {
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("white")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }

      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("white")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("white")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }

      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("white")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("white")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("white")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("white")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("white")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
    }
  }
  //D5 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "D5") {
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("black")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }

      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("black")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("black")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("black")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("black")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("black")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("black")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("black")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
    }
  }

  //E5 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "E5") {
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("white")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }

      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("white")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("white")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }

      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("white")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("white")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("white")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("white")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("white")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
    }
  }
  //E5 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "E5") {
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("black")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }

      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("black")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("black")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("black")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("black")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("black")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("black")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("black")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
    }
  }

  //F5 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "F5") {
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("white")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }

      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("white")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("white")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }

      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("white")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("white")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("white")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("white")
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("white")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
    }
  }
  //F5 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "F5") {
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("black")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }

      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("black")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("black")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("black")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("black")
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("black")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
    }
  }

  //ROW SIX

  //A6 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "A6") {
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("white")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }

      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("white")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("white")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        !B8.firstElementChild ||
        !B8.firstElementChild.classList.contains("white")
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }
    }
  }
  //A6 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "A6") {
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("black")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }

      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("black")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("black")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        !B8.firstElementChild ||
        !B8.firstElementChild.classList.contains("black")
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }
    }
  }

  //H6 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "H6") {
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("white")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }

      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("white")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("white")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        !G8.firstElementChild ||
        !G8.firstElementChild.classList.contains("white")
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }
    }
  }
  //H6 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "H6") {
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("black")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }

      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("black")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("black")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        !G8.firstElementChild ||
        !G8.firstElementChild.classList.contains("black")
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }
    }
  }

  //B6 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "B6") {
      if (
        !A4.firstElementChild ||
        !A4.firstElementChild.classList.contains("white")
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }

      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("white")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("white")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("white")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        !C8.firstElementChild ||
        !C8.firstElementChild.classList.contains("white")
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }
      if (
        !A8.firstElementChild ||
        !A8.firstElementChild.classList.contains("white")
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }
    }
  }
  //B6 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "B6") {
      if (
        !A4.firstElementChild ||
        !A4.firstElementChild.classList.contains("black")
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }

      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("black")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("black")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("black")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        !C8.firstElementChild ||
        !C8.firstElementChild.classList.contains("black")
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }
      if (
        !A8.firstElementChild ||
        !A8.firstElementChild.classList.contains("black")
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }
    }
  }

  //G6 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "G6") {
      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("white")
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }

      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("white")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("white")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("white")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        !F8.firstElementChild ||
        !F8.firstElementChild.classList.contains("white")
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
      if (
        !H8.firstElementChild ||
        !H8.firstElementChild.classList.contains("white")
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }
    }
  }
  //G6 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "G6") {
      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("black")
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }

      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("black")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("black")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("black")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        !F8.firstElementChild ||
        !F8.firstElementChild.classList.contains("black")
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
      if (
        !H8.firstElementChild ||
        !H8.firstElementChild.classList.contains("black")
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }
    }
  }

  //C6 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "C6") {
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("white")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }

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
        !B8.firstElementChild ||
        !B8.firstElementChild.classList.contains("white")
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("white")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("white")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("white")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("white")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
    }
  }
  //C6 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "C6") {
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("black")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }

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
        !B8.firstElementChild ||
        !B8.firstElementChild.classList.contains("black")
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("black")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("black")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("black")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
    }
  }
  //D6 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "D6") {
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("white")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }

      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("white")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("white")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }

      if (
        !C8.firstElementChild ||
        !C8.firstElementChild.classList.contains("white")
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }
      if (
        !E8.firstElementChild ||
        !E8.firstElementChild.classList.contains("white")
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("white")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("white")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("white")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
    }
  }
  //D6 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "D6") {
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("black")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }

      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("black")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("black")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        !C8.firstElementChild ||
        !C8.firstElementChild.classList.contains("black")
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }
      if (
        !E8.firstElementChild ||
        !E8.firstElementChild.classList.contains("black")
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("black")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("black")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("black")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
    }
  }
  //E6 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "E6") {
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("white")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }

      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("white")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("white")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }

      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("white")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }
      if (
        !F8.firstElementChild ||
        !F8.firstElementChild.classList.contains("white")
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("white")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("white")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("white")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
    }
  }
  //E6 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "E6") {
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }

      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("black")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("black")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("black")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }
      if (
        !F8.firstElementChild ||
        !F8.firstElementChild.classList.contains("black")
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("black")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("black")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("black")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
    }
  }
  //F6 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "F6") {
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("white")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }

      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("white")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("white")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }

      if (
        !E8.firstElementChild ||
        !E8.firstElementChild.classList.contains("white")
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }
      if (
        !G8.firstElementChild ||
        !G8.firstElementChild.classList.contains("white")
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }
      if (
        !H7.firstElementChild ||
        !H7.firstElementChild.classList.contains("white")
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }
      if (
        !H5.firstElementChild ||
        !H5.firstElementChild.classList.contains("white")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("white")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
    }
  }
  //F6 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "F6") {
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("black")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }

      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("black")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("black")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        !E8.firstElementChild ||
        !E8.firstElementChild.classList.contains("black")
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }
      if (
        !G8.firstElementChild ||
        !G8.firstElementChild.classList.contains("black")
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }
      if (
        !H7.firstElementChild ||
        !H7.firstElementChild.classList.contains("black")
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }
      if (
        !H5.firstElementChild ||
        !H5.firstElementChild.classList.contains("black")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("black")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
    }
  }

  //ROW SEVEN

  //A7 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "A7") {
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("white")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }

      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("white")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        !C8.firstElementChild ||
        !C8.firstElementChild.classList.contains("white")
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }
    }
  }
  //A7 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "A7") {
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("black")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }

      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("black")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        !C8.firstElementChild ||
        !C8.firstElementChild.classList.contains("black")
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }
    }
  }

  //H7 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "H7") {
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("white")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }

      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("white")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        !F8.firstElementChild ||
        !F8.firstElementChild.classList.contains("white")
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
    }
  }
  //H7 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "H7") {
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("black")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }

      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("black")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        !F8.firstElementChild ||
        !F8.firstElementChild.classList.contains("black")
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
    }
  }
  //B7 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "B7") {
      if (
        !A5.firstElementChild ||
        !A5.firstElementChild.classList.contains("white")
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }

      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("white")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("white")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("white")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }
    }
  }
  //B7 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "B7") {
      if (
        !A5.firstElementChild ||
        !A5.firstElementChild.classList.contains("black")
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }

      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("black")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("black")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }
      if (
        !C8.firstElementChild ||
        !C8.firstElementChild.classList.contains("black")
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }
      if (
        !A8.firstElementChild ||
        !A8.firstElementChild.classList.contains("black")
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }
    }
  }

  //G7 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "G7") {
      if (
        !H5.firstElementChild ||
        !H5.firstElementChild.classList.contains("white")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }

      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("white")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("white")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        !E8.firstElementChild ||
        !E8.firstElementChild.classList.contains("white")
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }
    }
  }
  //G7 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "G7") {
      if (
        !H5.firstElementChild ||
        !H5.firstElementChild.classList.contains("black")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }

      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("black")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("black")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        !E8.firstElementChild ||
        !E8.firstElementChild.classList.contains("black")
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }
    }
  }

  //C7 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "C7") {
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("white")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }

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

      if (
        !E8.firstElementChild ||
        !E8.firstElementChild.classList.contains("white")
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("white")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("white")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
    }
  }
  //C7 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "C7") {
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("black")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }

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
      if (
        !E8.firstElementChild ||
        !E8.firstElementChild.classList.contains("black")
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("black")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("black")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
    }
  }
  //D7 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "D7") {
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("white")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }

      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("white")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        !B8.firstElementChild ||
        !B8.firstElementChild.classList.contains("white")
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }

      if (
        !F8.firstElementChild ||
        !F8.firstElementChild.classList.contains("white")
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("white")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("white")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
    }
  }
  //D7 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "D7") {
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("black")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }

      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("black")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        !B8.firstElementChild ||
        !B8.firstElementChild.classList.contains("black")
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }

      if (
        !F8.firstElementChild ||
        !F8.firstElementChild.classList.contains("black")
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("black")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("black")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
    }
  }

  //E7 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "E7") {
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("white")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }

      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("white")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        !C8.firstElementChild ||
        !C8.firstElementChild.classList.contains("white")
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }

      if (
        !G8.firstElementChild ||
        !G8.firstElementChild.classList.contains("white")
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("white")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("white")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
    }
  }
  //E7 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "E7") {
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("black")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }

      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("black")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        !C8.firstElementChild ||
        !C8.firstElementChild.classList.contains("black")
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("black")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }
      if (
        !F8.firstElementChild ||
        !F8.firstElementChild.classList.contains("black")
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
      if (
        !G8.firstElementChild ||
        !G8.firstElementChild.classList.contains("black")
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("black")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("black")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
    }
  }
  //F7 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "F7") {
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("white")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }

      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("white")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("white")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }

      if (
        !H8.firstElementChild ||
        !H8.firstElementChild.classList.contains("white")
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("white")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("white")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
    }
  }
  //F7 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "F7") {
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("black")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }

      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("black")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }

      if (
        !H8.firstElementChild ||
        !H8.firstElementChild.classList.contains("black")
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("black")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("black")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
    }
  }

  //ROW EIGHT

  //A8 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "A8") {
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("white")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }

      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("white")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
    }
  }
  //A8 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "A8") {
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("black")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }

      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("black")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
    }
  }

  //H8 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "H8") {
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("white")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }

      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("white")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
    }
  }
  //H8 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "H8") {
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("black")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }

      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("black")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
    }
  }

  //B8 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "B8") {
      if (
        !A6.firstElementChild ||
        !A6.firstElementChild.classList.contains("white")
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }

      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("white")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("white")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
    }
  }
  //B8 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "B8") {
      if (
        !A6.firstElementChild ||
        !A6.firstElementChild.classList.contains("black")
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }

      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("black")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("black")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
    }
  }

  //G8 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "G8") {
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("white")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }

      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("white")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("white")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
    }
  }
  //G8 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "G8") {
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("black")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }

      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("black")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("black")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
    }
  }

  //C8 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "C8") {
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("white")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }

      if (
        !A7.firstElementChild ||
        !A7.firstElementChild.classList.contains("white")
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }

      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("white")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("white")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
    }
  }
  //C8 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "C8") {
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("black")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }

      if (
        !A7.firstElementChild ||
        !A7.firstElementChild.classList.contains("black")
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }

      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("black")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
    }
  }
  //D8 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "D8") {
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("white")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }

      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("white")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }

      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("white")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("white")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
    }
  }
  //D8 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "D8") {
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("black")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }

      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("black")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }

      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("black")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("black")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
    }
  }

  //E8 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "E8") {
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("white")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }

      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("white")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }

      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("white")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("white")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
    }
  }
  //E8 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "E8") {
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }

      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("black")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        !C8.firstElementChild ||
        !C8.firstElementChild.classList.contains("black")
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("black")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }

      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("black")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("black")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
    }
  }
  //F7 White
  if (selectedPiece.classList.contains("wKnight")) {
    if (currentSquare === "F7") {
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("white")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }

      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("white")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("white")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }

      if (
        !H8.firstElementChild ||
        !H8.firstElementChild.classList.contains("white")
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("white")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("white")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
    }
  }
  //F7 Black
  if (selectedPiece.classList.contains("bKnight")) {
    if (currentSquare === "F7") {
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("black")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }

      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("black")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }

      if (
        !H8.firstElementChild ||
        !H8.firstElementChild.classList.contains("black")
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("black")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("black")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
    }
  }
};
