const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  publicPath: BASE_PATH,
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@c', resolve('src/components'))
      .set('@v', resolve('src/views'))
      .set('@u', resolve('src/libs/utils'))
  },
  devServer: {
    proxy: {
      '/im': {
        target: 'https://devadmin.alphalawyer.cn',
        changeOrigin: true
      },
      '/sales': {
        target: 'https://devadmin.alphalawyer.cn',
        changeOrigin: true
      }
    }
  }
}
