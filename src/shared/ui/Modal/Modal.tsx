import {
  ReactNode,
} from "react";
import { useModal } from "@/shared/lib/hooks/useModal/useModal";
import { Overlay } from "../Overlay/Overlay";
import { classNames, Mods } from "../../lib/classNames/classNames";
import { Portal } from "../Portal/Portal";
import styles from "./Modal.module.scss";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal = ({
  className, children, isOpen, onClose, lazy,
}: ModalProps) => {
  const {
    isClosing,
    isMounted,
    closeHandler,
  } = useModal({
    animationDelay: 300,
    onClose,
    isOpen,
  });

  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(styles.Modal, mods, [className])}>
        <Overlay onClick={closeHandler} />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
