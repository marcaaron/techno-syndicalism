import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonFlat = styled.button``;

ButtonFlat.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func
};
ButtonFlat.defaultProps = {
  style: {
    background: "inherit",
    color: "inherit",
    border: "inherit",
    cursor: "pointer"
  }
};

export default ButtonFlat;
