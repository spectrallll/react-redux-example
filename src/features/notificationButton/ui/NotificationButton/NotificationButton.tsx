import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Icon, IconTheme } from "shared/ui/Icon/Icon";
import NotificationIcon from "shared/assets/icons/notif-20-20.svg";
import { NotificationList } from "entities/Notification";
import { Popover } from "shared/ui/Popups";
import styles from "./NotificationButton.module.scss";

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const {
    className,
  } = props;

  return (
    <Popover
      className={classNames(
        styles.NotificationButton,
        {},
        [className],
      )}
      trigger={(
        <Button
          theme={ButtonTheme.CLEAR}
        >
          <Icon
            Svg={NotificationIcon}
            theme={IconTheme.INVERTED}
            className={styles.notifSvg}
          />
        </Button>
      )}
      direction="bottom left"
    >
      <NotificationList className={styles.notifications} />
    </Popover>
  );
});
