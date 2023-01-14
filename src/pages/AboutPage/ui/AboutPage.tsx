import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Page } from "shared/ui/Page/Page";

interface AboutPageProps {
  className?: string;
}

const AboutPage = memo(({ className }: AboutPageProps) => {
  const { t } = useTranslation("about");

  return (
    <Page className={classNames(className)}>
      {t("О сайте")}
    </Page>
  );
});

export default AboutPage;
