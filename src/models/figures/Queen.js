import blackLogo from "../../iicon/queen-black.png";
import whiteLogo from "../../iicon/queen-white.png";
import { Figure } from "./Figure";

export class Queen extends Figure {
  constructor(color, cell) {
    super(color, cell);
    this.logo = color === "black" ? blackLogo : whiteLogo;
    this.name = "Queen";
  }
}
