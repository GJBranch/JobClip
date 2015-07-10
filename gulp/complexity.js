'use strict';

var gulp = require('gulp');
var plato = require('gulp-plato');
var options = require('./options');

function complexity(operationSide) {
    var jsHintArgs = {
            options: options.jsHint
        },
        complexityArgs = {
            trycatch: true,
            logicalor: false,
            switchcase: false,
            forin: true,
            jshint: true,
            newmi: true
        },
        platoArgs = {
            jshint: jsHintArgs,
            complexity: complexityArgs
        };

    return gulp
        .src(options.specs[operationSide].sources)
        .pipe(plato('test/reports/' + operationSide + '/plato', platoArgs));
}

function complexityClient() {
    complexity('client');
}

function complexityServer(cb) {
    complexity('server');
}

gulp.task('complexity-server', complexityServer);
gulp.task('complexity-client', complexityClient);
gulp.task('complexity', ['complexity-server', 'complexity-client']);
