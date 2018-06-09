import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// state
import { AppProvider } from "state/context/app";
import { ApolloProvider } from "react-apollo";
import client from "state/client";

// style
import { ThemeProvider } from "styled-components";
import theme from "./theme";

// polyfills
import "whatwg-fetch"; // Additional support for fetch on older browsers

// Store a reference to the DOM element [Hot Module Reloading]
const root = document.getElementById("root");

// Wrap our render in a reusable function [Hot Module Reloading]
let render = () => {
  const App = require("./App").default;

  ReactDOM.render(
    <ApolloProvider client={client}>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </AppProvider>
    </ApolloProvider>,
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
