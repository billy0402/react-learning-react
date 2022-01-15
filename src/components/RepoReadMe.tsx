import React, { useCallback, useEffect, useState } from 'react';

import ReactMarkdown from 'react-markdown';

type RepoReaMeProp = {
  login: string;
  repoName: string;
};

const RepoReadMe = ({ login, repoName }: RepoReaMeProp) => {
  const [markdown, setMarkdown] = useState('');
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const loadReadMe = useCallback(async (login, repo) => {
    setLoading(true);
    const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
    const { download_url } = await fetch(uri).then((res) => res.json());
    const markdown = await fetch(download_url).then((res) => res.text());
    setMarkdown(markdown);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!login || !repoName) return;
    loadReadMe(login, repoName).catch(setError);
  }, [repoName]);

  if (loading) return <h1>loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default RepoReadMe;
