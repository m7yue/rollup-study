const path = require('path');
const { babel } = require('@rollup/plugin-babel');

const resolveFile = filePath => path.join(__dirname, '..', filePath)

const babelOptions = {
  'presets': ['@babel/preset-env'],
}
const plugins = [
  babel(babelOptions),
]

module.exports = [
  {
    input: resolveFile('src/index.js'),
    output: {
      file: resolveFile('dist/index.js'),
      format: 'cjs',
    }, 
    external: ['lib/hello', 'lib/world'],
    plugins,
  }
]