import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "entities/User";
import { HStack } from "shared/ui/Stack";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { profileActions } from "../../model/slice/profileSlice";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = (props: EditableProfileCardHeaderProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation("profile");

  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const canEdit = authData?.id === profileData?.id;

  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack
      max
      justify="spaceBetween"
      className={classNames("", {}, [className])}
    >
      <Text title={t("Профиль")} />
      {canEdit && (
        <div>
          {readonly ? (
            <Button
              theme={ButtonTheme.OUTLINE}
              onClick={onEdit}
            >
              {t("Редактировать")}
            </Button>
          )
            : (
              <HStack gap="8">
                <Button
                  theme={ButtonTheme.OUTLINED_RED}
                  onClick={onCancelEdit}
                >
                  {t("Отменить")}
                </Button>
                <Button
                  theme={ButtonTheme.OUTLINE}
                  onClick={onSave}
                >
                  {t("Сохранить")}
                </Button>
              </HStack>
            )}
        </div>
      )}

    </HStack>
  );
};
