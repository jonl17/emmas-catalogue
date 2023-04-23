import type { Config } from "prismic-ts-codegen";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const config: Config = {
  output: "./src/types/prismic-types.ts",
  repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
  customTypesAPIToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
  models: {
    fetchFromRepository: true,
  },
};

export default config;
