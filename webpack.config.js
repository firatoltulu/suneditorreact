const path = require("path");

module.exports = {
  mode: "production",
  entry: "./main.js",
  output: {
    path: path.resolve("dist"),
    filename: "SunEditorReact.js",
    library : 'SunEditorReact',
    globalObject: 'this',
    libraryTarget : 'var'
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  externals: {
    react: "React"
  }
};