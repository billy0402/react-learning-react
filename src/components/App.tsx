import React, { useState } from 'react';

import GitHubUser from './GitHubUser';
import RepoReadMe from './RepoReadMe';
import SearchForm from './SearchForm';
import UserRepositories from './UserRepositories';

const App = () => {
  const [login, setLogin] = useState('');
  const [repoName, setRepoName] = useState('');

  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      {login && <GitHubUser login={login} />}
      {login && (
        <UserRepositories
          login={login}
          repoName={repoName}
          onSelect={setRepoName}
        />
      )}
      {login && repoName && <RepoReadMe login={login} repoName={repoName} />}
    </>
  );
};

export default App;
