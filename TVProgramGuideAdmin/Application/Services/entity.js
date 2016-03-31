"use strict";
(function () {
    angular.module("main")
           .factory("entityService", ["akFileUploaderService", "$http", function (akFileUploaderService, $http) {
               //var BaseUrl = 'http://localhost:58976/api/';
               var saveImageLogo = function (imageLogo) {
                   return akFileUploaderService.saveModel(imageLogo, "/api/Photo/Post");
               };
               var getChannelName = function () {
                   var url = 'api/Channel/AllChannelName';
                   return $http.get(url);
               };
               var saveUpdate = function (channelDetail) {
                   return $http({
                       method: 'POST',
                       url: 'api/Channel/SaveUpdateChannelDetail',
                       data: channelDetail
                   });
               }
               var updateImagePath = function (imageDetail) {
                   debugger;
                   return $http({
                       method: 'POST',
                       url: '/api/Channel/ImagePath',
                       data: imageDetail
                   });
               }
               return {
                   saveImageLogo: saveImageLogo,
                   getChannelName: getChannelName,
                   saveUpdate: saveUpdate,
                   updateImagePath: updateImagePath
               };


           }]);
})();