const webpack = require('webpack');
const path = require('path');
// const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

const SRC = './src';
const DEST = './dist';
const BASE_DIR = "/";
const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3000

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: {
        'js/script.js': `${SRC}/js/index.js`,
    },
    output: {
        path: path.resolve(__dirname, DEST + BASE_DIR),
        filename: '[name]',
        publicPath: BASE_DIR,
    },
    module: {
        rules: [{
                //     test: /\.vue$/,
                //     loader: "vue-loader",
                // },
                // {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        compact: true,
                        cacheDirectory: true,
                        presets: [
                            ['@babel/preset-env', {
                                modules: false
                            }]
                        ]
                    }
                }]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    // "vue-style-loader",
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            // importLoaders: 2,
                            plugins: [
                                require("autoprefixer")({
                                    grid: true
                                })
                            ]
                        }
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        //     new VueLoaderPlugin()
        new HtmlWebpackPlugin({
            template: `${SRC}/index.html`
        }),
        new MiniCssExtractPlugin({
            filename: `css/style.css`
        })
    ],
    resolve: {
        extensions: [".vue", ".js", ".json", '*'],
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    devServer: {
        host: HOST,
        port: PORT,
        contentBase: DEST,
        openPage: path.relative('/', BASE_DIR),
        open: true
    },
}