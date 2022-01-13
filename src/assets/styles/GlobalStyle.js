import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
      box-sizing: border-box;
    }

  body {
      font-family: 'Rubik';
      line-height: 1.5;
      color: ${({ theme }) => theme.text}
  }

  button, input, textarea {
    font-family: inherit;
    font-size: 1em;
  }
`;

export default GlobalStyle;
