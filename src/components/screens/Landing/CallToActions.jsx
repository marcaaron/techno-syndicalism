import React from "react";

import { ButtonNav } from "components/atoms";

const CallToActions = () => (
  <div>
    <ButtonNav to="/signup">Create An Account</ButtonNav>
    <ButtonNav to="/login">Login to Your Account</ButtonNav>
    <ButtonNav to="/locations" isWhite>
      Find A Group
    </ButtonNav>
  </div>
);

export default CallToActions;
