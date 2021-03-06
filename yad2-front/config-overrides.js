const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');

module.exports = (config) => {
    config.resolve.alias = {
        ...config.resolve.alias,
        ...(process.env.NODE_ENV === "production" && {
            //production replacements "devString": "productionString"
        }),
        "#base#": path.join(__dirname),
        "#src#": path.join(__dirname, "src"),
        "#resources#": path.join(__dirname, "src", "resources.json"),
        "#components#": path.join(__dirname, "src", "components"),
        "#body#": path.join(__dirname, "src", "components", "body"),
        "#actions#": path.join(__dirname, "src", "actions")
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

//to change aliases, you need to change them in 3 places:
//1. config-overrides - for dev and production
//2. package.json - .jest.moduleNameMapper - for testing
//3. jsconfig.json - for vscode autocomplete

//if i want to use preact just plug this in production replacements:

// "react": "preact/compat",
// "react-dom": "preact/compat",
// "react-dom/test-utils": "preact/test-utils",

// and also install preact
// and move react & react-dom to dev dependencies