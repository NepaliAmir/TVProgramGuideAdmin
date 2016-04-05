var programs = angular.module('programModule', []);
programs.controller('programController', ['$scope', '$http', '$filter', "entityService",
function ($scope, $http, $filter, entityService, ApiCall) {
    $scope.programDetails = {
        Id: '',
        ChannelId: '',
        ChannelName: '',
        image: ''
    }

    entityService.getAllProgramsDetails().then(function (response) {
        $scope.programs = response.data;
    })
    $scope.fnEditProgramDetails = (function () {
    })

}
]);