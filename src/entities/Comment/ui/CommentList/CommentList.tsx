import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/Text";
import { VStack } from "@/shared/ui/Stack";
import { Comment } from "../../model/types/comment";
import { CommentCard } from "../../ui/CommentCard/CommentCard";

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const {
    className,
    comments,
    isLoading,
  } = props;

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack gap="16" max>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack
      max
      gap="16"
      className={classNames("", {}, [className])}
    >
      {comments?.length ? comments.map((comment) => (
        <CommentCard
          key={comment.id}
          isLoading={isLoading}
          comment={comment}
        />
      ))
        : <Text text={t("Комментарии отсутствуют")} />}
    </VStack>
  );
});
