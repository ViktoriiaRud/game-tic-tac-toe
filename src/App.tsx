import React from 'react';
import Board from "./components/board";
import Button from "./components/button";

const App: React.FC = () => {
  return (
      <div>
          <h2>Hello TicTacToe!</h2>
          <Board/>
          <Button>Click me!</Button>
      </div>
  );
};

export default App;
