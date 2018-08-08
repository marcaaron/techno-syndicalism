import styled from "styled-components";
import { Link } from "react-router-dom";

// Globals

export const StyledArticle = styled.article`
  margin: 0;
  padding: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  padding: 20px;
`;

export const StyledFormText = styled.p`
  text-align: center;
`;

export const StyledFormError = styled.p`
  border: 1px solid black;
  background-color: rgb(251, 245, 162);
  padding: 5px;
  margin: 0;
  margin-bottom: 20px;
`;

export const StyledH2 = styled.h2`
  padding: 20px 0 0 20px;
  margin: 0;
`;

export const StyledFormItem = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const Display = styled.div`
  /* display */
  display: flex;
  flex-direction: column;

  /* box */
  min-height: 100vh;
`;

export const StyledInput = styled.input`
  padding: 5px;
`;

export const StyledLabel = styled.label`
  padding-bottom: 5px;
`;

export const StyledButtonSubmit = styled.button`
  margin-top: 10px;
  padding: 5px 0;
`;

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

export const DescriptionContainer = styled.p`
  /* box */
  padding: 10px 30px;
  width: 90%;

  /* color */
  background-color: ${({ theme }) => theme.colors.white};

  /* text */
  font-size: 0.9em;
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

// Post

export const TitleText = styled.h3`
  /* box */
  margin-bottom: 0;

  /* text */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserText = styled.p`
  margin-top: 0;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 0.8em;
`;

export const BodyText = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// Footer

export const Wrapper = styled.div`
  overflow: hidden;
  bottom: 0;
  width: 100%;
  max-height: 10vh;
  flex: 1;
`;

export const StyledFooter = styled.footer`
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

// NavBar

export const StyledNavigation = styled.nav`
  /* display */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  /* box */
  position: relative;
  width: 100%;

  /* colors */
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  /* text */
  font-size: 1.1em;
`;

export const StyledList = styled.ul`
  /* display */
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  /* box */
  padding: 0;
  margin-left: 2%;
  list-style-type: none;
`;

export const NavItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
`;

export const CommentBox = styled.div`
  padding-left: 20px;
  border: solid 1px black;
`;
