import blackLogo from "../../iicon/pawn-black.png";
import whiteLogo from "../../iicon/pawn-white.png";
import { Figure } from "./Figure";

export class Pawn extends Figure {
  constructor(color, cell) {
    super(color, cell);
    this.logo = color === "black" ? blackLogo : whiteLogo;
    this.name = "Pawn";
  }
}
