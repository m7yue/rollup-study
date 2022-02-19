import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';


export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [resolve({
    // 将自定义选项传递给解析插件
    customResolveOptions: {
      moduleDirectory: 'node_modules'
    }
  }),
  babel({
    exclude: 'node_modules/**' // 只编译我们的源代码
  })
],
  // 指出应将哪些模块视为外部模块
  external: ['lodash']
};