angular.module('app.addController', ['ngFileUpload'])
  .controller('addController', ['$scope', '$http',
    function ($scope, $http) {
      $scope.selectedDocType = [];
      $scope.success = [];

      $scope.docTypes = [
        'Passport',
        'Driving License',
        'Rental Agreement'
      ];

      $scope.files = [];
      $scope.addFiles = function (files) {
        if (files.length) {
          $scope.files = files.map(val => function(){
            let fileObject = {};
            fileObject.metaData = {
              name: file.name,
              fileType: file.type
            };
            fileObject.content = file;

            return fileObject;
          });
        }
      };

      $scope.uploadFiles = function () {
        let uploadFileIterator = 0;

        angular.forEach($scope.files, function (file) {
          let backendUrl = 'https://webapisecuredbb.azurewebsites.net/documents';

          let object = {};
          object.docType = $scope.selectedDocType[i];
          object.docName = file.metaData.name;
          object.userId = localStorage.getItem('user_id');

          let formData = new FormData();
          let documentObject = JSON.stringify(object);
          formData.append('document', new Blob([documentObject], {
            type: 'application/json'
          }));
          formData.append('content', file.content);

          $http.post(backendUrl, formData, {
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
          }).then(function () {
            $scope.success[uploadFileIterator] = true;
            uploadFileIterator = uploadFileIterator + 1;
          }, function () {
            $scope.success[uploadFileIterator] = false;
            uploadFileIterator = uploadFileIterator + 1;
          });
        });
      }
    }]);
