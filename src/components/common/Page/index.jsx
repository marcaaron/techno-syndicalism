import styled from "styled-components";

const Page = styled.div`
  /* display */ /* fallback styles */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  /* box */ /* fallback styles */
  width: 94%;

  /* colors */
  background-color: ${({ isWhite, theme }) =>
    isWhite ? theme.colors.white : "none"};
  margin: ${({ isWhite }) => (isWhite ? "20px 2% auto" : "auto")};
  padding: ${({ isWhite }) => (isWhite ? "10px 1% 40px" : "10px 0")};
`;

export default Page;
