const path = require('path');
const jsonImporter = require('node-sass-json-importer').default;

module.exports = {
  entry: {
    style: [
      path.resolve(__dirname, 'assets/scss/index.scss')
    ]
  },
  watch: true,
  output: {
    path: path.join(__dirname, 'static/css'),
  },
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'noahtkeller.hugo.min.css'}
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                importer: jsonImporter()
              },
            }
          },
        ],
      },
    ],
  },
};

