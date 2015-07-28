'use strict';

JobClip
    .Listings
    .directive('listings', [
        function listingsDirective() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    id: '@',
                    value: '=?'
                },
                templateUrl: 'Listings/listings.partial.html',
                controller: 'ListingsController',
                controllerAs: 'listings',
                bindToController: true,
                link: function link($scope, $element, $attrs) {
                }
            };
        }
    ]);
