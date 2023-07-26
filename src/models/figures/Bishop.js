import { Figure } from "./Figure";
import blackLogo from "../../iicon/bishop-black.png";
import whiteLogo from "../../iicon/bishop-white.png";

export class Bishop extends Figure {
  constructor(color, cell) {
    super(color, cell);
    this.logo = color === "black" ? blackLogo : whiteLogo;
    this.name = "Bishop";
  }
}
