import { selectByTestId } from "../../helpers/selectByTestId";

export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId("EditableProfileCardHeader.EditButton").click();
  cy.getByTestId("ProfileCard.firstname").clear().type(firstname);
  cy.getByTestId("ProfileCard.lastname").clear().type(lastname);
  cy.getByTestId("EditableProfileCardHeader.SaveButton").click();
};

export const resetProfile = (profileId: string) =>
  cy.request({
    method: "PUT",
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { authorization: "fff" },
    body: {
      id: "4",
      firstname: "test",
      lastname: "user",
      age: 99,
      currency: "RUB",
      country: "Russia",
      city: "Moscow",
      username: "world",
      avatar: "https://download-cs.net/steam/avatars/3375.jpg",
    },
  });

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId));

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
