export class Cell {
  x;
  y;
  color;
  figure;
  board;
  avalibale;
  id;

  constructor(x, y, color, figure, board, avalibale) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.board = board;
    this.avalibale = avalibale;
    this.id = Math.random();
  }

  moveFigure(target) {
    if (this.figure && this.figure?.canMove(target)) {
      this.figure.moveFigure(target);
      target.figure = this.figure;
      this.figure = null;
    }
  }
}
