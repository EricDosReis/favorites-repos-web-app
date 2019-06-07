import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #F9F2F2;
    font-family: "Ubuntu", "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Oxygen", "Helvetica Neue", Arial, sans-serif;
    font-size: 100%;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    outline: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
  }

  #root {
    width: 31.25rem;
    margin: 2rem auto 0;
    max-width: 90%;
  }

  input {
    background: none;
    border: none;
    border-bottom: 1px solid #CACACA;
    color: #403E3E;
    font-family: inherit;
    outline: none;
    padding: .5rem;
  }

  button {
    background: #2B5876;
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, .15);
    color: #F9F2F2;
    font-family: inherit;
    opacity: 1;
    outline: none;
    padding: .5rem 1rem;

    &:focus, &:hover {
      cursor: pointer;
      opacity: .75;
    }
  }
`;

export default GlobalStyle;
