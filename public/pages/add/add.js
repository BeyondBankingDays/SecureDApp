angular.module('app.addController', ['ngFileUpload'])
    .controller('addController', ['$scope', '$http',
        function ($scope, $http) {

            $scope.docTypes = [
                'Passport',
                'Driving Liscence',
                'Rental Agreement'
            ]


            $scope.files = [];
            $scope.addFiles = function (files, errorFiles) {
                if (files.length) {
                    angular.forEach(files, function (file) {
                        var fileObject = { metaData: undefined, content: undefined };
                        fileObject.metaData = {
                            name: file.name,
                            fileType: file.type
                        };
                        fileObject.content = file;
                        $scope.files.push(fileObject);
                    })

                    console.log($scope.files[0])
                }
            };

            $scope.uploadFiles = function () {

                angular.forEach($scope.files, function (file) {
                    var backendUrl = 'http://172.16.23.143:8080/documents';

                    var object = {};
                    object.docType = "passport";
                    object.docName = "testPassport";
                    object.userId = "testId";

                    var formData = new FormData();
                    var documentObject = JSON.stringify(object);
                    formData.append('document', new Blob([documentObject], {
                        type: 'application/json'
                    }));
                    formData.append('content', file);

                    $http.post(backendUrl, formData, {
                        transformRequest: angular.identity,
                        headers: {
                            'Content-Type': undefined
                        }
                    }).then(function (response) {
                        console.log(response)
                        alert('success');
                    }, function (rejection) {
                        console.log(rejection)
                        alert('error');
                    });
                })
            }

        }]);
