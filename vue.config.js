module.exports = {
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    port: 8080,
    open: true
  },
  transpileDependencies: ['vuetify'],
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions = {
        compress: {
          'drop_console': true // 移除console
        },
        output: {
          'comments': false // 移除js中的注释
        }
      }
    }
    config.devtool = process.env.NODE_ENV === 'production' ? undefined : 'source-map'
  }
}
