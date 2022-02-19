requirejs.config({
  baseUrl: '/', 
  paths: {}
});


define(function (require) {
  var demo = require('dist/index');
  console.log(demo)
  demo.init()
});