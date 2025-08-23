const kingMovement = () => {
  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "A1") {
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
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
    }
  }
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "A1") {
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
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
    }
  }

  if (selectedPiece.classList.contains("whiteKing")) {
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
        !B1.firstElementChild ||
        !B1.firstElementChild.classList.contains("white")
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("white")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
    }
  }

  if (selectedPiece.classList.contains("blackKing")) {
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
        !B1.firstElementChild ||
        !B1.firstElementChild.classList.contains("black")
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("black")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
    }
  }

  if (selectedPiece.classList.contains("whiteKing")) {
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
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("white")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("white")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
    }
  }

  if (selectedPiece.classList.contains("blackKing")) {
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
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("black")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
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
    }
  }

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "A4") {
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
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("white")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("white")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("white")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
    }
  }

  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "A4") {
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
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("black")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
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
    }
  }

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "A5") {
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
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("white")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("white")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
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

  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "A5") {
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
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("black")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
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
    }
  }

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "A6") {
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
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("white")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("white")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
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

  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "A6") {
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
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("black")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
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
    }
  }

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "A7") {
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
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("white")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("white")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
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

  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "A7") {
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
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("black")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
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
    }
  }

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "A8") {
      if (
        !A7.firstElementChild ||
        !A7.firstElementChild.classList.contains("white")
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }

      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("white")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
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

  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "A8") {
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
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("black")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
    }
  }

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "B1") {
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
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        !C1.firstElementChild ||
        !C1.firstElementChild.classList.contains("white")
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "B1") {
      if (
        !A1.firstElementChild ||
        !A1.firstElementChild.classList.contains("black")
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }
      if (
        !A2.firstElementChild ||
        !A2.firstElementChild.classList.contains("black")
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        !C1.firstElementChild ||
        !C1.firstElementChild.classList.contains("black")
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "B2") {
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
      if (
        !A3.firstElementChild ||
        !A3.firstElementChild.classList.contains("white")
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
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
        !C1.firstElementChild ||
        !C1.firstElementChild.classList.contains("white")
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("white")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("white")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
    }
  }
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "B2") {
      if (
        !A1.firstElementChild ||
        !A1.firstElementChild.classList.contains("black")
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }
      if (
        !A2.firstElementChild ||
        !A2.firstElementChild.classList.contains("black")
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
      if (
        !A3.firstElementChild ||
        !A3.firstElementChild.classList.contains("black")
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
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
        !C1.firstElementChild ||
        !C1.firstElementChild.classList.contains("black")
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("black")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
    }
  }

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "B3") {
      if (
        !A2.firstElementChild ||
        !A2.firstElementChild.classList.contains("white")
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
      if (
        !A3.firstElementChild ||
        !A3.firstElementChild.classList.contains("white")
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
      if (
        !A4.firstElementChild ||
        !A4.firstElementChild.classList.contains("white")
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
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
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("white")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("white")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("white")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
    }
  }
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "B3") {
      if (
        !A2.firstElementChild ||
        !A2.firstElementChild.classList.contains("black")
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
      if (
        !A3.firstElementChild ||
        !A3.firstElementChild.classList.contains("black")
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
      if (
        !A4.firstElementChild ||
        !A4.firstElementChild.classList.contains("black")
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
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
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("black")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("black")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
    }
  }

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "B4") {
      if (
        !A3.firstElementChild ||
        !A3.firstElementChild.classList.contains("white")
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
      if (
        !A4.firstElementChild ||
        !A4.firstElementChild.classList.contains("white")
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }
      if (
        !A5.firstElementChild ||
        !A5.firstElementChild.classList.contains("white")
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
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
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("white")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("white")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("white")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
    }
  }
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "B4") {
      if (
        !A3.firstElementChild ||
        !A3.firstElementChild.classList.contains("black")
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
      if (
        !A4.firstElementChild ||
        !A4.firstElementChild.classList.contains("black")
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }
      if (
        !A5.firstElementChild ||
        !A5.firstElementChild.classList.contains("black")
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
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
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("black")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("black")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("black")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
    }
  }

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "B5") {
      if (
        !A4.firstElementChild ||
        !A4.firstElementChild.classList.contains("white")
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }
      if (
        !A5.firstElementChild ||
        !A5.firstElementChild.classList.contains("white")
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }
      if (
        !A6.firstElementChild ||
        !A6.firstElementChild.classList.contains("white")
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
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
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("white")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("white")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("white")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
    }
  }
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "B5") {
      if (
        !A4.firstElementChild ||
        !A4.firstElementChild.classList.contains("black")
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }
      if (
        !A5.firstElementChild ||
        !A5.firstElementChild.classList.contains("black")
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }
      if (
        !A6.firstElementChild ||
        !A6.firstElementChild.classList.contains("black")
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
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
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("black")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("black")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("black")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
    }
  }

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "B6") {
      if (
        !A5.firstElementChild ||
        !A5.firstElementChild.classList.contains("white")
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }
      if (
        !A6.firstElementChild ||
        !A6.firstElementChild.classList.contains("white")
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
      if (
        !A7.firstElementChild ||
        !A7.firstElementChild.classList.contains("white")
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
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
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("white")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("white")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "B6") {
      if (
        !A5.firstElementChild ||
        !A5.firstElementChild.classList.contains("black")
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }
      if (
        !A6.firstElementChild ||
        !A6.firstElementChild.classList.contains("black")
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
      if (
        !A7.firstElementChild ||
        !A7.firstElementChild.classList.contains("black")
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
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
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("black")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("black")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "B7") {
      if (
        !A6.firstElementChild ||
        !A6.firstElementChild.classList.contains("white")
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
      if (
        !A7.firstElementChild ||
        !A7.firstElementChild.classList.contains("white")
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
      if (
        !A8.firstElementChild ||
        !A8.firstElementChild.classList.contains("white")
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
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
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("white")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("white")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "B7") {
      if (
        !A6.firstElementChild ||
        !A6.firstElementChild.classList.contains("black")
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
      if (
        !A7.firstElementChild ||
        !A7.firstElementChild.classList.contains("black")
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
      if (
        !A8.firstElementChild ||
        !A8.firstElementChild.classList.contains("black")
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
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
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("black")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
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
    }
  }

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "B8") {
      if (
        !A7.firstElementChild ||
        !A7.firstElementChild.classList.contains("white")
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
      if (
        !A8.firstElementChild ||
        !A8.firstElementChild.classList.contains("white")
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }

      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("white")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }

      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("white")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "B8") {
      if (
        !A7.firstElementChild ||
        !A7.firstElementChild.classList.contains("black")
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
      if (
        !A8.firstElementChild ||
        !A8.firstElementChild.classList.contains("black")
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }

      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("black")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
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
    }
  }

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "C1") {
      if (
        !B1.firstElementChild ||
        !B1.firstElementChild.classList.contains("white")
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("white")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("white")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "C1") {
      if (
        !B1.firstElementChild ||
        !B1.firstElementChild.classList.contains("black")
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("black")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "C2") {
      if (
        !B1.firstElementChild ||
        !B1.firstElementChild.classList.contains("white")
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("white")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
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
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("white")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("white")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "C2") {
      if (
        !B1.firstElementChild ||
        !B1.firstElementChild.classList.contains("black")
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("black")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
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
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("black")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "C3") {
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("white")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("white")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("white")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
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
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("white")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("white")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "C3") {
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);
      }
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("black")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("black")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
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
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("black")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "C4") {
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("white")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("white")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("white")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
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
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("white")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("white")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "C4") {
      if (
        !B3.firstElementChild ||
        !B3.firstElementChild.classList.contains("black")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
      }
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("black")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("black")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
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
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("black")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "C5") {
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("white")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("white")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("white")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
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
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("white")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("white")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "C5") {
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("black")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("black")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("black")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
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
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("black")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "C6") {
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("white")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("white")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("white")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
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
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("white")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("white")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "C6") {
      if (
        !B5.firstElementChild ||
        !B5.firstElementChild.classList.contains("black")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
      }
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("black")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("black")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
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
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("black")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "C7") {
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("white")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("white")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        !B8.firstElementChild ||
        !B8.firstElementChild.classList.contains("white")
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
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
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("white")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("white")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "C7") {
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("black")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("black")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        !B8.firstElementChild ||
        !B8.firstElementChild.classList.contains("black")
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
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
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("black")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("black")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }
    }
  }

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "C8") {
      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("white")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        !B8.firstElementChild ||
        !B8.firstElementChild.classList.contains("white")
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }

      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("white")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }

      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("white")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "C8") {
      if (
        !B7.firstElementChild ||
        !B7.firstElementChild.classList.contains("black")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
      }
      if (
        !B8.firstElementChild ||
        !B8.firstElementChild.classList.contains("black")
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }

      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("black")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }

      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("black")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("black")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }
    }
  }

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "D1") {
      if (
        !C1.firstElementChild ||
        !C1.firstElementChild.classList.contains("white")
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("white")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("white")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("white")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "D1") {
      if (
        !C1.firstElementChild ||
        !C1.firstElementChild.classList.contains("black")
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("black")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "D2") {
      if (
        !C1.firstElementChild ||
        !C1.firstElementChild.classList.contains("white")
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("white")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("white")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
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
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("white")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("white")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "D2") {
      if (
        !C1.firstElementChild ||
        !C1.firstElementChild.classList.contains("black")
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("black")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
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
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("black")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("black")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "D3") {
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("white")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("white")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("white")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
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
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("white")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("white")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "D3") {
      if (
        !C2.firstElementChild ||
        !C2.firstElementChild.classList.contains("black")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
      }
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("black")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("black")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
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
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("black")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("black")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "D4") {
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("white")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("white")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("white")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
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
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("white")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("white")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "D4") {
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("black")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("black")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("black")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
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
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("black")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("black")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "D5") {
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("white")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("white")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("white")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
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
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("white")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("white")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "D5") {
      if (
        !C4.firstElementChild ||
        !C4.firstElementChild.classList.contains("black")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
      }
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("black")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("black")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
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
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("black")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("black")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "D6") {
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("white")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("white")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("white")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
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
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("white")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("white")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "D6") {
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("black")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("black")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("black")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
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
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("black")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("black")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "D7") {
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("white")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
      }
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("white")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        !C8.firstElementChild ||
        !C8.firstElementChild.classList.contains("white")
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
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
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("white")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("white")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "D7") {
      if (
        !C6.firstElementChild ||
        !C6.firstElementChild.classList.contains("black")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
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
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("black")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("black")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "D8") {
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("white")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        !C8.firstElementChild ||
        !C8.firstElementChild.classList.contains("white")
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }

      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("white")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }

      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("white")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "D8") {
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
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("black")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }

      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("black")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "E1") {
      if (
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("white")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("white")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("white")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        !F1.firstElementChild ||
        !F1.firstElementChild.classList.contains("white")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "E1") {
      if (
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("black")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("black")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        !F1.firstElementChild ||
        !F1.firstElementChild.classList.contains("black")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
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
  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "E2") {
      if (
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("white")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("white")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("white")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
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
        !F1.firstElementChild ||
        !F1.firstElementChild.classList.contains("white")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("white")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "E2") {
      if (
        !D1.firstElementChild ||
        !D1.firstElementChild.classList.contains("black")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("black")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
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
        !F1.firstElementChild ||
        !F1.firstElementChild.classList.contains("black")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("black")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "E3") {
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("white")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("white")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("white")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
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
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("white")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("white")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "E3") {
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("black")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
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
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("black")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("black")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "E4") {
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("white")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("white")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("white")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
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
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("white")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("white")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "E4") {
      if (
        !D3.firstElementChild ||
        !D3.firstElementChild.classList.contains("black")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
      }
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("black")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
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
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("black")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("black")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "E5") {
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("white")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("white")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("white")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
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
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("white")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("white")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "E5") {
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
      }
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("black")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
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
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("black")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("black")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "E6") {
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("white")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("white")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("white")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
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
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("white")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("white")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "E6") {
      if (
        !D5.firstElementChild ||
        !D5.firstElementChild.classList.contains("black")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
      }
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("black")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
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
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("black")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("black")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "E7") {
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("white")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("white")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("white")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
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

      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("white")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("white")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "E7") {
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("black")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
      }
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("black")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
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

      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("black")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("black")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "E8") {
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("white")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
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
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("white")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "E8") {
      if (
        !D7.firstElementChild ||
        !D7.firstElementChild.classList.contains("black")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
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
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("black")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "F1") {
      if (
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("white")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("white")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("white")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains("white")
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "F1") {
      if (
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("black")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("black")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("black")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains("black")
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "F2") {
      if (
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("white")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("white")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("white")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
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
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains("white")
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("white")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "F2") {
      if (
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("black")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("black")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("black")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
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
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains("black")
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("black")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "F3") {
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("white")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("white")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("white")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
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
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("white")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("white")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "F3") {
      if (
        !E2.firstElementChild ||
        !E2.firstElementChild.classList.contains("black")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
      }
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("black")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("black")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
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
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("black")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("black")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "F4") {
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("white")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("white")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("white")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
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
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("white")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("white")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "F4") {
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("black")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("black")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("black")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
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
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("black")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("black")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
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
  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "F5") {
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("white")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("white")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("white")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
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
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("white")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("white")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "F5") {
      if (
        !E4.firstElementChild ||
        !E4.firstElementChild.classList.contains("black")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
      }
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("black")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("black")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
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
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("black")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("black")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "F6") {
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("white")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("white")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("white")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
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
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("white")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("white")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "F6") {
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("black")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
      }
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("black")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("black")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
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
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("black")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("black")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "F7") {
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("white")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("white")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        !E8.firstElementChild ||
        !E8.firstElementChild.classList.contains("white")
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
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

      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("white")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("white")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "F7") {
      if (
        !E6.firstElementChild ||
        !E6.firstElementChild.classList.contains("black")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
      }
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("black")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        !E8.firstElementChild ||
        !E8.firstElementChild.classList.contains("black")
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
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

      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("black")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("black")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "F8") {
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("white")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
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
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("white")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "F8") {
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("black")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
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
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("black")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "G1") {
      if (
        !F1.firstElementChild ||
        !F1.firstElementChild.classList.contains("white")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("white")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("white")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        !H1.firstElementChild ||
        !H1.firstElementChild.classList.contains("white")
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "G1") {
      if (
        !F1.firstElementChild ||
        !F1.firstElementChild.classList.contains("black")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("black")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("black")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        !H1.firstElementChild ||
        !H1.firstElementChild.classList.contains("black")
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "G2") {
      if (
        !F1.firstElementChild ||
        !F1.firstElementChild.classList.contains("white")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("white")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("white")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains("white")
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("white")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }

      if (
        !H1.firstElementChild ||
        !H1.firstElementChild.classList.contains("white")
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }
      if (
        !H2.firstElementChild ||
        !H2.firstElementChild.classList.contains("white")
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "G2") {
      if (
        !F1.firstElementChild ||
        !F1.firstElementChild.classList.contains("black")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("black")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("black")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains("black")
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("black")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }

      if (
        !H1.firstElementChild ||
        !H1.firstElementChild.classList.contains("black")
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }
      if (
        !H2.firstElementChild ||
        !H2.firstElementChild.classList.contains("black")
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
      if (
        !H3.firstElementChild ||
        !H3.firstElementChild.classList.contains("black")
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
    }
  }

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "G3") {
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("white")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("white")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("white")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("white")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("white")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }

      if (
        !H2.firstElementChild ||
        !H2.firstElementChild.classList.contains("white")
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
      if (
        !H3.firstElementChild ||
        !H3.firstElementChild.classList.contains("white")
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "G3") {
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("black")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("black")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("black")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("black")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("black")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }

      if (
        !H2.firstElementChild ||
        !H2.firstElementChild.classList.contains("black")
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
      if (
        !H3.firstElementChild ||
        !H3.firstElementChild.classList.contains("black")
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
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
  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "G4") {
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("white")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("white")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("white")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("white")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("white")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }

      if (
        !H3.firstElementChild ||
        !H3.firstElementChild.classList.contains("white")
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("white")
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
      if (
        !H5.firstElementChild ||
        !H5.firstElementChild.classList.contains("white")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
    }
  }
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "G4") {
      if (
        !F3.firstElementChild ||
        !F3.firstElementChild.classList.contains("black")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
      }
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("black")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("black")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("black")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("black")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }

      if (
        !H3.firstElementChild ||
        !H3.firstElementChild.classList.contains("black")
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("black")
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
      if (
        !H5.firstElementChild ||
        !H5.firstElementChild.classList.contains("black")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
    }
  }
  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "G5") {
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("white")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("white")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("white")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("white")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("white")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }

      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("white")
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
      if (
        !H5.firstElementChild ||
        !H5.firstElementChild.classList.contains("white")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("white")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
    }
  }
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "G5") {
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("black")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
      }
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("black")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("black")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("black")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("black")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }

      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("black")
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
      if (
        !H5.firstElementChild ||
        !H5.firstElementChild.classList.contains("black")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("black")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
    }
  }

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "G6") {
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("white")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("white")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("white")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("white")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("white")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }

      if (
        !H5.firstElementChild ||
        !H5.firstElementChild.classList.contains("white")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("white")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "G6") {
      if (
        !F5.firstElementChild ||
        !F5.firstElementChild.classList.contains("black")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
      }
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("black")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("black")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("black")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("black")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
      }

      if (
        !H5.firstElementChild ||
        !H5.firstElementChild.classList.contains("black")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("black")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "G7") {
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("white")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("white")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        !F8.firstElementChild ||
        !F8.firstElementChild.classList.contains("white")
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("white")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        !G8.firstElementChild ||
        !G8.firstElementChild.classList.contains("white")
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }

      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("white")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
      if (
        !H7.firstElementChild ||
        !H7.firstElementChild.classList.contains("white")
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "G7") {
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("black")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
      }
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("black")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
      }
      if (
        !F8.firstElementChild ||
        !F8.firstElementChild.classList.contains("black")
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("black")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        !G8.firstElementChild ||
        !G8.firstElementChild.classList.contains("black")
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }

      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("black")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
      if (
        !H7.firstElementChild ||
        !H7.firstElementChild.classList.contains("black")
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "G8") {
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("white")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
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
        !H7.firstElementChild ||
        !H7.firstElementChild.classList.contains("white")
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "G8") {
      if (
        !F7.firstElementChild ||
        !F7.firstElementChild.classList.contains("black")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
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
        !H7.firstElementChild ||
        !H7.firstElementChild.classList.contains("black")
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
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
  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "H1") {
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

      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("white")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
    }
  }
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "H1") {
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

      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("black")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
    }
  }

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "H2") {
      if (
        !H1.firstElementChild ||
        !H1.firstElementChild.classList.contains("white")
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }
      if (
        !H3.firstElementChild ||
        !H3.firstElementChild.classList.contains("white")
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
      if (
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains("white")
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("white")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "H2") {
      if (
        !H1.firstElementChild ||
        !H1.firstElementChild.classList.contains("black")
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }
      if (
        !H3.firstElementChild ||
        !H3.firstElementChild.classList.contains("black")
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
      if (
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains("black")
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("black")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "H3") {
      if (
        !H2.firstElementChild ||
        !H2.firstElementChild.classList.contains("white")
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("white")
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("white")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("white")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "H3") {
      if (
        !H2.firstElementChild ||
        !H2.firstElementChild.classList.contains("black")
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }
      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("black")
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
      if (
        !G2.firstElementChild ||
        !G2.firstElementChild.classList.contains("black")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
      }
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("black")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "H4") {
      if (
        !H3.firstElementChild ||
        !H3.firstElementChild.classList.contains("white")
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
      if (
        !H5.firstElementChild ||
        !H5.firstElementChild.classList.contains("white")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("white")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("white")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "H4") {
      if (
        !H3.firstElementChild ||
        !H3.firstElementChild.classList.contains("black")
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }
      if (
        !H5.firstElementChild ||
        !H5.firstElementChild.classList.contains("black")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("black")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
      }
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("black")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
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

  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "H5") {
      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("white")
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("white")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("white")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("white")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "H5") {
      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("black")
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("black")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
      if (
        !G4.firstElementChild ||
        !G4.firstElementChild.classList.contains("black")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
      }
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("black")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
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
  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "H6") {
      if (
        !H5.firstElementChild ||
        !H5.firstElementChild.classList.contains("white")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
      if (
        !H7.firstElementChild ||
        !H7.firstElementChild.classList.contains("white")
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("white")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("white")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "H6") {
      if (
        !H5.firstElementChild ||
        !H5.firstElementChild.classList.contains("black")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }
      if (
        !H7.firstElementChild ||
        !H7.firstElementChild.classList.contains("black")
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("black")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
      }
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("black")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
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
  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "H7") {
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("white")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
      if (
        !H8.firstElementChild ||
        !H8.firstElementChild.classList.contains("white")
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("white")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("white")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "H7") {
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("black")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }
      if (
        !H8.firstElementChild ||
        !H8.firstElementChild.classList.contains("black")
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }
      if (
        !G6.firstElementChild ||
        !G6.firstElementChild.classList.contains("black")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
      }
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("black")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
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
  if (selectedPiece.classList.contains("whiteKing")) {
    if (currentSquare === "H8") {
      if (
        !H7.firstElementChild ||
        !H7.firstElementChild.classList.contains("white")
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }

      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("white")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
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
  if (selectedPiece.classList.contains("blackKing")) {
    if (currentSquare === "H8") {
      if (
        !H7.firstElementChild ||
        !H7.firstElementChild.classList.contains("black")
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }

      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("black")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
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
};
