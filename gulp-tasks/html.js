/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

'use strict';

const htmlmin = require('gulp-htmlmin');
const htmlclean = require('gulp-htmlclean');

// Returns a WriteableStream to process images
function minify() {
  return htmlmin({
    caseSensitive: true,
    collapseBooleanAttributes: false,
    collapseInlineTagWhitespace: true,
    collapseWhiteSpace: true,
    conservativeCollapse: true,
    decodeEntities: true,
    minifyCSS: true,
    preserveLineBreaks: false,
    removeComments: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    trimCustomFragments: true,
    useShortDoctype: true
  });
}

function clean() {
  return htmlclean();
}

module.exports = {
  minify: minify,
  clean: clean
};
