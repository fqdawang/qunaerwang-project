module.exports = {
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
    devServer: {
        disableHostCheck: true,
        // host: 'localhost',
        // host: '172.20.10.3',
        host: 'localhost',
        // host: '172.16.16.68',
        port: 8080, // 端口号
        https: false, // https:{type:Boolean}
        // open: true, //配置自动启动浏览器  http://172.16.1.12:7071/rest/mcdPhoneBar/
        hotOnly: true, // 热更新
        // overlay: {
        // 	warnings: false,
        // 	errors: false
        // },
        // lintOnSave: false,
        // proxy: 'http://localhost:8000'   // 配置跨域处理,只有一个代理
        // proxy: { //配置自动启动浏览器
        // 	"/rest/*": {
        // 		target: "http://172.16.1.12:7071",
        // 		changeOrigin: true,
        // 		// ws: true,//websocket支持
        // 		secure: false
        // 	},
        // 	"/pbsevice/*": {
        // 		target: "http://172.16.1.12:2018",
        // 		changeOrigin: true,
        // 		//ws: true,//websocket支持
        // 		secure: false
        // 	},
        // }
    },
}
