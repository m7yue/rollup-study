```
rollup 模块是rollup.js编译的核心模块
@rollup/plugin-babel 模块是rollup.js支持babel官方编译插件模块
@babel/core 是官方 babel 编译核心模块
@babel/preset-env 是官方 babel 编译解析ES6+ 语言的扩展模块

打包后的文件，页面使用的时候要引入 babel-polyfill.js或者打包的时候把babel-polyfill 模块引用进入项目中
```