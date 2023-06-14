import { type Configuration } from "webpack";

export type BuildPaths = {
  entry: string;
  html: string;
  build: string;
  src: string;
};

export type BuildEnv = {
  mode: Configuration["mode"];
  port: number;
};

export type BuildOptions = {
  mode: Configuration["mode"];
  paths: BuildPaths;
  isDev: boolean;
  port: number;
};
