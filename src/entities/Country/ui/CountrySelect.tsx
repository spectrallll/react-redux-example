import { useTranslation } from "react-i18next";
import React, { memo, useCallback } from "react";
import { ListBox } from "@/shared/ui/Popups/ui/ListBox/ListBox";
import { Country } from "../model/types/country";

interface CountrySelectProps {
    className?: string;
    readonly?: boolean,
    value?: Country,
    onChange?: (country: Country) => void;

}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className,
    readonly,
    value,
    onChange,
  } = props;

  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <ListBox
      className={className}
      readonly={readonly}
      items={options}
      value={value}
      onChange={onChangeHandler}
      defaultValue={t("Страна")}
      direction="top right"
      label={t("Страна")}
    />
  );

  // return (
  //   <Select
  //     className={classNames(className, {}, [])}
  //     label={t("Страна")}
  //     readonly={readonly}
  //     options={options}
  //     value={value}
  //     onChange={onChangeHandler}
  //   />
  // );
});
