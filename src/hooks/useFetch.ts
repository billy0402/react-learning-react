import { useEffect, useState } from 'react';

const useFetch = <T>(uri: string, initialValue: T) => {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return { data, error, loading };
};

export default useFetch;
