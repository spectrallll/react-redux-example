import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
      // Creates "style" nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // CSS -> CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.scss")),
            localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
          },
        },
      },
      // S[CA]SS -> CSS
      "sass-loader",

    ],
  };
}
