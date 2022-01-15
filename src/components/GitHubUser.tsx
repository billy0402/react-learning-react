import React from 'react';

import { GitHubUser as GitHubUserType } from '../models/githubUser';
import useFetch from '../hooks/useFetch';

type GitHubUserProp = {
  login: string;
};

const GitHubUser = ({ login }: GitHubUserProp) => {
  const { data, error, loading } = useFetch<GitHubUserType>(
    `https://api.github.com/users/${login}`,
    {} as GitHubUserType,
  );

  if (loading) return <h1>loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;

  return (
    <>
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </>
    </>
  );
};

export default GitHubUser;
