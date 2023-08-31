import { useState } from 'react';
import './styles.css';

function Square({ value, onSquareClick }) {
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board() {

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [count, setCount] = useState(0);

  const winner = calculateWinner(squares)

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (winner || nextSquares[i])
      return;
    if (xIsNext)
      nextSquares[i] = 'X';
    else
      nextSquares[i] = 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    setCount(count+1);
    return;
  }

  let gameStatus;
  if (winner)
    gameStatus = winner + " wins!";
  else
    if (count === 9)
      gameStatus = "Draw!";
    else
      gameStatus = (xIsNext ? "X" : "O") + "'s turn";

  return (
    <>
      <h2>{gameStatus}</h2>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );

}

function calculateWinner(squares) {

  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a];
  }

  return null;

}

export default Board;
