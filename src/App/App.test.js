import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

it("the app component itself can render without crashing", () => {
  shallow(<App />);
});

it("the entire application renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
