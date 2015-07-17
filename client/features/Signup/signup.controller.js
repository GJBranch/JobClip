'use strict';

JobClip
    .Signup
    .controller('SignupController', [
        '$state',
        '$http',
        'store',
        function SignupController($state, $http, store) {
            console.log('entering signup controller?', store);
            var _self = this;
            var createUser = function createUser() {
                var httpOpts = {
                    url: 'http://localhost:8001/users',
                    method: 'POST',
                    data: _self.user
                };
                console.log('user', _self.user);
                function onSignupSuccess(response) {
                    store.set('jwt', response.data.id_token);
                    $state.go('jobClip');
                }

                function onSignupError(error) {
                    alert(error.data);
                }

                $http(httpOpts)
                    .then(onSignupSuccess, onSignupError);
            };

            _self.user = {};
            _self.createUser = createUser;
        }
    ]);
