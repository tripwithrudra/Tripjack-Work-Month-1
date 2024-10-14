// // The configuration for Webpack is added to the webpack.config.js file to use babel-loader:

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(?:js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};

// // This configuration file tells Webpack to use babel-loader for every file with the .js extension and 
// // excludes files in the node_modules directory from the Babel compiler.


// const HtmlWebpackPlugin = require('html-webpack-plugin')

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: __dirname + './dist',
//     filename: 'output.js'
//   },

//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './public/index.html',
//       filename: 'output.html'
//     })
//   ],

//   module: {
//     rules: [
//       {
//         test: /.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader'
//         }
//       },
//       {
//         test: /.css$/,
//         use: ['style-loader', 'css-loader']
//       }
//     ]
//   }

// }