'use strict';
function UserCreateResource(config) {
    function createUser(request, response, next) {
        console.log('request', request.body.data);
        response.send({success: true, user: request.body.data});
        function handleData(data) {
            response.send(data);
        }

        function handleError(error) {
            next(error);
        }
    }

    this.post = createUser;
}

module.exports = UserCreateResource;
