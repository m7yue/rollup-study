const path = require('path');
const buble = require('@rollup/plugin-buble');

const resolve = filePath => path.join(__dirname, '..', filePath)

module.exports = {
  input: resolve('src/index.js'),
  output: {
    file: resolve('dist/index.js'),
    format: 'iife'
  },
  plugins: [
    buble()
  ],
}