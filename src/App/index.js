import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

// Routes
import LandingPage from "../components/screens/LandingPage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    );
  }
}

export default App;
