import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";

const MainPage = memo(() => {
  const { t } = useTranslation();

  return <Page data-testid="MainPage">{t("Главная")}</Page>;
});

export default MainPage;
