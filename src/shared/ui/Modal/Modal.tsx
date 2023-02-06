import React, {
  MutableRefObject,
  ReactNode, useCallback, useEffect, useRef, useState,
} from "react";
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

const ANIMATIONS_DELAY = 300;

export const Modal = ({
  className, children, isOpen, onClose, lazy,
}: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    setIsClosing(true);
    if (onClose) {
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATIONS_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

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
