import React from "react";
import PropTypes from "prop-types";

import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({
  component: Component,
  userInfo: { isAuthenticated },
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

// AuthRoute.propTypes = {
//   component: PropTypes.any.isRequired,
//   isAuthenticated: PropTypes.bool.isRequired
// };

export default AuthRoute;
