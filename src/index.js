"use strict";

var path = require( "path" )
  , emberNames = [
  "ember.canary.js",
  "ember.release.js",
  "ember.beta.js",
  "ember.js",
  "ember.min.js",
  "ember.prod.js"
];

var _tweakEmber = function( mimosaConfig, options, next ) {
  if ( options.files && options.files.length ) {
    options.files.forEach( function( file ) {
      if ( emberNames.indexOf( path.basename( file.inputFileName ) ) !== -1 ) {
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
