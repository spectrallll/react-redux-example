import { classNames, Mods } from "shared/lib/classNames/classNames";
import {
  ChangeEvent, InputHTMLAttributes, memo, MutableRefObject, useEffect, useRef,
} from "react";
import styles from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>,
    "value" | "readonly"| "onChange"
>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    placeholder,
    value,
    onChange,
    type = "text",
    autofocus,
    readonly,
    ...restProps
  } = props;

  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autofocus) {
      inputRef.current.focus();
    }
  }, [autofocus]);

  const mods: Mods = {
    [styles.readonly]: readonly,
  };

  return (
    <div className={classNames(styles.InputWrapper, mods, [className])}>
      {placeholder && <div className={styles.placeholder}>{`${placeholder}:`}</div>}
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={styles.Input}
        readOnly={readonly}
        {...restProps}
      />
    </div>

  );
});
