import React from "react";

import { AngleBracket } from "components/atoms";
import { StyledLink, StyledParagraph } from "styles";

const NewestItem = () => (
  <StyledParagraph>
    <StyledLink to="/learn">
      <AngleBracket />&nbsp;Learn more about who we are...
    </StyledLink>
  </StyledParagraph>
);

export default NewestItem;
