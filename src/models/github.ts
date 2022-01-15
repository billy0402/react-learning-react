type GitHubUser = {
  login: string;
  name: string;
  location: string;
  avatar_url: string;
  repositories: Repositories;
};

type Repositories = {
  totalCount: number;
  nodes: GitHubRepo[];
};

type GitHubRepo = {
  name: string;
};

export type { GitHubUser, GitHubRepo };
