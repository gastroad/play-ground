const path = require("path")

const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/index.tsx",
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'portfolio.js'
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src/'),
            components: path.resolve(__dirname, 'src/components/'),
            page: path.resolve(__dirname, 'src/page/'),
            api: path.resolve(__dirname, 'src/api/'),
            assets: path.resolve(__dirname, 'src/assets/'),
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
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.tsx?$/i,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                use: ['file-loader']
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
        server: 'http',
        historyApiFallback: true,
    },
    plugins: [
        new CaseSensitivePathsPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ]
};