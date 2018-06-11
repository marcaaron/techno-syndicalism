import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

import throttle from "lodash/throttle";

import reducers from "state/reducers";
import { loadState, saveState } from "./localStorage";

function configureStore(preloadedState) {
  const persistedState = loadState() || preloadedState;

  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const storeEnhancers = [middlewareEnhancer];
  const composedEnhancer = composeWithDevTools(...storeEnhancers);

  // Configure our store
  const store = createStore(reducers, persistedState, composedEnhancer);

  // Saves a section of our store to localStorage.
  // Throttled to reduce the number of times this action is called.
  store.subscribe(
    throttle(() => {
      saveState({
        user: store.getState().user
      });
    }, 1000) // milliseconds
  );

  // Extends Hot Module Reloading to the Redux store
  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("state/reducers", () => {
        const newreducers = require("state/reducers").default;
        store.replaceReducer(newreducers);
      });
    }
  }

  return store;
}

export default configureStore;
