import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function getBasePath(): string {
  const repository = process.env.GITHUB_REPOSITORY;

  if (process.env.GITHUB_ACTIONS === "true" && repository) {
    const repositoryName = repository.split("/")[1];
    return `/${repositoryName}/`;
  }

  return "/";
}

export default defineConfig({
  plugins: [react()],
  base: getBasePath(),
});
