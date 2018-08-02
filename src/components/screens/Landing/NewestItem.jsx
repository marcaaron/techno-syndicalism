import React from "react";
import styled from "styled-components";

import { AngleBracket } from "components/atoms";
import { StyledLink, Paragraph, StyledParagraph } from "styles";

const NewestItem = () => (
  <StyledParagraph>
    <StyledLink to="/learn">
      <AngleBracket />&nbsp;Learn more about who we are...
    </StyledLink>
  </StyledParagraph>
);

export default NewestItem;
