import { classNames, Mods } from "shared/lib/classNames/classNames";
import { ChangeEvent, memo, useMemo } from "react";
import styles from "./Select.module.scss";

export interface SelectOption {
  content: string;
  value: string;
}
interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly,
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const optionsList = useMemo(() => options?.map((opt) => (
    <option
      className={styles.option}
      value={opt.value}
      key={opt.value}
    >
      {opt.content}
    </option>
  )), [options]);

  const mods: Mods = {
    [styles.active]: readonly,
  };

  return (
    <div
      className={classNames(styles.Wrapper, mods, [className])}
    >
      {label && <span className={styles.label}>{`${label}:`}</span>}
      <select
        disabled={readonly}
        className={styles.Select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
});
