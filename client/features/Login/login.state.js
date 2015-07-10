JobClip
    .App
    .config(['$stateProvider',
    function loginState($stateProvider) {
            var login = {
                url: 'login',
                templateUrl: 'Login/login.partial.html',
                controller: 'LoginController',
                controllerAs: 'login'
            };
            $stateProvider
                .state('jobClip.login', login);
 }]);
