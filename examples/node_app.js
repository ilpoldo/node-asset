// in your_app/lib/your_main.js
require('./asstes')

// in your_app/lib/assets.js
var assets = function(){
  this.Package = require('node-asset').Package;
  this.commonjs = new this.Package(
      './public/javascripts/common.js',
      ['./public/javascripts/base/' // contains jquery-or-other-framework, raphael
      ,'./public/javascripts/plugins/' // jquery.myplugin, jquery.someonelses_plugin
      ,'./public/javascripts/application.js'
      ],
      {type: 'js'
      ,compress: false
      ,watch: false
      });
  this.specjs = new this.Package(
      './public/javascripts/spec.js',
      ['./public/javascripts/spec/'],
      {type: 'js'
      ,compress: false
      ,watch: false
      ,compile: false
      });
  this.css = new this.Package(
      '../public/stylesheets/screen.css', ['where/is/css/dir', 'or/file.css'], {
        type: 'css',
        compress: false,
        watch: true,
        compile: true
      });
  return this;
}();

assets.commonjs.serve();