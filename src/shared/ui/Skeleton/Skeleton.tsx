import { CSSProperties } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Skeleton.module.scss";

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border? : string;
}

export const Skeleton = (props: SkeletonProps) => {
  const {
    className,
    height,
    width,
    border,
  } = props;

  const style: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div
      className={classNames(styles.Skeleton, {}, [className])}
      style={style}
    >
      <div />
      <div><span /></div>
    </div>
  );
};
