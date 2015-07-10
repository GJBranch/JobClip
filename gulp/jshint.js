var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

function jshintTask() {
    var src = [
        'client/**/*.js',
        'server/**/*.js'
    ];

    return gulp
        .src(src)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
}

gulp.task('jshint', jshintTask);
