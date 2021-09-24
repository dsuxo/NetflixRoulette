const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
    mode: 'production',
    devServer: {
        port: 3010,
        compress: true
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "/dist"),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
        ]
    },
    plugins: [
    
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html")
        }),
    ]
};