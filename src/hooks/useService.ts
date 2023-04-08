import { AxiosResponse } from 'axios';
import { useState } from 'react';
import { useMountOnce } from './useMountOnce';

export const useService = <T, V>(
  service: (params: T) => Promise<AxiosResponse<V>>,
  initialData: V,
  params: T
) => {
  const [data, setData] = useState<V>(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useMountOnce(() => {
    setLoading(true);

    service(params)
      .then(({ data }) => setData(data))
      .catch((error: Error) => setError(error))
      .finally(() => setLoading(false));
  });

  return { data, loading, error };
};
