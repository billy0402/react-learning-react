import React, { useEffect, useState } from 'react';

type GitHubUserProp = {
  login: string;
};

const GitHubUser = ({ login }: GitHubUserProp) => {
  const [data, setData] = useState();

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
