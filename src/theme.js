import { injectGlobal } from "styled-components";

import "normalize.css";

const theme = {
  fonts: {
    primary: "sans-serif",
    secondary: "serif",
    tertiary: "monospace"
  },
  colors: {
    white: "#FFFFFF" /* white */,
    black: "#111111" /* black */,
    background: "#00BFA5" /* Teal (MD A700) */
  }
};

injectGlobal`
  html, body {
    box-sizing: border-box;
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.black};
    background-color: ${theme.colors.background};
    margin: 0;
    padding: 0;
    font-size: 1em;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    /* border: 0.5px solid pink;  */
  }
  input {
    font-family: ${theme.fonts.tertiary}
  }
`;

export default theme;
