'use strict';
JobClip
    .App
    .config(['$stateProvider',
    function loginView($stateProvider) {
            var login = {
                url: '/login',
                templateUrl: 'Login/login.partial.html',
                controller: 'LoginController',
                controllerAs: 'login'
            };
            $stateProvider
                .state('login', login);
 }]);
