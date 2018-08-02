import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { Paragraph } from "styles";

const Tagline = props => (
  <Paragraph style={{ margin: "auto 4% 7%" }}>
    <span>Tagline</span>
  </Paragraph>
);

export default Tagline;
