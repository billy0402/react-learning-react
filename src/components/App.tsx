import React, { useState } from 'react';

import GitHubUser from './GitHubUser';
import RepoReadMe from './RepoReadMe';
import UserRepositories from './UserRepositories';

const App = () => {
  const [login, setLogin] = useState('billy0402');
  const [repoName, setRepoName] = useState('react-learning-react');

  return (
    <>
      <GitHubUser login='billy0402' />
      <UserRepositories
        login={login}
        repoName={repoName}
        onSelect={setRepoName}
      />
      <RepoReadMe login={login} repoName={repoName} />
    </>
  );
};

export default App;
