import { classNames, Mods } from "shared/lib/classNames/classNames";
import React, { memo, ReactNode } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { Overlay } from "../Overlay/Overlay";
import styles from "./Drawer.module.scss";
import { Portal } from "../Portal/Portal";

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    className,
    children,
    onClose,
    isOpen,
  } = props;
  const { theme } = useTheme();

  const mods: Mods = {
    [styles.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames(styles.Drawer, mods, [className, theme, "app_drawer"])}>
        <Overlay onClick={onClose} />
        <div
          className={styles.content}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
});
