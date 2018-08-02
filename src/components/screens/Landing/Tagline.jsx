import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { Paragraph } from "styles";

const Tagline = ({ tagline }) => (
  <Paragraph style={{ margin: "auto 4% 7%" }}>
    <span>{tagline}.</span>
  </Paragraph>
);

const mapStateToProps = ({ app }) => {
  return {
    tagline: app.tagline
  };
};

Tagline.propTypes = {
  tagline: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(Tagline);
