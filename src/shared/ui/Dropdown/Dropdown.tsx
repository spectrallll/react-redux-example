import { Menu } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import { Fragment, ReactNode } from "react";
import { DropdownDirection } from "shared/types/ui";
import { AppLink } from "../AppLink/AppLink";
import styles from "./Dropdown.module.scss";

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}
interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  "bottom left": styles.optionsBottomLeft,
  "bottom right": styles.optionsBottomRight,
  "top right": styles.optionsTopRight,
  "top left": styles.optionsTopLeft,
};

export const Dropdown = (props: DropdownProps) => {
  const {
    className,
    items,
    trigger,
    direction = "bottom right",
  } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu
      as="div"
      className={classNames(styles.Dropdown, {}, [className])}
    >
      <Menu.Button
        className={styles.btn}
      >
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(styles.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: {active:boolean}) => (
            <button
              disabled={item.disabled}
              type="button"
              className={classNames(
                styles.item,
                { [styles.active]: active },
              )}
              onClick={item.onClick}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item
              as={Fragment}
              disabled={item.disabled}
            >
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
