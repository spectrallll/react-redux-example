import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginIsLoading.test", () => {
  test("should return isLoading", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "6616454",
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual("6616454");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual("");
  });
});
