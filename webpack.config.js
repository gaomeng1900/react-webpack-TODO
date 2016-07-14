/**
 * Webpack位置文件
 * - 不区分发布环境/dev环境
 * @author Meng
 * @date 2016-07-14
 */

const webpack = require('webpack')
const path    = require('path')

module.exports = {
    // 如果这里不使用path.resolve会出现`wenpack`可以运行但是`node server`运行失败的情况,
    // 因为npm相对路径发生变化
    // @NOTE 使用绝对地址来避免潜在问题
    entry: [path.resolve("./src/index.js"), 'webpack-hot-middleware/client?reload=true'], // 热重载中间件
    output: {
        path: path.resolve("./build"),
        publicPath: "/", // 为使内网可访问, 不指明host
        filename: "index.bundle.js"
    },
    resolve: {
        root: path.resolve('src'),
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx', '.scss', '.css', '.jade'],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    devtool: "source-map",
    watch: true,
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(), // 出错时不发布
    ]

}
