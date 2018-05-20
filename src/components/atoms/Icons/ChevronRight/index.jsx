import React from "react";
import PropTypes from "prop-types";
import { ic_chevron_right } from "react-icons-kit/md/ic_chevron_right";

import { IconBase } from "components/atoms";

const ChevronRight = ({ title }) => (
  <IconBase icon={ic_chevron_right} title={title} />
);

ChevronRight.propTypes = { title: PropTypes.string };
ChevronRight.defaultProps = { title: "Right" };

export default ChevronRight;
