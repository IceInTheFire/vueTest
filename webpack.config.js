/* 引入操作路径模块和webpack */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    /* 输入文件 */
    entry: './src/main.js',
    output: {
        /* 输出目录，没有则新建 */
        path: path.resolve(__dirname, './dist'),
        /* 静态目录，可以直接从这里取文件 */
        publicPath: '/dist/',
        /* 文件名 */
        filename: 'main.js'
    },
    module: {
        rules: [
            /* 用来解析vue后缀的文件 */
            {
                test: /\.vue$/,
                loader: 'vue-loader'
                // use:[
                //     'vue-loader'
                // ],
            },
            /* 用babel来解析js文件并把es6的语法转换成浏览器认识的语法 */
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // use:[
                //     'babel-loader'
                // ],
                /* 排除模块安装目录的文件 */
                exclude: /node_modules/,
                query: { presets: ['es2015']}
            },
            // {
            //     test: /\.(png|jpg)$/,
            //     exclude: /^node_modules$/,
            //     loader: 'url?limit=2000&name=../[name].[ext]?v=[hash]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            // },
            // {
            //     test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            //     exclude: /^node_modules$/,
            //     loader: 'file-loader?name=../[name].[ext]?v=[hash]'
            // }
        ]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            sourceMap: true,
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告
                warnings: false,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true,
            }
        }),
        new webpack.DefinePlugin({
            'process.env': { //设置成生产环境
                NODE_ENV: '"production"'
            }
        })
    ]
}