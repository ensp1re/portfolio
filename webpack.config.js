const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              outputPath: "assets/",
            },
          },
        ],
      },
    ],
  },
};
