import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const { t } = useTranslation();

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
        <AppLink
          to={RoutePath.main}
          className={styles.item}
          theme={AppLinkTheme.SECONDARY}
        >
          <MainIcon className={styles.icon} />
          <span className={styles.link}>{t("Главная")}</span>
        </AppLink>
        <AppLink
          to={RoutePath.about}
          theme={AppLinkTheme.SECONDARY}
          className={styles.item}
        >
          <AboutIcon className={styles.icon} />
          <span className={styles.link}>{t("О сайте")}</span>
        </AppLink>
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
};
