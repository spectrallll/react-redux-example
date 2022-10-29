import { DeepPartial } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/LoginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice.test", () => {
  test("test set username", () => {
    const state: DeepPartial<LoginSchema> = { username: "123" };
    expect(
      loginReducer(
            state as LoginSchema,
            loginActions.setUsername("123123"),
      ),
    )
      .toStrictEqual({ username: "123123" });
  });

  test("test set password", () => {
    const state: DeepPartial<LoginSchema> = { password: "661" };
    expect(loginReducer(
        state as LoginSchema,
        loginActions.setPassword("6616454"),
    ))
      .toStrictEqual({ password: "6616454" });
  });
});
