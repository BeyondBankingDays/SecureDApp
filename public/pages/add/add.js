angular.module('app.addController', ['ngFileUpload'])
  .controller('addController', ['$scope', '$http', 'DOCUMENTTYPES',
    function ($scope, $http, DOCUMENTTYPES) {
      $scope.selectedDocType = [];
      $scope.success = [];
      $scope.files = [];

      $scope.docTypes = DOCUMENTTYPES;

      $scope.addFiles = function (files, errorFiles) {
        if (files.length) {
          angular.forEach(files, function (file) {
            let fileObject = { metaData: undefined, content: undefined };
            fileObject.metaData = {
              name: file.name,
              fileType: file.type
            };
            fileObject.content = file;
            $scope.files.push(fileObject);
          })
        }
      };

      $scope.uploadFiles = function () {
        let uploadFileIterator = 0;

        angular.forEach($scope.files, function (file) {
          let backendUrl = 'https://webapisecuredbb.azurewebsites.net/documents';
          $http.post(backendUrl, fetchFormData($scope.selectedDocType[uploadFileIterator], file.metaData.name, localStorage.getItem('user_id'), file.content), {
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


function fetchFormData(docType, docName, userId, content){
  let formData = new FormData();

  let object = {};
  object.docType = docType;
  object.docName = docName;
  object.userId = userId;

  let documentObject = JSON.stringify(object);
  formData.append('document', new Blob([documentObject], {
    type: 'application/json'
  }));
  formData.append('content', content);

  return formData;
}