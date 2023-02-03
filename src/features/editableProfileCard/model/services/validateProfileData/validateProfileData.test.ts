import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ValidateProfileError } from "../../consts/consts";
import { validateProfileData } from "./validateProfileData";

const data = {
  username: "admin",
  age: 22,
  country: Country.Russia,
  lastname: "Palhosh",
  firstname: "Naro",
  currency: Currency.RUB,
  city: "Moscow",
};

describe("validateProfileData.test", () => {
  test("success data", () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });
  test("without first and last name", () => {
    const result = validateProfileData({ ...data, firstname: "", lastname: "" });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
  test("incorrect age", () => {
    const result = validateProfileData({ ...data, age: undefined });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });
  test("incorrect all", () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_CITY,
    ]);
  });
});
