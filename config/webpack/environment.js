const { environment } = require('@rails/webpacker')

module: {
  rules: [
    {
      test: /\.js(\.erb)?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['env', { modules: false }]
        ]
      }
    },
  ]
}

environment.loaders.get('sass').use.splice(-1, 0,   {
    loader: 'sass-loader',
    options: {
      outputStyle: 'compressed',
      sourceMap: true
    },
  });

module.exports = environment
