import HtmlWebpackInlineSourcePlugin from 'html-webpack-inline-source-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = (config, { webpack }) => {
    config.module.rules.forEach(rule => {
        if (!rule.loader) return;
        if (rule.loader.indexOf('url-loader') !== -1) {
            rule.options.limit = Number.MAX_SAFE_INTEGER;
        }
    })
    config.plugins.push(new HtmlWebpackInlineSourcePlugin());
    config.plugins.push(new HtmlWebpackPlugin({
        template: './src/index.ejs',
        inlineSource: '.(js|css)$' // embed all javascript and css inline
    }));
    return config;
};