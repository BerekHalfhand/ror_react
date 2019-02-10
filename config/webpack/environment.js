const { environment } = require('@rails/webpacker')
console.log(process.env.NODE_ENV)
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
    {
      test: /\.(s*)css$/,
      use: [{
                loader: "style-loader"      // creates style nodes from JS strings
            }, {
                loader: "css-loader",       // translates CSS into CommonJS
                options: {
                  sourceMap: true,
                },
            }, {
                loader: "sass-loader",      // compiles Sass to CSS, using Node Sass by default
                options: {
                  outputStyle: 'compressed',
                  sourceMap: true
                }
      }]
    },
  ]
}

module.exports = environment
