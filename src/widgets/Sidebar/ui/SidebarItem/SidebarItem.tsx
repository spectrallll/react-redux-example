import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "widgets/Sidebar/model/items";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import styles from "./SidebarItem.module.scss";

interface SidebarItemProps {
   item: SidebarItemType;
   collapsed?: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  return (
    <AppLink
      to={item.path}
      className={styles.item}
      theme={AppLinkTheme.SECONDARY}
    >
      <item.Icon className={styles.icon} />
      <span className={classNames(styles.link, { [styles.linkCollapsed]: collapsed })}>{t(item.text)}</span>
    </AppLink>
  );
});
