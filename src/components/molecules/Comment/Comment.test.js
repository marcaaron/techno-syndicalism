import React from "react";

import MyComponent from "../Comment";

it("renders without crashing", () => {
  const props = {
    email: "test",
    body: "test"
  };
  shallow(<MyComponent {...props} />);
});
