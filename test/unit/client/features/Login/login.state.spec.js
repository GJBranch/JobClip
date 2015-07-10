'use strict';
describe('Given a Login state', function () {
    var rootScope,
        state,
        injector,
        stateName = 'jobClip.login';

    beforeEach(function bootstrapApp() {
        module('JobClipApp');
        module('stateMock');
    });

    describe('when the view is created', function () {
        beforeEach(inject(function stateSetup(_$rootScope_, _$state_, _$injector_, $templateCache) {
            rootScope = _$rootScope_;
            state = _$state_;
            injector = _$injector_;
            $templateCache.put('features/login/login.state', '');
        }));

        it('should transition successfully to the state', function () {
            state.go(stateName);
            var scope = rootScope.$new();
            scope.$apply();
            expect(state.is(stateName)).to.equal(true);
        });

        it('should respond to URL', function () {
            expect(state.href(stateName)).to.equal('#/login');
        });
    });
});
