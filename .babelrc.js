module.exports = api => {
  api.cache.never()

  const presets = [
    [ '@babel/preset-env', {
      modules: false,
      targets: {
        browsers: ["last 2 chrome version", "last 2 firefox version", "last 2 safari version"],
      }
    } ],
  ]
  const plugins = [
    'transform-vue-jsx'
  ]

  if (process.env.NODE_ENV === 'testing') {
    plugins.push('istanbul')
  }

  return { presets, plugins, comments: false }
}
