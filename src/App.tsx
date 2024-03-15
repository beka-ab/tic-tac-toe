import { useState } from "react";
import ScoreBoard from "./components/ScoreBoard";
import "./App.css";
import Board from "./components/Board";
import Reset from "./components/Reset";

function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXplaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleBoxClick = (boxIdx: number) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    });
    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }

    setBoard(updatedBoard);
    setXplaying(!xPlaying);
  };
  const checkWinner = (board: string[]) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [a, b, c] = WIN_CONDITIONS[i];
      console.log(WIN_CONDITIONS[i]);
      console.log("Checking combination:", WIN_CONDITIONS[i]);
      console.log("Values at positions:", board[a]);

      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setGameOver(true);
        return board[a];
      }
    }
  };
  const resetGame = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };
  return (
    <>
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetGame : handleBoxClick} />
      <Reset reset={resetGame} />
    </>
  );
}

export default App;
