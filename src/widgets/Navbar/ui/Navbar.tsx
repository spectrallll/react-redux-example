import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { memo, useCallback, useState } from "react";
import { LoginModal } from "features/authByUsername";
import { useSelector } from "react-redux";
import {
  getUserAuthData,
} from "entities/User";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { HStack } from "shared/ui/Stack";
import { NotificationButton } from "features/notificationButton";
import { AvatarDropdown } from "features/avatarDropdown";
import styles from "./Navbar.module.scss";
import {AnimationProvider} from "shared/lib/components/AnimationProvider";

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
      <header className={classNames(styles.Navbar, {}, [className])}>
        <Text
          className={styles.appName}
          title={t("Press")}
          theme={TextTheme.PRIMARY}
        />
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.article_create}
          className={styles.createLink}
        >
          {t("Создать статью")}
        </AppLink>
        <HStack
          gap="16"
          className={styles.actions}
          align="center"
        >
          <AnimationProvider>
            <NotificationButton />
          </AnimationProvider>
          <AvatarDropdown />
        </HStack>
      </header>
    );
  }

  return (
    <header className={classNames(styles.Navbar, {}, [className])}>
      <Text className={styles.appName} title={t("Press")} />
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
