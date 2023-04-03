import { useState, useEffect, useRef } from 'react';

export const useLocalStorage = (
  key: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [item, setItem] = useState(localStorage.getItem(key) || '');
  const prev = useRef(item);

  useEffect(() => {
    return () => {
      localStorage.setItem(key, prev.current);
    };
  }, []);

  useEffect(() => {
    prev.current = item;
  }, [item]);

  return [item, setItem];
};
