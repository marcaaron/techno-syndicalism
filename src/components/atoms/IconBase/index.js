import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withBaseIcon } from "react-icons-kit";

const IconBase = ({ icon, title, isButton, ...rest }) => {
  if (isButton) {
    return (
      <StyledButton {...rest}>
        <WithBaseIcon icon={icon} title={title} />
      </StyledButton>
    );
  } else {
    return <WithBaseIcon icon={icon} title={title} {...rest} />;
  }
};

const StyledButton = styled.button`
  background: inherit;
  color: inherit;
  border: inherit;
  cursor: pointer;
`;

const WithBaseIcon = withBaseIcon({
  size: "2em",
  style: { margin: "auto 15px" }
});

IconBase.propTypes = {
  isButton: PropTypes.bool,
  icon: PropTypes.any,
  title: PropTypes.string
};

export default IconBase;
