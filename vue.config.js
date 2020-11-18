const path = require('path')
module.exports = {
    // chainWebpack: config => {
    //     const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    //     types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    //   },
    // 配置loader
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.less$/,
                    loader: "less-loader", // 将 Less 文件编译为 CSS 文件
                },
            ],
        },
    },
    // pluginOptions: {
    //     "style-resources-loader": {
    //         preProcessor: "less",
    //         patterns: [
    //             path.resolve(__dirname, "./src/assets/css/variable.less")
    //         ]
    //     }
    // }
}

// module.exports = {
//     chainWebpack: config => {
//         config.module
//             .rule('less')
//             .test(/\.less$/)
//             .loader('less-loader')
//     }
// }
