module.exports = {
  entry: '/src/index.tsx',
  port: 8080,
  babelPlugins: ["import", { libraryName: "antd-mobile", "style": "css" }]
};