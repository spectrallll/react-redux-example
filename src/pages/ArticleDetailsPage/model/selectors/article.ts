import { getUserAuthData } from "entities/User";
import { getArticleDetailsData } from "entities/Article";
import { createSelector } from "@reduxjs/toolkit";

export const getCantEditArticle = createSelector(
  getArticleDetailsData,
  getUserAuthData,
  (article, user) => {
    if (!article || !user) {
      return false;
    }

    return article.user.id === user.id;
  },
);
