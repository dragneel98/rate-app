const path = require("path")
const createExpoWebpackConfigAsync = require("@expo/webpack-config")

module.exports = async function (env, arg) {
    const config = await createExpoWebpackConfigAsync(env, arg)

    config.module.rules.push({
        test: /\.js$/,
        loader: "babel-loader",
        includes: [
            path.join(_dirname, "node_modules/react-router-native")
        ]
    })
    return config
}