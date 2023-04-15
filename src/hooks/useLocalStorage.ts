import { useState, useEffect } from 'react';

export const useLocalStorage = (
  key: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [item, setItem] = useState(localStorage.getItem(key) || '');

  useEffect(() => {
    localStorage.setItem(key, item);
  }, [key, item]);

  return [item, setItem];
};
