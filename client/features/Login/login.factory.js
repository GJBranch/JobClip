'use strict';
JobClip
    .Login
    .factory('LoginFactory', ['$http', function ($http) {
        function login(data) {
            //return $http.get(config.api + '/login', {params: data});
        }

        return {
            login: login
        };
    }]);
