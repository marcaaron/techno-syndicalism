import React from "react";
import { signOut } from "util/loginUtils";
import { withApollo } from "react-apollo";

class ButtonSignout extends React.Component {
  handleClick = () => {
    signOut();
    this.props.client.resetStore();
  };
  render() {
    return <button onClick={this.handleClick}>Sign Out</button>;
  }
}

export default withApollo(ButtonSignout);
