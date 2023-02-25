import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Card } from "@/shared/ui/Card";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { StarRating } from "@/shared/ui/StarRating";
import { Modal } from "@/shared/ui/Modal";
import { Input } from "@/shared/ui/Input";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Drawer } from "@/shared/ui/Drawer";

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedBack?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    onAccept,
    onCancel,
    title,
    hasFeedback,
    feedbackTitle,
    rate = 0,
  } = props;

  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState("");

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(starsCount);
    }
  }, [hasFeedback, onAccept, starsCount]);

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
        data-testid="RatingCard.Input"
        value={feedback}
        placeholder={t("Ваш отзыв")}
        onChange={setFeedback}
      />
    </>
  );

  return (
    <Card
      data-testid="RatingCard"
      fullWidth
      className={className}
    >
      <VStack
        align="center"
        gap="8"
        max
      >
        <Text title={starsCount ? t("Спасибо за оценку!") : title} />
        <StarRating
          size={40}
          onSelect={onSelectStars}
          selectedStars={starsCount}
        />
      </VStack>
      <BrowserView>
        <Modal
          isOpen={isModalOpen}
          onClose={onModalClose}
          lazy
        >
          <VStack max gap="32">
            {modalContent}
            <HStack max gap="16" justify="end">
              <Button data-testid="RatingCard.Close" onClick={cancelHandle} theme={ButtonTheme.OUTLINED_RED}>
                {t("Закрыть")}
              </Button>
              <Button data-testid="RatingCard.Send" onClick={acceptHandler}>
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
          <VStack gap="32" max>
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
