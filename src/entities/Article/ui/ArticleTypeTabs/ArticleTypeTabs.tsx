import { useTranslation } from "react-i18next";
import { memo, useCallback, useMemo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { TabItem, Tabs } from "@/shared/ui/Tabs/Tabs";
import { ArticleType } from "../../model/consts/consts";

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const {
    className,
    value,
    onChangeType,
  } = props;

  const { t } = useTranslation("article");

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t("Все статьи"),
    },
    {
      value: ArticleType.IT,
      content: t("Айти"),
    },
    {
      value: ArticleType.ECONOMIC,
      content: t("Экономика"),
    },
    {
      value: ArticleType.SCIENCE,
      content: t("Наука"),
    },
  ], []);

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType);
  }, [onChangeType]);

  return (
    <Tabs
      value={value}
      tabs={typeTabs}
      onTabClick={onTabClick}
      className={classNames("", {}, [className])}
    />
  );
});
