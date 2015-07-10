// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
    "use strict";
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../../',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['mocha', 'chai', 'sinon'],

        // list of files / patterns to load in the browser
        files: [
            'client/bower_components/angular/angular.js',
            'client/bower_components/angular-resource/angular-resource.js',
            'client/bower_components/angular-cookies/angular-cookies.js',
            'client/bower_components/angular-sanitize/angular-sanitize.js',
            'client/bower_components/angular-animate/angular-animate.js',
            'client/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'client/bower_components/angular-ui-router/release/angular-ui-router.js',
            'client/bower_components/lodash/lodash.js',
            'client/bower_components/angular-mocks/angular-mocks.js',
            'test/lib/**/*.js',
            'client/common/app.js',
            'client/common/**/*.js',
            'client/features/**/*.js',
            'client/common/**/*.html',
            'client/features/**/*.html',
            'test/unit/client/**/*.js'
        ],

        preprocessors: {
            'client/common/**/*.js': ['coverage'],
            //'client/common/**/*.html': ['ng-html2js'],
            'client/features/**/*.js': ['coverage'],
            'client/features/**/*.html': ['ng-html2js']
        },

        reporters: ['progress', 'coverage', 'html'],

        coverageReporter: {
            type: 'html',
            dir: 'test/reports/client/coverage',
            subdir: function (browser) {
                return browser.split(/[ /-]/)[0];
            }
        },

        htmlReporter: {
            outputFile: 'test/reports/client/unit-test-results.html'
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: 'client/features/',
            moduleName: 'partials'
        },

        //thresholdReporter: {
        //  statements: 90,
        //  branches: 60,
        //  functions: 85,
        //  lines: 90
        //},

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 8080,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)

        browsers: ['Chrome'],
        //browsers: ['Chrome', 'PhantomJS', 'Firefox'],

        //captureTimeout: 60000, // 60 seconds

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};
