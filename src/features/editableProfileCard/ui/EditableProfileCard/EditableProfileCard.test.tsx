import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { componentRender } from "@/shared/lib/tests/componentRender/componentRender";
import { Profile } from "@/entities/Profile";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { $api } from "@/shared/api/api";
import { profileReducer } from "../../model/slice/profileSlice";
import { EditableProfileCard } from "./EditableProfileCard";

const profile: Profile = {
  id: "1",
  firstname: "user",
  lastname: "user",
  age: 21,
  currency: Currency.USD,
  country: Country.Armenia,
  city: "Moscow",
  username: "helloworld",
};

describe("features/EditableProfileCard", () => {
  beforeEach(() => {
    componentRender(<EditableProfileCard id="1" />, {
      initialState: {
        profile: {
          readonly: true,
          data: profile,
          form: profile,
        },
        user: {
          authData: {
            id: "1",
            username: "helloworld",
          },
        },
      },
      asyncReducers: {
        profile: profileReducer,
      },
    });
  });

  test("Переключение режима редактирования", async () => {
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton"),
    );
    expect(
      screen.getByTestId("EditableProfileCardHeader.CancelButton"),
    ).toBeInTheDocument();
  });

  test("При отмене редактирования значения должны обнуляться", async () => {
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton"),
    );

    await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));
    await userEvent.clear(screen.getByTestId("ProfileCard.lastname"));

    await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "admin");
    await userEvent.type(screen.getByTestId("ProfileCard.lastname"), "admin");

    expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("admin");

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.CancelButton"),
    );

    expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("user");
    expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("user");
  });

  test("Валидация полей имя и фамиля отрабатывают", async () => {
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton"),
    );

    await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));
    await userEvent.clear(screen.getByTestId("ProfileCard.lastname"));

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton"),
    );

    expect(
      screen.getByTestId("EditableProfileCard.Error.Paragraph"),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("EditableProfileCard.Error.Paragraph"),
    ).toHaveTextContent("Некорректная информация о пользователе");
  });

  test("На сервер отправился запрос", async () => {
    const mockPutReq = jest.spyOn($api, "put");

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton"),
    );
    await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "admin");

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton"),
    );

    expect(mockPutReq).toHaveBeenCalled();
  });
});
