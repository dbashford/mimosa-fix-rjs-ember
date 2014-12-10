mimosa-fix-rjs-ember
===========
## Overview

This addresses issues introduced with ember `1.7` beta builds.  Starting with ember `1.7`, and, I believe, only in beta/canary builds, ember defines its own  `'ember'` module id.  If you have an `'ember'` module ID also defined, r.js will get confused and not properly bundle your app.  

You do not need this module if you are working with ember 1.8+.

For more details, see the following:
* https://github.com/dbashford/mimosa/issues/404
* https://github.com/emberjs/ember.js/issues/4994
* http://discuss.emberjs.com/t/anyone-having-trouble-bundling-the-canary-build-with-almond/5566

For more information regarding Mimosa, see http://mimosa.io.

## Usage

Add `'fix-rjs-ember'` to your list of modules. Mimosa will install the module for you when you start up.

## Functionality

This adjusts your `ember.js`, tweaking it so `define('ember', ...)` does not clash with your own ember.  It only does this when the `-o/--optimize` flag is engaged.

## Default Config

This module has no config.