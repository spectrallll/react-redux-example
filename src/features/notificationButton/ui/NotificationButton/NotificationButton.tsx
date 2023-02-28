import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Icon, IconTheme } from "@/shared/ui/Icon";
import NotificationIcon from "@/shared/assets/icons/notif-20-20.svg";
import { NotificationList } from "@/entities/Notification";
import { Popover } from "@/shared/ui/Popups";
import { Drawer } from "@/shared/ui/Drawer";
import styles from "./NotificationButton.module.scss";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;

  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
      <Icon
        Svg={NotificationIcon}
        theme={IconTheme.INVERTED}
        className={styles.notifSvg}
      />
    </Button>
  );

  return (
    <>
      <BrowserView>
        <Popover
          className={classNames(styles.NotificationButton, {}, [className])}
          trigger={trigger}
          direction="bottom left"
        >
          <NotificationList className={styles.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </>
  );
});
