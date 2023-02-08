import { CSSProperties, memo, useMemo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Avatar.module.scss";

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
}

export const Avatar = memo((props: AvatarProps) => {
  const {
    className,
    src,
    size,
  } = props;

  const style = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  return (
    <img
      src={src}
      alt="avatar"
      style={style}
      className={classNames(
        styles.Avatar,
        {},
        [className],
      )}
    />
  );
});
