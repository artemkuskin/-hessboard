export const CellComponent = ({ cell, selected, click }) => {
  return (
    <div onClick={() => click(cell)} className={!selected ? ["cell ", cell.color].join("") : "selected"} style={{}}>
      <div
        className={!cell.figure && cell.avalibale ? "avialable" : ""}
        style={{ background: cell.figure && cell.avalibale ? "green" : "" }}
      ></div>
      {cell.figure?.logo && <img src={cell.figure?.logo} />}
    </div>
  );
};
