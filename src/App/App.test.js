import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import App from "../App";

import { AppProvider } from "../state/context/app";
import theme from "../theme";

it("the app component itself can render without crashing", () => {
  shallow(<App />);
});

it("the entire application can render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <AppProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </AppProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
