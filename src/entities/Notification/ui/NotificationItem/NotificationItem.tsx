import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Card, CardTheme } from "@/shared/ui/Card";
import { Text } from "@/shared/ui/Text";
import styles from "./NotificationItem.module.scss";
import { Notification } from "../../model/types/notifications";

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const {
    className,
    item,
  } = props;

  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames(
        styles.NotificationItem,
        {},
        [className],
      )}
    >
      <Text text={item.description} title={item.title} />
    </Card>
  );

  if (item.href) {
    return (
      <a
        target="_blank"
        href={item.href}
        className={styles.link}
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    content
  );
});
