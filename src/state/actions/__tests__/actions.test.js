import { testDispatch } from "state/actions";
import { ACTIONS } from "state/types";

describe("actions", () => {
  it("should create an action without a payload", () => {
    const expectedAction = {
      type: ACTIONS.TEST_DISPATCH
    };
    expect(testDispatch()).toEqual(expectedAction);
  });
});
