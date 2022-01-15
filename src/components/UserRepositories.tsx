import React from 'react';

import Fetch from './Fetch';
import { GitHubRepo } from '../models/github';
import RepoMenu from './RepoMenu';

type UserRepositoriesProp = {
  login: string;
  onSelect?: (repoName: string) => void;
};

const UserRepositories = ({
  login,
  onSelect = () => ({}),
}: UserRepositoriesProp) => {
  return (
    <Fetch<GitHubRepo[]>
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={({ data }) => (
        <RepoMenu login={login} repositories={data} onSelect={onSelect} />
      )}
    />
  );
};

export default UserRepositories;
