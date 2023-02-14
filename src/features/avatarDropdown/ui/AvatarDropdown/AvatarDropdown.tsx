import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@/shared/ui/Avatar";
import { Dropdown } from "@/shared/ui/Popups";
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getRouteAdminPanel, getRouteProfile } from "@/shared/const/router";

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
      className={className}
      items={
        [
          ...(isAdminPanelAvailable ? [{
            content: t("Админ"),
            href: getRouteAdminPanel(),
          }] : []),
          {
            content: t("Профиль"),
            href: getRouteProfile(authData.id),
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
