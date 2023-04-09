import { AxiosResponse } from 'axios';
import { useState } from 'react';
import { useMountOnce } from './useMountOnce';

export const useService = <T, V>({
  service,
  initialData,
  params,
  deps,
}: {
  service: (params?: T) => Promise<AxiosResponse<V>>;
  initialData: V;
  params?: T;
  deps?: T[keyof T];
}) => {
  const [data, setData] = useState<V>(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useMountOnce(() => {
    setLoading(true);
    setData(initialData);
    setError(null);

    service(params)
      .then(({ data }) => setData(data))
      .catch((error: Error) => setError(error))
      .finally(() => setLoading(false));
  }, deps);

  return { data, loading, error };
};
