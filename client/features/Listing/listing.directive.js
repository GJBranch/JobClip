'use strict';

JobClip
    .Listing
    .directive('listing', [
        function listingDirective() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    id: '@',
                    data: '=?'
                },
                templateUrl: 'Listing/listing.partial.html',
                controller: 'ListingController',
                controllerAs: 'listing',
                bindToController: true,
            };
        }
    ]);
