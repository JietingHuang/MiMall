// webpack配置表

module.exports = {
    devServer: {
        host: 'localhost',
        port: 8081,
        proxy: {
            '/api': {
                target: 'http://www.miaoleyan.com',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}
