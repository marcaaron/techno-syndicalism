import React from "react";

import { MainContent } from "components/atoms";
import { AppContext } from "state/context/app";

const MyNotifications = () => (
  <MainContent>
    <p>My Notifications</p>
    <AppContext.Consumer>
      {app => (
        <div>
          <p>Notifications: {app.notifications}</p>
          <button name="notifications" value={1} onClick={app.updateCounter}>
            +1
          </button>
          <button name="notifications" value={-1} onClick={app.updateCounter}>
            -1
          </button>
        </div>
      )}
    </AppContext.Consumer>
  </MainContent>
);

export default MyNotifications;
