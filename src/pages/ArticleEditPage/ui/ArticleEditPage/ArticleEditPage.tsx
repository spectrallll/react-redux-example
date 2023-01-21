import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Page } from "widgets/Page";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import styles from "./ArticleEditPage.module.scss";

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const {
    className,
  } = props;

  const { t } = useTranslation();
  const { id } = useParams<{id: string}>();

  const isEdit = Boolean(id);

  return (
    <Page
      className={classNames(styles.ArticleEditPage, {}, [className])}
    >
      {isEdit ? <div>Edit</div> : <div>Create</div>}
    </Page>
  );
});

export default ArticleEditPage;
