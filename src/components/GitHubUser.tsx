import React, { useEffect, useState } from 'react';

type GitHubUserProp = {
  login: string;
};

const loadJson = (key: string) =>
  JSON.parse(localStorage.getItem(key) || 'null');
const saveJson = (key: string, data: any) =>
  localStorage.setItem(key, JSON.stringify(data));

const GitHubUser = ({ login }: GitHubUserProp) => {
  const [data, setData] = useState(loadJson(`user:${login}`));
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    if (!data) return;
    if (data.login === login) return;
    const { name, avatar_url, location } = data;
    saveJson(`user:${login}`, {
      login,
      name,
      avatar_url,
      location,
    });
  }, [data]);

  useEffect(() => {
    if (!login) return;
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .catch(console.error);
  }, [login]);

  if (loading) return <h1>loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;

  return (
    <>
      <img src={data.avatar_url} />
      <>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </>
    </>
  );
};

export default GitHubUser;
