const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common(true), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        port: 9000,
        hot: true,
        historyApiFallback: true
    },
    optimization: {
        runtimeChunk: 'single',
    },
});