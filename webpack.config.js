var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      port: 9000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './src/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: 'public',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
