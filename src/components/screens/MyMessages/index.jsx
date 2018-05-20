import React from "react";

import { AppContext } from "state/context/app";

const MyMessages = () => (
  <div>
    <p>My Messages</p>
    <AppContext.Consumer>
      {app => (
        <div>
          <p>Messages: {app.messages}</p>
          <button name="messages" value={1} onClick={app.updateCounter}>
            +1
          </button>
          <button name="messages" value={-1} onClick={app.updateCounter}>
            -1
          </button>
        </div>
      )}
    </AppContext.Consumer>
  </div>
);

export default MyMessages;
