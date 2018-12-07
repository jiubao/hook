import buble from 'rollup-plugin-buble'
import cfg from './package.json'

export default {
  input: 'src/index.js',
  output: [{
    file: cfg.browser,
    format: 'umd',
    name: 'raf'
  }, {
    file: cfg.module,
    format: 'es'
  }, {
    file: cfg.cjs,
    format: 'cjs'
  }],
  plugins: [
    buble()
  ]
}
