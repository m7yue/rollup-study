const path = require('path');
const { babel } = require('@rollup/plugin-babel');
const nodeResolve = require('@rollup/plugin-node-resolve').default;
const commonjs = require('@rollup/plugin-commonjs');

console.log(nodeResolve)

const resolveFile = filePath => path.join(__dirname, '..', filePath)

const babelOptions = {
  "presets": ['@babel/preset-env'],
}

module.exports = [
  {
    input: resolveFile('src/index.js'),
    output: {
      file: resolveFile('dist/index.js'),
      format: 'umd'
    }, 
    plugins: [
      nodeResolve(),
      commonjs(),
      babel(babelOptions),
    ],
  },

]