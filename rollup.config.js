const {nodeResolve} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('@rollup/plugin-json')
const {terser} = require('rollup-plugin-terser')

const suffix = process.env.USE_POLYFILLS == 'on' ? '.polyfilled' : ''

module.exports = {
  input: 'src/index.js',
  output: [
    {
      exports: 'default',
      format: 'amd',
      file: 'dist/dom-scripter.amd' + suffix + '.js'
    },
    {
      exports: 'default',
      format: 'cjs',
      file: 'dist/dom-scripter.cjs' + suffix + '.js'
    },
    {
      exports: 'default',
      format: 'es',
      file: 'dist/dom-scripter.es' + suffix + '.js'
    },
    {
      exports: 'default',
      format: 'iife',
      file: 'dist/dom-scripter.iife' + suffix + '.js',
      name: 'DOMScripter'
    },
    {
      exports: 'default',
      format: 'umd',
      file: 'dist/dom-scripter.umd' + suffix + '.js',
      name: 'DOMScripter'
    }
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    babel(),
    json(),
    terser()
  ]
}
