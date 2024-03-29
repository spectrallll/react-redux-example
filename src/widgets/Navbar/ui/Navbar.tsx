import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { LoginModal } from "@/features/authByUsername";
import { getUserAuthData } from "@/entities/User";
import { Text, TextTheme } from "@/shared/ui/Text";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink";
import { HStack } from "@/shared/ui/Stack";
import { NotificationButton } from "@/features/notificationButton";
import { AvatarDropdown } from "@/features/avatarDropdown";
import styles from "./Navbar.module.scss";
import { getRouteArticleCreate } from "@/shared/const/router";

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
          to={getRouteArticleCreate()}
          className={styles.createLink}
        >
          {t("Создать статью")}
        </AppLink>
        <HStack gap="16" className={styles.actions} align="center">
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
      </header>
    );
  }

  return (
    <header className={classNames(styles.Navbar, {}, [className])}>
      <Text className={styles.appName} title={t("Press")} />
      <AppLink to={getRouteArticleCreate()}>{t("Создать статью")}</AppLink>
      <Button
        className={styles.links}
        theme={ButtonTheme.CLEAR}
        onClick={onShowModal}
      >
        {t("Войти")}
      </Button>
      {isAuthModal && (
        <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />
      )}
    </header>
  );
});
