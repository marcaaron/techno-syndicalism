import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { AppProvider } from "./state/context/app";
import theme from "./theme";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// Polyfill for the Fetch API
import "whatwg-fetch";

// Set up Apollo Apollo Client
const client = new ApolloClient({ uri: "http://localhost:4000/graphql" });

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
