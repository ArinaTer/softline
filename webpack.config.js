const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pages = glob.sync("./src/views/pages/*.hbs");
const htmlPlugins = pages.map((templatePath) => {
  const name = path.basename(templatePath, ".hbs");

  return new HtmlWebpackPlugin({
    filename: `${name}.html`,
    template: templatePath,
    minify: false,
    inject: "body",
  });
});

module.exports = {
  entry: "./src/scripts/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/scrtipts/scripts.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
        options: {
          inlineRequires: "/assets/images/",
        },
      },
      {
        test: /\.(woff2?|ttf)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    ...htmlPlugins,
    new MiniCssExtractPlugin({
      filename: "assets/styles/styles.css",
    }),
  ],
  devServer: {
    static: "./dist",
    hot: true,
  },
};
