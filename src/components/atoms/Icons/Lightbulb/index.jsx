import React from "react";
import PropTypes from "prop-types";
import { bulb } from "react-icons-kit/entypo";

import { IconBase } from "components/atoms";

const Lightbulb = ({ title }) => <IconBase icon={bulb} title={title} />;

Lightbulb.propTypes = { title: PropTypes.string };
Lightbulb.defaultProps = { title: "Lightbulb" };

export default Lightbulb;
