import { BuildOptions } from "../types/config";

export const buildBabelLoader = (options: BuildOptions) => ({
  test: /\.(js|jsx|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
      plugins: [
        options.isDev && require.resolve("react-refresh/babel"),
      ].filter(Boolean),
    },
  },
});
