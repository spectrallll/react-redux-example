import { StateSchema } from "@/app/providers/StoreProvider";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { getProfileForm } from "./getProfileForm";

describe("getProfileData.test", () => {
  test("should return error", () => {
    const data = {
      username: "admin",
      age: 22,
      country: Country.Russia,
      lastname: "Palhosh",
      firstname: "Naro",
      currency: Currency.RUB,
      city: "Moscow",
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
