import React from 'react';
import Board from "./components/board";

const App: React.FC = () => {
  return (
      <div>
          <h2>Hello TicTacToe!</h2>
          <Board/>
      </div>
  );
};

export default App;
