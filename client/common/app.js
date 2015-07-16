'use strict';
var appDependencies = [
    'ui.router',
    'partials',
    'posting',
    'dashboard',
    'login',
    'profile'
];

var JobClip = {
    App: angular.module('JobClip', appDependencies),
    Posting: angular.module('posting', []),
    Dashboard: angular.module('dashboard', []),
    Login: angular.module('login', []),
    Profile: angular.module('profile', [])
};


function defaultStateProvider($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    var jobClip = {
        url: '/',
        templateUrl: 'dist/app.html' //TODO: point to template in build folder depending on how this is compiled?
    };

    $stateProvider
        .state('jobClip', jobClip);
}

function run($rootScope) {
    $rootScope.$on('$stateChangeError', function(){
       console.log('Error in state transition');
    });
    console.log('JobClip starting');
}


JobClip
    .App
    .config(['$stateProvider', '$urlRouterProvider', defaultStateProvider])
    .run(['$rootScope', run]);


window.JobClip = JobClip;
