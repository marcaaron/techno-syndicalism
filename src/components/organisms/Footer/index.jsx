import React from "react";
import styled from "styled-components";

import { Url } from "components/atoms";
import { Github } from "components/atoms/Icons";
import { DevLoginButton } from "components/molecules";

const Footer = () => (
  <Wrapper>
    <StyledFooter>
      <Item>
        <DevLoginButton />
      </Item>
      <Item>
        <Url href="https://github.com/King-Mob/techno-syndicalism">
          <Github title="Find us on Github" />
        </Url>
      </Item>
    </StyledFooter>
  </Wrapper>
);

// A wrapping element is required to prevent the transfrom
//    from creating a horizontal scrollbar
const Wrapper = styled.div`
  grid-area: footer;
  position: relative;
  overflow: hidden;
`;

const StyledFooter = styled.footer`
  /* display */
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: end;
  align-content: center;
  /* box */
  width: 100%;
  height: 100%;
  transform: rotate(-2deg) skew(-2deg);
  /* colors */
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 50vh 0 50vh ${({ theme }) => theme.colors.black};
`;

const Item = styled.div`
  justify-self: end;
  transform: rotate(2deg) skew(2deg);
`;

export default Footer;
