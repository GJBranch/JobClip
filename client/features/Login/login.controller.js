'use strict';
JobClip
    .Login
    .controller('LoginController', ['$state', 'LoginFactory', function LoginController($state, loginFactory) {
        var _self = this;

        var closedError = function closedError() {
            _self.displayError = false;
        };

        var userLogin = function userLogin(user) {
            function onSuccess() {
                $state.go('jobClip.dashboard');
            }

            function onError() {
                _self.displayError = true;
            }

            loginFactory
                .login(user)
                .success(onSuccess)
                .error(onError);
        };

        _self.displayError = false;
        _self.userLogin = userLogin;

        _self.closedError = closedError;
    }]);
