let articleId = "";

describe("Пользователь заходит на страницу стать", () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((data) => {
      articleId = data.id;
      cy.visit(`articles/${data.id}`);
    });
  });
  afterEach(() => {
    cy.removeArticle(articleId);
    // Все сущности связанные по articleId удалятся вместе со статьёй
  });
  it("Пользователь видит статью", () => {
    cy.getByTestId("ArticleDetails.Info").should("exist");
  });
  it("Пользователь видит список рекомендаций", () => {
    cy.getByTestId("ArticleRecommendationsList").should("exist");
  });
  it("Пользователь оставляет комментарий", () => {
    cy.getByTestId("ArticleDetails.Info");
    cy.getByTestId("AddCommentForm").scrollIntoView();
    cy.addComment("text");
    cy.getByTestId("CommentCard.Content").should("have.length", 1);
  });
  it("Пользователь ставит оценку статье", () => {
    cy.getByTestId("ArticleDetails.Info");
    cy.getByTestId("RatingCard").scrollIntoView();
    cy.setRate(5, "feedback");
    cy.get("[data-selected=true]").should("have.length", 5);
  });
});
