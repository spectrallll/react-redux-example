import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { updateProfileData } from "./updateProfileData";
import { ValidateProfileError } from "../../types/editableProfileCardSchema";

const data = {
  username: "admin",
  age: 22,
  country: Country.Russia,
  lastname: "Palhosh",
  firstname: "Naro",
  currency: Currency.RUB,
  city: "Moscow",
  id: "1",
};

describe("updateProfileData.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toBe(data);
  });

  test("server error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR,
    ]);
  });

  test("validate error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, firstname: "" },
      },
    });
    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
});
