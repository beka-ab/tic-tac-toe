import React from "react";
import "./board.css";
import Box from "./Box";
interface BoardProps {
  board: string[];
  onClick: (idx: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, onClick }) => {
  return (
    <>
      <div onClick={() => null} className="baord">
        {board.map((value, idx) => {
          return (
            <Box value={value} onClick={() => value === null && onClick(idx)} />
          );
        })}
      </div>
    </>
  );
};

export default Board;
