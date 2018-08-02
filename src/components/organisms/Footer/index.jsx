import React from "react";
import styled from "styled-components";

import { LoginBtn } from "components/molecules";

const Footer = () => (
  <Wrapper>
    <StyledFooter>
      <LoginBtn />
    </StyledFooter>
  </Wrapper>
);

const Wrapper = styled.div`
  overflow: hidden;
  bottom: 0;
  width: 100%;
  max-height: 10vh;
  flex: 1;
`;

const StyledFooter = styled.footer`
  /* display */
  display: flex;
  justify-content: center;
  flex: 1;

  /* box */
  padding-top: 2%;

  /* colors */
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};

  /* extends the footer to the bottom of the page */
  box-shadow: 0 50vh 0 50vh ${({ theme }) => theme.colors.white};
`;

export default Footer;
