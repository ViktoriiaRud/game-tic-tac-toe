import React from 'react';
import { ThemeProvider } from 'styled-components';
import {theme} from "./theme/theme";
import GlobalStyle from "./theme/globalStyles";
import Game from "./components/game";

const App: React.FC = () => {
  return (
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Game/>
      </ThemeProvider>
  );
};

export default App;