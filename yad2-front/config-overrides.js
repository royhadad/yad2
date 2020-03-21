const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');

module.exports = (config) => {
    config.resolve.alias = {
        ...config.resolve.alias,
        ...(process.env.NODE_ENV === "production" && {
            "react": "preact/compat",
            "react-dom": "preact/compat",
            "react-dom/test-utils": "preact/test-utils",
        }),
        "#src#": path.join(__dirname, "src")
    }
    config.plugins = [
        ...config.plugins,
        new CompressionPlugin({
            test: /\.js$/i,
            cache: true
        })
    ];
    return config;
}