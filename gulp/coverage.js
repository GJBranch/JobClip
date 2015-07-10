'use strict';
var gulp = require('gulp');
require('./coverage/coverage-server');
require('./test/test-client');

gulp.task('coverage', ['coverage-server', 'test-client']);
