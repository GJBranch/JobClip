'use strict';
describe('Given a Dev application', function () {
//    load the controller's module
    beforeEach(module('DevApp'));

    it('the app should run', function () {
        expect(1).to.equal(1);
    });
});
