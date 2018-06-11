import { connect } from "react-redux";

import DevLoginButton from "./DevLoginButton";

import { toggleTestAuth } from "state/actions";

const mapStateToProps = ({ user }) => {
  return {
    isAuthenticated: user.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAuth: (isAuthenticated, username) => {
      dispatch(toggleTestAuth(username));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DevLoginButton);
