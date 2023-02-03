import { BuildOptions } from "../types/config";
import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin";

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean;
}

export const buildBabelLoader = ({ isDev, isTsx }: BuildBabelLoaderProps) => ({
  test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
      plugins: [
        [
          "@babel/plugin-transform-typescript",
          {
            isTsx,
          },
        ],
        "@babel/plugin-transform-runtime",
        isTsx && [
          babelRemovePropsPlugin,
          {
            props: ["data-testid"],
          },
        ],
        isDev && require.resolve("react-refresh/babel"),
      ].filter(Boolean),
    },
  },
});
