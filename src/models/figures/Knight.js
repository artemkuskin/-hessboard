import blackLogo from "../../iicon/Knight-black.png";
import whiteLogo from "../../iicon/Knight-white.png";
import { Figure } from "./Figure";

export class Knight extends Figure {
  constructor(color, cell) {
    super(color, cell);
    this.logo = color === "black" ? blackLogo : whiteLogo;
    this.name = "Knight";
  }
}
