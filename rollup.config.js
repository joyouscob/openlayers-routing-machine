import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import svelte from 'rollup-plugin-svelte'
import sizes from "rollup-plugin-sizes"

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/openlayers-routing-machine.js',
    format: 'umd',
    name: 'olrm',
    globals: {
      'openlayers': 'ol'
    }
  },
  plugins: [
    json({ preferConst: true }),
    svelte({
      css: function (css) {
        css.write('dist/openlayers-routing-machine.css')
      }
    }),
    resolve({browser: true}),
    commonjs(),
    sizes()
  ]
}
