import React from "react";
import styled from "styled-components";

import { Paragraph, StyledLink } from "components/atoms";

const NewestItem = () => (
  <StyledParagraph>
    <StyledLink to="/learn">
      <AngleBracket />&nbsp;Learn more about who we are...
    </StyledLink>
  </StyledParagraph>
);

const AngleBracket = () => <span>&gt;</span>;

const StyledParagraph = styled(Paragraph)`
  font-size: 0.8em;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  margin: 4% 3% auto;
  padding: 3px 10px;
  border-radius: 20px;
`;

export default NewestItem;
