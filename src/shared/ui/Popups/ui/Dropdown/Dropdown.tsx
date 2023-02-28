import { Menu } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { classNames } from "../../../../lib/classNames/classNames";
import { DropdownDirection } from "../../../../types/ui";
import { AppLink } from "../../../AppLink/AppLink";
import styles from "./Dropdown.module.scss";
import { mapDirectionClass } from "../../styles/consts";
import popupStyles from "../../styles/Popup.module.scss";

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
export const Dropdown = (props: DropdownProps) => {
  const { className, items, trigger, direction = "bottom right" } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu
      as="div"
      className={classNames(styles.Dropdown, {}, [
        className,
        popupStyles.popup,
      ])}
    >
      <Menu.Button className={popupStyles.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(styles.menu, {}, menuClasses)}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              disabled={item.disabled}
              type="button"
              className={classNames(styles.item, {
                [popupStyles.active]: active,
              })}
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
                /* eslint-disable-next-line react/no-array-index-key */
                key={`dropdown key${index}`}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item
              as={Fragment}
              disabled={item.disabled}
              /* eslint-disable-next-line react/no-array-index-key */
              key={`dropdown key${index}`}
            >
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
