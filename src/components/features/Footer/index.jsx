import React from "react";
import styled from "styled-components";

const Footer = () => (
  <StyledContainer>
    <p>
      Find us on{" "}
      <a href="https://github.com/King-Mob/techno-syndicalism">Github</a>
    </p>
  </StyledContainer>
);

const StyledContainer = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin: 20px;
  font-size: 0.6em;
`;

export default Footer;
