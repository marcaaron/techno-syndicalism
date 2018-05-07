import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { AppProvider } from "./state/context/app";
import theme from "./theme";

// Polyfill for the Fetch API
import "whatwg-fetch";

// Store a reference to the DOM element [Hot Module Reloading]
const root = document.getElementById("root");

// Wrap our render in a reusable function [Hot Module Reloading]
let render = () => {
  const App = require("./App").default;

  ReactDOM.render(
    <AppProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </AppProvider>,
    root
  );
};

// Configures Hot Module Reloading
if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    module.hot.accept("./App", () => {
      setTimeout(render);
    });
  }
}

// Render the app
render();
