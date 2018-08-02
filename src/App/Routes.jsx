import React from "react";
import { Switch, Route } from "react-router-dom";
import { AuthRoute } from "components/atoms";

import * as Screens from "components/screens";

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Screens.Login} />
    <Route exact path="/signup" component={Screens.Login} />
    <Route exact path="/learn" component={Screens.LearnMore} />
    <Route exact path="/locations" component={Screens.Locations} />
    <Route exact path="/users/:username" component={Screens.Users} />
    <AuthRoute exact path="/unions" component={Screens.Unions} />
    <AuthRoute exact path="/home" component={Screens.Home} />
    <AuthRoute exact path="/home/messages" component={Screens.MyMessages} />
    <AuthRoute
      exact
      path="/home/notifications"
      component={Screens.MyNotifications}
    />
    <AuthRoute exact path="/threads/:id" component={Screens.Thread} />
    <Route path="/" component={Screens.Landing} />
  </Switch>
);

export default Routes;
