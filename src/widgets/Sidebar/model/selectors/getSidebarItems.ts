import { createSelector } from "reselect";
import { getUserAuthData } from "@/entities/User";
import MainIcon from "@/shared/assets/icons/main-20-20.svg";
import AboutIcon from "@/shared/assets/icons/about-20-20.svg";
import ProfileIcon from "@/shared/assets/icons/profile-20-20.svg";
import ArticleIcon from "@/shared/assets/icons/article-20-20.svg";
import { SidebarItemType } from "../types/sidebar";
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from "@/shared/const/router";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: MainIcon,
      text: "Главная",
    },
    {
      path: getRouteAbout(),
      Icon: AboutIcon,
      text: "О сайте",
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: ProfileIcon,
        text: "Профиль",
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: ArticleIcon,
        text: "Статьи",
        authOnly: true,
      },
    );
  }

  return sidebarItemsList;
});
