'use strict';
var gulp = require('gulp');
require('./test/test-server');
require('./test/test-client');

gulp.task('test', ['test-server', 'test-client']);
