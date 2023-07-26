import React, { useEffect, useState } from "react";
import { CellComponent } from "./CellComponent";

export const BoardComponent = ({ board, setBoard }) => {
  const [selected, setSelected] = useState(null);

  const click = (cell) => {
    if (selected && selected !== cell && selected.figure?.canMove(cell)) {
      selected.moveFigure(cell);
      setSelected(null);
    }
    if (cell.figure) {
      setSelected(cell);
    }
  };

  const highlghtCells = () => {
    board.highlghtCells(selected);
    updateBoard();
  };

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };
  useEffect(() => {
    highlghtCells();
  }, [selected]);
  return (
    <div className="board">
      {board.cell.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent
              cell={cell}
              selected={selected?.x === cell.x && selected?.y === cell.y}
              click={click}
              key={cell.id}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
