UMD，是通用定义模块 (Universal Module Definition)，是JavaScript前后端跨平台的模块化方案。

1 如果是有全局 define 方法，就封装成 AMD 模块
2 如果是有全局 exports 方法，就封装成 CommonJS 模块
3 如果都不是以上模块环境，就封装成 IIFE 模块