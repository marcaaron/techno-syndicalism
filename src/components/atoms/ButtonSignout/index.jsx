import React, { Component } from "react";
import { signOut } from "util/loginUtils";
import { withApollo } from "react-apollo";
import ButtonSignoutView from "./ButtonSignoutView";

class ButtonSignout extends Component {
  handleClick = () => {
    signOut();
    this.props.client.resetStore();
  };
  render() {
    const { handleClick } = this;
    return <ButtonSignoutView handleClick={handleClick} />;
  }
}

export default withApollo(ButtonSignout);
