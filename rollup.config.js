const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('@rollup/plugin-json')
const {terser} = require('rollup-plugin-terser')

const suffix = process.env.USE_POLYFILLS == 'on' ? '.polyfilled' : ''

module.exports = {
  input: 'src/index.js',
  output: [
    {
      format: 'amd',
      file: 'dist/dom-scripter.amd' + suffix + '.js'
    },
    {
      format: 'cjs',
      file: 'dist/dom-scripter.cjs' + suffix + '.js'
    },
    {
      format: 'es',
      file: 'dist/dom-scripter.es' + suffix + '.js'
    },
    {
      format: 'iife',
      file: 'dist/dom-scripter.iife' + suffix + '.js',
      name: 'Scripter'
    },
    {
      format: 'umd',
      file: 'dist/dom-scripter.umd' + suffix + '.js',
      name: 'Scripter'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel(),
    json(),
    terser({sourcemap: false})
  ]
}
