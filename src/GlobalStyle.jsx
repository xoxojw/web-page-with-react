import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --main-ft-color: #1a2431;
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--main-ft-color);
  }

  h1 {
    display: block;
    margin-block-start: 2vh;
    margin-block-end: 2vh;
    font-size: 2em;
    font-weight: 700;
  }

  h2 {
    display: block;
    margin-block-start: 2vh;
    margin-block-end: 2vh;
    font-size: 1.6em;
    font-weight: 700;
  }

  div {
    margin: 1vh;
  }
  
`;

export default GlobalStyle;