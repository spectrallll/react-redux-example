import { classNames, Mods } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import React, { useCallback } from "react";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Currency } from "entities/Currency/model/types/currency";
import { CurrencySelect } from "entities/Currency";
import { Country } from "entities/Country/model/types/country";
import { CountrySelect } from "entities/Country";
import styles from "./ProfileCard.module.scss";
import { Profile } from "../../model/types/profile";

export enum validKeyboardKeys {
    BACKSPACE = "Backspace",
    ARROWRIGHT = "ArrowRight",
    ARROWLEFT = "ArrowLeft",
}
interface ProfileCardProps {
    className?: string;
    data?: Profile
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency?: Currency) => void;
    onChangeCountry?: (country?: Country) => void;
}

export const ProfileCard = ({
  className,
  data,
  isLoading,
  error,
  onChangeFirstname,
  onChangeLastname,
  onChangeCity,
  onChangeAge,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
  readonly,
}: ProfileCardProps) => {
  const { t } = useTranslation("profile");

  const onKeyPress = useCallback((event: React.KeyboardEvent) => {
    if (
      !/[0-9]/.test(event.key)
            && !(Object.values(validKeyboardKeys).some((v) => v === event.key))
    ) {
      event.preventDefault();
    }
  }, [data?.age]);

  if (isLoading) {
    return (
      <div className={classNames(styles.ProfileCard, {}, [className, styles.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(styles.ProfileCard, {}, [className, styles.error])}>
        <Text
          title={t("Произошла ошибка при загрузке данных")}
          text={t("Попробуйте обновить страницу")}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [styles.editing]: !readonly,
  };

  return (
    <div className={classNames(styles.ProfileCard, mods, [className])}>
      <div className={styles.data}>
        <div className={styles.avatarWrapper}>
          {data?.avatar && <Avatar src={data?.avatar} size={200} />}
        </div>
        <Input
          value={data?.firstname}
          placeholder={t("Ваше имя")}
          className={styles.input}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          placeholder={t("Ваша фамилия")}
          className={styles.input}
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          onKeyPress={onKeyPress}
          value={data?.age}
          placeholder={t("Ваш возраст")}
          className={styles.input}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          placeholder={t("Город")}
          className={styles.input}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          placeholder={t("Имя пользователя")}
          className={styles.input}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder={t("Введите ссылку на аватар")}
          className={styles.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          className={styles.input}
          value={data?.currency}
          readonly={readonly}
          onChange={onChangeCurrency}
        />
        <CountrySelect
          className={styles.input}
          value={data?.country}
          readonly={readonly}
          onChange={onChangeCountry}
        />
      </div>
    </div>
  );
};
