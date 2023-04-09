import { useEffect, useLayoutEffect, useRef } from 'react';

export const useMountOnce = <T>(callback: () => void, dep?: T) => {
  const callbackRef = useRef(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    callbackRef.current();
  }, [dep]);
};
