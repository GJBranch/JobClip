'use strict';
JobClip
    .App
    .config(['$stateProvider',
        function jobsState($stateProvider) {
            var jobs = {
                url: '/jobs',
                templateUrl: 'Jobs/jobs.partial.html',
                data: { requiresLogin: true },
                controller: 'JobsController',
                controllerAs: 'jobs'
            };
            $stateProvider
                .state('jobs', jobs);
        }]);
