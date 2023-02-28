import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useSelector } from "react-redux";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink";
import { classNames } from "@/shared/lib/classNames/classNames";
import { getUserAuthData } from "@/entities/User";
import { SidebarItemType } from "../../model/types/sidebar";
import styles from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed?: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink to={item.path} theme={AppLinkTheme.SECONDARY}>
      <item.Icon className={styles.icon} />
      <span
        className={classNames(styles.link, {
          [styles.linkCollapsed]: collapsed,
        })}
      >
        {t(item.text)}
      </span>
    </AppLink>
  );
});
