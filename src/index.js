<<<<<<< 55d493b2c78b011e0f0c3114ba7d7d0b02c2d32a
import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

// Uncomment for production
// import registerServiceWorker from './util/registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// Uncomment for production
// registerServiceWorker();
=======
import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

// Uncomment for production
// import registerServiceWorker from './util/registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// Uncomment for production
// registerServiceWorker();
>>>>>>> Refactor React Router Demo; also turn off StrictMode
