import styled from "styled-components";
import { Link } from "react-router-dom";

// Globals

export const Input = styled.input``;

export const Label = styled.label``;

export const Container = styled.main`
  /* display */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.4;
  margin: 20px 1%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

// Landing Page

export const StyledContainer = styled.main`
  /* display */
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  flex: 1;

  /* font */
  font-size: 1.5em;
  line-height: 1.4;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export const Panel = styled.div`
  /* display */
  flex: 1;

  /* box */
  min-width: 425px;
  padding-top: 3%;

  /* color */
  color: ${({ isWhite, theme }) =>
    isWhite ? theme.colors.primary : theme.colors.white};
  background-color: ${({ isWhite, theme }) =>
    isWhite ? theme.colors.white : theme.colors.primary};
`;

export const StyledParagraph = styled(Paragraph)`
  font-size: 0.8em;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  margin: 4% 3% auto;
  padding: 3px 10px;
  border-radius: 20px;
`;

// Thread

export const StyledContent = styled.div`
  max-width: 98vw;
  overflow: auto;
  background-color: white;
  width: 90%;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;
