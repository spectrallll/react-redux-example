import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

interface AboutPageProps {
  className?: string;
}

const AboutPage = memo(({ className }: AboutPageProps) => {
  const { t } = useTranslation("about");

  return (
    <div className={classNames(className)}>
      {t("О сайте")}
    </div>
  );
});

export default AboutPage;
