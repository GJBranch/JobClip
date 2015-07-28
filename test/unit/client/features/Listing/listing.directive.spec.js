'use strict';

describe('Given a Listing directive', function () {
    var element, scope;

    beforeEach(module('listing'));
    beforeEach(module('templates'));

    function directiveSetup($rootScope) {
        scope = $rootScope.$new();
    }

    beforeEach(inject(directiveSetup));

    it('should make hidden element visible', inject(function ($compile) {
        element = angular.element('<listing></listing>');
        element = $compile(element)(scope);
        scope.$digest();
        expect(element.text()).to.have.length.above(1);
    }));
});
