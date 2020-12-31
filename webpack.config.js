// eslint-disable-next-line @typescript-eslint/no-var-requires
var path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TerserPlugin = require("terser-webpack-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/app.ts",
  target: "node",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
  optimization: {
    minimizer: [new TerserPlugin({ terserOptions: { mangle: false } })], // mangle false else mysql blow ups with "PROTOCOL_INCORRECT_PACKET_SEQUENCE"
  },
  node: {
    __dirname: false,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        "./node_modules/swagger-ui-dist/swagger-ui.css",
        "./node_modules/swagger-ui-dist/swagger-ui-bundle.js",
        "./node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js",
        "./node_modules/swagger-ui-dist/favicon-16x16.png",
        "./node_modules/swagger-ui-dist/favicon-32x32.png",
      ],
    }),
  ],
};
