import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { ImagePlaceholder } from "components/atoms";

class Image extends Component {
  static propTypes = {
    url: PropTypes.string,
    alt: PropTypes.string,
    style: PropTypes.object
  };

  state = {
    isMounted: false
  };

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  renderPlaceholder = () => {
    const { style } = this.props;
    return <ImagePlaceholder alt="Loading..." style={style} />;
  };

  renderImage = () => {
    const { style, alt, url } = this.props;
    return <img src={url} alt={alt} style={style} />;
  };

  render() {
    const { isMounted } = this.state;

    return (
      <Fragment>
        {!isMounted ? this.renderPlaceholder() : this.renderImage()}
      </Fragment>
    );
  }
}

export default Image;
