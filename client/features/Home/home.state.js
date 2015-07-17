'use strict';
JobClip
    .App
    .config(['$stateProvider',
        function homeState($stateProvider) {
            var home = {
                url: '/',
                templateUrl: 'Home/home.partial.html',
                data: {requiresLogin: true},
                controller: 'HomeController',
                controllerAs: 'home'
            };

            $stateProvider
                .state('home', home);
        }]);
