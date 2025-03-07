const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: "./mathtest.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  mode: "production",
  plugins: [new BundleAnalyzerPlugin()],
  optimization: {
    sideEffects: false, // 标记是否验证package.json中的sideEffects 字段
    usedExports: true,
  },
};
