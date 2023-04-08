import { useEffect, useLayoutEffect, useRef } from 'react';

export const useMountOnce = (callback: () => void) => {
  const callbackRef = useRef(callback);
  const shouldCall = useRef(true);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (shouldCall.current) callbackRef.current();
    shouldCall.current = false;
  }, []);
};
