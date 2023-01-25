/* eslint-disable spaced-comment */
/// <reference types="webpack-dev-server" />

import path from "path";

import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type webpack from "webpack";

import assets from "./tools/webpack.assets.css.json";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
//export default (env: {minimize?: boolean} = {}, argv: {mode?: string}): webpack.Configuration[] => {
export default (): webpack.Configuration[] => {
    // const production: boolean = argv.mode === "production";
    
    const production: boolean = true; 
    const css_webpack_path = "browser/dist/css";

    const baseConfig: webpack.Configuration = {
        mode: production ? "production" : "development",
        context: __dirname,
        cache: {
            type: "filesystem",
            buildDependencies: {
                config: [__filename],
            },
        },
        snapshot: {
            immutablePaths: ["/srv/zulip-npm-cache"],
        },
    };

    const frontendConfig: webpack.Configuration = {
        ...baseConfig,
        name: "frontend",
        entry: assets,
        module: {
            rules: [
                // Generate webfont
                {
                    test: /\.font\.js$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                url: false, // webfonts-loader generates public relative URLs
                            },
                        },
                        {
                            loader: "webfonts-loader",
                            options: {
                                fileName: "files/[fontname].[ext]",
                                publicPath: "",
                            },
                        },
                    ],
                },
                // regular css files
                {
                    test: /\.css$/,
                    exclude: path.resolve(__dirname, "static/styles"),
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
                // PostCSS loader
                {
                    test: /\.css$/,
                    include: path.resolve(__dirname, "static/styles"),
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1,
                                sourceMap: true,
                            },
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
                // load fonts and files
                {
                    test: /\.(eot|jpg|svg|ttf|otf|png|woff2?)$/,
                    type: "asset/resource",
                },
            ],
        },
        output: {
            path: path.resolve(__dirname, css_webpack_path),
            publicPath: "",
            filename: "[name].js",
            assetModuleFilename: 
                  // Avoid directory traversal bug that upstream won't fix
                  // (https://github.com/webpack/webpack/issues/11937)
                  (pathData) => "files" + path.join("/", pathData.filename!),
            chunkFilename: "[id].js",
        },
        resolve: {
            ...baseConfig.resolve,
            extensions: [".ts", ".js"],
        },
        // We prefer cheap-module-source-map over any eval-* options
        // because stacktrace-gps doesn't currently support extracting
        // the source snippets with the eval-* options.
        // devtool: "source-map",
        optimization: {
            minimize: true,
            minimizer: [
                new CssMinimizerPlugin({
                    minify: CssMinimizerPlugin.cleanCssMinify,
                }),
                "...",
            ],
            splitChunks: {
                chunks: "all",
                // webpack/examples/many-pages suggests 20 requests for HTTP/2
                maxAsyncRequests: 20,
                maxInitialRequests: 20,
            },
        },
        plugins: [
            // Extract CSS from files
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css",
            }),
        ],
        // watchOptions: {
        //     ignored: [
        //         "**/node_modules/**",
        //         // Prevent Emacs file locks from crashing webpack-dev-server
        //         // https://github.com/webpack/webpack-dev-server/issues/2821
        //         "**/.#*",
        //     ],
        // },
    };

    return [frontendConfig];
};
