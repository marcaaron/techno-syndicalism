import React from "react";

import MyComponent from "../Avatar";

it("renders without crashing", () => {
  shallow(<MyComponent url="/test" />);
});
