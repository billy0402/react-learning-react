import React, { useEffect } from 'react';

import { GitHubRepo } from '../models/github';
import RepoReadMe from './RepoReadme';
import useIterator from '../hooks/useIterator';

type RepoMenuProp = {
  login: string;
  repositories: GitHubRepo[];
  onSelect?: (name: string) => void;
};

const RepoMenu = ({
  login,
  repositories,
  onSelect = () => ({}),
}: RepoMenuProp) => {
  const [{ name }, previous, next] = useIterator<GitHubRepo>(repositories);

  useEffect(() => {
    if (!name) return;
    onSelect(name);
  }, [name]);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <button onClick={previous}>&lt;</button>
        <p>{name}</p>
        <button onClick={next}>&gt;</button>
      </div>
      <RepoReadMe login={login} repoName={name} />
    </>
  );
};

export default RepoMenu;
