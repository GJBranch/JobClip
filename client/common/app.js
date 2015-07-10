'use strict';
var appDependencies = [
    'ui.router',
    'partials',
    'posting',
    'dashboard',
    'login'
];

var JobClip = {
    App: angular.module('JobClip', appDependencies),
    Posting: angular.module('posting', []),
    Dashboard: angular.module('dashboard', []),
    Login: angular.module('login', [])
};


function defaultStateProvider($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
        .otherwise('/');

    var jobClip = {
        url: '/',
        templateUrl: 'dist/app.html' //TODO: point to template in build folder depending on how this is compiled?
    };

    $stateProvider
        .state('jobClip', jobClip);
}

function run($rootScope) {
    console.log('JobClip starting');
}


JobClip
    .App
    .config(['$stateProvider', '$urlRouterProvider', defaultStateProvider])
    .run(['$rootScope', run]);


window.JobClip = JobClip;
