JobClip
    .App
    .config(['$stateProvider',
    function postingState($stateProvider) {
            var posting = {
                url: 'posting',
                templateUrl: 'Posting/posting.partial.html',
                controller: 'PostingController',
                controllerAs: 'posting'
            };
            $stateProvider
                .state('jobClip.posting', posting);
 }]);
