import React from "react";
import "./box.css";
interface BoxProps {
  value: string;
  onClick: () => void;
}
const Box: React.FC<BoxProps> = ({ value, onClick }) => {
  const style = value === "X" ? "box-button x" : "box-button o";
  return (
    <>
      <button className={style} onClick={onClick}>
        {value}
      </button>
    </>
  );
};

export default Box;
