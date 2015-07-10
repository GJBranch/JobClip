'use strict';
var gulp = require('gulp'),
    options = require('./options'),
    livereload = require('gulp-livereload'),
    runSequence = require('run-sequence'),
    server;


function reloadPage(file) {
    livereload.changed(file.path);
}

function startLivereloadServer() {
    livereload.listen();
}

function watch(cb) {
    runSequence('livereload', [
        'build-watch',
        'watch-partials',
        'watch-scripts',
        'watch-styles'
    ], cb);
}

gulp.task('watch-partials', function watchPartials() {
    var htmlSource = ['client/**/*.html', '!client/dist'];
    gulp
        .watch(htmlSource)
        .on('change', function onChange(file) {
            runSequence('partials', function () {
                reloadPage(file);
            });
        });
});

gulp.task('watch-scripts', function watchScripts() {
    var scriptsSource = [options.common, options.features];
    gulp
        .watch(scriptsSource)
        .on('change', function onChange(file) {
            runSequence('scripts', function () {
                setTimeout(function(){
                    reloadPage(file);
                }, 750); //TODO: find way to reload scripts without requiring a timeout.
            });
        });
});

gulp.task('watch-styles', function watchStyles() {
    var stylesSource = ['client/styles/**/*.css'];
    gulp
        .watch(stylesSource)
        .on('change', function onChange(file) {
            runSequence('styles', function () {
                reloadPage(file);
            });
        })
});

gulp.task('livereload', startLivereloadServer);
gulp.task('watch', watch);
