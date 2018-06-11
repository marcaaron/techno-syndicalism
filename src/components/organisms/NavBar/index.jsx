import { connect } from "react-redux";

import NavBar from "./NavBar";

const mapStateToProps = ({ app, user }) => {
  return {
    appName: app.name,
    user
  };
};

export default connect(mapStateToProps)(NavBar);
