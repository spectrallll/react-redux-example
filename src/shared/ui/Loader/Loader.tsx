import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Loader.module.scss";

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={classNames(styles.Loader, {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
