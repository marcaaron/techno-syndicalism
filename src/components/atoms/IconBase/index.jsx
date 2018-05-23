import React from "react";
import PropTypes from "prop-types";

import { withBaseIcon } from "react-icons-kit";

import { ButtonFlat } from "components/atoms";

const IconBase = ({ icon, isButton, title, ...rest }) => {
  if (isButton) {
    return (
      <ButtonFlat {...rest}>
        <WithBaseIcon icon={icon} title={title} />
      </ButtonFlat>
    );
  } else {
    return <WithBaseIcon icon={icon} title={title} {...rest} />;
  }
};

const WithBaseIcon = withBaseIcon({ size: "1em" });

IconBase.propTypes = {
  icon: PropTypes.any,
  isButton: PropTypes.bool,
  style: PropTypes.object,
  title: PropTypes.string
};

export default IconBase;
