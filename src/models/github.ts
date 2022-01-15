type GitHubUser = {
  login: string;
  name: string;
  location: string;
  avatar_url: string;
};

type GitHubRepo = {
  name: string;
};

export type { GitHubUser, GitHubRepo };
