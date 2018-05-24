import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default StyledLink;
