import { classNames } from "shared/lib/classNames/classNames";
import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from "react";
import styles from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className, value, onChange, type = "text", autofocus, ...restProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autofocus) {
      inputRef.current.focus();
    }
  }, [autofocus]);

  return (
    <input
      ref={inputRef}
      type={type}
      value={value}
      onChange={onChangeHandler}
      className={classNames(styles.Input, {}, [className])}
      {...restProps}
    />
  );
});
