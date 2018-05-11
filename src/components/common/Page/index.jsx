import styled from "styled-components";

const Page = styled.div`
  /* display */ /* fallback styles */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  /* box */ /* fallback styles */
  width: 100%;
  border-radius: 10px;
  margin: ${({ noSolidBackground }) =>
    noSolidBackground ? "auto" : "30px 0 auto"};
  padding: ${({ noSolidBackground }) =>
    noSolidBackground ? "10px 0" : "10px 1% 40px"};

  /* colors */
  background-color: ${({ noSolidBackground, theme }) =>
    noSolidBackground ? "none" : theme.colors.white};
`;

export default Page;
