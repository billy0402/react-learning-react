import React from 'react';

import { GitHubUser as GitHubUserType } from '../models/github';
import UserRepositories from './UserRepositories';

type UserDetailProp = {
  data: GitHubUserType;
};

const UserDetail = ({ data }: UserDetailProp) => {
  return (
    <>
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </>
      <UserRepositories
        login={data.login}
        onSelect={(repoName) => console.log(`${repoName} selected`)}
      />
    </>
  );
};

export default UserDetail;
