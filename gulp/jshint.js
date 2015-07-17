var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var options = require('./options');

function jshintTask() {
    var src = [
        options.common,
        options.features,
        //'server/**/*.js'
    ];

    return gulp
        .src(src)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
}

gulp.task('jshint', jshintTask);
