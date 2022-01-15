import React, { useEffect, useState } from 'react';

import { GraphQLClient } from 'graphql-request';

import { GitHubRepo, GitHubUser as GitHubUserType } from '../models/github';
import List from './List';
import UserDetail from './UserDetail';

type GitHubUserProp = {
  login: string;
};

const GitHubUser = ({ login }: GitHubUserProp) => {
  const [userData, setUserData] = useState<GitHubUserType>();

  const query = `
    query findRepos($login: String!) {
      user(login: $login) {
        login
        name
        location
        avatar_url: avatarUrl
        repositories(first:100) {
          totalCount
          nodes {
            name
          }
        }
      }
    }
  `;
  const token = '';
  const client = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    client
      .request(query, { login })
      .then(({ user }) => user)
      .then(setUserData)
      .catch(console.error);
  }, [client, query, login]);

  if (!userData) return <h1>loading...</h1>;

  return (
    // <Fetch
    //   uri={`https://api.github.com/users/${login}`}
    //   renderSuccess={UserDetail}
    //   renderError={(error) => <p>Something went wrong... {error.message}</p>}
    // />
    <>
      <UserDetail data={userData} />
      <p>{userData.repositories.totalCount} - repos</p>
      <List<GitHubRepo>
        data={userData.repositories.nodes.slice(0, 10)}
        renderItem={(repo) => <span>{repo.name}</span>}
        renderEmpty={<h1>No repositories.</h1>}
      />
    </>
  );
};

export default GitHubUser;
