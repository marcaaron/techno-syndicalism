import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonRaised = styled.button`
  cursor: pointer;
  margin-left: 20px;
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: bold;

  /* color */
  color: ${({ isWhite, theme }) =>
    isWhite ? theme.colors.primaryDark : theme.colors.white};
  background-color: ${({ isWhite, theme }) =>
    isWhite ? theme.colors.white : theme.colors.secondary};

  &:hover {
    background-color: ${({ isWhite, theme }) =>
      isWhite ? theme.colors.secondaryLight : theme.colors.secondaryDark};
  }
`;

ButtonRaised.propTypes = {
  isWhite: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func
};
ButtonRaised.defaultProps = {
  style: {
    fontSize: "16px"
  }
};

export default ButtonRaised;
