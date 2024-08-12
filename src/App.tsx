import React from 'react';
import { ThemeProvider } from 'styled-components';
import {theme} from "./theme/theme";
import GlobalStyle from "./theme/globalStyles";
import GameComponent from "./components/gameComponent/gameComponent";
import Game from "./components/game";


const App: React.FC = () => {
    return (
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <GameComponent/>
          <Game/>
      </ThemeProvider>
  );
};

export default App;