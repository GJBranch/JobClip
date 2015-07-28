'use strict';
JobClip
    .Listings
    .factory('Listings', ['$http', '$q', function ($http, $q) {
        function get(user) {
            return [
                {
                    description: 'description OKC',
                    location: 'Oklahoma City',
                    company: 'Fecca Enterprises',
                    startPay: 30.00,
                    industry: 'Oil/Natural Gas',
                    position: 'Account Manager',
                    employmentType: 'Full-Time',
                    requirements: {
                        skills: [],
                        education: '',
                        certifications: [],
                        experience: 3
                    }
                },
                {
                    description: 'description Seattle',
                    location: 'Seattle',
                    company: 'Tri, LLC',
                    startPay: 35.00,
                    industry: 'Insurance',
                    position: 'Claims Adjuster',
                    employmentType: 'Contract',
                    requirements: {
                        skills: [],
                        education: '',
                        certifications: [],
                        experience: 2
                    }
                }
            ]
        }

        return {
            get: get
        };
    }]);
