import React, { Component, Fragment } from "react";

import { Switch, Route } from "react-router-dom";

import { NavBar } from "../components/features";

// Routes
import {
  Account,
  Home,
  LandingPage,
  LearnMore,
  MyDashboard,
  MySettings,
  MyWorkplaces,
  Profiles,
  Unions,
  Workplaces
} from "../components/screens";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/account" component={Account} />
          <Route exact path="/learn" component={LearnMore} />
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/unions" component={Unions} />
          <Route exact path="/workplaces" component={Workplaces} />
          <Route exact path="/my/dashboard" component={MyDashboard} />
          <Route exact path="/my/workplaces" component={MyWorkplaces} />
          <Route exact path="/my/settings" component={MySettings} />
          <Route exact path="/my" component={Home} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
