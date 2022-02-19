const path = require('path');
const babel = require('rollup-plugin-babel');

const resolveFile = filePath => path.join(__dirname, '..', filePath)

module.exports = [
  {
    input: resolveFile('src/index.js'),
    output: {
      file: resolveFile('dist/index.js'),
      format: 'iife',
      name: 'Demo',
    }, 
    plugins: [
      babel({
        babelrc: false,
            presets: [
          ['@babel/preset-env', { modules: false }]
        ],
        plugins: [
          ["@babel/plugin-transform-classes", {
            "loose": true
          }]
        ]
      }),
    ],
  },
]