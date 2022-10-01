import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates "style" nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // CSS -> CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.scss")),
                        localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]"
                    },
                }
            },
            // S[CA]SS -> CSS
            "sass-loader",

        ],
    }

    // Если не используем тайпскрипт - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        cssLoader
    ];
}