import { classNames } from "shared/lib/classNames/classNames";
import { memo, useMemo, useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import styles from "./Sidebar.module.scss";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const sidebarItemsList = useSelector(getSidebarItems);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(() => sidebarItemsList.map((item) => (
    <SidebarItem
      item={item}
      collapsed={collapsed}
      key={item.path}
    />
  )), [collapsed, sidebarItemsList]);

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
        {itemsList}
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
