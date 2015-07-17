'use strict';
JobClip
    .App
    .config(['$stateProvider',
    function signupState($stateProvider) {
            var signup = {
                url: '/signup',
                templateUrl: 'Signup/signup.partial.html',
                controller: 'SignupController',
                controllerAs: 'signup'
            };
            $stateProvider
                .state('signup', signup);
 }]);
