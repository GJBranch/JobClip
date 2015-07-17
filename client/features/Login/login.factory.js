'use strict';
JobClip
    .Login
    .factory('Login', ['$http', '$q', function ($http, $q) {
        function authenticate(user) {
            var dfd = $q.defer();
            var loginOpts = {
                url: 'sessions/create',
                method: 'POST',
                data: user
            };

            function onSuccessfulLogin(data) {
                dfd.resolve(data);
            }

            function onFailedLogin(data, status, headers, config) {
                alert(data);
                dfd.reject(data, status, headers, config);
            }

            $http(loginOpts)
                .success(onSuccessfulLogin)

            return dfd.promise;
        }

        return {
            authenticate: authenticate
        };
    }]);
