import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
    }

    body {
        overflow-x: hidden;
        word-break: break-word;
        font-family: "Roboto Light", sans-serif;
        background-color: lemonchiffon;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 100px;
    }

    a[href], button {
        cursor: pointer;
    }

    a[href] {
        transition: all 0.1s linear 0s;
    }

    .tile {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10vmin;
        background: #F5980F;
        color: #238708;
    }

    .tile:before {
        content: attr(data-player);
    }
`;

export default GlobalStyle;
