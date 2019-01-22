module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: __dirname
  },
  devtool: "source-map",
  resolve: {
    // import模块的时候，不用加文件后缀
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
    ],

    preLoaders: [
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { test: /\.js$/, loader: "source-map-loader" }
    ]
  },
}