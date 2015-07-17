'use strict';
function UsersResource(config) {
    function createUser(request, response, next) {
        console.log('request', request);
        response.send({success: true, user: request.body});
        function handleData(data) {
            response.send(data);
        }

        function handleError(error) {
            next(error);
        }
    }

    this.post = createUser;
}

module.exports = UsersResource;
