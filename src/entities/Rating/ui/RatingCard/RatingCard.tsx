import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./RatingCard.module.scss";
import { Card } from "@/shared/ui/Card/Card";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text/Text";
import { StarRating } from "@/shared/ui/StarRating/StarRating";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Drawer } from "@/shared/ui/Drawer/Drawer";

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedBack?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    onAccept,
    onCancel,
    title,
    hasFeedback,
    feedbackTitle,
  } = props;

  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(0);
  const [feedback, setFeedback] = useState("");

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(starsCount);
    }
  }, [hasFeedback, onAccept]);

  const onModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [starsCount, onCancel]);

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input
        value={feedback}
        placeholder={t("Ваш отзыв")}
        onChange={setFeedback}
      />
    </>
  );

  return (
    <Card
      className={classNames(styles.RatingCard, {}, [className])}
    >
      <VStack
        align="center"
        gap="8"
        max
      >
        <Text title={title} />
        <StarRating size={40} onSelect={onSelectStars} />
      </VStack>
      <BrowserView>
        <Modal
          isOpen={isModalOpen}
          onClose={onModalClose}
          lazy
        >
          <VStack>
            {modalContent}
            <HStack max gap="16" justify="end">
              <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINED_RED}>
                {t("Закрыть")}
              </Button>
              <Button onClick={acceptHandler}>
                {t("Отправить")}
              </Button>
            </HStack>
          </VStack>

        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer
          isOpen={isModalOpen}
          onClose={onModalClose}
        >
          <VStack gap="32">
            {modalContent}
            <Button
              fullWidth
              onClick={acceptHandler}
              theme={ButtonTheme.BACKGROUND}
            >
              {t("Отправить")}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  );
});
