import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useMemo } from "react";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { ArticleSortField } from "entities/Article";
import { SortOrder } from "shared/types";
import styles from "./ArticleSortSelector.module.scss";

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
  } = props;

  const { t } = useTranslation("article");

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: "asc",
      content: t("возрастанию"),
    },
    {
      value: "desc",
      content: t("убыванию"),
    },
  ], [t]);

  const orderFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t("дате создания"),
    },
    {
      value: ArticleSortField.TITLE,
      content: t("названию"),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t("просмотрам"),
    },
  ], [t]);

  return (
    <div
      className={classNames(styles.ArticleSortSelector, {}, [className])}
    >
      <Select
        value={sort}
        options={orderFieldOptions}
        label={t("Сортировать по")}
        onChange={onChangeSort}
      />
      <Select
        className={styles.order}
        value={order}
        options={orderOptions}
        label={t("по")}
        onChange={onChangeOrder}
      />
    </div>
  );
});
