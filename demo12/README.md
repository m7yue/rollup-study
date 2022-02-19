rollup.js编译源码中的模块引用默认只支持 ES6+的模块方式import/export。然而大量的npm模块是基于CommonJS模块方式，这就导致了大量 npm 模块不能直接编译使用。所以辅助rollup.js编译支持 npm模块和CommonJS模块方式的插件就应运而生。

@rollup/plugin-commonjs 支持CommonJS的模块引用的rollup.js插件
@rollup/plugin-node-resolve 支持npm模块引用的rollup.js插件