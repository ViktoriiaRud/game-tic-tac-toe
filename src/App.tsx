import React from 'react';
import Board from "./components/board";
import { ThemeProvider } from 'styled-components';
import {theme} from "./theme/theme";
import GlobalStyle from "./theme/globalStyles";

const App: React.FC = () => {
  return (
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Board/>
      </ThemeProvider>
  );
};

export default App;
