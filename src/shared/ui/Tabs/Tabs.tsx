import { memo, ReactNode, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Card, CardTheme } from "../Card/Card";
import styles from "./Tabs.module.scss";

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const {
    className,
    tabs,
    onTabClick,
    value,
  } = props;

  const clickHandle = useCallback((tab: TabItem) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
    <div
      className={classNames(styles.Tabs, {}, [className])}
    >
      {tabs.map((tab) => (
        <Card
          onClick={clickHandle(tab)}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          className={styles.tab}
          key={tab.value}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
