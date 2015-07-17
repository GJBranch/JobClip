'use strict';
describe('Given a Signup state', function () {
    var rootScope,
        state,
        injector,
        stateName = 'jobClip.signup';

    beforeEach(function bootstrapApp() {
        module('JobClipApp');
        module('stateMock');
    });

    describe('when the view is created', function () {
        beforeEach(inject(function stateSetup(_$rootScope_, _$state_, _$injector_, $templateCache) {
            rootScope = _$rootScope_;
            state = _$state_;
            injector = _$injector_;
            $templateCache.put('features/signup/signup.state', '');
        }));

        it('should transition successfully to the state', function () {
            state.go(stateName);
            var scope = rootScope.$new();
            scope.$apply();
            expect(state.is(stateName)).to.equal(true);
        });

        it('should respond to URL', function () {
            expect(state.href(stateName)).to.equal('#/signup');
        });
    });
});
