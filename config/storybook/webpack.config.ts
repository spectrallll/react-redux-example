import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import path from "path";
import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  // @ts-ignore
  config.resolve.modules.push(paths.src);
  // @ts-ignore
  config.resolve.extensions.push(".ts", ".tsx");

  // eslint-disable-next-line no-param-reassign
  // @ts-ignore
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });
  // @ts-ignore
  config.module.rules.push({
    test: /\.svg$/i,
    use: ["@svgr/webpack"],
  });
  // @ts-ignore
  config.module.rules.push(buildCssLoader(true));
  // @ts-ignore
  config.plugins.push(new DefinePlugin({
    __IS_DEV__: true,
    __API__: JSON.stringify(""),
    __PROJECT__: JSON.stringify("storybook"),
  }));

  return config;
};
