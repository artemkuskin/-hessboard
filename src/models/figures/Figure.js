export class Figure {
  color;
  logo;
  cell;
  name;
  id;
  constructor(color, cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.id = Math.random();
  }

  canMove(target) {
    return true;
  }

  moveFigure(target) {}
}
