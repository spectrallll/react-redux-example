describe("article-list", () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit("articles");
    });
  });
  it("passes", () => {
    cy.getByTestId("ArticleList").should("exist");
    cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3);
  });
});
