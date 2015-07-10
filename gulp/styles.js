'use strict';
var gulp = require('gulp');
var options = require('./options.js');
var minifyCSS = require('gulp-minify-css');
function styles() {
    return gulp
        .src(['client/styles/**/*.css'])
        .pipe(minifyCSS())
        .pipe(gulp.dest(options.appOutput));
}


gulp.task('styles', styles);
