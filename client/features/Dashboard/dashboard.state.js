JobClip
    .App
    .config(['$stateProvider',
    function dashboardState($stateProvider) {
            var dashboard = {
                url: 'dashboard',
                templateUrl: 'Dashboard/dashboard.partial.html',
                controller: 'DashboardController',
                controllerAs: 'dashboard'
            };
            $stateProvider
                .state('jobClip.dashboard', dashboard);
 }]);
