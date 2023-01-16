import { useCallback, useRef } from "react";

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
