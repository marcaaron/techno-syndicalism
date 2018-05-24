import React from "react";
import PropTypes from "prop-types";
import { ic_person_outline } from "react-icons-kit/md";

import { IconNav } from "components/atoms";

const Anonymous = ({ title }) => (
  <IconNav icon={ic_person_outline} title={title} />
);

Anonymous.propTypes = { title: PropTypes.string };
Anonymous.defaultProps = { title: "Anonymous" };

export default Anonymous;
