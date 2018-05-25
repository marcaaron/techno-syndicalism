import React from "react";

import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";

import MyComponent from "../../NavBar";

storiesOf("Features", module)
  .addDecorator(StoryRouter())
  .add("NavBar", () => <MyComponent />);
