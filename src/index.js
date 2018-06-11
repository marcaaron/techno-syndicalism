import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// state - Redux
import { Provider } from "react-redux";
import configureStore from "./state/store";

// state - GraphQL
import { ApolloProvider } from "react-apollo";
import client from "./state/graphql-client";

// style
import { ThemeProvider } from "styled-components";
import theme from "./theme";

// polyfills
import "whatwg-fetch"; // Additional support for fetch on older browsers

// Configure the app state
const store = configureStore();

// Store a reference to the DOM element [Hot Module Reloading]
const root = document.getElementById("root");

// Wrap our render in a reusable function [Hot Module Reloading]
let render = () => {
  const App = require("./App").default;

  ReactDOM.render(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
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
