
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: '/src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'output.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            // filename: 'index.html'
        })
    ]
}