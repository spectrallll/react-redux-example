describe("article-list", () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit("articles");
    });
  });

  it("Статьи подгружаются", () => {
    cy.getByTestId("ArticleList").should("exist");
    cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3);
  });

  it("На стабах (фикстурах)", () => {
    cy.intercept("GET", "**/articles?*", { fixture: "articles.json" });
    cy.getByTestId("ArticleList").should("exist");
    cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3);
  });

  it.skip("Игнор теста", () => {
    cy.getByTestId("123").should("exist");
  });
});
