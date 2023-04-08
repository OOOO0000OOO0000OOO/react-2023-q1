import { useState, useEffect, useRef } from 'react';

export const useLocalStorage = (
  key: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [item, setItem] = useState(localStorage.getItem(key) || '');
  const itemRef = useRef(item);

  useEffect(() => {
    return () => {
      localStorage.setItem(key, itemRef.current);
    };
  }, [key]);

  useEffect(() => {
    itemRef.current = item;
  }, [item]);

  return [item, setItem];
};
