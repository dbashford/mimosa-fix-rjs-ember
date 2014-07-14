"use strict";

var path = require( "path" );

var _tweakEmber = function( mimosaConfig, options, next ) {
  if (options.files && options.files.length) {
    options.files.forEach( function( file ) {
      if (path.basename(file.inputFileName) === "ember.js") {
        file.inputFileText =
          file.inputFileText.replace( /define\("ember",/, "define(\"ember-int\"," )
            .replace(/requireModule\("ember"\)/, "requireModule(\"ember-int\")");        
      }
    });
  }
  next();
};

exports.registration = function( mimosaConfig, register ) {
  if ( mimosaConfig.isOptimize ) {
    register( ["add","update","buildFile"], "afterRead", _tweakEmber, ["js"] );
  }
};
