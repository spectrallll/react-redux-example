import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Page } from "widgets/Page";

interface AboutPageProps {
  className?: string;
}

const AdminPanelPage = memo(({ className }: AboutPageProps) => {
  const { t } = useTranslation("admin");

  return (
    <Page className={classNames(className)}>
      {t("Админ панель")}
    </Page>
  );
});

export default AdminPanelPage;
