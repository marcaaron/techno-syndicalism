import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

class Avatar extends Component {
  static propTypes = {
    url: PropTypes.string
  };

  state = {
    isMounted: false
  };

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    const { isMounted } = this.state;
    const { url } = this.props;

    if (!isMounted) {
      return <EmptyImage />;
    } else {
      return <StyledImage alt="broken" src={url} />;
    }
  }
}

const EmptyImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: auto 15px;
`;

const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: auto 15px;
`;

export default Avatar;
