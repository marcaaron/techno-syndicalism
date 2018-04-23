import React, { StrictMode } from "react";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

// Uncomment for production
// import registerServiceWorker from './util/registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// Uncomment for production
// registerServiceWorker();
