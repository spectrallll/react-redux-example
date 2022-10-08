import {classNames} from "shared/lib/classNames/classNames";
import styles from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = "clear",

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        theme,
        ...rest
    } = props;

    return (
        <button className={classNames(styles.Button, {}, [className, styles[theme]])} {...rest}>
            {children}
        </button>
    );
};
