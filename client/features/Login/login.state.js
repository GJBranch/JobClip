'use strict';

function loginView($stateProvider) {
    var login = {
        url: '/login',
        templateUrl: 'Login/login.partial.html',
        controller: 'LoginController',
        controllerAs: 'login'
    };
    $stateProvider
        .state('login', login);
}

function run($rootScope, $location, $state, store) {
    $rootScope.$on('$locationChangeStart', function () {
        console.log('changing location');
        var hash = $location.hash();
        if (hash.match(/error/)) {
            alert('Error logging in');
            $state.go('login');
        }
        var loginResults = hash.match(/jwt=(.+)/);
        if (!loginResults) {
            // Invalid hash URL
            return;
        } else {
            var jwt = loginResults[1];
            store.set('jwt', jwt);
            $state.go('home');
        }
    });
}

JobClip
    .App
    .config(['$stateProvider', loginView])
    .run(['$rootScope', '$location', '$state', 'store', run]);
