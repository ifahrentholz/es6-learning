module.exports = {
  context: __dirname + "/src",
  entry: "./index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    library: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      }
    ]
  }
};