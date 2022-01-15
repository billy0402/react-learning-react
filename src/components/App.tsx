import React, { useState } from 'react';

import GitHubUser from './GitHubUser';
import RepoReadMe from './RepoReadMe';
import SearchForm from './SearchForm';
import UserRepositories from './UserRepositories';

const App = () => {
  const [login, setLogin] = useState('');
  const [repoName, setRepoName] = useState('');

  const handleSearch = (login: string) => {
    if (login) return setLogin(login);
    setLogin('');
    setRepoName('');
  };

  if (!login) {
    return <SearchForm value={login} onSearch={handleSearch} />;
  }

  return (
    <>
      <SearchForm value={login} onSearch={handleSearch} />
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
