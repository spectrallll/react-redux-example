import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink to={'/'} className={styles.mainLink} theme={AppLinkTheme.SECONDARY}>Main</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>About</AppLink>
            </div>
        </div>
    );
};
