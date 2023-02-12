import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import { useCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { useCounterActions } from "../model/slice/counterSlice";

interface CounterProps {
    className?: string;
}

export const Counter = ({ className }: CounterProps) => {
  const { t } = useTranslation();
  const counterValue = useCounterValue();
  const { increment, decrement } = useCounterActions();
  const incrementHandle = () => {
    increment();
  };

  const decrementHandle = () => {
    decrement();
  };

  return (
    <div className={classNames("", {}, [className])}>
      <h1 data-testid="value-title">
        {counterValue}
      </h1>
      <Button
        data-testid="increment-btn"
        onClick={incrementHandle}
      >
        {t("+")}
      </Button>
      <Button
        data-testid="decrement-btn"
        onClick={decrementHandle}
      >
        {t("-")}
      </Button>
    </div>
  );
};
