var gulp = require('gulp');
var options = require('./../options');
var karma = require('karma').server;
var path = require('path');

function testClient() {
    function exit(exitCode) {
        process.exit(exitCode);
    }
    karma.start({
        configFile: path.resolve(options.karmaConfig)
    }, exit);
}

gulp.task('test-client', testClient);
