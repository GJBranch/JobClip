var gulp = require('gulp');
var options = require('./../options');
var mocha = require('gulp-mocha');
var path = require('path');

gulp.task('test-server', function() {
    gulp
        .src(options.specs.server.tests)
        .pipe( mocha ({  reporter: 'spec' 
        }));
});
