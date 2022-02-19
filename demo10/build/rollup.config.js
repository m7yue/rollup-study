const path = require('path');
const { babel } = require('@rollup/plugin-babel');

const resolveFile = filePath => path.join(__dirname, '..', filePath)

const babelOptions = {
  "presets": ['@babel/preset-env'],
}

module.exports = [ 
  {
    input: resolveFile('src/index.js'),
    output: {
      file: resolveFile('dist/index.js'),
      format: 'iife',
      name: 'Demo', // 全局变量，window.xxx
      amd: {
        id: 'lib/demo'
      },
    }, 
    plugins: [
      babel(babelOptions),
    ],
  },
]