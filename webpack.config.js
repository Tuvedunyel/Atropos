const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "src/js/script.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    assetModfuleFilename: "[name][ext]",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    port: 5000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c|)ss$/,
        use: [MiniCssExtractPlugin.loadern, "css-loader", "sass-loader"],
      },
      {
        text: /\.js$/,
        exlude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
