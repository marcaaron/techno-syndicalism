import { connect } from "react-redux";

import AuthRoute from "./AuthRoute";

const mapStateToProps = ({ user }) => {
  return {
    isAuthenticated: user.isAuthenticated
  };
};

export default connect(mapStateToProps)(AuthRoute);
