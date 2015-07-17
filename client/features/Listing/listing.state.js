'use strict';
JobClip
    .App
    .config(['$stateProvider',
    function listingState($stateProvider) {
            var listing = {
                url: 'listing',
                templateUrl: 'Listing/listing.partial.html',
                controller: 'ListingController',
                controllerAs: 'Listing'
            };
            $stateProvider
                .state('jobClip.listing', listing);
 }]);
