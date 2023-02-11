import { useCallback, useRef } from "react";

/**
 * Хук, который позволяет вызывать переданный в него callback не более одного раза в переданный период времени
 * @param callback
 * @param ms - задержка между вызовами callback
 */

export function useThrottle(callback: (...args: any[]) => void, ms: number) {
  // Можно ли вызывать Callback?
  const throttleRef = useRef(false);

  return useCallback((...args: any[]) => {
    if (!throttleRef.current) {
      callback(...args);
      throttleRef.current = true;

      setTimeout(() => {
        throttleRef.current = false;
      }, ms);
    }
  }, [callback, ms]);
}
