// 自定义vue配置
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  // 基本路径--
  // publicPath: process.env.NODE_ENV === 'production' ? '修改成任意目录' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // 输出文件目录
  outputDir: 'dist',
  assetsDir: 'static',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  productionSourceMap: true,

  devServer: {
    // 端口
    port: 8080,
    // 自启浏览器
    open: true,
    // 热更新
    hot: true,
    // 编译压缩
    compress: true,

    // 配置代理
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'https://www.apiopen.top',
        ws: true,
        changeOrigin: true
      }
    }
  },
  // webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
