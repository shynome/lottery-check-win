module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
  },
  weapp: {},
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
    miniCssExtractPluginOption: {
      filename: 'css/[name].[hash:8].css',
      chunkFilename: 'css/[id].[chunkhash:8].css'
    },
    webpackChain(chain, webpack) {
      const hashRule = (type) => {
        chain.module.rules.get(type).uses.get("urlLoader").get("options").name = 
          chain.module.rules.get(type).uses.get("urlLoader").get("options").name.replace("[name].[ext]", "[name].[hash:8].[ext]")
      }
      hashRule('font')
      hashRule('image')
      hashRule('media')
      chain.merge({
        output: {
          filename: "[name].[chunkhash:8].js",
          chunkFilename: chain.output.get("chunkFilename").replace("[name].js", "[name].[chunkhash:8].js"),
        },
      })
    },
  }
}
