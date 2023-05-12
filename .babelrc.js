module.exports = api => {
  api.cache.never()

  const presets = [
    [ '@babel/preset-env', { modules: false } ],
  ]
  const plugins = [
    'transform-vue-jsx'
  ]

  if (process.env.NODE_ENV === 'testing') {
    plugins.push('istanbul')
  }

  return { presets, plugins, comments: false }
}
