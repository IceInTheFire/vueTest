/* 引入操作路径模块和webpack */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'main': './src/main.js',
        'css': './src/css.js'
    }, //编译入口文件
    output: {
        publicPath: '/dist/js/', //服务器的路径
        path: path.resolve(__dirname + '/dist/js/'), //编译到指定目录下
        filename: '[name].js?v=[hash]' //编译后的文件名
    },
    module: {
        rules: [
            /* 用来解析vue后缀的文件 */
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            /* 用babel来解析js文件并把es6的语法转换成浏览器认识的语法 */
            {
                test: /\.js$/,
                loader: 'babel-loader',
                /* 排除模块安装目录的文件 */
                exclude: /node_modules/,
                query: { presets: ['es2015']}
            },
            {
                test: /\.css/,
                exclude: /^node_modules$/,
                // loader: `style-loader!css-loader!autoprefixer-loader?{ browsers: ['last 100 versions'] }!`
                use: ['style-loader','css-loader',"autoprefixer-loader?{ browsers: ['last 100 versions']"],
            },
            {
                test: /\.less/,
                exclude: /^node_modules$/,
                // loader: `style-loader!css-loader!autoprefixer-loader?{ browsers: ['last 100 versions'] }!less-loader`
                use: ['style-loader','css-loader',"autoprefixer-loader?{ browsers: ['last 100 versions']",'less-loader'],
            },
            {
                // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
                // 如下配置，将小于8192byte的图片转成base64码
                test: /\.(png|jpg|gif)$/,
                /* 排除模块安装目录的文件 */
                exclude: /node_modules/,
                // loader: 'url-loader?limit=8192&name=./static/img/[hash].[ext]',
                loader: 'url-loader?limit=8192&name=../static/img/[name].[ext]?v=[hash]',
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                loader: 'file-loader?name=./static/font/[name].[ext]?v=[hash]'
                // loader: 'file-loader?name=../[name].[ext]?v=[hash]'
            }
        ]
    },
    // resolve: {
    //     extensions: ['', '.js', '.vue', '.jsx'], //后缀名自动补全
    //     alias: {
    //         // vue: 'vue/dist/vue.min.js', //webpack打包时，需要设置别名
    //         // config: path.resolve('src/config/config.js'), //程序的一些基本配置
    //         // store: path.resolve('src/store/'), //常用工具方法
    //         //util: path.resolve('src/lib/util/index.js'), //常用工具方法
    //         //'is-seeing': path.resolve('src/lib/util/is-seeing.js'),
    //         //'pull-list': path.resolve('src/lib/mixins/pull-ticketList.js'), //拉取列表
    //         //'route-data': path.resolve('src/lib/route-data/index.js'), //组件数据缓存
    //         // 'core': path.resolve('src/core/index.js')
    //     }
    // },
    resolve:{
        // extensions: ['', '.js', '.vue', '.jsx'], //后缀名自动补全
        // modules:[path.resolve(__dirname, 'node_modules')],
        alias:{
            vue: 'vue/dist/vue.min.js', //webpack打包时，需要设置别名
            store: path.resolve('src/store/'), //vuex 状态
        },
        extensions: ['.js', '.vue', '.jsx', '.json']
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     // 最紧凑的输出
        //     beautify: false,
        //     // 删除所有的注释
        //     comments: false,
        //     sourceMap: true,
        //     compress: {
        //         // 在UglifyJs删除没有用到的代码时不输出警告
        //         warnings: false,
        //         // 删除所有的 `console` 语句
        //         // 还可以兼容ie浏览器
        //         drop_console: true,
        //         // 内嵌定义了但是只用到一次的变量
        //         collapse_vars: true,
        //         // 提取出出现多次但是没有定义成变量去引用的静态值
        //         reduce_vars: true,
        //     }
        // }),
        // new webpack.DefinePlugin({
        //     'process.env': { //设置成生产环境
        //         NODE_ENV: '"production"'
        //     }
        // }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: '../../index.html', //生成的html存放路径，相对于 path
            template: './src/template/index.html',  //html模板路径
            inject: true,
            chunks: ['main','css']
        }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: '../index.html', //生成的html存放路径，相对于 path
            template: './src/template/index.html',  //html模板路径
            inject: true,
            chunks: ['main','css']
        })
    ],
    // vue: {
    //     postcss: [
    //         require('autoprefixer')({
    //             browsers: ['last 100 versions']
    //         })
    //     ]
    // }
}