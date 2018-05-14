import React from "react";
import PropTypes from "prop-types";
import { ic_map } from "react-icons-kit/md";

import { IconBase } from "components/atoms";

const Map = ({ title }) => <IconBase icon={ic_map} title={title} />;

Map.propTypes = { title: PropTypes.string };
Map.defaultProps = { title: "Map" };

export default Map;
