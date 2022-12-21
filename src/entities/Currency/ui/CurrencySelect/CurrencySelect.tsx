import { Select } from "shared/ui/Select/Select";
import { useTranslation } from "react-i18next";
import React, { memo, useCallback } from "react";
import { Currency } from "../../model/types/currency";

interface CurrencySelectProps {
    className?: string;
    readonly?: boolean,
    value?: Currency,
    onChange?: (currency: Currency) => void;

}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className,
    readonly,
    value,
    onChange,
  } = props;

  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <Select
      className={className}
      label={t("Укажите валюту")}
      readonly={readonly}
      options={options}
      value={value}
      onChange={onChangeHandler}
    />
  );
});
