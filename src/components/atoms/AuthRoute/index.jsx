import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { AppContext } from "state/context/app";

const AuthRoute = ({ component: Component, ...rest }) => (
  <AppContext.Consumer>
    {app => (
      <Route
        {...rest}
        render={props =>
          app.isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    )}
  </AppContext.Consumer>
);

AuthRoute.propTypes = {
  component: PropTypes.any.isRequired
};

export default AuthRoute;
