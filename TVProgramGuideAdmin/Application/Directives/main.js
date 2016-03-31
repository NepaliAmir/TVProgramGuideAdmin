angular.module('main', ['ngRoute', 'channelModule', 'akFileUploader', ]).config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $routeProvider.when('/', {

            templateUrl: ('Template/ChannelsDetails/_channelMain.html'),
            controller: 'channelController'
        });
        $routeProvider.when('/DashBoard', {
            templateUrl: ('Template/DashBoard/_dashBoardMain.html'),
            controller: 'channelController'
        });
        $routeProvider.when('/Programs/:ProgramId?', {
            templateUrl: ('Template/ProgramDetails/_ProgramDetailsMain.html'),
            controller: 'channelController',
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode(false).hashPrefix('!');
    }
]);