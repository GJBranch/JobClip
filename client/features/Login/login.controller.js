'use strict';
JobClip
    .Login
    .controller('LoginController', [
        '$state',
        '$http',
        'store',
        function LoginController($state, $http, store) {
            var _self = this;
            var login = function login() {
                var loginOpts = {
                    url: 'http://localhost:8001/sessions/create',
                    method: 'POST',
                    data: _self.user
                };

                function onSuccessfulLogin(response) {
                    store.set('jwt', response.data.id_token);
                    $state.go('home');
                }

                function onFailedLogin(error) {
                    alert(error.data);
                }

                $http(loginOpts)
                    .then(onSuccessfulLogin, onFailedLogin);
            };

            _self.user = {};
            _self.login = login;
        }]);
