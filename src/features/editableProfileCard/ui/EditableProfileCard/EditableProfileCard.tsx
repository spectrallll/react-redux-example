import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { ProfileCard } from "entities/Profile";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { VStack } from "shared/ui/Stack";
import {
  EditableProfileCardHeader,
} from "../EditableProfileCardHeader/EditableProfileCardHeader";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import {
  getProfileIsLoading,
} from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import {
  getProfileValidateErrors,
} from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { ValidateProfileError } from "../../model/types/editableProfileCardSchema";
import { profileActions, profileReducer } from "../../model/slice/profileSlice";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";

interface EditableProfileCardProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props;
  const { t } = useTranslation("profile");

  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t("Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу"),
    [ValidateProfileError.INCORRECT_USER_DATA]: t("Некорректная информация о пользователе"),
    [ValidateProfileError.INCORRECT_AGE]: t("Неккоректный возраст"),
    [ValidateProfileError.NO_DATA]: t("Данные не указаны"),
    [ValidateProfileError.INCORRECT_CITY]: t("Неккоректный город"),
  };

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions
      .updateProfile({ firstname: value || "" }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions
      .updateProfile({ lastname: value || "" }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions
      .updateProfile({ age: Number(value) }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions
      .updateProfile({ city: value || "" }));
  }, [dispatch]);
  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions
      .updateProfile({ username: value || "" }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions
      .updateProfile({ avatar: value || "" }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency?: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country?: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack gap="8" max className={className}>
        {validateErrors?.length
            && validateErrors.map((err) => (
              <Text
                theme={TextTheme.ERROR}
                text={validateErrorTranslates[err]}
                key={err}
                data-testid="EditableProfileCard.Error"
              />
            ))}
        <EditableProfileCardHeader />
        <ProfileCard
          isLoading={isLoading}
          data={formData}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readonly={readonly}
        />
      </VStack>
    </DynamicModuleLoader>
  );
});
