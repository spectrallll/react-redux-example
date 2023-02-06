import { classNames } from "shared/lib/classNames/classNames";
import { Popover as HPopover } from "@headlessui/react";
import { DropdownDirection } from "shared/types/ui";
import { ReactNode } from "react";
import styles from "./Popover.module.scss";
import { mapDirectionClass } from "../../styles/consts";
import popupStyles from "../../styles/Popup.module.scss";

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

export const Popover = (props: PopoverProps) => {
  const {
    className,
    direction = "bottom right",
    children,
    trigger,
  } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <HPopover
      className={classNames(
        styles.Popover,
        {},
        [className, popupStyles.popup],
      )}
    >
      <HPopover.Button className={popupStyles.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel
        className={classNames(
          styles.panel,
          {},
          menuClasses,
        )}
      >
        {children}
      </HPopover.Panel>

    </HPopover>
  );
};
