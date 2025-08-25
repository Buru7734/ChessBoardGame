const bishopMovement = () => {
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "A1") {
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
    }
  }
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "A1") {
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
    }
  }

  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "A3") {
      if (
        (!F8.firstElementChild ||
          !F8.firstElementChild.classList.contains("white")) &&
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("white")) &&
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("black")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black"))
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
      if (
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("white")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black"))
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black"))
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black"))
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("white")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black"))
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
    }
  }

  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "A3") {
      if (
        (!F8.firstElementChild ||
          !F8.firstElementChild.classList.contains("black")) &&
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("black")) &&
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("white")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white"))
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
      if (
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("black")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white"))
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white"))
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white"))
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("black")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);
      }
      if (
        (!C1.firstElementChild ||
          !C1.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("black")) &&
        (!B2.firstElementChild ||
          !B2.firstElementChild.classList.contains("white"))
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
    }
  }
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "A5") {
      if (
        (!D8.firstElementChild ||
          !D8.firstElementChild.classList.contains("white")) &&
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("white")) &&
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black"))
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }
      if (
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black"))
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("white")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("white")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black"))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black"))
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black"))
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
    }
  }

  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "A5") {
      if (
        (!D8.firstElementChild ||
          !D8.firstElementChild.classList.contains("black")) &&
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("black")) &&
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("white")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white"))
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }
      if (
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("black")) &&
        (!B6.firstElementChild ||
          !B6.firstElementChild.classList.contains("white"))
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("black")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);
      }
      if (
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("black")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("black")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white"))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white"))
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("black")) &&
        (!B4.firstElementChild ||
          !B4.firstElementChild.classList.contains("white"))
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
    }
  }

  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "A7") {
      if (
        !B8.firstElementChild ||
        B8.firstElementChild.classList.contains("black")
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }

      if (
        !B6.firstElementChild ||
        B6.firstElementChild.classList.contains("black")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);

        if (
          (!B6.firstElementChild ||
            B6.firstElementChild.classList.contains("black")) &&
          (!B6.firstElementChild ||
            B6.firstElementChild.classList.contains("white")) &&
          (!C5.firstElementChild ||
            C5.firstElementChild.classList.contains("black"))
        ) {
          C5.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(C5);

          if (
            (!B6.firstElementChild ||
              B6.firstElementChild.classList.contains("black")) &&
            (!B6.firstElementChild ||
              B6.firstElementChild.classList.contains("white")) &&
            (!C5.firstElementChild ||
              C5.firstElementChild.classList.contains("black")) &&
            (!C5.firstElementChild ||
              C5.firstElementChild.classList.contains("white")) &&
            (!D4.firstElementChild ||
              D4.firstElementChild.classList.contains("black"))
          ) {
            D4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D4);

            if (
              ((!B6.firstElementChild ||
                B6.firstElementChild.classList.contains("black")) &&
                (!B6.firstElementChild ||
                  B6.firstElementChild.classList.contains("white")) &&
                (!C5.firstElementChild ||
                  C5.firstElementChild.classList.contains("black")) &&
                (!C5.firstElementChild ||
                  C5.firstElementChild.classList.contains("white")) &&
                (!D4.firstElementChild ||
                  D4.firstElementChild.classList.contains("black")) &&
                (!D4.firstElementChild ||
                  D4.firstElementChild.classList.contains("white")) &&
                !E3.firstElementChild) ||
              E3.firstElementChild.classList.contains("black")
            ) {
              E3.classList.toggle("highlightBlue");
              recentlyHighlightedElements.push(E3);

              if (
                (!B6.firstElementChild ||
                  B6.firstElementChild.classList.contains("black")) &&
                (!B6.firstElementChild ||
                  B6.firstElementChild.classList.contains("white")) &&
                (!C5.firstElementChild ||
                  C5.firstElementChild.classList.contains("black")) &&
                (!C5.firstElementChild ||
                  C5.firstElementChild.classList.contains("white")) &&
                (!D4.firstElementChild ||
                  D4.firstElementChild.classList.contains("black")) &&
                (!D4.firstElementChild ||
                  D4.firstElementChild.classList.contains("white")) &&
                (!E3.firstElementChild ||
                  E3.firstElementChild.classList.contains("black")) &&
                (!E3.firstElementChild ||
                  E3.firstElementChild.classList.contains("white")) &&
                (!F2.firstElementChild ||
                  F2.firstElementChild.classList.contains("black"))
              ) {
                F2.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(F2);

                if (
                  (!B6.firstElementChild ||
                    B6.firstElementChild.classList.contains("black")) &&
                  (!B6.firstElementChild ||
                    B6.firstElementChild.classList.contains("white")) &&
                  (!C5.firstElementChild ||
                    C5.firstElementChild.classList.contains("black")) &&
                  (!C5.firstElementChild ||
                    C5.firstElementChild.classList.contains("white")) &&
                  (!D4.firstElementChild ||
                    D4.firstElementChild.classList.contains("black")) &&
                  (!D4.firstElementChild ||
                    D4.firstElementChild.classList.contains("white")) &&
                  (!E3.firstElementChild ||
                    E3.firstElementChild.classList.contains("black")) &&
                  (!E3.firstElementChild ||
                    E3.firstElementChild.classList.contains("white")) &&
                  (!F2.firstElementChild ||
                    F2.firstElementChild.classList.contains("black")) &&
                  (!F2.firstElementChild ||
                    F2.firstElementChild.classList.contains("white")) &&
                  (!G1.firstElementChild ||
                    G1.firstElementChild.classList.contains("black"))
                ) {
                  G1.classList.toggle("highlightBlue");
                  recentlyHighlightedElements.push(G1);
                }
              }
            }
          }
        }
      }

      // Top-right diagonal
    }
  }

  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "A7") {
      // Bottom-right diagonal
      if (
        !B8.firstElementChild ||
        B8.firstElementChild.classList.contains("white")
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }
      if (
        !B6.firstElementChild ||
        B6.firstElementChild.classList.contains("white")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);

        if (
          (!B6.firstElementChild ||
            B6.firstElementChild.classList.contains("white")) &&
          (!B6.firstElementChild ||
            B6.firstElementChild.classList.contains("black")) &&
          (!C5.firstElementChild ||
            C5.firstElementChild.classList.contains("white"))
        ) {
          C5.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(C5);

          if (
            (!B6.firstElementChild ||
              B6.firstElementChild.classList.contains("white")) &&
            (!B6.firstElementChild ||
              B6.firstElementChild.classList.contains("black")) &&
            (!C5.firstElementChild ||
              C5.firstElementChild.classList.contains("white")) &&
            (!C5.firstElementChild ||
              C5.firstElementChild.classList.contains("black")) &&
            (!D4.firstElementChild ||
              D4.firstElementChild.classList.contains("white"))
          ) {
            D4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D4);

            if (
              ((!B6.firstElementChild ||
                B6.firstElementChild.classList.contains("white")) &&
                (!B6.firstElementChild ||
                  B6.firstElementChild.classList.contains("black")) &&
                (!C5.firstElementChild ||
                  C5.firstElementChild.classList.contains("white")) &&
                (!C5.firstElementChild ||
                  C5.firstElementChild.classList.contains("black")) &&
                (!D4.firstElementChild ||
                  D4.firstElementChild.classList.contains("white")) &&
                (!D4.firstElementChild ||
                  D4.firstElementChild.classList.contains("black")) &&
                !E3.firstElementChild) ||
              E3.firstElementChild.classList.contains("white")
            ) {
              E3.classList.toggle("highlightBlue");
              recentlyHighlightedElements.push(E3);

              if (
                (!B6.firstElementChild ||
                  B6.firstElementChild.classList.contains("white")) &&
                (!B6.firstElementChild ||
                  B6.firstElementChild.classList.contains("black")) &&
                (!C5.firstElementChild ||
                  C5.firstElementChild.classList.contains("white")) &&
                (!C5.firstElementChild ||
                  C5.firstElementChild.classList.contains("black")) &&
                (!D4.firstElementChild ||
                  D4.firstElementChild.classList.contains("white")) &&
                (!D4.firstElementChild ||
                  D4.firstElementChild.classList.contains("black")) &&
                (!E3.firstElementChild ||
                  E3.firstElementChild.classList.contains("white")) &&
                (!E3.firstElementChild ||
                  E3.firstElementChild.classList.contains("black")) &&
                (!F2.firstElementChild ||
                  F2.firstElementChild.classList.contains("white"))
              ) {
                F2.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(F2);

                if (
                  (!B6.firstElementChild ||
                    B6.firstElementChild.classList.contains("white")) &&
                  (!B6.firstElementChild ||
                    B6.firstElementChild.classList.contains("black")) &&
                  (!C5.firstElementChild ||
                    C5.firstElementChild.classList.contains("white")) &&
                  (!C5.firstElementChild ||
                    C5.firstElementChild.classList.contains("black")) &&
                  (!D4.firstElementChild ||
                    D4.firstElementChild.classList.contains("white")) &&
                  (!D4.firstElementChild ||
                    D4.firstElementChild.classList.contains("black")) &&
                  (!E3.firstElementChild ||
                    E3.firstElementChild.classList.contains("white")) &&
                  (!E3.firstElementChild ||
                    E3.firstElementChild.classList.contains("black")) &&
                  (!F2.firstElementChild ||
                    F2.firstElementChild.classList.contains("white")) &&
                  (!F2.firstElementChild ||
                    F2.firstElementChild.classList.contains("black")) &&
                  (!G1.firstElementChild ||
                    G1.firstElementChild.classList.contains("white"))
                ) {
                  G1.classList.toggle("highlightBlue");
                  recentlyHighlightedElements.push(G1);
                }
              }
            }
          }
        }
      }
    }
  }

  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "B2") {
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
          !C3.firstElementChild.classList.contains("black"))
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
          !C3.firstElementChild.classList.contains("black"))
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
          !C3.firstElementChild.classList.contains("black"))
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
          !C3.firstElementChild.classList.contains("black"))
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
          !C3.firstElementChild.classList.contains("black"))
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
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
    }
  }

  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "B2") {
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
          !C3.firstElementChild.classList.contains("white"))
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
          !C3.firstElementChild.classList.contains("white"))
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
          !C3.firstElementChild.classList.contains("white"))
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
          !C3.firstElementChild.classList.contains("white"))
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
          !C3.firstElementChild.classList.contains("white"))
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
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
      if (
        !A3.firstElementChild ||
        !A3.firstElementChild.classList.contains("black")
      ) {
        A3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A3);
      }
      if (
        !A1.firstElementChild ||
        !A1.firstElementChild.classList.contains("black")
      ) {
        A1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A1);
      }
    }
  }

  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "B4") {
      if (
        (!F8.firstElementChild ||
          !F8.firstElementChild.classList.contains("white")) &&
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("white")) &&
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("black")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black"))
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }
      if (
        (!E7.firstElementChild ||
          !E7.firstElementChild.classList.contains("white")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black"))
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
      }
      if (
        (!D6.firstElementChild ||
          !D6.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black"))
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
      }
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("white")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
      }

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
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("white")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
      }

      if (
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white"))
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
      }
      if (
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("black")) &&
        (!C3.firstElementChild ||
          !C3.firstElementChild.classList.contains("white")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("black")) &&
        (!D2.firstElementChild ||
          !D2.firstElementChild.classList.contains("white")) &&
        (!E1.firstElementChild ||
          !E1.firstElementChild.classList.contains("white"))
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
    }
  }

  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "B6") {
      if (
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("black")) &&
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("white")) &&
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("black")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black"))
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("black")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black"))
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black"))
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black"))
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
        !A7.firstElementChild ||
        !A7.firstElementChild.classList.contains("black")
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
      if (
        !A5.firstElementChild ||
        !A5.firstElementChild.classList.contains("black")
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("black")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }

      if (
        (!D8.firstElementChild ||
          !D8.firstElementChild.classList.contains("black")) &&
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("white")) &&
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("black"))
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }
    }
  }

  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "B6") {
      if (
        (!G1.firstElementChild ||
          !G1.firstElementChild.classList.contains("white")) &&
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("black")) &&
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("black")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white"))
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
      if (
        (!F2.firstElementChild ||
          !F2.firstElementChild.classList.contains("white")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("black")) &&
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white"))
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
      }
      if (
        (!E3.firstElementChild ||
          !E3.firstElementChild.classList.contains("white")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("black")) &&
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white"))
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
      }
      if (
        (!D4.firstElementChild ||
          !D4.firstElementChild.classList.contains("white")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("black")) &&
        (!C5.firstElementChild ||
          !C5.firstElementChild.classList.contains("white"))
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
        !A7.firstElementChild ||
        !A7.firstElementChild.classList.contains("white")
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }
      if (
        !A5.firstElementChild ||
        !A5.firstElementChild.classList.contains("white")
      ) {
        A5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A5);
      }
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("white")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
      }

      if (
        (!D8.firstElementChild ||
          !D8.firstElementChild.classList.contains("white")) &&
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("black")) &&
        (!C7.firstElementChild ||
          !C7.firstElementChild.classList.contains("white"))
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }
    }
  }
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "B8") {
      if (
        !A7.firstElementChild ||
        A7.firstElementChild.classList.contains("white")
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }

      if (
        !C7.firstElementChild ||
        C7.firstElementChild.classList.contains("white")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);

        if (
          (!C7.firstElementChild ||
            C7.firstElementChild.classList.contains("black")) &&
          (!C7.firstElementChild ||
            C7.firstElementChild.classList.contains("white")) &&
          (!D6.firstElementChild ||
            D6.firstElementChild.classList.contains("white"))
        ) {
          D6.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(D6);

          if (
            (!D6.firstElementChild ||
              D6.firstElementChild.classList.contains("black")) &&
            (!D6.firstElementChild ||
              D6.firstElementChild.classList.contains("white")) &&
            (!C7.firstElementChild ||
              C7.firstElementChild.classList.contains("black")) &&
            (!C7.firstElementChild ||
              C7.firstElementChild.classList.contains("white")) &&
            (!E5.firstElementChild ||
              E5.firstElementChild.classList.contains("white"))
          ) {
            E5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E5);

            if (
              ((!C7.firstElementChild ||
                C7.firstElementChild.classList.contains("black")) &&
                (!C7.firstElementChild ||
                  C7.firstElementChild.classList.contains("white")) &&
                (!D6.firstElementChild ||
                  D6.firstElementChild.classList.contains("black")) &&
                (!D6.firstElementChild ||
                  D6.firstElementChild.classList.contains("white")) &&
                (!E5.firstElementChild ||
                  E5.firstElementChild.classList.contains("black")) &&
                (!E5.firstElementChild ||
                  E5.firstElementChild.classList.contains("white")) &&
                !F4.firstElementChild) ||
              F4.firstElementChild.classList.contains("white")
            ) {
              F4.classList.toggle("highlightBlue");
              recentlyHighlightedElements.push(F4);

              if (
                (!C7.firstElementChild ||
                  C7.firstElementChild.classList.contains("black")) &&
                (!C7.firstElementChild ||
                  C7.firstElementChild.classList.contains("white")) &&
                (!D6.firstElementChild ||
                  D6.firstElementChild.classList.contains("black")) &&
                (!D6.firstElementChild ||
                  D6.firstElementChild.classList.contains("white")) &&
                (!E5.firstElementChild ||
                  E5.firstElementChild.classList.contains("black")) &&
                (!E5.firstElementChild ||
                  E5.firstElementChild.classList.contains("white")) &&
                (!F4.firstElementChild ||
                  F4.firstElementChild.classList.contains("black")) &&
                (!F4.firstElementChild ||
                  F4.firstElementChild.classList.contains("white")) &&
                (!G3.firstElementChild ||
                  G3.firstElementChild.classList.contains("white"))
              ) {
                G3.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(G3);

                if (
                  (!C7.firstElementChild ||
                    C7.firstElementChild.classList.contains("black")) &&
                  (!C7.firstElementChild ||
                    C7.firstElementChild.classList.contains("white")) &&
                  (!D6.firstElementChild ||
                    D6.firstElementChild.classList.contains("black")) &&
                  (!D6.firstElementChild ||
                    D6.firstElementChild.classList.contains("white")) &&
                  (!E5.firstElementChild ||
                    E5.firstElementChild.classList.contains("black")) &&
                  (!E5.firstElementChild ||
                    E5.firstElementChild.classList.contains("white")) &&
                  (!F4.firstElementChild ||
                    F4.firstElementChild.classList.contains("black")) &&
                  (!F4.firstElementChild ||
                    F4.firstElementChild.classList.contains("white")) &&
                  (!G3.firstElementChild ||
                    G3.firstElementChild.classList.contains("black")) &&
                  (!G3.firstElementChild ||
                    G3.firstElementChild.classList.contains("white")) &&
                  (!H2.firstElementChild ||
                    H2.firstElementChild.classList.contains("white"))
                ) {
                  H2.classList.toggle("highlightBlue");
                  recentlyHighlightedElements.push(H2);
                }
              }
            }
          }
        }
      }

      // Top-right diagonal
    }
  }
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "B8") {
      if (
        !A7.firstElementChild ||
        A7.firstElementChild.classList.contains("black")
      ) {
        A7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A7);
      }

      if (
        !C7.firstElementChild ||
        C7.firstElementChild.classList.contains("black")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);

        if (
          (!C7.firstElementChild ||
            C7.firstElementChild.classList.contains("white")) &&
          (!C7.firstElementChild ||
            C7.firstElementChild.classList.contains("black")) &&
          (!D6.firstElementChild ||
            D6.firstElementChild.classList.contains("black"))
        ) {
          D6.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(D6);

          if (
            (!D6.firstElementChild ||
              D6.firstElementChild.classList.contains("white")) &&
            (!D6.firstElementChild ||
              D6.firstElementChild.classList.contains("black")) &&
            (!C7.firstElementChild ||
              C7.firstElementChild.classList.contains("white")) &&
            (!C7.firstElementChild ||
              C7.firstElementChild.classList.contains("black")) &&
            (!E5.firstElementChild ||
              E5.firstElementChild.classList.contains("black"))
          ) {
            E5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E5);

            if (
              ((!C7.firstElementChild ||
                C7.firstElementChild.classList.contains("white")) &&
                (!C7.firstElementChild ||
                  C7.firstElementChild.classList.contains("black")) &&
                (!D6.firstElementChild ||
                  D6.firstElementChild.classList.contains("white")) &&
                (!D6.firstElementChild ||
                  D6.firstElementChild.classList.contains("black")) &&
                (!E5.firstElementChild ||
                  E5.firstElementChild.classList.contains("white")) &&
                (!E5.firstElementChild ||
                  E5.firstElementChild.classList.contains("black")) &&
                !F4.firstElementChild) ||
              F4.firstElementChild.classList.contains("black")
            ) {
              F4.classList.toggle("highlightBlue");
              recentlyHighlightedElements.push(F4);

              if (
                (!C7.firstElementChild ||
                  C7.firstElementChild.classList.contains("white")) &&
                (!C7.firstElementChild ||
                  C7.firstElementChild.classList.contains("black")) &&
                (!D6.firstElementChild ||
                  D6.firstElementChild.classList.contains("white")) &&
                (!D6.firstElementChild ||
                  D6.firstElementChild.classList.contains("black")) &&
                (!E5.firstElementChild ||
                  E5.firstElementChild.classList.contains("white")) &&
                (!E5.firstElementChild ||
                  E5.firstElementChild.classList.contains("black")) &&
                (!F4.firstElementChild ||
                  F4.firstElementChild.classList.contains("white")) &&
                (!F4.firstElementChild ||
                  F4.firstElementChild.classList.contains("black")) &&
                (!G3.firstElementChild ||
                  G3.firstElementChild.classList.contains("black"))
              ) {
                G3.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(G3);

                if (
                  (!C7.firstElementChild ||
                    C7.firstElementChild.classList.contains("white")) &&
                  (!C7.firstElementChild ||
                    C7.firstElementChild.classList.contains("black")) &&
                  (!D6.firstElementChild ||
                    D6.firstElementChild.classList.contains("white")) &&
                  (!D6.firstElementChild ||
                    D6.firstElementChild.classList.contains("black")) &&
                  (!E5.firstElementChild ||
                    E5.firstElementChild.classList.contains("white")) &&
                  (!E5.firstElementChild ||
                    E5.firstElementChild.classList.contains("black")) &&
                  (!F4.firstElementChild ||
                    F4.firstElementChild.classList.contains("white")) &&
                  (!F4.firstElementChild ||
                    F4.firstElementChild.classList.contains("black")) &&
                  (!G3.firstElementChild ||
                    G3.firstElementChild.classList.contains("white")) &&
                  (!G3.firstElementChild ||
                    G3.firstElementChild.classList.contains("black")) &&
                  (!H2.firstElementChild ||
                    H2.firstElementChild.classList.contains("black"))
                ) {
                  H2.classList.toggle("highlightBlue");
                  recentlyHighlightedElements.push(H2);
                }
              }
            }
          }
        }
      }
    }
  }

  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "C1") {
      if (
        !B2.firstElementChild ||
        B2.firstElementChild.classList.contains("black")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);

        if (
          (!B2.firstElementChild ||
            B2.firstElementChild.classList.contains("white")) &&
          (!B2.firstElementChild ||
            B2.firstElementChild.classList.contains("black")) &&
          (!A3.firstElementChild ||
            A3.firstElementChild.classList.contains("black"))
        ) {
          A3.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(A3);
        }
      }

      if (
        !D2.firstElementChild ||
        D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);

        if (
          (!D2.firstElementChild ||
            D2.firstElementChild.classList.contains("white")) &&
          (!D2.firstElementChild ||
            D2.firstElementChild.classList.contains("black")) &&
          (!E3.firstElementChild ||
            E3.firstElementChild.classList.contains("black"))
        ) {
          E3.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(E3);

          if (
            (!D2.firstElementChild ||
              D2.firstElementChild.classList.contains("white")) &&
            (!D2.firstElementChild ||
              D2.firstElementChild.classList.contains("black")) &&
            (!E3.firstElementChild ||
              E3.firstElementChild.classList.contains("white")) &&
            (!E3.firstElementChild ||
              E3.firstElementChild.classList.contains("black")) &&
            (!F4.firstElementChild ||
              F4.firstElementChild.classList.contains("black"))
          ) {
            F4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F4);

            if (
              (!D2.firstElementChild ||
                D2.firstElementChild.classList.contains("white")) &&
              (!D2.firstElementChild ||
                D2.firstElementChild.classList.contains("black")) &&
              (!E3.firstElementChild ||
                E3.firstElementChild.classList.contains("white")) &&
              (!E3.firstElementChild ||
                E3.firstElementChild.classList.contains("black")) &&
              (!F4.firstElementChild ||
                F4.firstElementChild.classList.contains("white")) &&
              (!F4.firstElementChild ||
                F4.firstElementChild.classList.contains("black")) &&
              (!G5.firstElementChild ||
                G5.firstElementChild.classList.contains("black"))
            ) {
              G5.classList.toggle("highlightBlue");
              recentlyHighlightedElements.push(G5);

              if (
                (!D2.firstElementChild ||
                  D2.firstElementChild.classList.contains("white")) &&
                (!D2.firstElementChild ||
                  D2.firstElementChild.classList.contains("black")) &&
                (!E3.firstElementChild ||
                  E3.firstElementChild.classList.contains("white")) &&
                (!E3.firstElementChild ||
                  E3.firstElementChild.classList.contains("black")) &&
                (!F4.firstElementChild ||
                  F4.firstElementChild.classList.contains("white")) &&
                (!F4.firstElementChild ||
                  F4.firstElementChild.classList.contains("black")) &&
                (!G5.firstElementChild ||
                  G5.firstElementChild.classList.contains("white")) &&
                (!G5.firstElementChild ||
                  G5.firstElementChild.classList.contains("black")) &&
                (!H6.firstElementChild ||
                  H6.firstElementChild.classList.contains("black"))
              ) {
                H6.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H6);
              }
            }
          }
        }
      }
    }
  }
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "C1") {
      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);

        if (
          (!B2.firstElementChild ||
            B2.firstElementChild.classList.contains("white")) &&
          (!B2.firstElementChild ||
            B2.firstElementChild.classList.contains("black")) &&
          (!A3.firstElementChild ||
            !A3.firstElementChild.classList.contains("black"))
        ) {
          A3.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(A3);
        }
      }

      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);

        if (
          (!D2.firstElementChild ||
            D2.firstElementChild.classList.contains("white")) &&
          (!D2.firstElementChild ||
            D2.firstElementChild.classList.contains("black")) &&
          (!E3.firstElementChild ||
            !E3.firstElementChild.classList.contains("black"))
        ) {
          E3.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(E3);

          if (
            (!D2.firstElementChild ||
              D2.firstElementChild.classList.contains("white")) &&
            (!D2.firstElementChild ||
              D2.firstElementChild.classList.contains("black")) &&
            (!E3.firstElementChild ||
              E3.firstElementChild.classList.contains("white")) &&
            (!E3.firstElementChild ||
              E3.firstElementChild.classList.contains("black")) &&
            (!F4.firstElementChild ||
              !F4.firstElementChild.classList.contains("black"))
          ) {
            F4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F4);

            if (
              (!D2.firstElementChild ||
                D2.firstElementChild.classList.contains("white")) &&
              (!D2.firstElementChild ||
                D2.firstElementChild.classList.contains("black")) &&
              (!E3.firstElementChild ||
                E3.firstElementChild.classList.contains("white")) &&
              (!E3.firstElementChild ||
                E3.firstElementChild.classList.contains("black")) &&
              (!F4.firstElementChild ||
                F4.firstElementChild.classList.contains("white")) &&
              (!F4.firstElementChild ||
                F4.firstElementChild.classList.contains("black")) &&
              (!G5.firstElementChild ||
                !G5.firstElementChild.classList.contains("black"))
            ) {
              G5.classList.toggle("highlightBlue");
              recentlyHighlightedElements.push(G5);

              if (
                (!D2.firstElementChild ||
                  D2.firstElementChild.classList.contains("white")) &&
                (!D2.firstElementChild ||
                  D2.firstElementChild.classList.contains("black")) &&
                (!E3.firstElementChild ||
                  E3.firstElementChild.classList.contains("white")) &&
                (!E3.firstElementChild ||
                  E3.firstElementChild.classList.contains("black")) &&
                (!F4.firstElementChild ||
                  F4.firstElementChild.classList.contains("white")) &&
                (!F4.firstElementChild ||
                  F4.firstElementChild.classList.contains("black")) &&
                (!G5.firstElementChild ||
                  G5.firstElementChild.classList.contains("white")) &&
                (!G5.firstElementChild ||
                  G5.firstElementChild.classList.contains("black")) &&
                (!H6.firstElementChild ||
                  !H6.firstElementChild.classList.contains("black"))
              ) {
                H6.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H6);
              }
            }
          }
        }
      }
    }
  }

  // White Bishop
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "C3") {
      if (
        !B4.firstElementChild ||
        B4.firstElementChild.classList.contains("black")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);

        if (
          (!B4.firstElementChild ||
            B4.firstElementChild.classList.contains("white")) &&
          (!B4.firstElementChild ||
            B4.firstElementChild.classList.contains("black")) &&
          (!A5.firstElementChild ||
            A5.firstElementChild.classList.contains("black"))
        ) {
          A5.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(A5);
        }
      }

      if (
        !D4.firstElementChild ||
        D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);

        if (
          (!D4.firstElementChild ||
            D4.firstElementChild.classList.contains("white")) &&
          (!D4.firstElementChild ||
            D4.firstElementChild.classList.contains("black")) &&
          (!E5.firstElementChild ||
            E5.firstElementChild.classList.contains("black"))
        ) {
          E5.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(E5);

          if (
            (!D4.firstElementChild ||
              D4.firstElementChild.classList.contains("white")) &&
            (!D4.firstElementChild ||
              D4.firstElementChild.classList.contains("black")) &&
            (!E5.firstElementChild ||
              E5.firstElementChild.classList.contains("white")) &&
            (!E5.firstElementChild ||
              E5.firstElementChild.classList.contains("black")) &&
            (!F6.firstElementChild ||
              F6.firstElementChild.classList.contains("black"))
          ) {
            F6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F6);

            if (
              (!D4.firstElementChild ||
                D4.firstElementChild.classList.contains("white")) &&
              (!D4.firstElementChild ||
                D4.firstElementChild.classList.contains("black")) &&
              (!E5.firstElementChild ||
                E5.firstElementChild.classList.contains("white")) &&
              (!E5.firstElementChild ||
                E5.firstElementChild.classList.contains("black")) &&
              (!F6.firstElementChild ||
                F6.firstElementChild.classList.contains("white")) &&
              (!F6.firstElementChild ||
                F6.firstElementChild.classList.contains("black")) &&
              (!G7.firstElementChild ||
                G7.firstElementChild.classList.contains("black"))
            ) {
              G7.classList.toggle("highlightBlue");
              recentlyHighlightedElements.push(G7);

              if (
                (!D4.firstElementChild ||
                  D4.firstElementChild.classList.contains("white")) &&
                (!D4.firstElementChild ||
                  D4.firstElementChild.classList.contains("black")) &&
                (!E5.firstElementChild ||
                  E5.firstElementChild.classList.contains("white")) &&
                (!E5.firstElementChild ||
                  E5.firstElementChild.classList.contains("black")) &&
                (!F6.firstElementChild ||
                  F6.firstElementChild.classList.contains("white")) &&
                (!F6.firstElementChild ||
                  F6.firstElementChild.classList.contains("black")) &&
                (!G7.firstElementChild ||
                  G7.firstElementChild.classList.contains("white")) &&
                (!G7.firstElementChild ||
                  G7.firstElementChild.classList.contains("black")) &&
                (!H8.firstElementChild ||
                  H8.firstElementChild.classList.contains("black"))
              ) {
                H8.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H8);
              }
            }
          }
        }
      }

      if (
        !B2.firstElementChild ||
        B2.firstElementChild.classList.contains("black")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);

        if (
          (!B2.firstElementChild ||
            B2.firstElementChild.classList.contains("white")) &&
          (!B2.firstElementChild ||
            B2.firstElementChild.classList.contains("black")) &&
          (!A1.firstElementChild ||
            A1.firstElementChild.classList.contains("black"))
        ) {
          A1.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(A1);
        }
      }

      if (
        !D2.firstElementChild ||
        D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);

        if (
          (!D2.firstElementChild ||
            D2.firstElementChild.classList.contains("white")) &&
          (!D2.firstElementChild ||
            D2.firstElementChild.classList.contains("black")) &&
          (!E1.firstElementChild ||
            E1.firstElementChild.classList.contains("black"))
        ) {
          E1.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(E1);
        }
      }
    }
  }

  // Black Bishop
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "C3") {
      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("black")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);

        if (
          (!B4.firstElementChild ||
            B4.firstElementChild.classList.contains("white")) &&
          (!B4.firstElementChild ||
            B4.firstElementChild.classList.contains("black")) &&
          (!A5.firstElementChild ||
            !A5.firstElementChild.classList.contains("black"))
        ) {
          A5.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(A5);
        }
      }

      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);

        if (
          (!D4.firstElementChild ||
            D4.firstElementChild.classList.contains("white")) &&
          (!D4.firstElementChild ||
            D4.firstElementChild.classList.contains("black")) &&
          (!E5.firstElementChild ||
            !E5.firstElementChild.classList.contains("black"))
        ) {
          E5.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(E5);

          if (
            (!D4.firstElementChild ||
              D4.firstElementChild.classList.contains("white")) &&
            (!D4.firstElementChild ||
              D4.firstElementChild.classList.contains("black")) &&
            (!E5.firstElementChild ||
              E5.firstElementChild.classList.contains("white")) &&
            (!E5.firstElementChild ||
              E5.firstElementChild.classList.contains("black")) &&
            (!F6.firstElementChild ||
              !F6.firstElementChild.classList.contains("black"))
          ) {
            F6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F6);

            if (
              (!D4.firstElementChild ||
                D4.firstElementChild.classList.contains("white")) &&
              (!D4.firstElementChild ||
                D4.firstElementChild.classList.contains("black")) &&
              (!E5.firstElementChild ||
                E5.firstElementChild.classList.contains("white")) &&
              (!E5.firstElementChild ||
                E5.firstElementChild.classList.contains("black")) &&
              (!F6.firstElementChild ||
                F6.firstElementChild.classList.contains("white")) &&
              (!F6.firstElementChild ||
                F6.firstElementChild.classList.contains("black")) &&
              (!G7.firstElementChild ||
                !G7.firstElementChild.classList.contains("black"))
            ) {
              G7.classList.toggle("highlightBlue");
              recentlyHighlightedElements.push(G7);

              if (
                (!D4.firstElementChild ||
                  D4.firstElementChild.classList.contains("white")) &&
                (!D4.firstElementChild ||
                  D4.firstElementChild.classList.contains("black")) &&
                (!E5.firstElementChild ||
                  E5.firstElementChild.classList.contains("white")) &&
                (!E5.firstElementChild ||
                  E5.firstElementChild.classList.contains("black")) &&
                (!F6.firstElementChild ||
                  F6.firstElementChild.classList.contains("white")) &&
                (!F6.firstElementChild ||
                  F6.firstElementChild.classList.contains("black")) &&
                (!G7.firstElementChild ||
                  G7.firstElementChild.classList.contains("white")) &&
                (!G7.firstElementChild ||
                  G7.firstElementChild.classList.contains("black")) &&
                (!H8.firstElementChild ||
                  !H8.firstElementChild.classList.contains("black"))
              ) {
                H8.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H8);
              }
            }
          }
        }
      }

      if (
        !B2.firstElementChild ||
        !B2.firstElementChild.classList.contains("black")
      ) {
        B2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B2);

        if (
          (!B2.firstElementChild ||
            B2.firstElementChild.classList.contains("white")) &&
          (!B2.firstElementChild ||
            B2.firstElementChild.classList.contains("black")) &&
          (!A1.firstElementChild ||
            !A1.firstElementChild.classList.contains("black"))
        ) {
          A1.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(A1);
        }
      }

      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);

        if (
          (!D2.firstElementChild ||
            D2.firstElementChild.classList.contains("white")) &&
          (!D2.firstElementChild ||
            D2.firstElementChild.classList.contains("black")) &&
          (!E1.firstElementChild ||
            !E1.firstElementChild.classList.contains("black"))
        ) {
          E1.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(E1);
        }
      }
    }
  }

  // White Bishop
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "C5") {
      if (
        !B6.firstElementChild ||
        B6.firstElementChild.classList.contains("black")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);

        if (
          (!B6.firstElementChild ||
            B6.firstElementChild.classList.contains("white")) &&
          (!B6.firstElementChild ||
            B6.firstElementChild.classList.contains("black")) &&
          (!A7.firstElementChild ||
            A7.firstElementChild.classList.contains("black"))
        ) {
          A7.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(A7);
        }
      }

      if (
        !D6.firstElementChild ||
        D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);

        if (
          (!D6.firstElementChild ||
            D6.firstElementChild.classList.contains("white")) &&
          (!D6.firstElementChild ||
            D6.firstElementChild.classList.contains("black")) &&
          (!E7.firstElementChild ||
            E7.firstElementChild.classList.contains("black"))
        ) {
          E7.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(E7);

          if (
            (!D6.firstElementChild ||
              D6.firstElementChild.classList.contains("white")) &&
            (!D6.firstElementChild ||
              D6.firstElementChild.classList.contains("black")) &&
            (!E7.firstElementChild ||
              E7.firstElementChild.classList.contains("white")) &&
            (!E7.firstElementChild ||
              E7.firstElementChild.classList.contains("black")) &&
            (!F8.firstElementChild ||
              F8.firstElementChild.classList.contains("black"))
          ) {
            F8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F8);
          }
        }
      }

      if (
        !B4.firstElementChild ||
        B4.firstElementChild.classList.contains("black")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);

        if (
          (!B4.firstElementChild ||
            B4.firstElementChild.classList.contains("white")) &&
          (!B4.firstElementChild ||
            B4.firstElementChild.classList.contains("black")) &&
          (!A3.firstElementChild ||
            A3.firstElementChild.classList.contains("black"))
        ) {
          A3.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(A3);
        }
      }

      if (
        !D4.firstElementChild ||
        D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);

        if (
          (!D4.firstElementChild ||
            D4.firstElementChild.classList.contains("white")) &&
          (!D4.firstElementChild ||
            D4.firstElementChild.classList.contains("black")) &&
          (!E3.firstElementChild ||
            E3.firstElementChild.classList.contains("black"))
        ) {
          E3.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(E3);

          if (
            (!D4.firstElementChild ||
              D4.firstElementChild.classList.contains("white")) &&
            (!D4.firstElementChild ||
              D4.firstElementChild.classList.contains("black")) &&
            (!E3.firstElementChild ||
              E3.firstElementChild.classList.contains("white")) &&
            (!E3.firstElementChild ||
              E3.firstElementChild.classList.contains("black")) &&
            (!F2.firstElementChild ||
              F2.firstElementChild.classList.contains("black"))
          ) {
            F2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F2);

            if (
              (!D4.firstElementChild ||
                D4.firstElementChild.classList.contains("white")) &&
              (!D4.firstElementChild ||
                D4.firstElementChild.classList.contains("black")) &&
              (!E3.firstElementChild ||
                E3.firstElementChild.classList.contains("white")) &&
              (!E3.firstElementChild ||
                E3.firstElementChild.classList.contains("black")) &&
              (!F2.firstElementChild ||
                F2.firstElementChild.classList.contains("white")) &&
              (!F2.firstElementChild ||
                F2.firstElementChild.classList.contains("black")) &&
              (!G1.firstElementChild ||
                G1.firstElementChild.classList.contains("black"))
            ) {
              G1.classList.toggle("highlightBlue");
              recentlyHighlightedElements.push(G1);
            }
          }
        }
      }
    }
  }

  // Black Bishop
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "C5") {
      if (
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("black")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);

        if (
          (!B6.firstElementChild ||
            B6.firstElementChild.classList.contains("white")) &&
          (!B6.firstElementChild ||
            B6.firstElementChild.classList.contains("black")) &&
          (!A7.firstElementChild ||
            !A7.firstElementChild.classList.contains("black"))
        ) {
          A7.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(A7);
        }
      }

      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);

        if (
          (!D6.firstElementChild ||
            D6.firstElementChild.classList.contains("white")) &&
          (!D6.firstElementChild ||
            D6.firstElementChild.classList.contains("black")) &&
          (!E7.firstElementChild ||
            !E7.firstElementChild.classList.contains("black"))
        ) {
          E7.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(E7);

          if (
            (!D6.firstElementChild ||
              D6.firstElementChild.classList.contains("white")) &&
            (!D6.firstElementChild ||
              D6.firstElementChild.classList.contains("black")) &&
            (!E7.firstElementChild ||
              E7.firstElementChild.classList.contains("white")) &&
            (!E7.firstElementChild ||
              E7.firstElementChild.classList.contains("black")) &&
            (!F8.firstElementChild ||
              !F8.firstElementChild.classList.contains("black"))
          ) {
            F8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F8);
          }
        }
      }

      if (
        !B4.firstElementChild ||
        !B4.firstElementChild.classList.contains("black")
      ) {
        B4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B4);

        if (
          (!B4.firstElementChild ||
            B4.firstElementChild.classList.contains("white")) &&
          (!B4.firstElementChild ||
            B4.firstElementChild.classList.contains("black")) &&
          (!A3.firstElementChild ||
            !A3.firstElementChild.classList.contains("black"))
        ) {
          A3.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(A3);
        }
      }

      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);

        if (
          (!D4.firstElementChild ||
            D4.firstElementChild.classList.contains("white")) &&
          (!D4.firstElementChild ||
            D4.firstElementChild.classList.contains("black")) &&
          (!E3.firstElementChild ||
            !E3.firstElementChild.classList.contains("black"))
        ) {
          E3.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(E3);

          if (
            (!D4.firstElementChild ||
              D4.firstElementChild.classList.contains("white")) &&
            (!D4.firstElementChild ||
              D4.firstElementChild.classList.contains("black")) &&
            (!E3.firstElementChild ||
              E3.firstElementChild.classList.contains("white")) &&
            (!E3.firstElementChild ||
              E3.firstElementChild.classList.contains("black")) &&
            (!F2.firstElementChild ||
              !F2.firstElementChild.classList.contains("black"))
          ) {
            F2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F2);

            if (
              (!D4.firstElementChild ||
                D4.firstElementChild.classList.contains("white")) &&
              (!D4.firstElementChild ||
                D4.firstElementChild.classList.contains("black")) &&
              (!E3.firstElementChild ||
                E3.firstElementChild.classList.contains("white")) &&
              (!E3.firstElementChild ||
                E3.firstElementChild.classList.contains("black")) &&
              (!F2.firstElementChild ||
                F2.firstElementChild.classList.contains("white")) &&
              (!F2.firstElementChild ||
                F2.firstElementChild.classList.contains("black")) &&
              (!G1.firstElementChild ||
                !G1.firstElementChild.classList.contains("black"))
            ) {
              G1.classList.toggle("highlightBlue");
              recentlyHighlightedElements.push(G1);
            }
          }
        }
      }
    }
  }

  // White Bishop
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "C7") {
      if (
        !B8.firstElementChild ||
        B8.firstElementChild.classList.contains("black")
      ) {
        B8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B8);
      }

      if (
        !D8.firstElementChild ||
        D8.firstElementChild.classList.contains("black")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }

      if (
        !B6.firstElementChild ||
        B6.firstElementChild.classList.contains("black")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);

        if (
          (!B6.firstElementChild ||
            B6.firstElementChild.classList.contains("white")) &&
          (!B6.firstElementChild ||
            B6.firstElementChild.classList.contains("black")) &&
          (!A5.firstElementChild ||
            A5.firstElementChild.classList.contains("black"))
        ) {
          A5.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(A5);
        }
      }

      if (
        !D6.firstElementChild ||
        D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);

        if (
          (!D6.firstElementChild ||
            D6.firstElementChild.classList.contains("white")) &&
          (!D6.firstElementChild ||
            D6.firstElementChild.classList.contains("black")) &&
          (!E5.firstElementChild ||
            E5.firstElementChild.classList.contains("black"))
        ) {
          E5.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(E5);

          if (
            (!D6.firstElementChild ||
              D6.firstElementChild.classList.contains("white")) &&
            (!D6.firstElementChild ||
              D6.firstElementChild.classList.contains("black")) &&
            (!E5.firstElementChild ||
              E5.firstElementChild.classList.contains("white")) &&
            (!E5.firstElementChild ||
              E5.firstElementChild.classList.contains("black")) &&
            (!F4.firstElementChild ||
              F4.firstElementChild.classList.contains("black"))
          ) {
            F4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F4);

            if (
              (!D6.firstElementChild ||
                D6.firstElementChild.classList.contains("white")) &&
              (!D6.firstElementChild ||
                D6.firstElementChild.classList.contains("black")) &&
              (!E5.firstElementChild ||
                E5.firstElementChild.classList.contains("white")) &&
              (!E5.firstElementChild ||
                E5.firstElementChild.classList.contains("black")) &&
              (!F4.firstElementChild ||
                F4.firstElementChild.classList.contains("white")) &&
              (!F4.firstElementChild ||
                F4.firstElementChild.classList.contains("black")) &&
              (!G3.firstElementChild ||
                G3.firstElementChild.classList.contains("black"))
            ) {
              G3.classList.toggle("highlightBlue");
              recentlyHighlightedElements.push(G3);

              if (
                (!D6.firstElementChild ||
                  D6.firstElementChild.classList.contains("white")) &&
                (!D6.firstElementChild ||
                  D6.firstElementChild.classList.contains("black")) &&
                (!E5.firstElementChild ||
                  E5.firstElementChild.classList.contains("white")) &&
                (!E5.firstElementChild ||
                  E5.firstElementChild.classList.contains("black")) &&
                (!F4.firstElementChild ||
                  F4.firstElementChild.classList.contains("white")) &&
                (!F4.firstElementChild ||
                  F4.firstElementChild.classList.contains("black")) &&
                (!G3.firstElementChild ||
                  G3.firstElementChild.classList.contains("white")) &&
                (!G3.firstElementChild ||
                  G3.firstElementChild.classList.contains("black")) &&
                (!H2.firstElementChild ||
                  H2.firstElementChild.classList.contains("black"))
              ) {
                H2.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H2);
              }
            }
          }
        }
      }
    }
  }

  // Black Bishop
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "C7") {
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
        !B6.firstElementChild ||
        !B6.firstElementChild.classList.contains("black")
      ) {
        B6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B6);

        if (
          (!B6.firstElementChild ||
            B6.firstElementChild.classList.contains("white")) &&
          (!B6.firstElementChild ||
            B6.firstElementChild.classList.contains("black")) &&
          (!A5.firstElementChild ||
            !A5.firstElementChild.classList.contains("black"))
        ) {
          A5.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(A5);
        }
      }

      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);

        if (
          (!D6.firstElementChild ||
            D6.firstElementChild.classList.contains("white")) &&
          (!D6.firstElementChild ||
            D6.firstElementChild.classList.contains("black")) &&
          (!E5.firstElementChild ||
            !E5.firstElementChild.classList.contains("black"))
        ) {
          E5.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(E5);

          if (
            (!D6.firstElementChild ||
              D6.firstElementChild.classList.contains("white")) &&
            (!D6.firstElementChild ||
              D6.firstElementChild.classList.contains("black")) &&
            (!E5.firstElementChild ||
              E5.firstElementChild.classList.contains("white")) &&
            (!E5.firstElementChild ||
              E5.firstElementChild.classList.contains("black")) &&
            (!F4.firstElementChild ||
              !F4.firstElementChild.classList.contains("black"))
          ) {
            F4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F4);

            if (
              (!D6.firstElementChild ||
                D6.firstElementChild.classList.contains("white")) &&
              (!D6.firstElementChild ||
                D6.firstElementChild.classList.contains("black")) &&
              (!E5.firstElementChild ||
                E5.firstElementChild.classList.contains("white")) &&
              (!E5.firstElementChild ||
                E5.firstElementChild.classList.contains("black")) &&
              (!F4.firstElementChild ||
                F4.firstElementChild.classList.contains("white")) &&
              (!F4.firstElementChild ||
                F4.firstElementChild.classList.contains("black")) &&
              (!G3.firstElementChild ||
                !G3.firstElementChild.classList.contains("black"))
            ) {
              G3.classList.toggle("highlightBlue");
              recentlyHighlightedElements.push(G3);

              if (
                (!D6.firstElementChild ||
                  D6.firstElementChild.classList.contains("white")) &&
                (!D6.firstElementChild ||
                  D6.firstElementChild.classList.contains("black")) &&
                (!E5.firstElementChild ||
                  E5.firstElementChild.classList.contains("white")) &&
                (!E5.firstElementChild ||
                  E5.firstElementChild.classList.contains("black")) &&
                (!F4.firstElementChild ||
                  F4.firstElementChild.classList.contains("white")) &&
                (!F4.firstElementChild ||
                  F4.firstElementChild.classList.contains("black")) &&
                (!G3.firstElementChild ||
                  G3.firstElementChild.classList.contains("white")) &&
                (!G3.firstElementChild ||
                  G3.firstElementChild.classList.contains("black")) &&
                (!H2.firstElementChild ||
                  !H2.firstElementChild.classList.contains("black"))
              ) {
                H2.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H2);
              }
            }
          }
        }
      }
    }
  }

  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "D2") {
      if (
        !C3.firstElementChild ||
        C3.firstElementChild.classList.contains("black")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);

        if (
          (!C3.firstElementChild ||
            C3.firstElementChild.classList.contains("white")) &&
          (!C3.firstElementChild ||
            C3.firstElementChild.classList.contains("black")) &&
          (!B4.firstElementChild ||
            B4.firstElementChild.classList.contains("black"))
        ) {
          B4.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(B4);

          if (
            (!C3.firstElementChild ||
              C3.firstElementChild.classList.contains("white")) &&
            (!C3.firstElementChild ||
              C3.firstElementChild.classList.contains("black")) &&
            (!B4.firstElementChild ||
              B4.firstElementChild.classList.contains("white")) &&
            (!B4.firstElementChild ||
              B4.firstElementChild.classList.contains("black")) &&
            (!A5.firstElementChild ||
              A5.firstElementChild.classList.contains("black"))
          ) {
            A5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(A5);
          }
        }
      }

      if (
        !E3.firstElementChild ||
        E3.firstElementChild.classList.contains("black")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);

        if (
          (!E3.firstElementChild ||
            E3.firstElementChild.classList.contains("white")) &&
          (!E3.firstElementChild ||
            E3.firstElementChild.classList.contains("black")) &&
          (!F4.firstElementChild ||
            F4.firstElementChild.classList.contains("black"))
        ) {
          F4.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(F4);

          if (
            (!E3.firstElementChild ||
              E3.firstElementChild.classList.contains("white")) &&
            (!E3.firstElementChild ||
              E3.firstElementChild.classList.contains("black")) &&
            (!F4.firstElementChild ||
              F4.firstElementChild.classList.contains("white")) &&
            (!F4.firstElementChild ||
              F4.firstElementChild.classList.contains("black")) &&
            (!G5.firstElementChild ||
              G5.firstElementChild.classList.contains("black"))
          ) {
            G5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G5);

            if (
              (!E3.firstElementChild ||
                E3.firstElementChild.classList.contains("white")) &&
              (!E3.firstElementChild ||
                E3.firstElementChild.classList.contains("black")) &&
              (!F4.firstElementChild ||
                F4.firstElementChild.classList.contains("white")) &&
              (!F4.firstElementChild ||
                F4.firstElementChild.classList.contains("black")) &&
              (!G5.firstElementChild ||
                G5.firstElementChild.classList.contains("white")) &&
              (!G5.firstElementChild ||
                G5.firstElementChild.classList.contains("black")) &&
              (!H6.firstElementChild ||
                H6.firstElementChild.classList.contains("black"))
            ) {
              H6.classList.toggle("highlightBlue");
              recentlyHighlightedElements.push(H6);
            }
          }
        }
      }

      if (
        !C1.firstElementChild ||
        C1.firstElementChild.classList.contains("black")
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
      }

      if (
        !E1.firstElementChild ||
        E1.firstElementChild.classList.contains("black")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
    }
  }

  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "D2") {
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("black")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);

        if (
          (!C3.firstElementChild ||
            C3.firstElementChild.classList.contains("white")) &&
          (!C3.firstElementChild ||
            C3.firstElementChild.classList.contains("black")) &&
          (!B4.firstElementChild ||
            !B4.firstElementChild.classList.contains("black"))
        ) {
          B4.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(B4);

          if (
            (!C3.firstElementChild ||
              C3.firstElementChild.classList.contains("white")) &&
            (!C3.firstElementChild ||
              C3.firstElementChild.classList.contains("black")) &&
            (!B4.firstElementChild ||
              B4.firstElementChild.classList.contains("white")) &&
            (!B4.firstElementChild ||
              B4.firstElementChild.classList.contains("black")) &&
            (!A5.firstElementChild ||
              !A5.firstElementChild.classList.contains("black"))
          ) {
            A5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(A5);
          }
        }
      }

      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("black")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);

        if (
          (!E3.firstElementChild ||
            E3.firstElementChild.classList.contains("white")) &&
          (!E3.firstElementChild ||
            E3.firstElementChild.classList.contains("black")) &&
          (!F4.firstElementChild ||
            !F4.firstElementChild.classList.contains("black"))
        ) {
          F4.classList.toggle("highlightBlue");
          recentlyHighlightedElements.push(F4);

          if (
            (!E3.firstElementChild ||
              E3.firstElementChild.classList.contains("white")) &&
            (!E3.firstElementChild ||
              E3.firstElementChild.classList.contains("black")) &&
            (!F4.firstElementChild ||
              F4.firstElementChild.classList.contains("white")) &&
            (!F4.firstElementChild ||
              F4.firstElementChild.classList.contains("black")) &&
            (!G5.firstElementChild ||
              !G5.firstElementChild.classList.contains("black"))
          ) {
            G5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G5);

            if (
              (!E3.firstElementChild ||
                E3.firstElementChild.classList.contains("white")) &&
              (!E3.firstElementChild ||
                E3.firstElementChild.classList.contains("black")) &&
              (!F4.firstElementChild ||
                F4.firstElementChild.classList.contains("white")) &&
              (!F4.firstElementChild ||
                F4.firstElementChild.classList.contains("black")) &&
              (!G5.firstElementChild ||
                G5.firstElementChild.classList.contains("white")) &&
              (!G5.firstElementChild ||
                G5.firstElementChild.classList.contains("black")) &&
              (!H6.firstElementChild ||
                !H6.firstElementChild.classList.contains("black"))
            ) {
              H6.classList.toggle("highlightBlue");
              recentlyHighlightedElements.push(H6);
            }
          }
        }
      }

      if (
        !C1.firstElementChild ||
        !C1.firstElementChild.classList.contains("black")
      ) {
        C1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C1);
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
  // White Bishop
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "D4") {
      // Top-right diagonal
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("white")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
        if (!E5.firstElementChild) {
          if (
            !F6.firstElementChild ||
            !F6.firstElementChild.classList.contains("white")
          ) {
            F6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F6);
            if (!F6.firstElementChild) {
              if (
                !G7.firstElementChild ||
                !G7.firstElementChild.classList.contains("white")
              ) {
                G7.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(G7);
                if (!G7.firstElementChild) {
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

      // Top-left diagonal
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("white")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
        if (!C5.firstElementChild) {
          if (
            !B6.firstElementChild ||
            !B6.firstElementChild.classList.contains("white")
          ) {
            B6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B6);
            if (!B6.firstElementChild) {
              if (
                !A7.firstElementChild ||
                !A7.firstElementChild.classList.contains("white")
              ) {
                A7.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(A7);
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("white")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
        if (!E3.firstElementChild) {
          if (
            !F2.firstElementChild ||
            !F2.firstElementChild.classList.contains("white")
          ) {
            F2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F2);
            if (!F2.firstElementChild) {
              if (
                !G1.firstElementChild ||
                !G1.firstElementChild.classList.contains("white")
              ) {
                G1.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(G1);
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("white")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
        if (!C3.firstElementChild) {
          if (
            !B2.firstElementChild ||
            !B2.firstElementChild.classList.contains("white")
          ) {
            B2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B2);
            if (!B2.firstElementChild) {
              if (
                !A1.firstElementChild ||
                !A1.firstElementChild.classList.contains("white")
              ) {
                A1.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(A1);
              }
            }
          }
        }
      }
    }
  }

  // Black Bishop
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "D4") {
      // Top-right diagonal
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("black")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
        if (!E5.firstElementChild) {
          if (
            !F6.firstElementChild ||
            !F6.firstElementChild.classList.contains("black")
          ) {
            F6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F6);
            if (!F6.firstElementChild) {
              if (
                !G7.firstElementChild ||
                !G7.firstElementChild.classList.contains("black")
              ) {
                G7.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(G7);
                if (!G7.firstElementChild) {
                  if (
                    !H8.firstElementChild ||
                    !H8.firstElementChild.classList.contains("black")
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

      // Top-left diagonal
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("black")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
        if (!C5.firstElementChild) {
          if (
            !B6.firstElementChild ||
            !B6.firstElementChild.classList.contains("black")
          ) {
            B6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B6);
            if (!B6.firstElementChild) {
              if (
                !A7.firstElementChild ||
                !A7.firstElementChild.classList.contains("black")
              ) {
                A7.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(A7);
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("black")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
        if (!E3.firstElementChild) {
          if (
            !F2.firstElementChild ||
            !F2.firstElementChild.classList.contains("black")
          ) {
            F2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F2);
            if (!F2.firstElementChild) {
              if (
                !G1.firstElementChild ||
                !G1.firstElementChild.classList.contains("black")
              ) {
                G1.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(G1);
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !C3.firstElementChild ||
        !C3.firstElementChild.classList.contains("black")
      ) {
        C3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C3);
        if (!C3.firstElementChild) {
          if (
            !B2.firstElementChild ||
            !B2.firstElementChild.classList.contains("black")
          ) {
            B2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B2);
            if (!B2.firstElementChild) {
              if (
                !A1.firstElementChild ||
                !A1.firstElementChild.classList.contains("black")
              ) {
                A1.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(A1);
              }
            }
          }
        }
      }
    }
  }
  // White Bishop
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "D6") {
      // Top-right diagonal
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("white")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
        if (!E7.firstElementChild) {
          if (
            !F8.firstElementChild ||
            !F8.firstElementChild.classList.contains("white")
          ) {
            F8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F8);
          }
        }
      }

      // Top-left diagonal
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("white")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
        if (!C7.firstElementChild) {
          if (
            !B8.firstElementChild ||
            !B8.firstElementChild.classList.contains("white")
          ) {
            B8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B8);
          }
        }
      }

      // Bottom-right diagonal
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("white")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
        if (!E5.firstElementChild) {
          if (
            !F4.firstElementChild ||
            !F4.firstElementChild.classList.contains("white")
          ) {
            F4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F4);
            if (!F4.firstElementChild) {
              if (
                !G3.firstElementChild ||
                !G3.firstElementChild.classList.contains("white")
              ) {
                G3.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(G3);
                if (!G3.firstElementChild) {
                  if (
                    !H2.firstElementChild ||
                    !H2.firstElementChild.classList.contains("white")
                  ) {
                    H2.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(H2);
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("white")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
        if (!C5.firstElementChild) {
          if (
            !B4.firstElementChild ||
            !B4.firstElementChild.classList.contains("white")
          ) {
            B4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B4);
            if (!B4.firstElementChild) {
              if (
                !A3.firstElementChild ||
                !A3.firstElementChild.classList.contains("white")
              ) {
                A3.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(A3);
              }
            }
          }
        }
      }
    }
  }

  // Black Bishop
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "D6") {
      // Top-right diagonal
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("black")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
        if (!E7.firstElementChild) {
          if (
            !F8.firstElementChild ||
            !F8.firstElementChild.classList.contains("black")
          ) {
            F8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F8);
          }
        }
      }

      // Top-left diagonal
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("black")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
        if (!C7.firstElementChild) {
          if (
            !B8.firstElementChild ||
            !B8.firstElementChild.classList.contains("black")
          ) {
            B8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B8);
          }
        }
      }

      // Bottom-right diagonal
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("black")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
        if (!E5.firstElementChild) {
          if (
            !F4.firstElementChild ||
            !F4.firstElementChild.classList.contains("black")
          ) {
            F4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F4);
            if (!F4.firstElementChild) {
              if (
                !G3.firstElementChild ||
                !G3.firstElementChild.classList.contains("black")
              ) {
                G3.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(G3);
                if (!G3.firstElementChild) {
                  if (
                    !H2.firstElementChild ||
                    !H2.firstElementChild.classList.contains("black")
                  ) {
                    H2.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(H2);
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !C5.firstElementChild ||
        !C5.firstElementChild.classList.contains("black")
      ) {
        C5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C5);
        if (!C5.firstElementChild) {
          if (
            !B4.firstElementChild ||
            !B4.firstElementChild.classList.contains("black")
          ) {
            B4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B4);
            if (!B4.firstElementChild) {
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
      }
    }
  }
  // White Bishop
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "D8") {
      // Top-right diagonal (no squares, already at top edge)

      // Top-left diagonal (no squares, already at top edge)

      // Bottom-right diagonal
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("white")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
        if (!E7.firstElementChild) {
          if (
            !F6.firstElementChild ||
            !F6.firstElementChild.classList.contains("white")
          ) {
            F6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F6);
            if (!F6.firstElementChild) {
              if (
                !G5.firstElementChild ||
                !G5.firstElementChild.classList.contains("white")
              ) {
                G5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(G5);
                if (!G5.firstElementChild) {
                  if (
                    !H4.firstElementChild ||
                    !H4.firstElementChild.classList.contains("white")
                  ) {
                    H4.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(H4);
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("white")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
        if (!C7.firstElementChild) {
          if (
            !B6.firstElementChild ||
            !B6.firstElementChild.classList.contains("white")
          ) {
            B6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B6);
            if (!B6.firstElementChild) {
              if (
                !A5.firstElementChild ||
                !A5.firstElementChild.classList.contains("white")
              ) {
                A5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(A5);
              }
            }
          }
        }
      }
    }
  }

  // Black Bishop
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "D8") {
      // Top-right diagonal (no squares, already at top edge)

      // Top-left diagonal (no squares, already at top edge)

      // Bottom-right diagonal
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("black")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
        if (!E7.firstElementChild) {
          if (
            !F6.firstElementChild ||
            !F6.firstElementChild.classList.contains("black")
          ) {
            F6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F6);
            if (!F6.firstElementChild) {
              if (
                !G5.firstElementChild ||
                !G5.firstElementChild.classList.contains("black")
              ) {
                G5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(G5);
                if (!G5.firstElementChild) {
                  if (
                    !H4.firstElementChild ||
                    !H4.firstElementChild.classList.contains("black")
                  ) {
                    H4.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(H4);
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !C7.firstElementChild ||
        !C7.firstElementChild.classList.contains("black")
      ) {
        C7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C7);
        if (!C7.firstElementChild) {
          if (
            !B6.firstElementChild ||
            !B6.firstElementChild.classList.contains("black")
          ) {
            B6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B6);
            if (!B6.firstElementChild) {
              if (
                !A5.firstElementChild ||
                !A5.firstElementChild.classList.contains("black")
              ) {
                A5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(A5);
              }
            }
          }
        }
      }
    }
  }
  // White Bishop
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "E1") {
      // Top-right diagonal
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("white")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
        if (!F2.firstElementChild) {
          if (
            !G3.firstElementChild ||
            !G3.firstElementChild.classList.contains("white")
          ) {
            G3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G3);
            if (!G3.firstElementChild) {
              if (
                !H4.firstElementChild ||
                !H4.firstElementChild.classList.contains("white")
              ) {
                H4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H4);
              }
            }
          }
        }
      }

      // Top-left diagonal
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("white")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
        if (!D2.firstElementChild) {
          if (
            !C3.firstElementChild ||
            !C3.firstElementChild.classList.contains("white")
          ) {
            C3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C3);
            if (!C3.firstElementChild) {
              if (
                !B4.firstElementChild ||
                !B4.firstElementChild.classList.contains("white")
              ) {
                B4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(B4);
                if (!B4.firstElementChild) {
                  if (
                    !A5.firstElementChild ||
                    !A5.firstElementChild.classList.contains("white")
                  ) {
                    A5.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(A5);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // Black Bishop
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "E1") {
      // Top-right diagonal
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("black")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
        if (!F2.firstElementChild) {
          if (
            !G3.firstElementChild ||
            !G3.firstElementChild.classList.contains("black")
          ) {
            G3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G3);
            if (!G3.firstElementChild) {
              if (
                !H4.firstElementChild ||
                !H4.firstElementChild.classList.contains("black")
              ) {
                H4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H4);
              }
            }
          }
        }
      }

      // Top-left diagonal
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
        if (!D2.firstElementChild) {
          if (
            !C3.firstElementChild ||
            !C3.firstElementChild.classList.contains("black")
          ) {
            C3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C3);
            if (!C3.firstElementChild) {
              if (
                !B4.firstElementChild ||
                !B4.firstElementChild.classList.contains("black")
              ) {
                B4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(B4);
                if (!B4.firstElementChild) {
                  if (
                    !A5.firstElementChild ||
                    !A5.firstElementChild.classList.contains("black")
                  ) {
                    A5.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(A5);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // White Bishop
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "E3") {
      // Top-right diagonal
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("white")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
        if (!F4.firstElementChild) {
          if (
            !G5.firstElementChild ||
            !G5.firstElementChild.classList.contains("white")
          ) {
            G5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G5);
            if (!G5.firstElementChild) {
              if (
                !H6.firstElementChild ||
                !H6.firstElementChild.classList.contains("white")
              ) {
                H6.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H6);
              }
            }
          }
        }
      }

      // Top-left diagonal
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("white")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
        if (!D4.firstElementChild) {
          if (
            !C5.firstElementChild ||
            !C5.firstElementChild.classList.contains("white")
          ) {
            C5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C5);
            if (!C5.firstElementChild) {
              if (
                !B6.firstElementChild ||
                !B6.firstElementChild.classList.contains("white")
              ) {
                B6.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(B6);
                if (!B6.firstElementChild) {
                  if (
                    !A7.firstElementChild ||
                    !A7.firstElementChild.classList.contains("white")
                  ) {
                    A7.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(A7);
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("white")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
        if (!F2.firstElementChild) {
          if (
            !G1.firstElementChild ||
            !G1.firstElementChild.classList.contains("white")
          ) {
            G1.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G1);
          }
        }
      }

      // Bottom-left diagonal
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("white")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
        if (!D2.firstElementChild) {
          if (
            !C1.firstElementChild ||
            !C1.firstElementChild.classList.contains("white")
          ) {
            C1.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C1);
          }
        }
      }
    }
  }

  // Black Bishop
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "E3") {
      // Top-right diagonal
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("black")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
        if (!F4.firstElementChild) {
          if (
            !G5.firstElementChild ||
            !G5.firstElementChild.classList.contains("black")
          ) {
            G5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G5);
            if (!G5.firstElementChild) {
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

      // Top-left diagonal
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
        if (!D4.firstElementChild) {
          if (
            !C5.firstElementChild ||
            !C5.firstElementChild.classList.contains("black")
          ) {
            C5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C5);
            if (!C5.firstElementChild) {
              if (
                !B6.firstElementChild ||
                !B6.firstElementChild.classList.contains("black")
              ) {
                B6.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(B6);
                if (!B6.firstElementChild) {
                  if (
                    !A7.firstElementChild ||
                    !A7.firstElementChild.classList.contains("black")
                  ) {
                    A7.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(A7);
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("black")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
        if (!F2.firstElementChild) {
          if (
            !G1.firstElementChild ||
            !G1.firstElementChild.classList.contains("black")
          ) {
            G1.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G1);
          }
        }
      }

      // Bottom-left diagonal
      if (
        !D2.firstElementChild ||
        !D2.firstElementChild.classList.contains("black")
      ) {
        D2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D2);
        if (!D2.firstElementChild) {
          if (
            !C1.firstElementChild ||
            !C1.firstElementChild.classList.contains("black")
          ) {
            C1.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C1);
          }
        }
      }
    }
  }

  // White Bishop
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "E5") {
      // Top-right diagonal
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("white")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
        if (!F6.firstElementChild) {
          if (
            !G7.firstElementChild ||
            !G7.firstElementChild.classList.contains("white")
          ) {
            G7.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G7);
            if (!G7.firstElementChild) {
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

      // Top-left diagonal
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("white")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
        if (!D6.firstElementChild) {
          if (
            !C7.firstElementChild ||
            !C7.firstElementChild.classList.contains("white")
          ) {
            C7.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C7);
            if (!C7.firstElementChild) {
              if (
                !B8.firstElementChild ||
                !B8.firstElementChild.classList.contains("white")
              ) {
                B8.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(B8);
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("white")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
        if (!F4.firstElementChild) {
          if (
            !G3.firstElementChild ||
            !G3.firstElementChild.classList.contains("white")
          ) {
            G3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G3);
            if (!G3.firstElementChild) {
              if (
                !H2.firstElementChild ||
                !H2.firstElementChild.classList.contains("white")
              ) {
                H2.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H2);
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("white")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
        if (!D4.firstElementChild) {
          if (
            !C3.firstElementChild ||
            !C3.firstElementChild.classList.contains("white")
          ) {
            C3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C3);
            if (!C3.firstElementChild) {
              if (
                !B2.firstElementChild ||
                !B2.firstElementChild.classList.contains("white")
              ) {
                B2.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(B2);
                if (!B2.firstElementChild) {
                  if (
                    !A1.firstElementChild ||
                    !A1.firstElementChild.classList.contains("white")
                  ) {
                    A1.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(A1);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // Black Bishop
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "E5") {
      // Top-right diagonal
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("black")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
        if (!F6.firstElementChild) {
          if (
            !G7.firstElementChild ||
            !G7.firstElementChild.classList.contains("black")
          ) {
            G7.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G7);
            if (!G7.firstElementChild) {
              if (
                !H8.firstElementChild ||
                !H8.firstElementChild.classList.contains("black")
              ) {
                H8.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H8);
              }
            }
          }
        }
      }

      // Top-left diagonal
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
        if (!D6.firstElementChild) {
          if (
            !C7.firstElementChild ||
            !C7.firstElementChild.classList.contains("black")
          ) {
            C7.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C7);
            if (!C7.firstElementChild) {
              if (
                !B8.firstElementChild ||
                !B8.firstElementChild.classList.contains("black")
              ) {
                B8.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(B8);
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("black")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
        if (!F4.firstElementChild) {
          if (
            !G3.firstElementChild ||
            !G3.firstElementChild.classList.contains("black")
          ) {
            G3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G3);
            if (!G3.firstElementChild) {
              if (
                !H2.firstElementChild ||
                !H2.firstElementChild.classList.contains("black")
              ) {
                H2.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H2);
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !D4.firstElementChild ||
        !D4.firstElementChild.classList.contains("black")
      ) {
        D4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D4);
        if (!D4.firstElementChild) {
          if (
            !C3.firstElementChild ||
            !C3.firstElementChild.classList.contains("black")
          ) {
            C3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C3);
            if (!C3.firstElementChild) {
              if (
                !B2.firstElementChild ||
                !B2.firstElementChild.classList.contains("black")
              ) {
                B2.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(B2);
                if (!B2.firstElementChild) {
                  if (
                    !A1.firstElementChild ||
                    !A1.firstElementChild.classList.contains("black")
                  ) {
                    A1.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(A1);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // White Bishop
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "E7") {
      // Top-right diagonal
      if (
        !F8.firstElementChild ||
        !F8.firstElementChild.classList.contains("white")
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }

      // Top-left diagonal
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("white")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }

      // Bottom-right diagonal
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("white")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
        if (!F6.firstElementChild) {
          if (
            !G5.firstElementChild ||
            !G5.firstElementChild.classList.contains("white")
          ) {
            G5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G5);
            if (!G5.firstElementChild) {
              if (
                !H4.firstElementChild ||
                !H4.firstElementChild.classList.contains("white")
              ) {
                H4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H4);
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("white")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
        if (!D6.firstElementChild) {
          if (
            !C5.firstElementChild ||
            !C5.firstElementChild.classList.contains("white")
          ) {
            C5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C5);
            if (!C5.firstElementChild) {
              if (
                !B4.firstElementChild ||
                !B4.firstElementChild.classList.contains("white")
              ) {
                B4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(B4);
                if (!B4.firstElementChild) {
                  if (
                    !A3.firstElementChild ||
                    !A3.firstElementChild.classList.contains("white")
                  ) {
                    A3.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(A3);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // Black Bishop
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "E7") {
      // Top-right diagonal
      if (
        !F8.firstElementChild ||
        !F8.firstElementChild.classList.contains("black")
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }

      // Top-left diagonal
      if (
        !D8.firstElementChild ||
        !D8.firstElementChild.classList.contains("black")
      ) {
        D8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D8);
      }

      // Bottom-right diagonal
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("black")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
        if (!F6.firstElementChild) {
          if (
            !G5.firstElementChild ||
            !G5.firstElementChild.classList.contains("black")
          ) {
            G5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G5);
            if (!G5.firstElementChild) {
              if (
                !H4.firstElementChild ||
                !H4.firstElementChild.classList.contains("black")
              ) {
                H4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H4);
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !D6.firstElementChild ||
        !D6.firstElementChild.classList.contains("black")
      ) {
        D6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D6);
        if (!D6.firstElementChild) {
          if (
            !C5.firstElementChild ||
            !C5.firstElementChild.classList.contains("black")
          ) {
            C5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C5);
            if (!C5.firstElementChild) {
              if (
                !B4.firstElementChild ||
                !B4.firstElementChild.classList.contains("black")
              ) {
                B4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(B4);
                if (!B4.firstElementChild) {
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
          }
        }
      }
    }
  }
  // White Bishop
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "F2") {
      // Top-right diagonal
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("white")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
        if (!G3.firstElementChild) {
          if (
            !H4.firstElementChild ||
            !H4.firstElementChild.classList.contains("white")
          ) {
            H4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H4);
          }
        }
      }

      // Top-left diagonal
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("white")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
        if (!E3.firstElementChild) {
          if (
            !D4.firstElementChild ||
            !D4.firstElementChild.classList.contains("white")
          ) {
            D4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D4);
            if (!D4.firstElementChild) {
              if (
                !C5.firstElementChild ||
                !C5.firstElementChild.classList.contains("white")
              ) {
                C5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(C5);
                if (!C5.firstElementChild) {
                  if (
                    !B6.firstElementChild ||
                    !B6.firstElementChild.classList.contains("white")
                  ) {
                    B6.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(B6);
                    if (!B6.firstElementChild) {
                      if (
                        !A7.firstElementChild ||
                        !A7.firstElementChild.classList.contains("white")
                      ) {
                        A7.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(A7);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("white")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains("white")
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }

      // Bottom-right diagonal: none
    }
  }

  // Black Bishop
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "F2") {
      // Top-right diagonal
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("black")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
        if (!G3.firstElementChild) {
          if (
            !H4.firstElementChild ||
            !H4.firstElementChild.classList.contains("black")
          ) {
            H4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H4);
          }
        }
      }

      // Top-left diagonal
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("black")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
        if (!E3.firstElementChild) {
          if (
            !D4.firstElementChild ||
            !D4.firstElementChild.classList.contains("black")
          ) {
            D4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D4);
            if (!D4.firstElementChild) {
              if (
                !C5.firstElementChild ||
                !C5.firstElementChild.classList.contains("black")
              ) {
                C5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(C5);
                if (!C5.firstElementChild) {
                  if (
                    !B6.firstElementChild ||
                    !B6.firstElementChild.classList.contains("black")
                  ) {
                    B6.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(B6);
                    if (!B6.firstElementChild) {
                      if (
                        !A7.firstElementChild ||
                        !A7.firstElementChild.classList.contains("black")
                      ) {
                        A7.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(A7);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !E1.firstElementChild ||
        !E1.firstElementChild.classList.contains("black")
      ) {
        E1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E1);
      }
      if (
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains("black")
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }

      // Bottom-right diagonal: none
    }
  }
  // White Bishop
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "F4") {
      // Top-right diagonal
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("white")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
        if (!G5.firstElementChild) {
          if (
            !H6.firstElementChild ||
            !H6.firstElementChild.classList.contains("white")
          ) {
            H6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H6);
          }
        }
      }

      // Top-left diagonal
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("white")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
        if (!E5.firstElementChild) {
          if (
            !D6.firstElementChild ||
            !D6.firstElementChild.classList.contains("white")
          ) {
            D6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D6);
            if (!D6.firstElementChild) {
              if (
                !C7.firstElementChild ||
                !C7.firstElementChild.classList.contains("white")
              ) {
                C7.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(C7);
                if (!C7.firstElementChild) {
                  if (
                    !B8.firstElementChild ||
                    !B8.firstElementChild.classList.contains("white")
                  ) {
                    B8.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(B8);
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("white")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
        if (!G3.firstElementChild) {
          if (
            !H2.firstElementChild ||
            !H2.firstElementChild.classList.contains("white")
          ) {
            H2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H2);
          }
        }
      }

      // Bottom-left diagonal
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("white")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
        if (!E3.firstElementChild) {
          if (
            !D2.firstElementChild ||
            !D2.firstElementChild.classList.contains("white")
          ) {
            D2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D2);
            if (!D2.firstElementChild) {
              if (
                !C1.firstElementChild ||
                !C1.firstElementChild.classList.contains("white")
              ) {
                C1.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(C1);
              }
            }
          }
        }
      }
    }
  }

  // Black Bishop
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "F4") {
      // Top-right diagonal
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("black")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
        if (!G5.firstElementChild) {
          if (
            !H6.firstElementChild ||
            !H6.firstElementChild.classList.contains("black")
          ) {
            H6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H6);
          }
        }
      }

      // Top-left diagonal
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("black")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
        if (!E5.firstElementChild) {
          if (
            !D6.firstElementChild ||
            !D6.firstElementChild.classList.contains("black")
          ) {
            D6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D6);
            if (!D6.firstElementChild) {
              if (
                !C7.firstElementChild ||
                !C7.firstElementChild.classList.contains("black")
              ) {
                C7.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(C7);
                if (!C7.firstElementChild) {
                  if (
                    !B8.firstElementChild ||
                    !B8.firstElementChild.classList.contains("black")
                  ) {
                    B8.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(B8);
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("black")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
        if (!G3.firstElementChild) {
          if (
            !H2.firstElementChild ||
            !H2.firstElementChild.classList.contains("black")
          ) {
            H2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H2);
          }
        }
      }

      // Bottom-left diagonal
      if (
        !E3.firstElementChild ||
        !E3.firstElementChild.classList.contains("black")
      ) {
        E3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E3);
        if (!E3.firstElementChild) {
          if (
            !D2.firstElementChild ||
            !D2.firstElementChild.classList.contains("black")
          ) {
            D2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D2);
            if (!D2.firstElementChild) {
              if (
                !C1.firstElementChild ||
                !C1.firstElementChild.classList.contains("black")
              ) {
                C1.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(C1);
              }
            }
          }
        }
      }
    }
  }

  // White Bishop
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "F6") {
      // Top-right diagonal
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("white")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
        if (!G7.firstElementChild) {
          if (
            !H8.firstElementChild ||
            !H8.firstElementChild.classList.contains("white")
          ) {
            H8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H8);
          }
        }
      }

      // Top-left diagonal
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("white")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
        if (!E7.firstElementChild) {
          if (
            !D8.firstElementChild ||
            !D8.firstElementChild.classList.contains("white")
          ) {
            D8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D8);
          }
        }
      }

      // Bottom-right diagonal
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("white")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
        if (!G5.firstElementChild) {
          if (
            !H4.firstElementChild ||
            !H4.firstElementChild.classList.contains("white")
          ) {
            H4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H4);
          }
        }
      }

      // Bottom-left diagonal
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("white")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
        if (!E5.firstElementChild) {
          if (
            !D4.firstElementChild ||
            !D4.firstElementChild.classList.contains("white")
          ) {
            D4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D4);
            if (!D4.firstElementChild) {
              if (
                !C3.firstElementChild ||
                !C3.firstElementChild.classList.contains("white")
              ) {
                C3.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(C3);
                if (!C3.firstElementChild) {
                  if (
                    !B2.firstElementChild ||
                    !B2.firstElementChild.classList.contains("white")
                  ) {
                    B2.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(B2);
                    if (!B2.firstElementChild) {
                      if (
                        !A1.firstElementChild ||
                        !A1.firstElementChild.classList.contains("white")
                      ) {
                        A1.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(A1);
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

  // Black Bishop
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "F6") {
      // Top-right diagonal
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("black")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
        if (!G7.firstElementChild) {
          if (
            !H8.firstElementChild ||
            !H8.firstElementChild.classList.contains("black")
          ) {
            H8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H8);
          }
        }
      }

      // Top-left diagonal
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("black")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
        if (!E7.firstElementChild) {
          if (
            !D8.firstElementChild ||
            !D8.firstElementChild.classList.contains("black")
          ) {
            D8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D8);
          }
        }
      }

      // Bottom-right diagonal
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("black")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
        if (!G5.firstElementChild) {
          if (
            !H4.firstElementChild ||
            !H4.firstElementChild.classList.contains("black")
          ) {
            H4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H4);
          }
        }
      }

      // Bottom-left diagonal
      if (
        !E5.firstElementChild ||
        !E5.firstElementChild.classList.contains("black")
      ) {
        E5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E5);
        if (!E5.firstElementChild) {
          if (
            !D4.firstElementChild ||
            !D4.firstElementChild.classList.contains("black")
          ) {
            D4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D4);
            if (!D4.firstElementChild) {
              if (
                !C3.firstElementChild ||
                !C3.firstElementChild.classList.contains("black")
              ) {
                C3.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(C3);
                if (!C3.firstElementChild) {
                  if (
                    !B2.firstElementChild ||
                    !B2.firstElementChild.classList.contains("black")
                  ) {
                    B2.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(B2);
                    if (!B2.firstElementChild) {
                      if (
                        !A1.firstElementChild ||
                        !A1.firstElementChild.classList.contains("black")
                      ) {
                        A1.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(A1);
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

  // White Bishop
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "F8") {
      // Top-right diagonal (no squares, F8 is top edge)

      // Bottom-right diagonal
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("white")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
        if (!G7.firstElementChild) {
          if (
            !H6.firstElementChild ||
            !H6.firstElementChild.classList.contains("white")
          ) {
            H6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H6);
          }
        }
      }

      // Bottom-left diagonal
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("white")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
        if (!E7.firstElementChild) {
          if (
            !D6.firstElementChild ||
            !D6.firstElementChild.classList.contains("white")
          ) {
            D6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D6);
            if (!D6.firstElementChild) {
              if (
                !C5.firstElementChild ||
                !C5.firstElementChild.classList.contains("white")
              ) {
                C5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(C5);
                if (!C5.firstElementChild) {
                  if (
                    !B4.firstElementChild ||
                    !B4.firstElementChild.classList.contains("white")
                  ) {
                    B4.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(B4);
                    if (!B4.firstElementChild) {
                      if (
                        !A3.firstElementChild ||
                        !A3.firstElementChild.classList.contains("white")
                      ) {
                        A3.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(A3);
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

  // Black Bishop
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "F8") {
      // Top-right diagonal (no squares, F8 is top edge)

      // Top-left diagonal (no squares, F8 is top edge)

      // Bottom-right diagonal
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("black")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
        if (!G7.firstElementChild) {
          if (
            !H6.firstElementChild ||
            !H6.firstElementChild.classList.contains("black")
          ) {
            H6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H6);
          }
        }
      }

      // Bottom-left diagonal
      if (
        !E7.firstElementChild ||
        !E7.firstElementChild.classList.contains("black")
      ) {
        E7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E7);
        if (!E7.firstElementChild) {
          if (
            !D6.firstElementChild ||
            !D6.firstElementChild.classList.contains("black")
          ) {
            D6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D6);
            if (!D6.firstElementChild) {
              if (
                !C5.firstElementChild ||
                !C5.firstElementChild.classList.contains("black")
              ) {
                C5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(C5);
                if (!C5.firstElementChild) {
                  if (
                    !B4.firstElementChild ||
                    !B4.firstElementChild.classList.contains("black")
                  ) {
                    B4.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(B4);
                    if (!B4.firstElementChild) {
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
              }
            }
          }
        }
      }
    }
  }
  // White Bishop
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "G1") {
      // Top-right diagonal
      if (
        !H2.firstElementChild ||
        !H2.firstElementChild.classList.contains("white")
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }

      // Top-left diagonal
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("white")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
        if (!F2.firstElementChild) {
          if (
            !E3.firstElementChild ||
            !E3.firstElementChild.classList.contains("white")
          ) {
            E3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E3);
            if (!E3.firstElementChild) {
              if (
                !D4.firstElementChild ||
                !D4.firstElementChild.classList.contains("white")
              ) {
                D4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D4);
                if (!D4.firstElementChild) {
                  if (
                    !C5.firstElementChild ||
                    !C5.firstElementChild.classList.contains("white")
                  ) {
                    C5.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(C5);
                    if (!C5.firstElementChild) {
                      if (
                        !B6.firstElementChild ||
                        !B6.firstElementChild.classList.contains("white")
                      ) {
                        B6.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(B6);
                        if (!B6.firstElementChild) {
                          if (
                            !A7.firstElementChild ||
                            !A7.firstElementChild.classList.contains("white")
                          ) {
                            A7.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(A7);
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

      // Bottom-right diagonal (no squares, already at bottom edge)

      // Bottom-left diagonal
      if (!F0) {
        /* no F0, bottom edge, stop */
      }
    }
  }

  // Black Bishop
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "G1") {
      // Top-right diagonal
      if (
        !H2.firstElementChild ||
        !H2.firstElementChild.classList.contains("black")
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }

      // Top-left diagonal
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("black")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
        if (!F2.firstElementChild) {
          if (
            !E3.firstElementChild ||
            !E3.firstElementChild.classList.contains("black")
          ) {
            E3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E3);
            if (!E3.firstElementChild) {
              if (
                !D4.firstElementChild ||
                !D4.firstElementChild.classList.contains("black")
              ) {
                D4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D4);
                if (!D4.firstElementChild) {
                  if (
                    !C5.firstElementChild ||
                    !C5.firstElementChild.classList.contains("black")
                  ) {
                    C5.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(C5);
                    if (!C5.firstElementChild) {
                      if (
                        !B6.firstElementChild ||
                        !B6.firstElementChild.classList.contains("black")
                      ) {
                        B6.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(B6);
                        if (!B6.firstElementChild) {
                          if (
                            !A7.firstElementChild ||
                            !A7.firstElementChild.classList.contains("black")
                          ) {
                            A7.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(A7);
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

  // White Bishop
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "G3") {
      // Top-right diagonal
      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("white")
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }

      // Top-left diagonal
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("white")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
        if (!F4.firstElementChild) {
          if (
            !E5.firstElementChild ||
            !E5.firstElementChild.classList.contains("white")
          ) {
            E5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E5);
            if (!E5.firstElementChild) {
              if (
                !D6.firstElementChild ||
                !D6.firstElementChild.classList.contains("white")
              ) {
                D6.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D6);
                if (!D6.firstElementChild) {
                  if (
                    !C7.firstElementChild ||
                    !C7.firstElementChild.classList.contains("white")
                  ) {
                    C7.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(C7);
                    if (!C7.firstElementChild) {
                      if (
                        !B8.firstElementChild ||
                        !B8.firstElementChild.classList.contains("white")
                      ) {
                        B8.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(B8);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !H2.firstElementChild ||
        !H2.firstElementChild.classList.contains("white")
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }

      // Bottom-left diagonal
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("white")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
        if (!F2.firstElementChild) {
          if (
            !E1.firstElementChild ||
            !E1.firstElementChild.classList.contains("white")
          ) {
            E1.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E1);
          }
        }
      }
    }
  }

  // Black Bishop
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "G3") {
      // Top-right diagonal
      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("black")
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }

      // Top-left diagonal
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("black")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
        if (!F4.firstElementChild) {
          if (
            !E5.firstElementChild ||
            !E5.firstElementChild.classList.contains("black")
          ) {
            E5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E5);
            if (!E5.firstElementChild) {
              if (
                !D6.firstElementChild ||
                !D6.firstElementChild.classList.contains("black")
              ) {
                D6.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D6);
                if (!D6.firstElementChild) {
                  if (
                    !C7.firstElementChild ||
                    !C7.firstElementChild.classList.contains("black")
                  ) {
                    C7.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(C7);
                    if (!C7.firstElementChild) {
                      if (
                        !B8.firstElementChild ||
                        !B8.firstElementChild.classList.contains("black")
                      ) {
                        B8.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(B8);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !H2.firstElementChild ||
        !H2.firstElementChild.classList.contains("black")
      ) {
        H2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H2);
      }

      // Bottom-left diagonal
      if (
        !F2.firstElementChild ||
        !F2.firstElementChild.classList.contains("black")
      ) {
        F2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F2);
        if (!F2.firstElementChild) {
          if (
            !E1.firstElementChild ||
            !E1.firstElementChild.classList.contains("black")
          ) {
            E1.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E1);
          }
        }
      }
    }
  }

  // White Bishop
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "G5") {
      // Top-right diagonal
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("white")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }

      // Top-left diagonal
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("white")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
        if (!F6.firstElementChild) {
          if (
            !E7.firstElementChild ||
            !E7.firstElementChild.classList.contains("white")
          ) {
            E7.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E7);
            if (!E7.firstElementChild) {
              if (
                !D8.firstElementChild ||
                !D8.firstElementChild.classList.contains("white")
              ) {
                D8.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D8);
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("white")
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }

      // Bottom-left diagonal
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("white")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
        if (!F4.firstElementChild) {
          if (
            !E3.firstElementChild ||
            !E3.firstElementChild.classList.contains("white")
          ) {
            E3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E3);
            if (!E3.firstElementChild) {
              if (
                !D2.firstElementChild ||
                !D2.firstElementChild.classList.contains("white")
              ) {
                D2.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D2);
                if (!D2.firstElementChild) {
                  if (
                    !C1.firstElementChild ||
                    !C1.firstElementChild.classList.contains("white")
                  ) {
                    C1.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(C1);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // Black Bishop
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "G5") {
      // Top-right diagonal
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("black")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }

      // Top-left diagonal
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("black")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
        if (!F6.firstElementChild) {
          if (
            !E7.firstElementChild ||
            !E7.firstElementChild.classList.contains("black")
          ) {
            E7.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E7);
            if (!E7.firstElementChild) {
              if (
                !D8.firstElementChild ||
                !D8.firstElementChild.classList.contains("black")
              ) {
                D8.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D8);
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !H4.firstElementChild ||
        !H4.firstElementChild.classList.contains("black")
      ) {
        H4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H4);
      }

      // Bottom-left diagonal
      if (
        !F4.firstElementChild ||
        !F4.firstElementChild.classList.contains("black")
      ) {
        F4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F4);
        if (!F4.firstElementChild) {
          if (
            !E3.firstElementChild ||
            !E3.firstElementChild.classList.contains("black")
          ) {
            E3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E3);
            if (!E3.firstElementChild) {
              if (
                !D2.firstElementChild ||
                !D2.firstElementChild.classList.contains("black")
              ) {
                D2.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D2);
                if (!D2.firstElementChild) {
                  if (
                    !C1.firstElementChild ||
                    !C1.firstElementChild.classList.contains("black")
                  ) {
                    C1.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(C1);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // White Bishop
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "G7") {
      // Top-right diagonal
      if (
        !H8.firstElementChild ||
        !H8.firstElementChild.classList.contains("white")
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }

      // Top-left diagonal
      if (
        !F8.firstElementChild ||
        !F8.firstElementChild.classList.contains("white")
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }

      // Bottom-right diagonal
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("white")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }

      // Bottom-left diagonal
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("white")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
        if (!F6.firstElementChild) {
          if (
            !E5.firstElementChild ||
            !E5.firstElementChild.classList.contains("white")
          ) {
            E5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E5);
            if (!E5.firstElementChild) {
              if (
                !D4.firstElementChild ||
                !D4.firstElementChild.classList.contains("white")
              ) {
                D4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D4);
                if (!D4.firstElementChild) {
                  if (
                    !C3.firstElementChild ||
                    !C3.firstElementChild.classList.contains("white")
                  ) {
                    C3.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(C3);
                    if (!C3.firstElementChild) {
                      if (
                        !B2.firstElementChild ||
                        !B2.firstElementChild.classList.contains("white")
                      ) {
                        B2.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(B2);
                        if (!B2.firstElementChild) {
                          if (
                            !A1.firstElementChild ||
                            !A1.firstElementChild.classList.contains("white")
                          ) {
                            A1.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(A1);
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

  // Black Bishop
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "G7") {
      // Top-right diagonal
      if (
        !H8.firstElementChild ||
        !H8.firstElementChild.classList.contains("black")
      ) {
        H8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H8);
      }

      // Top-left diagonal
      if (
        !F8.firstElementChild ||
        !F8.firstElementChild.classList.contains("black")
      ) {
        F8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F8);
      }

      // Bottom-right diagonal
      if (
        !H6.firstElementChild ||
        !H6.firstElementChild.classList.contains("black")
      ) {
        H6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H6);
      }

      // Bottom-left diagonal
      if (
        !F6.firstElementChild ||
        !F6.firstElementChild.classList.contains("black")
      ) {
        F6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F6);
        if (!F6.firstElementChild) {
          if (
            !E5.firstElementChild ||
            !E5.firstElementChild.classList.contains("black")
          ) {
            E5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E5);
            if (!E5.firstElementChild) {
              if (
                !D4.firstElementChild ||
                !D4.firstElementChild.classList.contains("black")
              ) {
                D4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D4);
                if (!D4.firstElementChild) {
                  if (
                    !C3.firstElementChild ||
                    !C3.firstElementChild.classList.contains("black")
                  ) {
                    C3.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(C3);
                    if (!C3.firstElementChild) {
                      if (
                        !B2.firstElementChild ||
                        !B2.firstElementChild.classList.contains("black")
                      ) {
                        B2.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(B2);
                        if (!B2.firstElementChild) {
                          if (
                            !A1.firstElementChild ||
                            !A1.firstElementChild.classList.contains("black")
                          ) {
                            A1.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(A1);
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
  // White Bishop
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "H4") {
      // Top-left diagonal
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("white")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
        if (!G5.firstElementChild) {
          if (
            !F6.firstElementChild ||
            !F6.firstElementChild.classList.contains("white")
          ) {
            F6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F6);
            if (!F6.firstElementChild) {
              if (
                !E7.firstElementChild ||
                !E7.firstElementChild.classList.contains("white")
              ) {
                E7.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E7);
                if (!E7.firstElementChild) {
                  if (
                    !D8.firstElementChild ||
                    !D8.firstElementChild.classList.contains("white")
                  ) {
                    D8.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(D8);
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("white")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
        if (!G3.firstElementChild) {
          if (
            !F2.firstElementChild ||
            !F2.firstElementChild.classList.contains("white")
          ) {
            F2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F2);
            if (!F2.firstElementChild) {
              if (
                !E1.firstElementChild ||
                !E1.firstElementChild.classList.contains("white")
              ) {
                E1.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E1);
              }
            }
          }
        }
      }
    }
  }

  // Black Bishop
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "H4") {
      // Top-left diagonal
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("black")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
        if (!G5.firstElementChild) {
          if (
            !F6.firstElementChild ||
            !F6.firstElementChild.classList.contains("black")
          ) {
            F6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F6);
            if (!F6.firstElementChild) {
              if (
                !E7.firstElementChild ||
                !E7.firstElementChild.classList.contains("black")
              ) {
                E7.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E7);
                if (!E7.firstElementChild) {
                  if (
                    !D8.firstElementChild ||
                    !D8.firstElementChild.classList.contains("black")
                  ) {
                    D8.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(D8);
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("black")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
        if (!G3.firstElementChild) {
          if (
            !F2.firstElementChild ||
            !F2.firstElementChild.classList.contains("black")
          ) {
            F2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F2);
            if (!F2.firstElementChild) {
              if (
                !E1.firstElementChild ||
                !E1.firstElementChild.classList.contains("black")
              ) {
                E1.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E1);
              }
            }
          }
        }
      }
    }
  }
  // White Bishop
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "H6") {
      // Top-left diagonal
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("white")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
        if (!G7.firstElementChild) {
          if (
            !F8.firstElementChild ||
            !F8.firstElementChild.classList.contains("white")
          ) {
            F8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F8);
          }
        }
      }

      // Bottom-left diagonal
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("white")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
        if (!G5.firstElementChild) {
          if (
            !F4.firstElementChild ||
            !F4.firstElementChild.classList.contains("white")
          ) {
            F4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F4);
            if (!F4.firstElementChild) {
              if (
                !E3.firstElementChild ||
                !E3.firstElementChild.classList.contains("white")
              ) {
                E3.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E3);
                if (!E3.firstElementChild) {
                  if (
                    !D2.firstElementChild ||
                    !D2.firstElementChild.classList.contains("white")
                  ) {
                    D2.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(D2);
                    if (!D2.firstElementChild) {
                      if (
                        !C1.firstElementChild ||
                        !C1.firstElementChild.classList.contains("white")
                      ) {
                        C1.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(C1);
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

  // Black Bishop
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "H6") {
      // Top-left diagonal
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("black")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
        if (!G7.firstElementChild) {
          if (
            !F8.firstElementChild ||
            !F8.firstElementChild.classList.contains("black")
          ) {
            F8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F8);
          }
        }
      }

      // Bottom-left diagonal
      if (
        !G5.firstElementChild ||
        !G5.firstElementChild.classList.contains("black")
      ) {
        G5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G5);
        if (!G5.firstElementChild) {
          if (
            !F4.firstElementChild ||
            !F4.firstElementChild.classList.contains("black")
          ) {
            F4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F4);
            if (!F4.firstElementChild) {
              if (
                !E3.firstElementChild ||
                !E3.firstElementChild.classList.contains("black")
              ) {
                E3.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E3);
                if (!E3.firstElementChild) {
                  if (
                    !D2.firstElementChild ||
                    !D2.firstElementChild.classList.contains("black")
                  ) {
                    D2.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(D2);
                    if (!D2.firstElementChild) {
                      if (
                        !C1.firstElementChild ||
                        !C1.firstElementChild.classList.contains("black")
                      ) {
                        C1.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(C1);
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

  // White Bishop
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "H8") {
      // Top-left diagonal
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("white")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
        if (!G7.firstElementChild) {
          if (
            !F6.firstElementChild ||
            !F6.firstElementChild.classList.contains("white")
          ) {
            F6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F6);
            if (!F6.firstElementChild) {
              if (
                !E5.firstElementChild ||
                !E5.firstElementChild.classList.contains("white")
              ) {
                E5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E5);
                if (!E5.firstElementChild) {
                  if (
                    !D4.firstElementChild ||
                    !D4.firstElementChild.classList.contains("white")
                  ) {
                    D4.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(D4);
                    if (!D4.firstElementChild) {
                      if (
                        !C3.firstElementChild ||
                        !C3.firstElementChild.classList.contains("white")
                      ) {
                        C3.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(C3);
                        if (!C3.firstElementChild) {
                          if (
                            !B2.firstElementChild ||
                            !B2.firstElementChild.classList.contains("white")
                          ) {
                            B2.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(B2);
                            if (!B2.firstElementChild) {
                              if (
                                !A1.firstElementChild ||
                                !A1.firstElementChild.classList.contains(
                                  "white"
                                )
                              ) {
                                A1.classList.toggle("highlightBlue");
                                recentlyHighlightedElements.push(A1);
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
    }
  }

  // Black Bishop
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "H8") {
      // Top-left diagonal
      if (
        !G7.firstElementChild ||
        !G7.firstElementChild.classList.contains("black")
      ) {
        G7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G7);
        if (!G7.firstElementChild) {
          if (
            !F6.firstElementChild ||
            !F6.firstElementChild.classList.contains("black")
          ) {
            F6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F6);
            if (!F6.firstElementChild) {
              if (
                !E5.firstElementChild ||
                !E5.firstElementChild.classList.contains("black")
              ) {
                E5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E5);
                if (!E5.firstElementChild) {
                  if (
                    !D4.firstElementChild ||
                    !D4.firstElementChild.classList.contains("black")
                  ) {
                    D4.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(D4);
                    if (!D4.firstElementChild) {
                      if (
                        !C3.firstElementChild ||
                        !C3.firstElementChild.classList.contains("black")
                      ) {
                        C3.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(C3);
                        if (!C3.firstElementChild) {
                          if (
                            !B2.firstElementChild ||
                            !B2.firstElementChild.classList.contains("black")
                          ) {
                            B2.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(B2);
                            if (!B2.firstElementChild) {
                              if (
                                !A1.firstElementChild ||
                                !A1.firstElementChild.classList.contains(
                                  "black"
                                )
                              ) {
                                A1.classList.toggle("highlightBlue");
                                recentlyHighlightedElements.push(A1);
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
    }
  }
  // White Bishop
  if (selectedPiece.classList.contains("bSquareWhiteBishop")) {
    if (currentSquare === "H2") {
      // Top-left diagonal
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("white")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
        if (!G3.firstElementChild) {
          if (
            !F4.firstElementChild ||
            !F4.firstElementChild.classList.contains("white")
          ) {
            F4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F4);
            if (!F4.firstElementChild) {
              if (
                !E5.firstElementChild ||
                !E5.firstElementChild.classList.contains("white")
              ) {
                E5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E5);
                if (!E5.firstElementChild) {
                  if (
                    !D6.firstElementChild ||
                    !D6.firstElementChild.classList.contains("white")
                  ) {
                    D6.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(D6);
                    if (!D6.firstElementChild) {
                      if (
                        !C7.firstElementChild ||
                        !C7.firstElementChild.classList.contains("white")
                      ) {
                        C7.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(C7);
                        if (!C7.firstElementChild) {
                          if (
                            !B8.firstElementChild ||
                            !B8.firstElementChild.classList.contains("white")
                          ) {
                            B8.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(B8);
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

      // Bottom-left diagonal
      if (
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains("white")
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
      }
    }
  }

  // Black Bishop
  if (selectedPiece.classList.contains("bSquareBlackBishop")) {
    if (currentSquare === "H2") {
      // Top-left diagonal
      if (
        !G3.firstElementChild ||
        !G3.firstElementChild.classList.contains("black")
      ) {
        G3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G3);
        if (!G3.firstElementChild) {
          if (
            !F4.firstElementChild ||
            !F4.firstElementChild.classList.contains("black")
          ) {
            F4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F4);
            if (!F4.firstElementChild) {
              if (
                !E5.firstElementChild ||
                !E5.firstElementChild.classList.contains("black")
              ) {
                E5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E5);
                if (!E5.firstElementChild) {
                  if (
                    !D6.firstElementChild ||
                    !D6.firstElementChild.classList.contains("black")
                  ) {
                    D6.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(D6);
                    if (!D6.firstElementChild) {
                      if (
                        !C7.firstElementChild ||
                        !C7.firstElementChild.classList.contains("black")
                      ) {
                        C7.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(C7);
                        if (!C7.firstElementChild) {
                          if (
                            !B8.firstElementChild ||
                            !B8.firstElementChild.classList.contains("black")
                          ) {
                            B8.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(B8);
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

      // Bottom-left diagonal
      if (
        !G1.firstElementChild ||
        !G1.firstElementChild.classList.contains("black")
      ) {
        G1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G1);
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
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "A2") {
      // Top-right diagonal
      if (
        !B3.firstElementChild ||
        B3.firstElementChild.classList.contains("black")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
        if (!B3.firstElementChild) {
          if (
            !C4.firstElementChild ||
            C4.firstElementChild.classList.contains("black")
          ) {
            C4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C4);
            if (!C4.firstElementChild) {
              if (
                !D5.firstElementChild ||
                D5.firstElementChild.classList.contains("black")
              ) {
                D5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D5);
                if (!D5.firstElementChild) {
                  if (
                    !E6.firstElementChild ||
                    E6.firstElementChild.classList.contains("black")
                  ) {
                    E6.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(E6);
                    if (!E6.firstElementChild) {
                      if (
                        !F7.firstElementChild ||
                        F7.firstElementChild.classList.contains("black")
                      ) {
                        F7.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(F7);
                        if (!F7.firstElementChild) {
                          if (
                            !G8.firstElementChild ||
                            G8.firstElementChild.classList.contains("black")
                          ) {
                            G8.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(G8);
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

      // Bottom-right diagonal
      if (
        !B1.firstElementChild ||
        B1.firstElementChild.classList.contains("black")
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }

      // No left diagonals (edge of board)
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "A2") {
      // Top-right diagonal
      if (
        !B3.firstElementChild ||
        B3.firstElementChild.classList.contains("white")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
        if (!B3.firstElementChild) {
          if (
            !C4.firstElementChild ||
            C4.firstElementChild.classList.contains("white")
          ) {
            C4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C4);
            if (!C4.firstElementChild) {
              if (
                !D5.firstElementChild ||
                D5.firstElementChild.classList.contains("white")
              ) {
                D5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D5);
                if (!D5.firstElementChild) {
                  if (
                    !E6.firstElementChild ||
                    E6.firstElementChild.classList.contains("white")
                  ) {
                    E6.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(E6);
                    if (!E6.firstElementChild) {
                      if (
                        !F7.firstElementChild ||
                        F7.firstElementChild.classList.contains("white")
                      ) {
                        F7.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(F7);
                        if (!F7.firstElementChild) {
                          if (
                            !G8.firstElementChild ||
                            G8.firstElementChild.classList.contains("white")
                          ) {
                            G8.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(G8);
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

      // Bottom-right diagonal
      if (
        !B1.firstElementChild ||
        B1.firstElementChild.classList.contains("white")
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }

      // No left diagonals (edge of board)
    }
  }

  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "A4") {
      // Top-right diagonal
      if (
        !B5.firstElementChild ||
        B5.firstElementChild.classList.contains("black")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
        if (!B5.firstElementChild) {
          if (
            !C6.firstElementChild ||
            C6.firstElementChild.classList.contains("black")
          ) {
            C6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C6);
            if (!C6.firstElementChild) {
              if (
                !D7.firstElementChild ||
                D7.firstElementChild.classList.contains("black")
              ) {
                D7.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D7);
                if (!D7.firstElementChild) {
                  if (
                    !E8.firstElementChild ||
                    E8.firstElementChild.classList.contains("black")
                  ) {
                    E8.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(E8);
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !B3.firstElementChild ||
        B3.firstElementChild.classList.contains("black")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
        if (!B3.firstElementChild) {
          if (
            !C2.firstElementChild ||
            C2.firstElementChild.classList.contains("black")
          ) {
            C2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C2);
            if (!C2.firstElementChild) {
              if (
                !D1.firstElementChild ||
                D1.firstElementChild.classList.contains("black")
              ) {
                D1.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D1);
              }
            }
          }
        }
      }

      // Bottom-left and Top-left diagonals do not exist (edge of board)
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "A4") {
      // Top-right diagonal
      if (
        !B5.firstElementChild ||
        B5.firstElementChild.classList.contains("white")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
        if (!B5.firstElementChild) {
          if (
            !C6.firstElementChild ||
            C6.firstElementChild.classList.contains("white")
          ) {
            C6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C6);
            if (!C6.firstElementChild) {
              if (
                !D7.firstElementChild ||
                D7.firstElementChild.classList.contains("white")
              ) {
                D7.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D7);
                if (!D7.firstElementChild) {
                  if (
                    !E8.firstElementChild ||
                    E8.firstElementChild.classList.contains("white")
                  ) {
                    E8.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(E8);
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !B3.firstElementChild ||
        B3.firstElementChild.classList.contains("white")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
        if (!B3.firstElementChild) {
          if (
            !C2.firstElementChild ||
            C2.firstElementChild.classList.contains("white")
          ) {
            C2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C2);
            if (!C2.firstElementChild) {
              if (
                !D1.firstElementChild ||
                D1.firstElementChild.classList.contains("white")
              ) {
                D1.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D1);
              }
            }
          }
        }
      }

      // Bottom-left and Top-left diagonals do not exist (edge of board)
    }
  }
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "A6") {
      // Top-right diagonal
      if (
        !B7.firstElementChild ||
        B7.firstElementChild.classList.contains("black")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
        if (!B7.firstElementChild) {
          if (
            !C8.firstElementChild ||
            C8.firstElementChild.classList.contains("black")
          ) {
            C8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C8);
          }
        }
      }

      // Bottom-right diagonal
      if (
        !B5.firstElementChild ||
        B5.firstElementChild.classList.contains("black")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
        if (!B5.firstElementChild) {
          if (
            !C4.firstElementChild ||
            C4.firstElementChild.classList.contains("black")
          ) {
            C4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C4);
            if (!C4.firstElementChild) {
              if (
                !D3.firstElementChild ||
                D3.firstElementChild.classList.contains("black")
              ) {
                D3.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D3);
                if (!D3.firstElementChild) {
                  if (
                    !E2.firstElementChild ||
                    E2.firstElementChild.classList.contains("black")
                  ) {
                    E2.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(E2);
                    if (!E2.firstElementChild) {
                      if (
                        !F1.firstElementChild ||
                        F1.firstElementChild.classList.contains("black")
                      ) {
                        F1.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(F1);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-left and Top-left diagonals do not exist (edge of board)
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "A6") {
      // Top-right diagonal
      if (
        !B7.firstElementChild ||
        B7.firstElementChild.classList.contains("white")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
        if (!B7.firstElementChild) {
          if (
            !C8.firstElementChild ||
            C8.firstElementChild.classList.contains("white")
          ) {
            C8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C8);
          }
        }
      }

      // Bottom-right diagonal
      if (
        !B5.firstElementChild ||
        B5.firstElementChild.classList.contains("white")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
        if (!B5.firstElementChild) {
          if (
            !C4.firstElementChild ||
            C4.firstElementChild.classList.contains("white")
          ) {
            C4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C4);
            if (!C4.firstElementChild) {
              if (
                !D3.firstElementChild ||
                D3.firstElementChild.classList.contains("white")
              ) {
                D3.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D3);
                if (!D3.firstElementChild) {
                  if (
                    !E2.firstElementChild ||
                    E2.firstElementChild.classList.contains("white")
                  ) {
                    E2.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(E2);
                    if (!E2.firstElementChild) {
                      if (
                        !F1.firstElementChild ||
                        F1.firstElementChild.classList.contains("white")
                      ) {
                        F1.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(F1);
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
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "A8") {
      // Bottom-right diagonal
      if (
        !B7.firstElementChild ||
        B7.firstElementChild.classList.contains("black")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
        if (!B7.firstElementChild) {
          if (
            !C6.firstElementChild ||
            C6.firstElementChild.classList.contains("black")
          ) {
            C6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C6);
            if (!C6.firstElementChild) {
              if (
                !D5.firstElementChild ||
                D5.firstElementChild.classList.contains("black")
              ) {
                D5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D5);
                if (!D5.firstElementChild) {
                  if (
                    !E4.firstElementChild ||
                    E4.firstElementChild.classList.contains("black")
                  ) {
                    E4.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(E4);
                    if (!E4.firstElementChild) {
                      if (
                        !F3.firstElementChild ||
                        F3.firstElementChild.classList.contains("black")
                      ) {
                        F3.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(F3);
                        if (!F3.firstElementChild) {
                          if (
                            !G2.firstElementChild ||
                            G2.firstElementChild.classList.contains("black")
                          ) {
                            G2.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(G2);
                            if (!G2.firstElementChild) {
                              if (
                                !H1.firstElementChild ||
                                H1.firstElementChild.classList.contains("black")
                              ) {
                                H1.classList.toggle("highlightBlue");
                                recentlyHighlightedElements.push(H1);
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

      // No other diagonals (edge of board)
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "A8") {
      // Bottom-right diagonal
      if (
        !B7.firstElementChild ||
        B7.firstElementChild.classList.contains("white")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
        if (!B7.firstElementChild) {
          if (
            !C6.firstElementChild ||
            C6.firstElementChild.classList.contains("white")
          ) {
            C6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C6);
            if (!C6.firstElementChild) {
              if (
                !D5.firstElementChild ||
                D5.firstElementChild.classList.contains("white")
              ) {
                D5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D5);
                if (!D5.firstElementChild) {
                  if (
                    !E4.firstElementChild ||
                    E4.firstElementChild.classList.contains("white")
                  ) {
                    E4.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(E4);
                    if (!E4.firstElementChild) {
                      if (
                        !F3.firstElementChild ||
                        F3.firstElementChild.classList.contains("white")
                      ) {
                        F3.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(F3);
                        if (!F3.firstElementChild) {
                          if (
                            !G2.firstElementChild ||
                            G2.firstElementChild.classList.contains("white")
                          ) {
                            G2.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(G2);
                            if (!G2.firstElementChild) {
                              if (
                                !H1.firstElementChild ||
                                H1.firstElementChild.classList.contains("white")
                              ) {
                                H1.classList.toggle("highlightBlue");
                                recentlyHighlightedElements.push(H1);
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
    }
  }
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "B1") {
      // Top-right diagonal
      if (
        !C2.firstElementChild ||
        C2.firstElementChild.classList.contains("black")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
        if (!C2.firstElementChild) {
          if (
            !D3.firstElementChild ||
            D3.firstElementChild.classList.contains("black")
          ) {
            D3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D3);
            if (!D3.firstElementChild) {
              if (
                !E4.firstElementChild ||
                E4.firstElementChild.classList.contains("black")
              ) {
                E4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E4);
                if (!E4.firstElementChild) {
                  if (
                    !F5.firstElementChild ||
                    F5.firstElementChild.classList.contains("black")
                  ) {
                    F5.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(F5);
                    if (!F5.firstElementChild) {
                      if (
                        !G6.firstElementChild ||
                        G6.firstElementChild.classList.contains("black")
                      ) {
                        G6.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(G6);
                        if (!G6.firstElementChild) {
                          if (
                            !H7.firstElementChild ||
                            H7.firstElementChild.classList.contains("black")
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

      // Bottom-left diagonal (including A2)
      if (
        !A2.firstElementChild ||
        A2.firstElementChild.classList.contains("black")
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
        if (!A2.firstElementChild) {
          // No further squares (edge of board)
        }
      }
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "B1") {
      // Top-right diagonal
      if (
        !C2.firstElementChild ||
        C2.firstElementChild.classList.contains("white")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
        if (!C2.firstElementChild) {
          if (
            !D3.firstElementChild ||
            D3.firstElementChild.classList.contains("white")
          ) {
            D3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D3);
            if (!D3.firstElementChild) {
              if (
                !E4.firstElementChild ||
                E4.firstElementChild.classList.contains("white")
              ) {
                E4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E4);
                if (!E4.firstElementChild) {
                  if (
                    !F5.firstElementChild ||
                    F5.firstElementChild.classList.contains("white")
                  ) {
                    F5.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(F5);
                    if (!F5.firstElementChild) {
                      if (
                        !G6.firstElementChild ||
                        G6.firstElementChild.classList.contains("white")
                      ) {
                        G6.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(G6);
                        if (!G6.firstElementChild) {
                          if (
                            !H7.firstElementChild ||
                            H7.firstElementChild.classList.contains("white")
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

      // Bottom-left diagonal (including A2)
      if (
        !A2.firstElementChild ||
        A2.firstElementChild.classList.contains("white")
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
        if (!A2.firstElementChild) {
        }
      }
    }
  }

  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "B3") {
      // Top-right diagonal
      if (
        !C4.firstElementChild ||
        C4.firstElementChild.classList.contains("black")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
        if (!C4.firstElementChild) {
          if (
            !D5.firstElementChild ||
            D5.firstElementChild.classList.contains("black")
          ) {
            D5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D5);
            if (!D5.firstElementChild) {
              if (
                !E6.firstElementChild ||
                E6.firstElementChild.classList.contains("black")
              ) {
                E6.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E6);
                if (!E6.firstElementChild) {
                  if (
                    !F7.firstElementChild ||
                    F7.firstElementChild.classList.contains("black")
                  ) {
                    F7.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(F7);
                    if (!F7.firstElementChild) {
                      if (
                        !G8.firstElementChild ||
                        G8.firstElementChild.classList.contains("black")
                      ) {
                        G8.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(G8);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !C2.firstElementChild ||
        C2.firstElementChild.classList.contains("black")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
        if (!C2.firstElementChild) {
          if (
            !D1.firstElementChild ||
            D1.firstElementChild.classList.contains("black")
          ) {
            D1.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D1);
          }
        }
      }

      // Top-left diagonal
      if (
        !A4.firstElementChild ||
        A4.firstElementChild.classList.contains("black")
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }

      // Bottom-left diagonal
      if (
        !A2.firstElementChild ||
        A2.firstElementChild.classList.contains("black")
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "B3") {
      // Top-right diagonal
      if (
        !C4.firstElementChild ||
        C4.firstElementChild.classList.contains("white")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
        if (!C4.firstElementChild) {
          if (
            !D5.firstElementChild ||
            D5.firstElementChild.classList.contains("white")
          ) {
            D5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D5);
            if (!D5.firstElementChild) {
              if (
                !E6.firstElementChild ||
                E6.firstElementChild.classList.contains("white")
              ) {
                E6.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E6);
                if (!E6.firstElementChild) {
                  if (
                    !F7.firstElementChild ||
                    F7.firstElementChild.classList.contains("white")
                  ) {
                    F7.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(F7);
                    if (!F7.firstElementChild) {
                      if (
                        !G8.firstElementChild ||
                        G8.firstElementChild.classList.contains("white")
                      ) {
                        G8.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(G8);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !C2.firstElementChild ||
        C2.firstElementChild.classList.contains("white")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
        if (!C2.firstElementChild) {
          if (
            !D1.firstElementChild ||
            D1.firstElementChild.classList.contains("white")
          ) {
            D1.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D1);
          }
        }
      }

      // Top-left diagonal
      if (
        !A4.firstElementChild ||
        A4.firstElementChild.classList.contains("white")
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }

      // Bottom-left diagonal
      if (
        !A2.firstElementChild ||
        A2.firstElementChild.classList.contains("white")
      ) {
        A2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A2);
      }
    }
  }
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "B5") {
      // Top-right diagonal
      if (
        !C6.firstElementChild ||
        C6.firstElementChild.classList.contains("black")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
        if (!C6.firstElementChild) {
          if (
            !D7.firstElementChild ||
            D7.firstElementChild.classList.contains("black")
          ) {
            D7.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D7);
            if (!D7.firstElementChild) {
              if (
                !E8.firstElementChild ||
                E8.firstElementChild.classList.contains("black")
              ) {
                E8.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E8);
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !C4.firstElementChild ||
        C4.firstElementChild.classList.contains("black")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
        if (!C4.firstElementChild) {
          if (
            !D3.firstElementChild ||
            D3.firstElementChild.classList.contains("black")
          ) {
            D3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D3);
            if (!D3.firstElementChild) {
              if (
                !E2.firstElementChild ||
                E2.firstElementChild.classList.contains("black")
              ) {
                E2.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E2);
                if (!E2.firstElementChild) {
                  if (
                    !F1.firstElementChild ||
                    F1.firstElementChild.classList.contains("black")
                  ) {
                    F1.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(F1);
                  }
                }
              }
            }
          }
        }
      }

      // Top-left diagonal
      if (
        !A6.firstElementChild ||
        A6.firstElementChild.classList.contains("black")
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }

      // Bottom-left diagonal
      if (
        !A4.firstElementChild ||
        A4.firstElementChild.classList.contains("black")
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "B5") {
      // Top-right diagonal
      if (
        !C6.firstElementChild ||
        C6.firstElementChild.classList.contains("white")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
        if (!C6.firstElementChild) {
          if (
            !D7.firstElementChild ||
            D7.firstElementChild.classList.contains("white")
          ) {
            D7.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D7);
            if (!D7.firstElementChild) {
              if (
                !E8.firstElementChild ||
                E8.firstElementChild.classList.contains("white")
              ) {
                E8.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E8);
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !C4.firstElementChild ||
        C4.firstElementChild.classList.contains("white")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
        if (!C4.firstElementChild) {
          if (
            !D3.firstElementChild ||
            D3.firstElementChild.classList.contains("white")
          ) {
            D3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D3);
            if (!D3.firstElementChild) {
              if (
                !E2.firstElementChild ||
                E2.firstElementChild.classList.contains("white")
              ) {
                E2.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E2);
                if (!E2.firstElementChild) {
                  if (
                    !F1.firstElementChild ||
                    F1.firstElementChild.classList.contains("white")
                  ) {
                    F1.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(F1);
                  }
                }
              }
            }
          }
        }
      }

      // Top-left diagonal
      if (
        !A6.firstElementChild ||
        A6.firstElementChild.classList.contains("white")
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }

      // Bottom-left diagonal
      if (
        !A4.firstElementChild ||
        A4.firstElementChild.classList.contains("white")
      ) {
        A4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A4);
      }
    }
  }
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "B7") {
      // Top-right diagonal
      if (
        !C8.firstElementChild ||
        C8.firstElementChild.classList.contains("black")
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }

      // Bottom-right diagonal
      if (
        !C6.firstElementChild ||
        C6.firstElementChild.classList.contains("black")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
        if (!C6.firstElementChild) {
          if (
            !D5.firstElementChild ||
            D5.firstElementChild.classList.contains("black")
          ) {
            D5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D5);
            if (!D5.firstElementChild) {
              if (
                !E4.firstElementChild ||
                E4.firstElementChild.classList.contains("black")
              ) {
                E4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E4);
                if (!E4.firstElementChild) {
                  if (
                    !F3.firstElementChild ||
                    F3.firstElementChild.classList.contains("black")
                  ) {
                    F3.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(F3);
                    if (!F3.firstElementChild) {
                      if (
                        !G2.firstElementChild ||
                        G2.firstElementChild.classList.contains("black")
                      ) {
                        G2.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(G2);
                        if (!G2.firstElementChild) {
                          if (
                            !H1.firstElementChild ||
                            H1.firstElementChild.classList.contains("black")
                          ) {
                            H1.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(H1);
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

      // Top-left diagonal
      if (
        !A8.firstElementChild ||
        A8.firstElementChild.classList.contains("black")
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }

      // Bottom-left diagonal
      if (
        !A6.firstElementChild ||
        A6.firstElementChild.classList.contains("black")
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "B7") {
      // Top-right diagonal
      if (
        !C8.firstElementChild ||
        C8.firstElementChild.classList.contains("white")
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }

      // Bottom-right diagonal
      if (
        !C6.firstElementChild ||
        C6.firstElementChild.classList.contains("white")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
        if (!C6.firstElementChild) {
          if (
            !D5.firstElementChild ||
            D5.firstElementChild.classList.contains("white")
          ) {
            D5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D5);
            if (!D5.firstElementChild) {
              if (
                !E4.firstElementChild ||
                E4.firstElementChild.classList.contains("white")
              ) {
                E4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E4);
                if (!E4.firstElementChild) {
                  if (
                    !F3.firstElementChild ||
                    F3.firstElementChild.classList.contains("white")
                  ) {
                    F3.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(F3);
                    if (!F3.firstElementChild) {
                      if (
                        !G2.firstElementChild ||
                        G2.firstElementChild.classList.contains("white")
                      ) {
                        G2.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(G2);
                        if (!G2.firstElementChild) {
                          if (
                            !H1.firstElementChild ||
                            H1.firstElementChild.classList.contains("white")
                          ) {
                            H1.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(H1);
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

      // Top-left diagonal
      if (
        !A8.firstElementChild ||
        A8.firstElementChild.classList.contains("white")
      ) {
        A8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A8);
      }

      // Bottom-left diagonal
      if (
        !A6.firstElementChild ||
        A6.firstElementChild.classList.contains("white")
      ) {
        A6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(A6);
      }
    }
  }

  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "C2") {
      // Top-right diagonal
      if (
        !D3.firstElementChild ||
        D3.firstElementChild.classList.contains("black")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
        if (!D3.firstElementChild) {
          if (
            !E4.firstElementChild ||
            E4.firstElementChild.classList.contains("black")
          ) {
            E4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E4);
            if (!E4.firstElementChild) {
              if (
                !F5.firstElementChild ||
                F5.firstElementChild.classList.contains("black")
              ) {
                F5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(F5);
                if (!F5.firstElementChild) {
                  if (
                    !G6.firstElementChild ||
                    G6.firstElementChild.classList.contains("black")
                  ) {
                    G6.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(G6);
                    if (!G6.firstElementChild) {
                      if (
                        !H7.firstElementChild ||
                        H7.firstElementChild.classList.contains("black")
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

      // Bottom-right diagonal
      if (
        !D1.firstElementChild ||
        D1.firstElementChild.classList.contains("black")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }

      // Top-left diagonal
      if (
        !B3.firstElementChild ||
        B3.firstElementChild.classList.contains("black")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
        if (!B3.firstElementChild) {
          if (
            !A4.firstElementChild ||
            A4.firstElementChild.classList.contains("black")
          ) {
            A4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(A4);
          }
        }
      }

      // Bottom-left diagonal
      if (
        !B1.firstElementChild ||
        B1.firstElementChild.classList.contains("black")
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "C2") {
      // Top-right diagonal
      if (
        !D3.firstElementChild ||
        D3.firstElementChild.classList.contains("white")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
        if (!D3.firstElementChild) {
          if (
            !E4.firstElementChild ||
            E4.firstElementChild.classList.contains("white")
          ) {
            E4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E4);
            if (!E4.firstElementChild) {
              if (
                !F5.firstElementChild ||
                F5.firstElementChild.classList.contains("white")
              ) {
                F5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(F5);
                if (!F5.firstElementChild) {
                  if (
                    !G6.firstElementChild ||
                    G6.firstElementChild.classList.contains("white")
                  ) {
                    G6.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(G6);
                    if (!G6.firstElementChild) {
                      if (
                        !H7.firstElementChild ||
                        H7.firstElementChild.classList.contains("white")
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

      // Bottom-right diagonal
      if (
        !D1.firstElementChild ||
        D1.firstElementChild.classList.contains("white")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }

      // Top-left diagonal
      if (
        !B3.firstElementChild ||
        B3.firstElementChild.classList.contains("white")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
        if (!B3.firstElementChild) {
          if (
            !A4.firstElementChild ||
            A4.firstElementChild.classList.contains("white")
          ) {
            A4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(A4);
          }
        }
      }

      // Bottom-left diagonal
      if (
        !B1.firstElementChild ||
        B1.firstElementChild.classList.contains("white")
      ) {
        B1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B1);
      }
    }
  }

  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "C4") {
      // Top-right diagonal
      if (
        !D5.firstElementChild ||
        D5.firstElementChild.classList.contains("black")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
        if (!D5.firstElementChild) {
          if (
            !E6.firstElementChild ||
            E6.firstElementChild.classList.contains("black")
          ) {
            E6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E6);
            if (!E6.firstElementChild) {
              if (
                !F7.firstElementChild ||
                F7.firstElementChild.classList.contains("black")
              ) {
                F7.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(F7);
                if (!F7.firstElementChild) {
                  if (
                    !G8.firstElementChild ||
                    G8.firstElementChild.classList.contains("black")
                  ) {
                    G8.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(G8);
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !D3.firstElementChild ||
        D3.firstElementChild.classList.contains("black")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
        if (!D3.firstElementChild) {
          if (
            !E2.firstElementChild ||
            E2.firstElementChild.classList.contains("black")
          ) {
            E2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E2);
            if (!E2.firstElementChild) {
              if (
                !F1.firstElementChild ||
                F1.firstElementChild.classList.contains("black")
              ) {
                F1.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(F1);
              }
            }
          }
        }
      }

      // Top-left diagonal
      if (
        !B5.firstElementChild ||
        B5.firstElementChild.classList.contains("black")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
        if (!B5.firstElementChild) {
          if (
            !A6.firstElementChild ||
            A6.firstElementChild.classList.contains("black")
          ) {
            A6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(A6);
          }
        }
      }

      // Bottom-left diagonal
      if (
        !B3.firstElementChild ||
        B3.firstElementChild.classList.contains("black")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
        if (!B3.firstElementChild) {
          if (
            !A2.firstElementChild ||
            A2.firstElementChild.classList.contains("black")
          ) {
            A2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(A2);
          }
        }
      }
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "C4") {
      // Top-right diagonal
      if (
        !D5.firstElementChild ||
        D5.firstElementChild.classList.contains("white")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
        if (!D5.firstElementChild) {
          if (
            !E6.firstElementChild ||
            E6.firstElementChild.classList.contains("white")
          ) {
            E6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E6);
            if (!E6.firstElementChild) {
              if (
                !F7.firstElementChild ||
                F7.firstElementChild.classList.contains("white")
              ) {
                F7.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(F7);
                if (!F7.firstElementChild) {
                  if (
                    !G8.firstElementChild ||
                    G8.firstElementChild.classList.contains("white")
                  ) {
                    G8.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(G8);
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !D3.firstElementChild ||
        D3.firstElementChild.classList.contains("white")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
        if (!D3.firstElementChild) {
          if (
            !E2.firstElementChild ||
            E2.firstElementChild.classList.contains("white")
          ) {
            E2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E2);
            if (!E2.firstElementChild) {
              if (
                !F1.firstElementChild ||
                F1.firstElementChild.classList.contains("white")
              ) {
                F1.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(F1);
              }
            }
          }
        }
      }

      // Top-left diagonal
      if (
        !B5.firstElementChild ||
        B5.firstElementChild.classList.contains("white")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
        if (!B5.firstElementChild) {
          if (
            !A6.firstElementChild ||
            A6.firstElementChild.classList.contains("white")
          ) {
            A6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(A6);
          }
        }
      }

      // Bottom-left diagonal
      if (
        !B3.firstElementChild ||
        B3.firstElementChild.classList.contains("white")
      ) {
        B3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B3);
        if (!B3.firstElementChild) {
          if (
            !A2.firstElementChild ||
            A2.firstElementChild.classList.contains("white")
          ) {
            A2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(A2);
          }
        }
      }
    }
  }
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "C6") {
      // Top-right diagonal
      if (
        !D7.firstElementChild ||
        D7.firstElementChild.classList.contains("black")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
        if (!D7.firstElementChild) {
          if (
            !E8.firstElementChild ||
            E8.firstElementChild.classList.contains("black")
          ) {
            E8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E8);
          }
        }
      }

      // Bottom-right diagonal
      if (
        !D5.firstElementChild ||
        D5.firstElementChild.classList.contains("black")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
        if (!D5.firstElementChild) {
          if (
            !E4.firstElementChild ||
            E4.firstElementChild.classList.contains("black")
          ) {
            E4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E4);
            if (!E4.firstElementChild) {
              if (
                !F3.firstElementChild ||
                F3.firstElementChild.classList.contains("black")
              ) {
                F3.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(F3);
                if (!F3.firstElementChild) {
                  if (
                    !G2.firstElementChild ||
                    G2.firstElementChild.classList.contains("black")
                  ) {
                    G2.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(G2);
                    if (!G2.firstElementChild) {
                      if (
                        !H1.firstElementChild ||
                        H1.firstElementChild.classList.contains("black")
                      ) {
                        H1.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(H1);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      // Top-left diagonal
      if (
        !B7.firstElementChild ||
        B7.firstElementChild.classList.contains("black")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
        if (!B7.firstElementChild) {
          if (
            !A8.firstElementChild ||
            A8.firstElementChild.classList.contains("black")
          ) {
            A8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(A8);
          }
        }
      }

      // Bottom-left diagonal
      if (
        !B5.firstElementChild ||
        B5.firstElementChild.classList.contains("black")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
        if (!B5.firstElementChild) {
          if (
            !A4.firstElementChild ||
            A4.firstElementChild.classList.contains("black")
          ) {
            A4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(A4);
          }
        }
      }
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "C6") {
      // Top-right diagonal
      if (
        !D7.firstElementChild ||
        D7.firstElementChild.classList.contains("white")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
        if (!D7.firstElementChild) {
          if (
            !E8.firstElementChild ||
            E8.firstElementChild.classList.contains("white")
          ) {
            E8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E8);
          }
        }
      }

      // Bottom-right diagonal
      if (
        !D5.firstElementChild ||
        D5.firstElementChild.classList.contains("white")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
        if (!D5.firstElementChild) {
          if (
            !E4.firstElementChild ||
            E4.firstElementChild.classList.contains("white")
          ) {
            E4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E4);
            if (!E4.firstElementChild) {
              if (
                !F3.firstElementChild ||
                F3.firstElementChild.classList.contains("white")
              ) {
                F3.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(F3);
                if (!F3.firstElementChild) {
                  if (
                    !G2.firstElementChild ||
                    G2.firstElementChild.classList.contains("white")
                  ) {
                    G2.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(G2);
                    if (!G2.firstElementChild) {
                      if (
                        !H1.firstElementChild ||
                        H1.firstElementChild.classList.contains("white")
                      ) {
                        H1.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(H1);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      // Top-left diagonal
      if (
        !B7.firstElementChild ||
        B7.firstElementChild.classList.contains("white")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
        if (!B7.firstElementChild) {
          if (
            !A8.firstElementChild ||
            A8.firstElementChild.classList.contains("white")
          ) {
            A8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(A8);
          }
        }
      }

      // Bottom-left diagonal
      if (
        !B5.firstElementChild ||
        B5.firstElementChild.classList.contains("white")
      ) {
        B5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B5);
        if (!B5.firstElementChild) {
          if (
            !A4.firstElementChild ||
            A4.firstElementChild.classList.contains("white")
          ) {
            A4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(A4);
          }
        }
      }
    }
  }
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "C8") {
      // Bottom-right diagonal
      if (
        !D7.firstElementChild ||
        D7.firstElementChild.classList.contains("black")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
        if (!D7.firstElementChild) {
          if (
            !E6.firstElementChild ||
            E6.firstElementChild.classList.contains("black")
          ) {
            E6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E6);
            if (!E6.firstElementChild) {
              if (
                !F5.firstElementChild ||
                F5.firstElementChild.classList.contains("black")
              ) {
                F5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(F5);
                if (!F5.firstElementChild) {
                  if (
                    !G4.firstElementChild ||
                    G4.firstElementChild.classList.contains("black")
                  ) {
                    G4.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(G4);
                    if (!G4.firstElementChild) {
                      if (
                        !H3.firstElementChild ||
                        H3.firstElementChild.classList.contains("black")
                      ) {
                        H3.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(H3);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !B7.firstElementChild ||
        B7.firstElementChild.classList.contains("black")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
        if (!B7.firstElementChild) {
          if (
            !A6.firstElementChild ||
            A6.firstElementChild.classList.contains("black")
          ) {
            A6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(A6);
          }
        }
      }
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "C8") {
      // Bottom-right diagonal
      if (
        !D7.firstElementChild ||
        D7.firstElementChild.classList.contains("white")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
        if (!D7.firstElementChild) {
          if (
            !E6.firstElementChild ||
            E6.firstElementChild.classList.contains("white")
          ) {
            E6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E6);
            if (!E6.firstElementChild) {
              if (
                !F5.firstElementChild ||
                F5.firstElementChild.classList.contains("white")
              ) {
                F5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(F5);
                if (!F5.firstElementChild) {
                  if (
                    !G4.firstElementChild ||
                    G4.firstElementChild.classList.contains("white")
                  ) {
                    G4.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(G4);
                    if (!G4.firstElementChild) {
                      if (
                        !H3.firstElementChild ||
                        H3.firstElementChild.classList.contains("white")
                      ) {
                        H3.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(H3);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !B7.firstElementChild ||
        B7.firstElementChild.classList.contains("white")
      ) {
        B7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(B7);
        if (!B7.firstElementChild) {
          if (
            !A6.firstElementChild ||
            A6.firstElementChild.classList.contains("white")
          ) {
            A6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(A6);
          }
        }
      }
    }
  }
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "D1") {
      // Top-right diagonal
      if (
        !E2.firstElementChild ||
        E2.firstElementChild.classList.contains("black")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
        if (!E2.firstElementChild) {
          if (
            !F3.firstElementChild ||
            F3.firstElementChild.classList.contains("black")
          ) {
            F3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F3);
            if (!F3.firstElementChild) {
              if (
                !G4.firstElementChild ||
                G4.firstElementChild.classList.contains("black")
              ) {
                G4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(G4);
                if (!G4.firstElementChild) {
                  if (
                    !H5.firstElementChild ||
                    H5.firstElementChild.classList.contains("black")
                  ) {
                    H5.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(H5);
                  }
                }
              }
            }
          }
        }
      }

      // Top-left diagonal
      if (
        !C2.firstElementChild ||
        C2.firstElementChild.classList.contains("black")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
        if (!C2.firstElementChild) {
          if (
            !B3.firstElementChild ||
            B3.firstElementChild.classList.contains("black")
          ) {
            B3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B3);
            if (!B3.firstElementChild) {
              if (
                !A4.firstElementChild ||
                A4.firstElementChild.classList.contains("black")
              ) {
                A4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(A4);
              }
            }
          }
        }
      }
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "D1") {
      // Top-right diagonal
      if (
        !E2.firstElementChild ||
        E2.firstElementChild.classList.contains("white")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
        if (!E2.firstElementChild) {
          if (
            !F3.firstElementChild ||
            F3.firstElementChild.classList.contains("white")
          ) {
            F3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F3);
            if (!F3.firstElementChild) {
              if (
                !G4.firstElementChild ||
                G4.firstElementChild.classList.contains("white")
              ) {
                G4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(G4);
                if (!G4.firstElementChild) {
                  if (
                    !H5.firstElementChild ||
                    H5.firstElementChild.classList.contains("white")
                  ) {
                    H5.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(H5);
                  }
                }
              }
            }
          }
        }
      }

      // Top-left diagonal
      if (
        !C2.firstElementChild ||
        C2.firstElementChild.classList.contains("white")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
        if (!C2.firstElementChild) {
          if (
            !B3.firstElementChild ||
            B3.firstElementChild.classList.contains("white")
          ) {
            B3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B3);
            if (!B3.firstElementChild) {
              if (
                !A4.firstElementChild ||
                A4.firstElementChild.classList.contains("white")
              ) {
                A4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(A4);
              }
            }
          }
        }
      }
    }
  }
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "D3") {
      // Top-right diagonal
      if (
        !E4.firstElementChild ||
        E4.firstElementChild.classList.contains("black")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
        if (!E4.firstElementChild) {
          if (
            !F5.firstElementChild ||
            F5.firstElementChild.classList.contains("black")
          ) {
            F5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F5);
            if (!F5.firstElementChild) {
              if (
                !G6.firstElementChild ||
                G6.firstElementChild.classList.contains("black")
              ) {
                G6.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(G6);
                if (!G6.firstElementChild) {
                  if (
                    !H7.firstElementChild ||
                    H7.firstElementChild.classList.contains("black")
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

      // Bottom-right diagonal
      if (
        !E2.firstElementChild ||
        E2.firstElementChild.classList.contains("black")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
        if (!E2.firstElementChild) {
          if (
            !F1.firstElementChild ||
            F1.firstElementChild.classList.contains("black")
          ) {
            F1.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F1);
          }
        }
      }

      // Top-left diagonal
      if (
        !C4.firstElementChild ||
        C4.firstElementChild.classList.contains("black")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
        if (!C4.firstElementChild) {
          if (
            !B5.firstElementChild ||
            B5.firstElementChild.classList.contains("black")
          ) {
            B5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B5);
            if (!B5.firstElementChild) {
              if (
                !A6.firstElementChild ||
                A6.firstElementChild.classList.contains("black")
              ) {
                A6.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(A6);
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !C2.firstElementChild ||
        C2.firstElementChild.classList.contains("black")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
        if (!C2.firstElementChild) {
          if (
            !B1.firstElementChild ||
            B1.firstElementChild.classList.contains("black")
          ) {
            B1.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B1);
          }
        }
      }
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "D3") {
      // Top-right diagonal
      if (
        !E4.firstElementChild ||
        E4.firstElementChild.classList.contains("white")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
        if (!E4.firstElementChild) {
          if (
            !F5.firstElementChild ||
            F5.firstElementChild.classList.contains("white")
          ) {
            F5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F5);
            if (!F5.firstElementChild) {
              if (
                !G6.firstElementChild ||
                G6.firstElementChild.classList.contains("white")
              ) {
                G6.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(G6);
                if (!G6.firstElementChild) {
                  if (
                    !H7.firstElementChild ||
                    H7.firstElementChild.classList.contains("white")
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

      // Bottom-right diagonal
      if (
        !E2.firstElementChild ||
        E2.firstElementChild.classList.contains("white")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
        if (!E2.firstElementChild) {
          if (
            !F1.firstElementChild ||
            F1.firstElementChild.classList.contains("white")
          ) {
            F1.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F1);
          }
        }
      }

      // Top-left diagonal
      if (
        !C4.firstElementChild ||
        C4.firstElementChild.classList.contains("white")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
        if (!C4.firstElementChild) {
          if (
            !B5.firstElementChild ||
            B5.firstElementChild.classList.contains("white")
          ) {
            B5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B5);
            if (!B5.firstElementChild) {
              if (
                !A6.firstElementChild ||
                A6.firstElementChild.classList.contains("white")
              ) {
                A6.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(A6);
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !C2.firstElementChild ||
        C2.firstElementChild.classList.contains("white")
      ) {
        C2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C2);
        if (!C2.firstElementChild) {
          if (
            !B1.firstElementChild ||
            B1.firstElementChild.classList.contains("white")
          ) {
            B1.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B1);
          }
        }
      }
    }
  }
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "D5") {
      // Top-right diagonal
      if (
        !E6.firstElementChild ||
        E6.firstElementChild.classList.contains("black")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
        if (!E6.firstElementChild) {
          if (
            !F7.firstElementChild ||
            F7.firstElementChild.classList.contains("black")
          ) {
            F7.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F7);
            if (!F7.firstElementChild) {
              if (
                !G8.firstElementChild ||
                G8.firstElementChild.classList.contains("black")
              ) {
                G8.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(G8);
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !E4.firstElementChild ||
        E4.firstElementChild.classList.contains("black")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
        if (!E4.firstElementChild) {
          if (
            !F3.firstElementChild ||
            F3.firstElementChild.classList.contains("black")
          ) {
            F3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F3);
            if (!F3.firstElementChild) {
              if (
                !G2.firstElementChild ||
                G2.firstElementChild.classList.contains("black")
              ) {
                G2.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(G2);
                if (!G2.firstElementChild) {
                  if (
                    !H1.firstElementChild ||
                    H1.firstElementChild.classList.contains("black")
                  ) {
                    H1.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(H1);
                  }
                }
              }
            }
          }
        }
      }

      // Top-left diagonal
      if (
        !C6.firstElementChild ||
        C6.firstElementChild.classList.contains("black")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
        if (!C6.firstElementChild) {
          if (
            !B7.firstElementChild ||
            B7.firstElementChild.classList.contains("black")
          ) {
            B7.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B7);
            if (!B7.firstElementChild) {
              if (
                !A8.firstElementChild ||
                A8.firstElementChild.classList.contains("black")
              ) {
                A8.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(A8);
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !C4.firstElementChild ||
        C4.firstElementChild.classList.contains("black")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
        if (!C4.firstElementChild) {
          if (
            !B3.firstElementChild ||
            B3.firstElementChild.classList.contains("black")
          ) {
            B3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B3);
            if (!B3.firstElementChild) {
              if (
                !A2.firstElementChild ||
                A2.firstElementChild.classList.contains("black")
              ) {
                A2.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(A2);
              }
            }
          }
        }
      }
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "D5") {
      // Top-right diagonal
      if (
        !E6.firstElementChild ||
        E6.firstElementChild.classList.contains("white")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
        if (!E6.firstElementChild) {
          if (
            !F7.firstElementChild ||
            F7.firstElementChild.classList.contains("white")
          ) {
            F7.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F7);
            if (!F7.firstElementChild) {
              if (
                !G8.firstElementChild ||
                G8.firstElementChild.classList.contains("white")
              ) {
                G8.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(G8);
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !E4.firstElementChild ||
        E4.firstElementChild.classList.contains("white")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
        if (!E4.firstElementChild) {
          if (
            !F3.firstElementChild ||
            F3.firstElementChild.classList.contains("white")
          ) {
            F3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F3);
            if (!F3.firstElementChild) {
              if (
                !G2.firstElementChild ||
                G2.firstElementChild.classList.contains("white")
              ) {
                G2.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(G2);
                if (!G2.firstElementChild) {
                  if (
                    !H1.firstElementChild ||
                    H1.firstElementChild.classList.contains("white")
                  ) {
                    H1.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(H1);
                  }
                }
              }
            }
          }
        }
      }

      // Top-left diagonal
      if (
        !C6.firstElementChild ||
        C6.firstElementChild.classList.contains("white")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
        if (!C6.firstElementChild) {
          if (
            !B7.firstElementChild ||
            B7.firstElementChild.classList.contains("white")
          ) {
            B7.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B7);
            if (!B7.firstElementChild) {
              if (
                !A8.firstElementChild ||
                A8.firstElementChild.classList.contains("white")
              ) {
                A8.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(A8);
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !C4.firstElementChild ||
        C4.firstElementChild.classList.contains("white")
      ) {
        C4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C4);
        if (!C4.firstElementChild) {
          if (
            !B3.firstElementChild ||
            B3.firstElementChild.classList.contains("white")
          ) {
            B3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B3);
            if (!B3.firstElementChild) {
              if (
                !A2.firstElementChild ||
                A2.firstElementChild.classList.contains("white")
              ) {
                A2.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(A2);
              }
            }
          }
        }
      }
    }
  }
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "D7") {
      // Top-right diagonal
      if (
        !E8.firstElementChild ||
        E8.firstElementChild.classList.contains("black")
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }

      // Bottom-right diagonal
      if (
        !E6.firstElementChild ||
        E6.firstElementChild.classList.contains("black")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
        if (!E6.firstElementChild) {
          if (
            !F5.firstElementChild ||
            F5.firstElementChild.classList.contains("black")
          ) {
            F5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F5);
            if (!F5.firstElementChild) {
              if (
                !G4.firstElementChild ||
                G4.firstElementChild.classList.contains("black")
              ) {
                G4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(G4);
                if (!G4.firstElementChild) {
                  if (
                    !H3.firstElementChild ||
                    H3.firstElementChild.classList.contains("black")
                  ) {
                    H3.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(H3);
                  }
                }
              }
            }
          }
        }
      }

      // Top-left diagonal
      if (
        !C8.firstElementChild ||
        C8.firstElementChild.classList.contains("black")
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }

      // Bottom-left diagonal
      if (
        !C6.firstElementChild ||
        C6.firstElementChild.classList.contains("black")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
        if (!C6.firstElementChild) {
          if (
            !B5.firstElementChild ||
            B5.firstElementChild.classList.contains("black")
          ) {
            B5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B5);
            if (!B5.firstElementChild) {
              if (
                !A4.firstElementChild ||
                A4.firstElementChild.classList.contains("black")
              ) {
                A4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(A4);
              }
            }
          }
        }
      }
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "D7") {
      // Top-right diagonal
      if (
        !E8.firstElementChild ||
        E8.firstElementChild.classList.contains("white")
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }

      // Bottom-right diagonal
      if (
        !E6.firstElementChild ||
        E6.firstElementChild.classList.contains("white")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
        if (!E6.firstElementChild) {
          if (
            !F5.firstElementChild ||
            F5.firstElementChild.classList.contains("white")
          ) {
            F5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F5);
            if (!F5.firstElementChild) {
              if (
                !G4.firstElementChild ||
                G4.firstElementChild.classList.contains("white")
              ) {
                G4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(G4);
                if (!G4.firstElementChild) {
                  if (
                    !H3.firstElementChild ||
                    H3.firstElementChild.classList.contains("white")
                  ) {
                    H3.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(H3);
                  }
                }
              }
            }
          }
        }
      }

      // Top-left diagonal
      if (
        !C8.firstElementChild ||
        C8.firstElementChild.classList.contains("white")
      ) {
        C8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C8);
      }

      // Bottom-left diagonal
      if (
        !C6.firstElementChild ||
        C6.firstElementChild.classList.contains("white")
      ) {
        C6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(C6);
        if (!C6.firstElementChild) {
          if (
            !B5.firstElementChild ||
            B5.firstElementChild.classList.contains("white")
          ) {
            B5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(B5);
            if (!B5.firstElementChild) {
              if (
                !A4.firstElementChild ||
                A4.firstElementChild.classList.contains("white")
              ) {
                A4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(A4);
              }
            }
          }
        }
      }
    }
  }
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "E2") {
      // Top-right diagonal
      if (
        !F3.firstElementChild ||
        F3.firstElementChild.classList.contains("black")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
        if (!F3.firstElementChild) {
          if (
            !G4.firstElementChild ||
            G4.firstElementChild.classList.contains("black")
          ) {
            G4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G4);
            if (!G4.firstElementChild) {
              if (
                !H5.firstElementChild ||
                H5.firstElementChild.classList.contains("black")
              ) {
                H5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H5);
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !F1.firstElementChild ||
        F1.firstElementChild.classList.contains("black")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }

      // Top-left diagonal
      if (
        !D3.firstElementChild ||
        D3.firstElementChild.classList.contains("black")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
        if (!D3.firstElementChild) {
          if (
            !C4.firstElementChild ||
            C4.firstElementChild.classList.contains("black")
          ) {
            C4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C4);
            if (!C4.firstElementChild) {
              if (
                !B5.firstElementChild ||
                B5.firstElementChild.classList.contains("black")
              ) {
                B5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(B5);
                if (!B5.firstElementChild) {
                  if (
                    !A6.firstElementChild ||
                    A6.firstElementChild.classList.contains("black")
                  ) {
                    A6.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(A6);
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !D1.firstElementChild ||
        D1.firstElementChild.classList.contains("black")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "E2") {
      // Top-right diagonal
      if (
        !F3.firstElementChild ||
        F3.firstElementChild.classList.contains("white")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
        if (!F3.firstElementChild) {
          if (
            !G4.firstElementChild ||
            G4.firstElementChild.classList.contains("white")
          ) {
            G4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G4);
            if (!G4.firstElementChild) {
              if (
                !H5.firstElementChild ||
                H5.firstElementChild.classList.contains("white")
              ) {
                H5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H5);
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !F1.firstElementChild ||
        F1.firstElementChild.classList.contains("white")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }

      // Top-left diagonal
      if (
        !D3.firstElementChild ||
        D3.firstElementChild.classList.contains("white")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
        if (!D3.firstElementChild) {
          if (
            !C4.firstElementChild ||
            C4.firstElementChild.classList.contains("white")
          ) {
            C4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C4);
            if (!C4.firstElementChild) {
              if (
                !B5.firstElementChild ||
                B5.firstElementChild.classList.contains("white")
              ) {
                B5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(B5);
                if (!B5.firstElementChild) {
                  if (
                    !A6.firstElementChild ||
                    A6.firstElementChild.classList.contains("white")
                  ) {
                    A6.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(A6);
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !D1.firstElementChild ||
        D1.firstElementChild.classList.contains("white")
      ) {
        D1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D1);
      }
    }
  }
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "E4") {
      // Top-right diagonal
      if (
        !F5.firstElementChild ||
        F5.firstElementChild.classList.contains("black")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
        if (!F5.firstElementChild) {
          if (
            !G6.firstElementChild ||
            G6.firstElementChild.classList.contains("black")
          ) {
            G6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G6);
            if (!G6.firstElementChild) {
              if (
                !H7.firstElementChild ||
                H7.firstElementChild.classList.contains("black")
              ) {
                H7.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H7);
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !F3.firstElementChild ||
        F3.firstElementChild.classList.contains("black")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
        if (!F3.firstElementChild) {
          if (
            !G2.firstElementChild ||
            G2.firstElementChild.classList.contains("black")
          ) {
            G2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G2);
            if (!G2.firstElementChild) {
              if (
                !H1.firstElementChild ||
                H1.firstElementChild.classList.contains("black")
              ) {
                H1.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H1);
              }
            }
          }
        }
      }

      // Top-left diagonal
      if (
        !D5.firstElementChild ||
        D5.firstElementChild.classList.contains("black")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
        if (!D5.firstElementChild) {
          if (
            !C6.firstElementChild ||
            C6.firstElementChild.classList.contains("black")
          ) {
            C6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C6);
            if (!C6.firstElementChild) {
              if (
                !B7.firstElementChild ||
                B7.firstElementChild.classList.contains("black")
              ) {
                B7.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(B7);
                if (!B7.firstElementChild) {
                  if (
                    !A8.firstElementChild ||
                    A8.firstElementChild.classList.contains("black")
                  ) {
                    A8.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(A8);
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !D3.firstElementChild ||
        D3.firstElementChild.classList.contains("black")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
        if (!D3.firstElementChild) {
          if (
            !C2.firstElementChild ||
            C2.firstElementChild.classList.contains("black")
          ) {
            C2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C2);
            if (!C2.firstElementChild) {
              if (
                !B1.firstElementChild ||
                B1.firstElementChild.classList.contains("black")
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

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "E4") {
      // Top-right diagonal
      if (
        !F5.firstElementChild ||
        F5.firstElementChild.classList.contains("white")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
        if (!F5.firstElementChild) {
          if (
            !G6.firstElementChild ||
            G6.firstElementChild.classList.contains("white")
          ) {
            G6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G6);
            if (!G6.firstElementChild) {
              if (
                !H7.firstElementChild ||
                H7.firstElementChild.classList.contains("white")
              ) {
                H7.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H7);
              }
            }
          }
        }
      }

      // Bottom-right diagonal
      if (
        !F3.firstElementChild ||
        F3.firstElementChild.classList.contains("white")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
        if (!F3.firstElementChild) {
          if (
            !G2.firstElementChild ||
            G2.firstElementChild.classList.contains("white")
          ) {
            G2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G2);
            if (!G2.firstElementChild) {
              if (
                !H1.firstElementChild ||
                H1.firstElementChild.classList.contains("white")
              ) {
                H1.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H1);
              }
            }
          }
        }
      }

      // Top-left diagonal
      if (
        !D5.firstElementChild ||
        D5.firstElementChild.classList.contains("white")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
        if (!D5.firstElementChild) {
          if (
            !C6.firstElementChild ||
            C6.firstElementChild.classList.contains("white")
          ) {
            C6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C6);
            if (!C6.firstElementChild) {
              if (
                !B7.firstElementChild ||
                B7.firstElementChild.classList.contains("white")
              ) {
                B7.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(B7);
                if (!B7.firstElementChild) {
                  if (
                    !A8.firstElementChild ||
                    A8.firstElementChild.classList.contains("white")
                  ) {
                    A8.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(A8);
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !D3.firstElementChild ||
        D3.firstElementChild.classList.contains("white")
      ) {
        D3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D3);
        if (!D3.firstElementChild) {
          if (
            !C2.firstElementChild ||
            C2.firstElementChild.classList.contains("white")
          ) {
            C2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C2);
            if (!C2.firstElementChild) {
              if (
                !B1.firstElementChild ||
                B1.firstElementChild.classList.contains("white")
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
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "E6") {
      // Top-right diagonal
      if (
        !F7.firstElementChild ||
        F7.firstElementChild.classList.contains("black")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
        if (!F7.firstElementChild) {
          if (
            !G8.firstElementChild ||
            G8.firstElementChild.classList.contains("black")
          ) {
            G8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G8);
          }
        }
      }

      // Bottom-right diagonal
      if (
        !F5.firstElementChild ||
        F5.firstElementChild.classList.contains("black")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
        if (!F5.firstElementChild) {
          if (
            !G4.firstElementChild ||
            G4.firstElementChild.classList.contains("black")
          ) {
            G4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G4);
            if (!G4.firstElementChild) {
              if (
                !H3.firstElementChild ||
                H3.firstElementChild.classList.contains("black")
              ) {
                H3.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H3);
              }
            }
          }
        }
      }

      // Top-left diagonal
      if (
        !D7.firstElementChild ||
        D7.firstElementChild.classList.contains("black")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
        if (!D7.firstElementChild) {
          if (
            !C8.firstElementChild ||
            C8.firstElementChild.classList.contains("black")
          ) {
            C8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C8);
          }
        }
      }

      // Bottom-left diagonal
      if (
        !D5.firstElementChild ||
        D5.firstElementChild.classList.contains("black")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
        if (!D5.firstElementChild) {
          if (
            !C4.firstElementChild ||
            C4.firstElementChild.classList.contains("black")
          ) {
            C4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C4);
            if (!C4.firstElementChild) {
              if (
                !B3.firstElementChild ||
                B3.firstElementChild.classList.contains("black")
              ) {
                B3.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(B3);
                if (!B3.firstElementChild) {
                  if (
                    !A2.firstElementChild ||
                    A2.firstElementChild.classList.contains("black")
                  ) {
                    A2.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(A2);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "E6") {
      // Top-right diagonal
      if (
        !F7.firstElementChild ||
        F7.firstElementChild.classList.contains("white")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
        if (!F7.firstElementChild) {
          if (
            !G8.firstElementChild ||
            G8.firstElementChild.classList.contains("white")
          ) {
            G8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G8);
          }
        }
      }

      // Bottom-right diagonal
      if (
        !F5.firstElementChild ||
        F5.firstElementChild.classList.contains("white")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
        if (!F5.firstElementChild) {
          if (
            !G4.firstElementChild ||
            G4.firstElementChild.classList.contains("white")
          ) {
            G4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G4);
            if (!G4.firstElementChild) {
              if (
                !H3.firstElementChild ||
                H3.firstElementChild.classList.contains("white")
              ) {
                H3.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H3);
              }
            }
          }
        }
      }

      // Top-left diagonal
      if (
        !D7.firstElementChild ||
        D7.firstElementChild.classList.contains("white")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
        if (!D7.firstElementChild) {
          if (
            !C8.firstElementChild ||
            C8.firstElementChild.classList.contains("white")
          ) {
            C8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C8);
          }
        }
      }

      // Bottom-left diagonal
      if (
        !D5.firstElementChild ||
        D5.firstElementChild.classList.contains("white")
      ) {
        D5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D5);
        if (!D5.firstElementChild) {
          if (
            !C4.firstElementChild ||
            C4.firstElementChild.classList.contains("white")
          ) {
            C4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C4);
            if (!C4.firstElementChild) {
              if (
                !B3.firstElementChild ||
                B3.firstElementChild.classList.contains("white")
              ) {
                B3.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(B3);
                if (!B3.firstElementChild) {
                  if (
                    !A2.firstElementChild ||
                    A2.firstElementChild.classList.contains("white")
                  ) {
                    A2.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(A2);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "E8") {
      // Bottom-right diagonal
      if (
        !F7.firstElementChild ||
        F7.firstElementChild.classList.contains("black")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
        if (!F7.firstElementChild) {
          if (
            !G6.firstElementChild ||
            G6.firstElementChild.classList.contains("black")
          ) {
            G6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G6);
            if (!G6.firstElementChild) {
              if (
                !H5.firstElementChild ||
                H5.firstElementChild.classList.contains("black")
              ) {
                H5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H5);
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !D7.firstElementChild ||
        D7.firstElementChild.classList.contains("black")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
        if (!D7.firstElementChild) {
          if (
            !C6.firstElementChild ||
            C6.firstElementChild.classList.contains("black")
          ) {
            C6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C6);
            if (!C6.firstElementChild) {
              if (
                !B5.firstElementChild ||
                B5.firstElementChild.classList.contains("black")
              ) {
                B5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(B5);
                if (!B5.firstElementChild) {
                  if (
                    !A4.firstElementChild ||
                    A4.firstElementChild.classList.contains("black")
                  ) {
                    A4.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(A4);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "E8") {
      // Bottom-right diagonal
      if (
        !F7.firstElementChild ||
        F7.firstElementChild.classList.contains("white")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
        if (!F7.firstElementChild) {
          if (
            !G6.firstElementChild ||
            G6.firstElementChild.classList.contains("white")
          ) {
            G6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(G6);
            if (!G6.firstElementChild) {
              if (
                !H5.firstElementChild ||
                H5.firstElementChild.classList.contains("white")
              ) {
                H5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(H5);
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !D7.firstElementChild ||
        D7.firstElementChild.classList.contains("white")
      ) {
        D7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(D7);
        if (!D7.firstElementChild) {
          if (
            !C6.firstElementChild ||
            C6.firstElementChild.classList.contains("white")
          ) {
            C6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(C6);
            if (!C6.firstElementChild) {
              if (
                !B5.firstElementChild ||
                B5.firstElementChild.classList.contains("white")
              ) {
                B5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(B5);
                if (!B5.firstElementChild) {
                  if (
                    !A4.firstElementChild ||
                    A4.firstElementChild.classList.contains("white")
                  ) {
                    A4.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(A4);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "F1") {
      // Top-right diagonal
      if (
        !G2.firstElementChild ||
        G2.firstElementChild.classList.contains("black")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
        if (!G2.firstElementChild) {
          if (
            !H3.firstElementChild ||
            H3.firstElementChild.classList.contains("black")
          ) {
            H3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H3);
          }
        }
      }

      // Top-left diagonal
      if (
        !E2.firstElementChild ||
        E2.firstElementChild.classList.contains("black")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
        if (!E2.firstElementChild) {
          if (
            !D3.firstElementChild ||
            D3.firstElementChild.classList.contains("black")
          ) {
            D3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D3);
            if (!D3.firstElementChild) {
              if (
                !C4.firstElementChild ||
                C4.firstElementChild.classList.contains("black")
              ) {
                C4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(C4);
                if (!C4.firstElementChild) {
                  if (
                    !B5.firstElementChild ||
                    B5.firstElementChild.classList.contains("black")
                  ) {
                    B5.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(B5);
                    if (!B5.firstElementChild) {
                      if (
                        !A6.firstElementChild ||
                        A6.firstElementChild.classList.contains("black")
                      ) {
                        A6.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(A6);
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

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "F1") {
      // Top-right diagonal
      if (
        !G2.firstElementChild ||
        G2.firstElementChild.classList.contains("white")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
        if (!G2.firstElementChild) {
          if (
            !H3.firstElementChild ||
            H3.firstElementChild.classList.contains("white")
          ) {
            H3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H3);
          }
        }
      }

      // Top-left diagonal
      if (
        !E2.firstElementChild ||
        E2.firstElementChild.classList.contains("white")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
        if (!E2.firstElementChild) {
          if (
            !D3.firstElementChild ||
            D3.firstElementChild.classList.contains("white")
          ) {
            D3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D3);
            if (!D3.firstElementChild) {
              if (
                !C4.firstElementChild ||
                C4.firstElementChild.classList.contains("white")
              ) {
                C4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(C4);
                if (!C4.firstElementChild) {
                  if (
                    !B5.firstElementChild ||
                    B5.firstElementChild.classList.contains("white")
                  ) {
                    B5.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(B5);
                    if (!B5.firstElementChild) {
                      if (
                        !A6.firstElementChild ||
                        A6.firstElementChild.classList.contains("white")
                      ) {
                        A6.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(A6);
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
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "F3") {
      // Top-right diagonal
      if (
        !G4.firstElementChild ||
        G4.firstElementChild.classList.contains("black")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
        if (!G4.firstElementChild) {
          if (
            !H5.firstElementChild ||
            H5.firstElementChild.classList.contains("black")
          ) {
            H5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H5);
          }
        }
      }

      // Bottom-right diagonal
      if (
        !G2.firstElementChild ||
        G2.firstElementChild.classList.contains("black")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
        if (!G2.firstElementChild) {
          if (
            !H1.firstElementChild ||
            H1.firstElementChild.classList.contains("black")
          ) {
            H1.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H1);
          }
        }
      }

      // Top-left diagonal
      if (
        !E4.firstElementChild ||
        E4.firstElementChild.classList.contains("black")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
        if (!E4.firstElementChild) {
          if (
            !D5.firstElementChild ||
            D5.firstElementChild.classList.contains("black")
          ) {
            D5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D5);
            if (!D5.firstElementChild) {
              if (
                !C6.firstElementChild ||
                C6.firstElementChild.classList.contains("black")
              ) {
                C6.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(C6);
                if (!C6.firstElementChild) {
                  if (
                    !B7.firstElementChild ||
                    B7.firstElementChild.classList.contains("black")
                  ) {
                    B7.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(B7);
                    if (!B7.firstElementChild) {
                      if (
                        !A8.firstElementChild ||
                        A8.firstElementChild.classList.contains("black")
                      ) {
                        A8.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(A8);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !E2.firstElementChild ||
        E2.firstElementChild.classList.contains("black")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
        if (!E2.firstElementChild) {
          if (
            !D1.firstElementChild ||
            D1.firstElementChild.classList.contains("black")
          ) {
            D1.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D1);
          }
        }
      }
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "F3") {
      // Top-right diagonal
      if (
        !G4.firstElementChild ||
        G4.firstElementChild.classList.contains("white")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
        if (!G4.firstElementChild) {
          if (
            !H5.firstElementChild ||
            H5.firstElementChild.classList.contains("white")
          ) {
            H5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H5);
          }
        }
      }

      // Bottom-right diagonal
      if (
        !G2.firstElementChild ||
        G2.firstElementChild.classList.contains("white")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
        if (!G2.firstElementChild) {
          if (
            !H1.firstElementChild ||
            H1.firstElementChild.classList.contains("white")
          ) {
            H1.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H1);
          }
        }
      }

      // Top-left diagonal
      if (
        !E4.firstElementChild ||
        E4.firstElementChild.classList.contains("white")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
        if (!E4.firstElementChild) {
          if (
            !D5.firstElementChild ||
            D5.firstElementChild.classList.contains("white")
          ) {
            D5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D5);
            if (!D5.firstElementChild) {
              if (
                !C6.firstElementChild ||
                C6.firstElementChild.classList.contains("white")
              ) {
                C6.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(C6);
                if (!C6.firstElementChild) {
                  if (
                    !B7.firstElementChild ||
                    B7.firstElementChild.classList.contains("white")
                  ) {
                    B7.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(B7);
                    if (!B7.firstElementChild) {
                      if (
                        !A8.firstElementChild ||
                        A8.firstElementChild.classList.contains("white")
                      ) {
                        A8.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(A8);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !E2.firstElementChild ||
        E2.firstElementChild.classList.contains("white")
      ) {
        E2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E2);
        if (!E2.firstElementChild) {
          if (
            !D1.firstElementChild ||
            D1.firstElementChild.classList.contains("white")
          ) {
            D1.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D1);
          }
        }
      }
    }
  }

  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "F5") {
      // Top-right diagonal
      if (
        !G6.firstElementChild ||
        G6.firstElementChild.classList.contains("black")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
        if (!G6.firstElementChild) {
          if (
            !H7.firstElementChild ||
            H7.firstElementChild.classList.contains("black")
          ) {
            H7.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H7);
          }
        }
      }

      // Bottom-right diagonal
      if (
        !G4.firstElementChild ||
        G4.firstElementChild.classList.contains("black")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
        if (!G4.firstElementChild) {
          if (
            !H3.firstElementChild ||
            H3.firstElementChild.classList.contains("black")
          ) {
            H3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H3);
          }
        }
      }

      // Top-left diagonal
      if (
        !E6.firstElementChild ||
        E6.firstElementChild.classList.contains("black")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
        if (!E6.firstElementChild) {
          if (
            !D7.firstElementChild ||
            D7.firstElementChild.classList.contains("black")
          ) {
            D7.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D7);
            if (!D7.firstElementChild) {
              if (
                !C8.firstElementChild ||
                C8.firstElementChild.classList.contains("black")
              ) {
                C8.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(C8);
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !E4.firstElementChild ||
        E4.firstElementChild.classList.contains("black")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
        if (!E4.firstElementChild) {
          if (
            !D3.firstElementChild ||
            D3.firstElementChild.classList.contains("black")
          ) {
            D3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D3);
            if (!D3.firstElementChild) {
              if (
                !C2.firstElementChild ||
                C2.firstElementChild.classList.contains("black")
              ) {
                C2.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(C2);
                if (!C2.firstElementChild) {
                  if (
                    !B1.firstElementChild ||
                    B1.firstElementChild.classList.contains("black")
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

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "F5") {
      // Top-right diagonal
      if (
        !G6.firstElementChild ||
        G6.firstElementChild.classList.contains("white")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
        if (!G6.firstElementChild) {
          if (
            !H7.firstElementChild ||
            H7.firstElementChild.classList.contains("white")
          ) {
            H7.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H7);
          }
        }
      }

      // Bottom-right diagonal
      if (
        !G4.firstElementChild ||
        G4.firstElementChild.classList.contains("white")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
        if (!G4.firstElementChild) {
          if (
            !H3.firstElementChild ||
            H3.firstElementChild.classList.contains("white")
          ) {
            H3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H3);
          }
        }
      }

      // Top-left diagonal
      if (
        !E6.firstElementChild ||
        E6.firstElementChild.classList.contains("white")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
        if (!E6.firstElementChild) {
          if (
            !D7.firstElementChild ||
            D7.firstElementChild.classList.contains("white")
          ) {
            D7.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D7);
            if (!D7.firstElementChild) {
              if (
                !C8.firstElementChild ||
                C8.firstElementChild.classList.contains("white")
              ) {
                C8.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(C8);
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !E4.firstElementChild ||
        E4.firstElementChild.classList.contains("white")
      ) {
        E4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E4);
        if (!E4.firstElementChild) {
          if (
            !D3.firstElementChild ||
            D3.firstElementChild.classList.contains("white")
          ) {
            D3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D3);
            if (!D3.firstElementChild) {
              if (
                !C2.firstElementChild ||
                C2.firstElementChild.classList.contains("white")
              ) {
                C2.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(C2);
                if (!C2.firstElementChild) {
                  if (
                    !B1.firstElementChild ||
                    B1.firstElementChild.classList.contains("white")
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
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "F7") {
      // Top-right diagonal
      if (
        !G8.firstElementChild ||
        G8.firstElementChild.classList.contains("black")
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }

      // Bottom-right diagonal
      if (
        !G6.firstElementChild ||
        G6.firstElementChild.classList.contains("black")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
        if (!G6.firstElementChild) {
          if (
            !H5.firstElementChild ||
            H5.firstElementChild.classList.contains("black")
          ) {
            H5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H5);
          }
        }
      }

      // Top-left diagonal
      if (
        !E8.firstElementChild ||
        E8.firstElementChild.classList.contains("black")
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }

      // Bottom-left diagonal
      if (
        !E6.firstElementChild ||
        E6.firstElementChild.classList.contains("black")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
        if (!E6.firstElementChild) {
          if (
            !D5.firstElementChild ||
            D5.firstElementChild.classList.contains("black")
          ) {
            D5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D5);
            if (!D5.firstElementChild) {
              if (
                !C4.firstElementChild ||
                C4.firstElementChild.classList.contains("black")
              ) {
                C4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(C4);
                if (!C4.firstElementChild) {
                  if (
                    !B3.firstElementChild ||
                    B3.firstElementChild.classList.contains("black")
                  ) {
                    B3.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(B3);
                    if (!B3.firstElementChild) {
                      if (
                        !A2.firstElementChild ||
                        A2.firstElementChild.classList.contains("black")
                      ) {
                        A2.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(A2);
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

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "F7") {
      // Top-right diagonal
      if (
        !G8.firstElementChild ||
        G8.firstElementChild.classList.contains("white")
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }

      // Bottom-right diagonal
      if (
        !G6.firstElementChild ||
        G6.firstElementChild.classList.contains("white")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
        if (!G6.firstElementChild) {
          if (
            !H5.firstElementChild ||
            H5.firstElementChild.classList.contains("white")
          ) {
            H5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(H5);
          }
        }
      }

      // Top-left diagonal
      if (
        !E8.firstElementChild ||
        E8.firstElementChild.classList.contains("white")
      ) {
        E8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E8);
      }

      // Bottom-left diagonal
      if (
        !E6.firstElementChild ||
        E6.firstElementChild.classList.contains("white")
      ) {
        E6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(E6);
        if (!E6.firstElementChild) {
          if (
            !D5.firstElementChild ||
            D5.firstElementChild.classList.contains("white")
          ) {
            D5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(D5);
            if (!D5.firstElementChild) {
              if (
                !C4.firstElementChild ||
                C4.firstElementChild.classList.contains("white")
              ) {
                C4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(C4);
                if (!C4.firstElementChild) {
                  if (
                    !B3.firstElementChild ||
                    B3.firstElementChild.classList.contains("white")
                  ) {
                    B3.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(B3);
                    if (!B3.firstElementChild) {
                      if (
                        !A2.firstElementChild ||
                        A2.firstElementChild.classList.contains("white")
                      ) {
                        A2.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(A2);
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
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "G2") {
      // Top-right diagonal
      if (
        !H3.firstElementChild ||
        H3.firstElementChild.classList.contains("black")
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }

      // Top-left diagonal
      if (
        !F3.firstElementChild ||
        F3.firstElementChild.classList.contains("black")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
        if (!F3.firstElementChild) {
          if (
            !E4.firstElementChild ||
            E4.firstElementChild.classList.contains("black")
          ) {
            E4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E4);
            if (!E4.firstElementChild) {
              if (
                !D5.firstElementChild ||
                D5.firstElementChild.classList.contains("black")
              ) {
                D5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D5);
                if (!D5.firstElementChild) {
                  if (
                    !C6.firstElementChild ||
                    C6.firstElementChild.classList.contains("black")
                  ) {
                    C6.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(C6);
                    if (!C6.firstElementChild) {
                      if (
                        !B7.firstElementChild ||
                        B7.firstElementChild.classList.contains("black")
                      ) {
                        B7.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(B7);
                        if (!B7.firstElementChild) {
                          if (
                            !A8.firstElementChild ||
                            A8.firstElementChild.classList.contains("black")
                          ) {
                            A8.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(A8);
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

      // Bottom-right diagonal
      if (
        !H1.firstElementChild ||
        H1.firstElementChild.classList.contains("black")
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }

      // Bottom-left diagonal
      if (
        !F1.firstElementChild ||
        F1.firstElementChild.classList.contains("black")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
        if (!F1.firstElementChild) {
          if (
            !E0 ||
            !E0.firstElementChild ||
            E0.firstElementChild.classList.contains("black")
          ) {
            // Skip: E0 does not exist
          }
        }
      }
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "G2") {
      // Top-right diagonal
      if (
        !H3.firstElementChild ||
        H3.firstElementChild.classList.contains("white")
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }

      // Top-left diagonal
      if (
        !F3.firstElementChild ||
        F3.firstElementChild.classList.contains("white")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
        if (!F3.firstElementChild) {
          if (
            !E4.firstElementChild ||
            E4.firstElementChild.classList.contains("white")
          ) {
            E4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E4);
            if (!E4.firstElementChild) {
              if (
                !D5.firstElementChild ||
                D5.firstElementChild.classList.contains("white")
              ) {
                D5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D5);
                if (!D5.firstElementChild) {
                  if (
                    !C6.firstElementChild ||
                    C6.firstElementChild.classList.contains("white")
                  ) {
                    C6.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(C6);
                    if (!C6.firstElementChild) {
                      if (
                        !B7.firstElementChild ||
                        B7.firstElementChild.classList.contains("white")
                      ) {
                        B7.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(B7);
                        if (!B7.firstElementChild) {
                          if (
                            !A8.firstElementChild ||
                            A8.firstElementChild.classList.contains("white")
                          ) {
                            A8.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(A8);
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

      // Bottom-right diagonal
      if (
        !H1.firstElementChild ||
        H1.firstElementChild.classList.contains("white")
      ) {
        H1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H1);
      }

      // Bottom-left diagonal
      if (
        !F1.firstElementChild ||
        F1.firstElementChild.classList.contains("white")
      ) {
        F1.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F1);
      }
    }
  }
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "G4") {
      // Top-right diagonal
      if (
        !H5.firstElementChild ||
        H5.firstElementChild.classList.contains("black")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }

      // Bottom-right diagonal
      if (
        !H3.firstElementChild ||
        H3.firstElementChild.classList.contains("black")
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }

      // Top-left diagonal
      if (
        !F5.firstElementChild ||
        F5.firstElementChild.classList.contains("black")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
        if (!F5.firstElementChild) {
          if (
            !E6.firstElementChild ||
            E6.firstElementChild.classList.contains("black")
          ) {
            E6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E6);
            if (!E6.firstElementChild) {
              if (
                !D7.firstElementChild ||
                D7.firstElementChild.classList.contains("black")
              ) {
                D7.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D7);
                if (!D7.firstElementChild) {
                  if (
                    !C8.firstElementChild ||
                    C8.firstElementChild.classList.contains("black")
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

      // Bottom-left diagonal
      if (
        !F3.firstElementChild ||
        F3.firstElementChild.classList.contains("black")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
        if (!F3.firstElementChild) {
          if (
            !E2.firstElementChild ||
            E2.firstElementChild.classList.contains("black")
          ) {
            E2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E2);
            if (!E2.firstElementChild) {
              if (
                !D1.firstElementChild ||
                D1.firstElementChild.classList.contains("black")
              ) {
                D1.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D1);
              }
            }
          }
        }
      }
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "G4") {
      // Top-right diagonal
      if (
        !H5.firstElementChild ||
        H5.firstElementChild.classList.contains("white")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }

      // Bottom-right diagonal
      if (
        !H3.firstElementChild ||
        H3.firstElementChild.classList.contains("white")
      ) {
        H3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H3);
      }

      // Top-left diagonal
      if (
        !F5.firstElementChild ||
        F5.firstElementChild.classList.contains("white")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
        if (!F5.firstElementChild) {
          if (
            !E6.firstElementChild ||
            E6.firstElementChild.classList.contains("white")
          ) {
            E6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E6);
            if (!E6.firstElementChild) {
              if (
                !D7.firstElementChild ||
                D7.firstElementChild.classList.contains("white")
              ) {
                D7.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D7);
                if (!D7.firstElementChild) {
                  if (
                    !C8.firstElementChild ||
                    C8.firstElementChild.classList.contains("white")
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

      // Bottom-left diagonal
      if (
        !F3.firstElementChild ||
        F3.firstElementChild.classList.contains("white")
      ) {
        F3.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F3);
        if (!F3.firstElementChild) {
          if (
            !E2.firstElementChild ||
            E2.firstElementChild.classList.contains("white")
          ) {
            E2.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E2);
            if (!E2.firstElementChild) {
              if (
                !D1.firstElementChild ||
                D1.firstElementChild.classList.contains("white")
              ) {
                D1.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D1);
              }
            }
          }
        }
      }
    }
  }
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "G6") {
      // Top-right diagonal
      if (
        !H7.firstElementChild ||
        H7.firstElementChild.classList.contains("black")
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }

      // Bottom-right diagonal
      if (
        !H5.firstElementChild ||
        H5.firstElementChild.classList.contains("black")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }

      // Top-left diagonal
      if (
        !F7.firstElementChild ||
        F7.firstElementChild.classList.contains("black")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
        if (!F7.firstElementChild) {
          if (
            !E8.firstElementChild ||
            E8.firstElementChild.classList.contains("black")
          ) {
            E8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E8);
          }
        }
      }

      // Bottom-left diagonal
      if (
        !F5.firstElementChild ||
        F5.firstElementChild.classList.contains("black")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
        if (!F5.firstElementChild) {
          if (
            !E4.firstElementChild ||
            E4.firstElementChild.classList.contains("black")
          ) {
            E4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E4);
            if (!E4.firstElementChild) {
              if (
                !D3.firstElementChild ||
                D3.firstElementChild.classList.contains("black")
              ) {
                D3.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D3);
                if (!D3.firstElementChild) {
                  if (
                    !C2.firstElementChild ||
                    C2.firstElementChild.classList.contains("black")
                  ) {
                    C2.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(C2);
                    if (!C2.firstElementChild) {
                      if (
                        !B1.firstElementChild ||
                        B1.firstElementChild.classList.contains("black")
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

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "G6") {
      // Top-right diagonal
      if (
        !H7.firstElementChild ||
        H7.firstElementChild.classList.contains("white")
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }

      // Bottom-right diagonal
      if (
        !H5.firstElementChild ||
        H5.firstElementChild.classList.contains("white")
      ) {
        H5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H5);
      }

      // Top-left diagonal
      if (
        !F7.firstElementChild ||
        F7.firstElementChild.classList.contains("white")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
        if (!F7.firstElementChild) {
          if (
            !E8.firstElementChild ||
            E8.firstElementChild.classList.contains("white")
          ) {
            E8.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E8);
          }
        }
      }

      // Bottom-left diagonal
      if (
        !F5.firstElementChild ||
        F5.firstElementChild.classList.contains("white")
      ) {
        F5.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F5);
        if (!F5.firstElementChild) {
          if (
            !E4.firstElementChild ||
            E4.firstElementChild.classList.contains("white")
          ) {
            E4.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E4);
            if (!E4.firstElementChild) {
              if (
                !D3.firstElementChild ||
                D3.firstElementChild.classList.contains("white")
              ) {
                D3.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D3);
                if (!D3.firstElementChild) {
                  if (
                    !C2.firstElementChild ||
                    C2.firstElementChild.classList.contains("white")
                  ) {
                    C2.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(C2);
                    if (!C2.firstElementChild) {
                      if (
                        !B1.firstElementChild ||
                        B1.firstElementChild.classList.contains("white")
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
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "G8") {
      // Top-right diagonal: none (off-board)

      // Bottom-right diagonal
      if (
        !H7.firstElementChild ||
        H7.firstElementChild.classList.contains("black")
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }

      // Top-left diagonal: none (off-board)

      // Bottom-left diagonal
      if (
        !F7.firstElementChild ||
        F7.firstElementChild.classList.contains("black")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
        if (!F7.firstElementChild) {
          if (
            !E6.firstElementChild ||
            E6.firstElementChild.classList.contains("black")
          ) {
            E6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E6);
            if (!E6.firstElementChild) {
              if (
                !D5.firstElementChild ||
                D5.firstElementChild.classList.contains("black")
              ) {
                D5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D5);
                if (!D5.firstElementChild) {
                  if (
                    !C4.firstElementChild ||
                    C4.firstElementChild.classList.contains("black")
                  ) {
                    C4.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(C4);
                    if (!C4.firstElementChild) {
                      if (
                        !B3.firstElementChild ||
                        B3.firstElementChild.classList.contains("black")
                      ) {
                        B3.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(B3);
                        if (!B3.firstElementChild) {
                          if (
                            !A2.firstElementChild ||
                            A2.firstElementChild.classList.contains("black")
                          ) {
                            A2.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(A2);
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

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "G8") {
      // Top-right diagonal: none (off-board)

      // Bottom-right diagonal
      if (
        !H7.firstElementChild ||
        H7.firstElementChild.classList.contains("white")
      ) {
        H7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(H7);
      }

      // Top-left diagonal: none (off-board)

      // Bottom-left diagonal
      if (
        !F7.firstElementChild ||
        F7.firstElementChild.classList.contains("white")
      ) {
        F7.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(F7);
        if (!F7.firstElementChild) {
          if (
            !E6.firstElementChild ||
            E6.firstElementChild.classList.contains("white")
          ) {
            E6.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(E6);
            if (!E6.firstElementChild) {
              if (
                !D5.firstElementChild ||
                D5.firstElementChild.classList.contains("white")
              ) {
                D5.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(D5);
                if (!D5.firstElementChild) {
                  if (
                    !C4.firstElementChild ||
                    C4.firstElementChild.classList.contains("white")
                  ) {
                    C4.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(C4);
                    if (!C4.firstElementChild) {
                      if (
                        !B3.firstElementChild ||
                        B3.firstElementChild.classList.contains("white")
                      ) {
                        B3.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(B3);
                        if (!B3.firstElementChild) {
                          if (
                            !A2.firstElementChild ||
                            A2.firstElementChild.classList.contains("white")
                          ) {
                            A2.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(A2);
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

  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "H1") {
      // Top-right diagonal: none (off-board)

      // Bottom-right diagonal: none (off-board)

      // Top-left diagonal
      if (
        !G2.firstElementChild ||
        G2.firstElementChild.classList.contains("black")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
        if (!G2.firstElementChild) {
          if (
            !F3.firstElementChild ||
            F3.firstElementChild.classList.contains("black")
          ) {
            F3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F3);
            if (!F3.firstElementChild) {
              if (
                !E4.firstElementChild ||
                E4.firstElementChild.classList.contains("black")
              ) {
                E4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E4);
                if (!E4.firstElementChild) {
                  if (
                    !D5.firstElementChild ||
                    D5.firstElementChild.classList.contains("black")
                  ) {
                    D5.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(D5);
                    if (!D5.firstElementChild) {
                      if (
                        !C6.firstElementChild ||
                        C6.firstElementChild.classList.contains("black")
                      ) {
                        C6.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(C6);
                        if (!C6.firstElementChild) {
                          if (
                            !B7.firstElementChild ||
                            B7.firstElementChild.classList.contains("black")
                          ) {
                            B7.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(B7);
                            if (!B7.firstElementChild) {
                              if (
                                !A8.firstElementChild ||
                                A8.firstElementChild.classList.contains("black")
                              ) {
                                A8.classList.toggle("highlightBlue");
                                recentlyHighlightedElements.push(A8);
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
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "H1") {
      // Top-right diagonal: none (off-board)

      // Bottom-right diagonal: none (off-board)

      // Top-left diagonal
      if (
        !G2.firstElementChild ||
        G2.firstElementChild.classList.contains("white")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
        if (!G2.firstElementChild) {
          if (
            !F3.firstElementChild ||
            F3.firstElementChild.classList.contains("white")
          ) {
            F3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F3);
            if (!F3.firstElementChild) {
              if (
                !E4.firstElementChild ||
                E4.firstElementChild.classList.contains("white")
              ) {
                E4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E4);
                if (!E4.firstElementChild) {
                  if (
                    !D5.firstElementChild ||
                    D5.firstElementChild.classList.contains("white")
                  ) {
                    D5.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(D5);
                    if (!D5.firstElementChild) {
                      if (
                        !C6.firstElementChild ||
                        C6.firstElementChild.classList.contains("white")
                      ) {
                        C6.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(C6);
                        if (!C6.firstElementChild) {
                          if (
                            !B7.firstElementChild ||
                            B7.firstElementChild.classList.contains("white")
                          ) {
                            B7.classList.toggle("highlightBlue");
                            recentlyHighlightedElements.push(B7);
                            if (!B7.firstElementChild) {
                              if (
                                !A8.firstElementChild ||
                                A8.firstElementChild.classList.contains("white")
                              ) {
                                A8.classList.toggle("highlightBlue");
                                recentlyHighlightedElements.push(A8);
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
    }
  }

  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "H3") {
      // Top-right diagonal: none (off-board)

      // Top-left diagonal
      if (
        !G4.firstElementChild ||
        G4.firstElementChild.classList.contains("black")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
        if (!G4.firstElementChild) {
          if (
            !F5.firstElementChild ||
            F5.firstElementChild.classList.contains("black")
          ) {
            F5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F5);
            if (!F5.firstElementChild) {
              if (
                !E6.firstElementChild ||
                E6.firstElementChild.classList.contains("black")
              ) {
                E6.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E6);
                if (!E6.firstElementChild) {
                  if (
                    !D7.firstElementChild ||
                    D7.firstElementChild.classList.contains("black")
                  ) {
                    D7.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(D7);
                    if (!D7.firstElementChild) {
                      if (
                        !C8.firstElementChild ||
                        C8.firstElementChild.classList.contains("black")
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
        }
      }

      // Bottom-left diagonal
      if (
        !G2.firstElementChild ||
        G2.firstElementChild.classList.contains("black")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
        if (!G2.firstElementChild) {
          if (
            !F1.firstElementChild ||
            F1.firstElementChild.classList.contains("black")
          ) {
            F1.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F1);
          }
        }
      }
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "H3") {
      // Top-right diagonal: none (off-board)

      // Bottom-right diagonal

      // Top-left diagonal
      if (
        !G4.firstElementChild ||
        G4.firstElementChild.classList.contains("white")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
        if (!G4.firstElementChild) {
          if (
            !F5.firstElementChild ||
            F5.firstElementChild.classList.contains("white")
          ) {
            F5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F5);
            if (!F5.firstElementChild) {
              if (
                !E6.firstElementChild ||
                E6.firstElementChild.classList.contains("white")
              ) {
                E6.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E6);
                if (!E6.firstElementChild) {
                  if (
                    !D7.firstElementChild ||
                    D7.firstElementChild.classList.contains("white")
                  ) {
                    D7.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(D7);
                    if (!D7.firstElementChild) {
                      if (
                        !C8.firstElementChild ||
                        C8.firstElementChild.classList.contains("white")
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
        }
      }

      // Bottom-left diagonal
      if (
        !G2.firstElementChild ||
        G2.firstElementChild.classList.contains("white")
      ) {
        G2.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G2);
        if (!G2.firstElementChild) {
          if (
            !F1.firstElementChild ||
            F1.firstElementChild.classList.contains("white")
          ) {
            F1.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F1);
          }
        }
      }
    }
  }
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "H5") {
      // Top-left diagonal
      if (
        !G6.firstElementChild ||
        G6.firstElementChild.classList.contains("black")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
        if (!G6.firstElementChild) {
          if (
            !F7.firstElementChild ||
            F7.firstElementChild.classList.contains("black")
          ) {
            F7.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F7);
            if (!F7.firstElementChild) {
              if (
                !E8.firstElementChild ||
                E8.firstElementChild.classList.contains("black")
              ) {
                E8.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E8);
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !G4.firstElementChild ||
        G4.firstElementChild.classList.contains("black")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
        if (!G4.firstElementChild) {
          if (
            !F3.firstElementChild ||
            F3.firstElementChild.classList.contains("black")
          ) {
            F3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F3);
            if (!F3.firstElementChild) {
              if (
                !E2.firstElementChild ||
                E2.firstElementChild.classList.contains("black")
              ) {
                E2.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E2);
                if (!E2.firstElementChild) {
                  if (
                    !D1.firstElementChild ||
                    D1.firstElementChild.classList.contains("black")
                  ) {
                    D1.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(D1);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "H5") {
      // Top-left diagonal
      if (
        !G6.firstElementChild ||
        G6.firstElementChild.classList.contains("white")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
        if (!G6.firstElementChild) {
          if (
            !F7.firstElementChild ||
            F7.firstElementChild.classList.contains("white")
          ) {
            F7.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F7);
            if (!F7.firstElementChild) {
              if (
                !E8.firstElementChild ||
                E8.firstElementChild.classList.contains("white")
              ) {
                E8.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E8);
              }
            }
          }
        }
      }

      // Bottom-left diagonal
      if (
        !G4.firstElementChild ||
        G4.firstElementChild.classList.contains("white")
      ) {
        G4.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G4);
        if (!G4.firstElementChild) {
          if (
            !F3.firstElementChild ||
            F3.firstElementChild.classList.contains("white")
          ) {
            F3.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F3);
            if (!F3.firstElementChild) {
              if (
                !E2.firstElementChild ||
                E2.firstElementChild.classList.contains("white")
              ) {
                E2.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E2);
                if (!E2.firstElementChild) {
                  if (
                    !D1.firstElementChild ||
                    D1.firstElementChild.classList.contains("white")
                  ) {
                    D1.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(D1);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // White Bishop (wSquareWhiteBishop)
  if (selectedPiece.classList.contains("wSquareWhiteBishop")) {
    if (currentSquare === "H7") {
      // Top-left diagonal
      if (
        !G8.firstElementChild ||
        G8.firstElementChild.classList.contains("black")
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }

      // Bottom-left diagonal
      if (
        !G6.firstElementChild ||
        G6.firstElementChild.classList.contains("black")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
        if (!G6.firstElementChild) {
          if (
            !F5.firstElementChild ||
            F5.firstElementChild.classList.contains("black")
          ) {
            F5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F5);
            if (!F5.firstElementChild) {
              if (
                !E4.firstElementChild ||
                E4.firstElementChild.classList.contains("black")
              ) {
                E4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E4);
                if (!E4.firstElementChild) {
                  if (
                    !D3.firstElementChild ||
                    D3.firstElementChild.classList.contains("black")
                  ) {
                    D3.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(D3);
                    if (!D3.firstElementChild) {
                      if (
                        !C2.firstElementChild ||
                        C2.firstElementChild.classList.contains("black")
                      ) {
                        C2.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(C2);
                        if (!C2.firstElementChild) {
                          if (
                            !B1.firstElementChild ||
                            B1.firstElementChild.classList.contains("black")
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

      // Top-right diagonal: none (off-board)
      // Bottom-right diagonal: none (off-board)
    }
  }

  // Black Bishop (wSquareBlackBishop)
  if (selectedPiece.classList.contains("wSquareBlackBishop")) {
    if (currentSquare === "H7") {
      // Top-left diagonal
      if (
        !G8.firstElementChild ||
        G8.firstElementChild.classList.contains("white")
      ) {
        G8.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G8);
      }

      // Bottom-left diagonal
      if (
        !G6.firstElementChild ||
        G6.firstElementChild.classList.contains("white")
      ) {
        G6.classList.toggle("highlightBlue");
        recentlyHighlightedElements.push(G6);
        if (!G6.firstElementChild) {
          if (
            !F5.firstElementChild ||
            F5.firstElementChild.classList.contains("white")
          ) {
            F5.classList.toggle("highlightBlue");
            recentlyHighlightedElements.push(F5);
            if (!F5.firstElementChild) {
              if (
                !E4.firstElementChild ||
                E4.firstElementChild.classList.contains("white")
              ) {
                E4.classList.toggle("highlightBlue");
                recentlyHighlightedElements.push(E4);
                if (!E4.firstElementChild) {
                  if (
                    !D3.firstElementChild ||
                    D3.firstElementChild.classList.contains("white")
                  ) {
                    D3.classList.toggle("highlightBlue");
                    recentlyHighlightedElements.push(D3);
                    if (!D3.firstElementChild) {
                      if (
                        !C2.firstElementChild ||
                        C2.firstElementChild.classList.contains("white")
                      ) {
                        C2.classList.toggle("highlightBlue");
                        recentlyHighlightedElements.push(C2);
                        if (!C2.firstElementChild) {
                          if (
                            !B1.firstElementChild ||
                            B1.firstElementChild.classList.contains("white")
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

      // Top-right diagonal: none (off-board)
      // Bottom-right diagonal: none (off-board)
    }
  }
};
