const path = require('node:path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

exports.resolve = dir => (
  path.join(__dirname, '../..', dir)
)

exports.styleLoaders = (options = {}) => {
  const loaders = [ {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      sourceMap: options.sourceMap,
    },
  }, {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap,
    },
  }, {
    loader: 'less-loader',
    options: {
      sourceMap: options.sourceMap,
    },
  } ]

  if (options.extract) {
    loaders.unshift(MiniCssExtractPlugin.loader)
  } else {
    loaders.unshift('vue-style-loader')
  }

  return {
    test: /\.(css|less)$/,
    use: loaders,
  }
}

exports.withCacheLoader = rule => {
  // Disable cache-loader when running tests.
  if (process.env.NODE_ENV === 'testing') {
    return rule
  }

  const { loader, options, use, ...rest } = rule
  const loaders = Array.isArray(use)
    ? use
    : typeof loader === 'string' && !options
      ? [ loader ]
      : [ { loader, options } ]

  return {
    use: [ ...loaders ],
    ...rest,
  }
}
