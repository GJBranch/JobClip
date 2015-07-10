Dev
    .App
    .config(['$stateProvider',
    function policyState($stateProvider) {
            var policy = {
                url: 'policy',
                templateUrl: 'Policy/policy.partial.html',
                controller: 'PolicyController',
                controllerAs: 'policy'
            };
            $stateProvider
                .state('dev.policy', policy);
 }]);
