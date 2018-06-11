import { ACTIONS } from "state/types";
import { consoleDevOnly } from "util/functions";

export function testDispatch() {
  consoleDevOnly("Action:", ACTIONS.TEST_DISPATCH);
  return {
    type: ACTIONS.TEST_DISPATCH
  };
}

export function updateTestCounter(name, value) {
  consoleDevOnly("Action:", ACTIONS.UPDATE_TEST_COUNTER);
  return {
    type: ACTIONS.UPDATE_TEST_COUNTER,
    name,
    value
  };
}

export function toggleTestAuth(username) {
  consoleDevOnly("Action:", ACTIONS.TOGGLE_TEST_AUTH);
  return {
    type: ACTIONS.TOGGLE_TEST_AUTH,
    username
  };
}
