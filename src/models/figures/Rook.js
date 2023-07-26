import blackLogo from "../../iicon/rook-black.png";
import whiteLogo from "../../iicon/rook-white.png";
import { Figure } from "./Figure";

export class Rook extends Figure {
  constructor(color, cell) {
    super(color, cell);
    this.logo = color === "black" ? blackLogo : whiteLogo;
    this.name = "Rook";
  }
}
