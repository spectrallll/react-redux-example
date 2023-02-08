import { StateSchema } from "@/app/providers/StoreProvider";
import { ValidateProfileError } from "../../consts/consts";
import { getProfileValidateErrors } from "./getProfileValidateErrors";

describe("getProfileData.test", () => {
  test("should return error", () => {
    const validateErrors: ValidateProfileError[] = [ValidateProfileError.NO_DATA, ValidateProfileError.SERVER_ERROR];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
