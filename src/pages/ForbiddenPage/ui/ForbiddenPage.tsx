import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/widgets/Page";

interface AboutPageProps {
  className?: string;
}

const ForbiddenPage = memo(({ className }: AboutPageProps) => {
  const { t } = useTranslation();

  return (
    <Page className={classNames(className)}>
      {t("У вас нет доступа к этой странице")}
    </Page>
  );
});

export default ForbiddenPage;
