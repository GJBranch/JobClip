'use strict';
var gulp = require('gulp');
var options = require('./options.js');
var rimraf = require('gulp-rimraf');
var runSequence = require('run-sequence');

function cleanBuild() {
    console.log('Cleaning build folder: ', options.appOutput);
    var src = options.appOutput + '/*.*';
    return gulp.src(src)
        .pipe(rimraf({
            force: true
        }));
}

function buildTasks(cb) {
    runSequence('clean', [
            'partials',
            'scripts',
            'styles'
        ],
        cb);
}
gulp.task('build', buildTasks);
gulp.task('build-watch', buildTasks);
gulp.task('clean', cleanBuild);
