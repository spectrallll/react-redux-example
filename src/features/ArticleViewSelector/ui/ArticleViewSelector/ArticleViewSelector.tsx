import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import ListIcon from "@/shared/assets/icons/list-24-24.svg";
import TileIcon from "@/shared/assets/icons/tiled-24-24.svg";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icon";
import { ArticleView } from "@/entities/Article";
import styles from "./ArticleViewSelector.module.scss";

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.LIST,
    icon: TileIcon,
  },
  {
    view: ArticleView.TILE,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const {
    className,
    view,
    onViewClick,
  } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={className}>
      {viewTypes.map((viewType) => (
        <Button
          key={`${viewType.view}`}
          onClick={onClick(viewType.view)}
          theme={ButtonTheme.CLEAR}
        >
          <Icon
            className={classNames("", { [styles.notSelected]: viewType.view !== view })}
            Svg={viewType.icon}
          />
        </Button>
      ))}
    </div>
  );
});
