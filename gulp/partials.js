'use strict';
var gulp = require('gulp');
var options = require('./options.js');
var concat = require('gulp-concat');
var minifyHtml = require('gulp-minify-html');
var gutil = require('gulp-util');
var html2js = require("gulp-ng-html2js");
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');


function makeFeaturePartials() {
    var htmlMinOpts = {
        empty: true,
        spare: true,
        quotes: true
    };

    return gulp
        .src(['client/features/**/*.partial.html'])
        .pipe(minifyHtml(htmlMinOpts))
        .pipe(html2js({
            moduleName: 'partials',
            stripPrefix: 'client/features'
        }))
        .pipe(concat('partials.js'))
        .pipe(uglify())
        .pipe(gulp.dest(options.appOutput));
}


function makeCommonPartials() {
    var htmlMinOpts = {
        collapseWhitespace: true
    };

    return gulp
        .src(['client/common/*.html'])
        .pipe(gutil.env.production ? htmlmin(htmlMinOpts) : gutil.noop())
        .pipe(gulp.dest(options.appOutput));
}

gulp.task('partials-common', makeCommonPartials);
gulp.task('partials-features', makeFeaturePartials);

gulp.task('partials', ['partials-features', 'partials-common']);
