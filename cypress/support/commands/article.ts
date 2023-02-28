import { Article } from "../../../src/entities/Article";

const defaultArticle = {
  title: "TESTING ARTICLE",
  subtitle: "БиологиЯ",
  img: "https://profacademia.ru/storage/uploads/2022/01/18/2d85067d4fdf3f955b2de50c3926dffddae0e8e3.jpg",
  views: 1022,
  createdAt: "26.02.2022",
  userId: "1",
  type: ["SCIENCE"],
  blocks: [],
};

export const createArticle = (article?: Article) =>
  cy
    .request({
      method: "POST",
      url: "http://localhost:8000/articles",
      headers: { Authorization: "asasf" },
      body: article ?? defaultArticle,
    })
    .then((resp) => resp.body);

export const removeArticle = (articleId: string) =>
  cy.request({
    method: "DELETE",
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: "asasf" },
  });

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
