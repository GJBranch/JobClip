'use strict';
var appDependencies = [
    'ui.router',
    'angular-jwt',
    'angular-storage',
    'partials',
    'listing',
    'home',
    'login',
    'profile',
    'signup'
];

var JobClip = {
    App: angular.module('JobClip', appDependencies),
    Listing: angular.module('listing', []),
    Home: angular.module('home', []),
    Login: angular.module('login', ['ui.router', 'angular-storage']),
    Signup: angular.module('signup', []),
    Profile: angular.module('profile', [])
};

function defaultStateProvider($urlRouterProvider, $httpProvider, jwtInterceptorProvider) {
    $urlRouterProvider.otherwise('/');
    jwtInterceptorProvider.tokenGetter = function tokenGetter(store) {
        return store.get('jwt');
    };

    $httpProvider.interceptors.push('jwtInterceptor');
}

function run($rootScope, $state, store, jwtHelper) {

    function stateChangeStart(e, to) {
        if (to.data && to.data.requiresLogin) {
            if (!store.get('jwt') || jwtHelper.isTokenExpired(store.get('jwt'))) {
                e.preventDefault();
                $state.go('login');
            }
        }
    }

    function stateChangeError() {
        console.log('Error in state transition');
    }

    $rootScope.$on('$stateChangeStart', stateChangeStart);
    $rootScope.$on('$stateChangeError', stateChangeError);
}


JobClip
    .App
    .config(['$urlRouterProvider', '$httpProvider', 'jwtInterceptorProvider', defaultStateProvider])
    .run(['$rootScope', '$state', 'store', 'jwtHelper', run]);

window.JobClip = JobClip;
