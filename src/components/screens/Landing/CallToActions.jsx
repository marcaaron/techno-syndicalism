import React from "react";

import { ButtonNav } from "components/atoms";

const CallToActions = () => (
  <div>
    <ButtonNav to="/login">Create An Account</ButtonNav>
    <ButtonNav to="/locations" isWhite>
      Find My Workplace
    </ButtonNav>
  </div>
);

export default CallToActions;
