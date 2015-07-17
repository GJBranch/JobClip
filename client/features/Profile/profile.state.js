'use strict';
JobClip
    .App
    .config(['$stateProvider',
    function profileState($stateProvider) {
            var profile = {
                url: 'profile',
                templateUrl: 'Profile/profile.partial.html',
                controller: 'ProfileController',
                controllerAs: 'profile'
            };
            $stateProvider
                .state('jobClip.profile', profile);
 }]);
