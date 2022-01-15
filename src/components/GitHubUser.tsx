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

  if (!data) {
    return null;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default GitHubUser;
