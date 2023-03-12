const path = require("path")

const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/index.tsx",
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'login.js'
    },
    resolve: {
        alias: {
            "@src": path.resolve(__dirname, 'src/'),
            "@assets": path.resolve(__dirname, 'src/assets/'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.m?js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env'],]
                    }
                }
            },
            {
                test: /\.tsx?$/i,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.(bmp|gif|jpe?g|png)$/,
                loader: "file-loader",
                options: { name: "images/[name].[hash:6].[ext]" }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ]
    },
    devServer: {
        host: "0.0.0.0",
        port: 80,
        compress: true,
        historyApiFallback: true,
    },
    plugins: [
        new CaseSensitivePathsPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html",
        })
    ]
};