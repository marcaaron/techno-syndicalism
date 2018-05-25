import styled from "styled-components";

const TextVisibility = styled.span`
  @media screen and (max-width: ${({ theme }) => theme.screens.mobile}) {
    display: none;
  }
`;

export default TextVisibility;
