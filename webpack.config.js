const path = require('path')

const config = {
    watch: true,
    target: "electron-renderer",
    entry: "./src/renderer.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./src/bundle")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
}

module.exports = () => {
    return config
}