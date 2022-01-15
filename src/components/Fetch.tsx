import React from 'react';
import useFetch from '../hooks/useFetch';

type FetchProp<T> = {
  uri: string;
  renderSuccess: (data: { data: T }) => JSX.Element;
  renderError?: (error: Error) => JSX.Element;
  loadingFallback?: JSX.Element;
};

const Fetch = <T,>({
  uri,
  renderSuccess,
  renderError = (error) => <pre>{JSON.stringify(error, null, 2)}</pre>,
  loadingFallback = <h1>loading...</h1>,
}: FetchProp<T>) => {
  const { data, error, loading } = useFetch<T>(uri, {} as T);

  if (loading) return loadingFallback;
  if (error) return renderError(error);
  if (data) return renderSuccess({ data });

  return null;
};

export default Fetch;
