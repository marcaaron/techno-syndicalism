import { injectGlobal } from "styled-components";

import WebFont from "webfontloader";

import "normalize.css";

WebFont.load({
  google: {
    families: ["Roboto", "Roboto Slab"]
  }
});

const theme = {
  screens: {
    mobile: "600px",
    tablet: "900px",
    landscape: "1200px"
  },
  fonts: {
    primary: "'Roboto Slab', serif",
    secondary: "'Roboto', sans-serif",
    tertiary: "monospace"
  },
  colors: {
    white: "#ffffff" /* white */,
    black: "#111111" /* black */,
    primary: "#26a69a" /* teal */,
    primaryLight: "#64d8cb" /* lighter teal */,
    primaryDark: "#00766c" /* darker teal */,
    secondary: "#03a9f4" /* light blue */,
    secondaryLight: "#67daff" /* lighter light blue */,
    secondaryDark: "#007ac1" /* darker light blue */
  }
};

injectGlobal`
  html, body {
    box-sizing: border-box;
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    margin: 0;
    padding: 0;
    font-size: 1em;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    /* border: 0.5px solid pink;  */
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.secondary};
  }
  input {
    font-family: ${theme.fonts.tertiary}
  }
`;

export default theme;
