var gulp = require('gulp');
var options = require('./../options');
var istanbul = require('gulp-istanbul');
var runner = require('gulp-mocha');
var path = require('path');

function coverageServer(cb) {
    function createReports() {
        return gulp
            .src(options.specs.server.tests)
            .pipe(runner())
            .pipe(istanbul.writeReports(options.specs.server.coverageFolder)); // Creating the reports after tests run
    }

    return gulp
        .src(options.specs.server.sources)
        .pipe(istanbul()) // Covering files
        .pipe(istanbul.hookRequire()) // Force `require` to return covered files
        .on('end', createReports);
}

gulp.task('coverage-server', coverageServer);

