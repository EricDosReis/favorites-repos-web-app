import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    font-size: 100%;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    outline: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
  }
`;

export default GlobalStyle;
