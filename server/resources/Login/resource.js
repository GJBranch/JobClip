'use strict';
function LoginResource(config) {
    function getLogin(request, response, next) {
        response.send({success: true});
        function handleData(data) {
            response.send(data);
        }

        function handleError(error) {
            next(error);
        }
    }

    this.get = getLogin;
}

module.exports = LoginResource;
