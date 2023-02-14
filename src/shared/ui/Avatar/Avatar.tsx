import { CSSProperties, memo, useMemo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Avatar.module.scss";
import UserIcon from "@/shared/assets/icons/user-filled.svg";
import { Icon, IconTheme } from "../Icon";
import { Skeleton } from "../Skeleton";
import { AppImage } from "../AppImage";

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    fallbackInverted?: boolean;
}

export const Avatar = memo((props: AvatarProps) => {
  const {
    className,
    src,
    size = 100,
    fallbackInverted,
  } = props;

  const style = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  const fallback = (
    <Skeleton
      width={size}
      height={size}
      border="50%"
    />
  );
  const errorFallback = (
    <Icon
      Svg={UserIcon}
      width={size}
      height={size}
      theme={fallbackInverted ? IconTheme.INVERTED : IconTheme.PRIMARY}
    />
  );

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
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
