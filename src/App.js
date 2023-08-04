import Board from './Board.jsx';
import './styles.css';

function App() {
  return (
    <div className='flexbox-container'>
      <div className='board'>
        <h1>Kat's Tic-Tac-Toe App</h1>
        <Board />
      </div>
    </div>
  );
}

export default App;
