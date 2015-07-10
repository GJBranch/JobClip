'use strict';
var appDependencies = [
    'ui.router',
    'partials',
    'policy',
    'dashboard',
    'login'
];

var Dev = {
    App: angular.module('DevApp', appDependencies),
    Policy: angular.module('policy', []),
    Dashboard: angular.module('dashboard', []),
    Login: angular.module('login', [])
};


function defaultStateProvider($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
        .otherwise('/');

    var dev = {
        url: '/',
        templateUrl: 'dist/app.html' //TODO: point to template in build folder depending on how this is compiled?
    };

    $stateProvider
        .state('dev', dev);
}

function run($rootScope) {
    console.log('Dev starting');
}


Dev
    .App
    .config(['$stateProvider', '$urlRouterProvider', defaultStateProvider])
    .run(['$rootScope', run]);


window.Dev = Dev;
