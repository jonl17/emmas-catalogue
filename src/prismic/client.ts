import { createClient, getRepositoryEndpoint } from "@prismicio/client";

const repositoryEndpoint = getRepositoryEndpoint(
  process.env.PRISMIC_REPOSITORY_NAME ?? ""
);

export const client = createClient(repositoryEndpoint, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
});
