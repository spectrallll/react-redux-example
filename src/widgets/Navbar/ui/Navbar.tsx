import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink to="/" className={styles.mainLink} theme={AppLinkTheme.SECONDARY}>{t("Главная")}</AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>{t("О сайте")}</AppLink>
      </div>
    </div>
  );
};
