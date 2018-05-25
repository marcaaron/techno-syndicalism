import React from "react";
import PropTypes from "prop-types";
import { bulb } from "react-icons-kit/entypo";

import { IconNav } from "components/atoms";

const Lightbulb = ({ title }) => <IconNav icon={bulb} title={title} />;

Lightbulb.propTypes = { title: PropTypes.string };
Lightbulb.defaultProps = { title: "Lightbulb" };

export default Lightbulb;
