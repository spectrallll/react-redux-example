import { classNames } from "shared/lib/classNames/classNames";
import { memo, useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { SidebarItem } from "widgets/Sidebar/ui/SidebarItem/SidebarItem";
import styles from "./Sidebar.module.scss";
import { SidebarItemsList } from "../../model/items";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
    >
      <Button
        className={styles.collapseBtn}
        data-testid="sidebar-toggle"
        onClick={onToggle}
        theme={ButtonTheme.BACKGROUND}
        square
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={styles.items}>
        {SidebarItemsList.map((el) => <SidebarItem item={el} collapsed={collapsed} key={el.path} />)}
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          short={collapsed}
          className={styles.lng}
        />
      </div>
    </div>
  );
});
