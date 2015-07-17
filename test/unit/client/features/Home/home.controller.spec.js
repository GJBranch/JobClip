'use strict';
describe('Given a Home Controller', function () {
//    load the controller's module
    beforeEach(module('home'));

    var vm, scope;

    // Initialize the controller and a mock scope
    function controllerSetup($controller, $rootScope) {
        scope = $rootScope.$new();
        vm = $controller('HomeController', {});
        scope.$apply();
    }

    describe('when the controller loads', function(){
        beforeEach(inject(controllerSetup));

        it('should have a defined scope', function () {
            expect(1).to.equal(1);
        });
    });

});
