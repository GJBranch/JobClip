'use strict';

JobClip
    .Listings
    .controller('ListingsController', [
		'Listings',
		function ListingsController(Listings) {
			var _self = this;
			_self.listings = Listings.get();
			console.log('listings', _self.listings);
		}
	]);
