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
            var callApi = function callApi(type, url) {
                function onSuccess(quote) {
                    _self.response = quote.data;
                }

                function onError(error) {
                    _self.response = error.data;
                }

                _self.response = null;
                _self.api = type;
                var httpOpts = {
                    url: url,
                    method: 'GET'
                };

                $http(httpOpts).then(onSuccess, onError);
            };

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
