'use strict';

JobClip
    .Home
    .controller('HomeController', [
        '$http',
        '$state',
        'store',
        'jwtHelper',
        function HomeController($http, $state, store, jwtHelper) {
            var _self = this;

            var logout = function logout() {
                store.remove('jwt');
                store.remove('profile');
                $state.go('login');
            };

            _self.jwt = store.get('jwt');
            _self.decodedJwt = _self.jwt && jwtHelper.decodeToken(_self.jwt);
            _self.logout = logout;
        }
    ]);
