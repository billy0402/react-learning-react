import React from 'react';

import Fetch from './Fetch';
import UserDetail from './UserDetail';

type GitHubUserProp = {
  login: string;
};

const GitHubUser = ({ login }: GitHubUserProp) => {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetail}
      renderError={(error) => <p>Something went wrong... {error.message}</p>}
    />
  );
};

export default GitHubUser;
