module.exports = {
  entry: './src/index.js',
  port: 3001,
  babelPlugins: ["import", { libraryName: "antd-mobile", "style": "css" }]
};