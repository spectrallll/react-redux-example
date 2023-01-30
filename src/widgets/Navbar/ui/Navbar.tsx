import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { memo, useCallback, useState } from "react";
import { LoginModal } from "features/authByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { Avatar } from "shared/ui/Avatar/Avatar";
import styles from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames(styles.Navbar, {}, [className])}>
        <Text
          className={styles.appName}
          title={t("Пресса")}
          theme={TextTheme.PRIMARY}
        />
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.article_create}
          className={styles.createLink}
        >
          {t("Создать статью")}
        </AppLink>
        <Dropdown
          direction="bottom left"
          className={styles.dropdown}
          items={
            [
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
            <Avatar size={30} src={authData.avatar} />
          }
        />
      </header>
    );
  }

  return (
    <header className={classNames(styles.Navbar, {}, [className])}>
      <Text className={styles.appName} title={t("Пресса")} />
      <AppLink to={RoutePath.article_create}>
        {t("Создать статью")}
      </AppLink>
      <Button
        className={styles.links}
        theme={ButtonTheme.CLEAR}
        onClick={onShowModal}
      >
        {t("Войти")}
      </Button>
      {isAuthModal && (
        <LoginModal
          onClose={onCloseModal}
          isOpen={isAuthModal}
        />
      )}
    </header>
  );
});
