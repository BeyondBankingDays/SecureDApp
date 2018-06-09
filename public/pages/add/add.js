angular.module('app.addController', ['ngFileUpload'])
    .controller('addController', ['$scope', '$http',
        function ($scope, $http) {
        $scope.selectedDocType=[];
            $scope.success=[];

            $scope.docTypes = [
                'Passport',
                'Driving License',
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

                }
            };

            $scope.uploadFiles = function () {
                var i=0;

                angular.forEach($scope.files, function (file) {
                    var backendUrl = 'http://172.16.23.143:8080/documents';

                    var object = {};
                    object.docType = $scope.selectedDocType[i];
                    object.docName = file.metaData.name;
                    object.userId = localStorage.getItem("user_id");

                    var formData = new FormData();
                    var documentObject = JSON.stringify(object);
                    formData.append('document', new Blob([documentObject], {
                        type: 'application/json'
                    }));
                    formData.append('content', file.content);

                    $http.post(backendUrl, formData, {
                        transformRequest: angular.identity,
                        headers: {
                            'Content-Type': undefined
                        }
                    }).then(function (response) {
                        $scope.success[i]=true;
                        i=i+1;
                        console.log(response)
                    }, function (rejection) {
                        $scope.success[i]=false;
                        i=i+1;
                        console.log(rejection)
                    });

                })

            }

        }]);
