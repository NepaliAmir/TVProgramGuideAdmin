var channel = angular.module('channelModule', []);
channel.controller('channelController', ['$scope', '$http', '$filter', "entityService",
    function ($scope, $http, $filter, entityService) {

        $scope.channels = [];

        $scope.myFile = [];

        $scope.selectedChannel = {
            Id: '',
            ChannelId: '',
            ChannelName: '',
            ChannelCategoryId: '',
            image: ''
        }

        entityService.getChannelName().then(function (response) {
            //debugger;
            $scope.channels = response.data;
        })
        entityService.getallChannelCategory().then(function (response) {
            $scope.channelCategories = response.data;
        })


        $scope.fnEditChannelName = function (id, ChannelName, ChannelCategoryId, CategoryDescription) {
            debugger;
            $scope.selectedChannel.ChannelName = ChannelName;
            $scope.selectedChannel.ChannelId = id;
            $scope.selectedChannel.ChannelCategoryId = ChannelCategoryId;
            $scope.selectedChannel.CategoryDescription = CategoryDescription;
            $scope.catid = ChannelCategoryId;
        }

        $scope.getCategoryId = function (id) {
            $scope.selectedChannel.ChannelCategoryId = id;
            alert($scope.selectedChannel.ChannelCategoryId);
        }
        $scope.fnSaveChannelName = function () {
            var channelDetail = {
                "ChannelId": $scope.selectedChannel.ChannelId,
                "ChannelName": $scope.selectedChannel.ChannelName,
                "ChannelCategoryId": $scope.selectedChannel.ChannelCategoryId
            };
            entityService.saveUpdate(channelDetail).then(function () { alert('Channel Name is Updated'); });
        }

        $scope.uploadImage = function (channels) {
            var imageDetail = { "Name": channels.image.name, "ChannelId": $scope.selectedChannel.ChannelId };

            console.log(channels.image.name + "" + $scope.ChannelId);

            entityService.saveImageLogo(channels).then(function (data) { alert('the post was success'); });
            entityService.updateImagePath(imageDetail).then(function () { alert('the post was success'); });
        };


    }
]);