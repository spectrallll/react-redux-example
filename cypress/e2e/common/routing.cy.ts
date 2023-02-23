import { selectByTestId } from "../../helpers/selectByTestId";

describe("empty spec", () => {
  describe("Пользователь НЕ авторизован", () => {
    it("Переход на главную страницу", () => {
      cy.visit("/");
      cy.get(selectByTestId("MainPage")).should("exist");
    });

    it("Переход НЕ открывает страницу профиля", () => {
      cy.visit("/profile/1");
      cy.get(selectByTestId("ProfilePage")).should("not.exist");
      cy.get(selectByTestId("MainPage")).should("exist");
    });

    it("Переход по не существующему URL открывает NotFoundPage", () => {
      cy.visit("/random");
      cy.get(selectByTestId("NotFoundPage")).should("exist");
    });
  });

  describe("Пользователь авторизован", () => {
    beforeEach(() => {
      cy.login("testuser", "123");
    });

    it("Переход открывает страницу профиля", () => {
      cy.visit("/profile/1");
      cy.get(selectByTestId("ProfilePage")).should("exist");
    });
    it("Переход открывает страницу списка статей", () => {
      cy.visit("/articles");
      cy.get(selectByTestId("ArticlesPage")).should("exist");
    });
  });
});
