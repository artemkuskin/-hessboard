import { Cell } from "./Cell";
import { Bishop } from "./figures/Bishop";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";

export class Board {
  cell = [];

  initCells() {
    for (let i = 0; i < 8; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        if ((j + i) % 2 !== 0) {
          row.push(new Cell(i, j, "white", null, this, false));
        } else {
          row.push(new Cell(i, j, "black", null, this, false));
        }
      }
      this.cell.push(row);
    }
  }

  getCopyBoard() {
    const newBoard = new Board();
    newBoard.cell = this.cell;
    return newBoard;
  }

  highlghtCells(selected) {
    for (let i = 0; i < this.cell.length; i++) {
      const row = this.cell[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        target.avalibale = !!selected?.figure?.canMove(target);
      }
    }
  }

  getCell(x, y) {
    return this.cell[y][x];
  }

  addQueen() {
    new Queen("black", this.getCell(3, 0));
    new Queen("white", this.getCell(3, 7));
  }
  addRook() {
    new Rook("black", this.getCell(0, 0));
    new Rook("black", this.getCell(7, 0));
    new Rook("white", this.getCell(7, 7));
    new Rook("white", this.getCell(0, 7));
  }
  addBishop() {
    new Bishop("black", this.getCell(2, 0));
    new Bishop("black", this.getCell(5, 0));
    new Bishop("white", this.getCell(2, 7));
    new Bishop("white", this.getCell(5, 7));
  }
  addKing() {
    new King("black", this.getCell(4, 0));
    new King("white", this.getCell(4, 7));
  }

  addPawn() {
    for (let i = 0; i < 8; i++) {
      new Pawn("black", this.getCell(i, 1));
      new Pawn("white", this.getCell(i, 6));
    }
  }
  addKnight() {
    new Knight("black", this.getCell(1, 0));
    new Knight("black", this.getCell(6, 0));
    new Knight("white", this.getCell(1, 7));
    new Knight("white", this.getCell(6, 7));
  }

  addFigure() {
    this.addQueen();
    this.addPawn();
    this.addBishop();
    this.addKing();
    this.addKnight();
    this.addRook();
  }
}
