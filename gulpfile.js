'use strict';
var gulp = require('gulp');
var help = require('gulp-task-listing');

//require('./gulp/index');

require('./gulp/build');
require('./gulp/complexity');
require('./gulp/coverage');
require('./gulp/jshint');
require('./gulp/partials');
require('./gulp/scripts');
require('./gulp/serve');
require('./gulp/styles');
require('./gulp/test');
require('./gulp/watch');

gulp.task('help', help);
gulp.task('default', ['help']);
