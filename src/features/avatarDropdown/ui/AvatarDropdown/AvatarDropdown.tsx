import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Dropdown } from "@/shared/ui/Popups";
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import styles from "./AvatarDropdown.module.scss";

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const {
    className,
  } = props;

  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const { t } = useTranslation();

  const isAdminPanelAvailable = isAdmin || isManager;

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      direction="bottom left"
      className={classNames(
        styles.AvatarDropdown,
        {},
        [className],
      )}
      items={
        [
          ...(isAdminPanelAvailable ? [{
            content: t("Админ"),
            href: RoutePath.admin_panel,
          }] : []),
          {
            content: t("Профиль"),
            href: RoutePath.profile + authData.id,
          },
          {
            content: t("Выйти"),
            onClick: onLogout,
          },
        ]
      }
      trigger={
        <Avatar size={30} src={authData?.avatar} />
      }
    />
  );
});
