import React from "react";
import { Switch, Route } from "react-router-dom";
import { AuthRoute } from "components/atoms";

import * as Screens from "components/screens";

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Screens.Login} />
    <Route exact path="/signup" component={Screens.Login} />
    <Route exact path="/learn" component={Screens.LearnMore} />
    <Route exact path="/workplaces" component={Screens.FindWorkplaces} />
    <AuthRoute exact path="/profiles" component={Screens.Profiles} />
    <AuthRoute exact path="/unions" component={Screens.Unions} />
    <AuthRoute exact path="/home/dashboard" component={Screens.MyDashboard} />
    <AuthRoute exact path="/home/workplaces" component={Screens.MyWorkplaces} />
    <AuthRoute exact path="/home/settings" component={Screens.MySettings} />
    <AuthRoute exact path="/home/messages" component={Screens.MyMessages} />
    <AuthRoute
      exact
      path="/home/notifications"
      component={Screens.MyNotifications}
    />
    <AuthRoute exact path="/home" component={Screens.Home} />
    <AuthRoute exact path="/threads/:id" component={Screens.Thread} />
    <Route path="/" component={Screens.Landing} title="Explore" />
  </Switch>
);

export default Routes;
