'use strict';
var gulp = require('gulp');
var options = require('./options.js');
var gutil = require('gulp-util');
var browserify = require('browserify');
var manifest = require('gulp-concat-filenames');
var source = require('vinyl-source-stream');
var tap = require('gulp-tap');

function scripts() {
    var appPath = 'client/common/app.js';
    var src = [
        appPath,
        options.common,
        options.features
    ];

    var manifestOptions = {
        root: './',
        prepend: 'require("./',
        append: '");'
    };

    var browserifyConfig = {
        debug: !gutil.env.production,
        shim: {
            App: {
                path: appPath,
                exports: options.appName
            }
        }
    };

    return gulp
        .src(src)
        .pipe(manifest('scripts.js', manifestOptions))
        .pipe(tap(function doBrowserification(file) {
            return browserify(file, browserifyConfig)
                .bundle()
                .pipe(source('scripts.js'))
                .pipe(gulp.dest(options.appOutput));
        }));
}

gulp.task('scripts', scripts);
