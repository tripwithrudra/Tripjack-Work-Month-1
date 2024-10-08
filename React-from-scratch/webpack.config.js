// The configuration for Webpack is added to the webpack.config.js file to use babel-loader:

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};

// This configuration file tells Webpack to use babel-loader for every file with the .js extension and 
// excludes files in the node_modules directory from the Babel compiler.