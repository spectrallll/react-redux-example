import { useCallback, useRef } from "react";

export function useThrottle(callback: (...args: any[]) => void, ms: number) {
  // Можно ли вызывать Callback?
  const throttleRef = useRef(false);

  return useCallback(() => {
    if (!throttleRef.current) {
      callback();
      throttleRef.current = true;

      setTimeout(() => {
        throttleRef.current = false;
      }, ms);
    }
  }, [callback, ms]);
}
