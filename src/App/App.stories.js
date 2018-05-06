import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import StoryRouter from "storybook-react-router";

import { Button, Welcome } from "@storybook/react/demo";
import App from "../App";

storiesOf("Welcome", module)
  .add("to Storybook", () => <Welcome showApp={linkTo("Button")} />)
  .addDecorator(StoryRouter())
  .add("to the App", () => <App />);

storiesOf("Common/Buttons", module).add("Storybook Example", () => (
  <Button>An example component provided by Storybook</Button>
));
