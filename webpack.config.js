module.exports = {
  entry: {
    module: "./src/index.js"
  },
  output: {
    path: __dirname + "/dist/js",
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    contentBase: "dist",
    host: "127.0.0.1",
    port: 3001
  }
};
