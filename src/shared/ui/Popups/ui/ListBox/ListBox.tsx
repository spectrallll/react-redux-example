import { Fragment, ReactNode } from "react";
import { Listbox as HListBox } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import { DropdownDirection } from "shared/types/ui";
import { Button } from "../../../Button/Button";
import { HStack } from "../../../Stack/HStack/HStack";
import styles from "./ListBox.module.scss";
import { mapDirectionClass } from "../../styles/consts";
import popupStyles from "../../styles/Popup.module.scss";

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export const ListBox = (props: ListBoxProps) => {
  const {
    items,
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = "bottom right",
    label,
  } = props;

  return (
    <HStack gap="4">
      {label
          && (
            <span className={
              classNames(
                "",
                { [popupStyles.disabled]: readonly },
                [],
              )
            }
            >
              {`${label}:`}
            </span>
          )}
      <HListBox
        disabled={readonly}
        as="div"
        className={classNames(
          styles.ListBox,
          { [popupStyles.disabled]: readonly },
          [className, popupStyles.popup],
        )}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button
          disabled={readonly}
          className={styles.trigger}
        >
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(
            styles.options,
            {},
            [mapDirectionClass[direction]],
          )}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              as={Fragment}
              disabled={item.disabled}
            >
              {({ active, selected, disabled }) => (
                <li
                  className={classNames(styles.item, {
                    [popupStyles.active]: active,
                    [popupStyles.disabled]: disabled,
                  }, [])}
                >
                  {selected && ">"}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
};
