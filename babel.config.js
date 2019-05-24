module.exports = function(api) {
  const env = api.env()

  const presets = [
    ["@babel/env", {}]
  ]
  const envOpts = {
    useBuiltIns: 'usage',
    corejs: { version: 3, proposals: true }
  }

  if (env == 'production') {
    presets.push(['minify', { builtIns: false }])
  }

  if (env == 'development') {
    presets.push(['minify', { builtIns: false }])
    //envOpts.debug = true
  }

  presets[0][1] = envOpts

  return {
    presets: presets,
    plugins: []
  }
}
