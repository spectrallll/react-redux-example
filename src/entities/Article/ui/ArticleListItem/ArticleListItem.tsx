import { useTranslation } from "react-i18next";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/Text/Text";
import EyeIcon from "@/shared/assets/icons/eye-20-20.svg";
import { Icon } from "@/shared/ui/Icon/Icon";
import { Card } from "@/shared/ui/Card/Card";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { ArticleView, ArticleBlockType } from "../../model/consts/consts";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import styles from "./ArticleListItem.module.scss";
import {
  Article, ArticleTextBlock,
} from "../../model/types/article";
import { RoutePath } from "@/shared/const/router";

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}
export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className,
    article,
    view = ArticleView.LIST,
    target,
  } = props;
  const { t } = useTranslation();

  const types = (
    <Text
      text={article.type.join(",  ")}
      className={styles.types}
    />
  );
  const views = (
    <>
      <Text
        text={String(article.views)}
        className={styles.views}
      />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.TILE) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <div
        className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}
      >
        <Card className={styles.card}>
          <div className={styles.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text
              text={article.user.username}
              className={styles.username}
            />
            <Text
              text={article.createdAt}
              className={styles.date}
            />
          </div>
          <Text
            title={article.title}
            className={styles.title}
          />
          {types}
          <img
            src={article.img}
            className={styles.img}
            alt={article.title}
          />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={styles.textBlock}
            />
          )}
          <div className={styles.footer}>
            <AppLink
              to={RoutePath.article_details + article.id}
              target={target}
            >
              <Button
                theme={ButtonTheme.OUTLINE}
              >
                {t("Читать далее...")}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={
        classNames(
          styles.ArticleListItem,
          {},
          [className, styles[view]],
        )
      }
    >
      <AppLink
        to={RoutePath.article_details + article.id}
        target={target}
      >
        <Card className={styles.card}>
          <div className={styles.imageWrapper}>
            <img
              src={article.img}
              alt="article-img"
              className={styles.img}
            />
            <Text text={article.createdAt} className={styles.date} />
          </div>
          <div className={styles.infoWrapper}>
            {types}
            {views}
          </div>
          <Text text={article.title} className={styles.title} />
        </Card>
      </AppLink>
    </div>
  );
});
