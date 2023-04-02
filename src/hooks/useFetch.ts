import { useState, useEffect } from 'react';

export const useFetch = <T>(url: string, initialData: T) => {
  const [data, setData] = useState<T>(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data: T) => setData(data))
      .catch((error: Error) => setError(error))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};
