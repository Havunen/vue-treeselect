const { merge } = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const { libraryTargetPlaceholder } = require('../../config').library

module.exports = webpackConfig => merge(webpackConfig, {
  output: {
    filename: webpackConfig.output.filename.replace(libraryTargetPlaceholder, 'cjs'),
    library: {
      type: 'commonjs-module',
    },
  },

  externals: [
    nodeExternals(),
  ],
})
