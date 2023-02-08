import { StateSchema } from "@/app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginIsLoading.test", () => {
  test("should return isLoading", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: "6616454",
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual("6616454");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual("");
  });
});
