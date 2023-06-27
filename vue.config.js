const path = require('path')


// Переменные для узнавания Продакшн или Девелопер
const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

// Названия файла при билдинге
const filename = ext => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`

module.exports = {
    runtimeCompiler: true,
    devServer: {
        proxy: {
            "^/api/": {
                target: "http://192.168.5.168:8181",
                pathRewrite: { "^/api/": "/api/" },
                changeOrigin: true,
                logLevel: "debug"
            }
        }
    },
    configureWebpack: {
        output: {
            filename: isDev ? 'blank-[name].[hash:28].js' : '[name]-legacy.[hash:8].js',
            path: path.resolve(__dirname, 'dist')
        },
        devtool: false,
    }
}