"use strict";
(function () {
    angular.module("main")
           .factory("entityService", ["akFileUploaderService", "$http", function (akFileUploaderService, $http) {
              // var BaseUrl = 'http://tvprogramapi.azurewebsites.net/';
               var BaseUrl = 'http://localhost:7783/';
               var saveImageLogo = function (imageLogo) {
                   return akFileUploaderService.saveModel(imageLogo,BaseUrl+ "/api/Photo/Post");
               };
               var getallChannelCategory = function () {
                   var url = BaseUrl + 'api/Channel/GetAllChannelCategory';
                   return $http.get(url);
               }
               var getChannelName = function () {
                   var url = BaseUrl+'api/Channel/AllChannelName';
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
                       url: BaseUrl+'/api/Channel/ImagePath',
                       data: imageDetail
                   });
               }
               return {
                   saveImageLogo: saveImageLogo,
                   getChannelName: getChannelName,
                   saveUpdate: saveUpdate,
                   getallChannelCategory:getallChannelCategory,
                   updateImagePath: updateImagePath
               };

           }]);
})();