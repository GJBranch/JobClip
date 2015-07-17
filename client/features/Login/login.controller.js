'use strict';
JobClip
    .Login
    .controller('LoginController', [
        '$state',
        'store',
        'Login',
        function LoginController($state, store, Login) {
            var _self = this;
            var login = function login() {
                function redirect(data){
                    if (data.id_token){
                        store.set('jwt', data.id_token);
                        $state.go('home');
                    }
                }

                Login
                    .authenticate(_self.user)
                    .then(redirect);
            };

            _self.user = {};
            _self.login = login;
        }]);
