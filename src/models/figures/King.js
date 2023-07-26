import blackLogo from "../../iicon/king-black.png";
import whiteLogo from "../../iicon/king-white.png";
import { Figure } from "./Figure";

export class King extends Figure {
  constructor(color, cell) {
    super(color, cell);
    this.logo = color === "black" ? blackLogo : whiteLogo;
    this.name = "King";
  }
}
