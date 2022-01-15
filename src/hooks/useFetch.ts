import { useEffect, useState } from 'react';

import useMountRef from './useMountRef';

const useFetch = <T>(uri: string, initialValue: T) => {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const mounted = useMountRef();

  useEffect(() => {
    if (!uri) return;
    if (!mounted.current) return;
    setLoading(true);
    fetch(uri)
      .then((response) => {
        if (!mounted.current) throw new Error('component is not mounted');
        return response;
      })
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch((error) => {
        if (!mounted.current) return;
        setError(error);
      });
  }, [uri]);

  return { data, error, loading };
};

export default useFetch;
