import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { HStack } from "@/shared/ui/Stack";
import { addCommentFormReducer, addCommentFormActions } from "../../model/slices/addCommentFormSlice";
import {
  getAddCommentFormText,
} from "../../model/selectors/getAddCommentFormText/getAddCommentFormText";
import styles from "./AddCommentForm.module.scss";

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (value: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};
const AddCommentForm = memo((props: AddCommentFormProps) => {
  const {
    className,
    onSendComment,
  } = props;

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const commentText = useSelector(getAddCommentFormText);

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(commentText || "");
    onCommentTextChange("");
  }, [onSendComment, onCommentTextChange, commentText]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        max
        justify="spaceBetween"
        align="center"
        className={classNames(styles.AddCommentForm, {}, [className])}
      >
        <Input
          className={styles.input}
          value={commentText}
          onChange={onCommentTextChange}
          placeholder={t("Введите текст комментария")}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onSendHandler}
        >
          {t("Отправить")}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
