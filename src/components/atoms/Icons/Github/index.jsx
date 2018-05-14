import React from "react";
import PropTypes from "prop-types";
import { github } from "react-icons-kit/fa";

import { IconBase } from "components/atoms";

const Github = ({ title }) => <IconBase icon={github} title={title} />;

Github.propTypes = { title: PropTypes.string };
Github.defaultProps = { title: "Github" };

export default Github;
