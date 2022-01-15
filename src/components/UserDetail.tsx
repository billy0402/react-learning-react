import React from 'react';

import { GitHubUser as GitHubUserType } from '../models/githubUser';

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
    </>
  );
};

export default UserDetail;
