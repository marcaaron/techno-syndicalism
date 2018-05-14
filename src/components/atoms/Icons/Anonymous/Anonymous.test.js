import React from "react";

import MyComponent from "../Anonymous";

it("renders without crashing", () => {
  shallow(<MyComponent />);
});
