import { combineReducers } from "redux";

// Reducers
import app from "./app";
import user from "./user";
import testReducer from "./testReducer";

const reducers = combineReducers({
  app,
  user,
  test: testReducer
});

export default reducers;
