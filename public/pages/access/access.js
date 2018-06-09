angular.module('app.accessController', []).controller('accessController', ['$scope', '$http', function ($scope, $http) {

    $scope.selectedFilter = 'request';
    var providerId = localStorage.getItem("user_id");
    $http.get('https://webapisecuredbb.azurewebsites.net/user/' + providerId + '/documents').then(function (success) {
         $scope.data = success.data;

     /*   $scope.data = {documents: []};
        $scope.data.documents = [{
            document: {
                'id': '12345',
                'docType': 'passport',
                'name': 'docname1',
                'userId': '',
                'requestors': [{'reqId': '1234', 'reqName': 'ING', 'date': '20-05-1991', 'status': 'Allowed'},
                    {'reqId': '1234', 'reqName': 'ING', 'date': '20-05-1991', 'status': 'Not Allowed'},
                    {'reqId': '1234', 'reqName': 'ING', 'date': '20-05-1991', 'status': 'Allowed'}
                ],
                'content': ''
            }
        },
            {
                document: {
                    'id': '12345',
                    'docType': 'passport',
                    'name': 'docname1',
                    'userId': '',
                    'requestors': [{'reqId': '1234', 'reqName': 'ING', 'date': '20-05-1991', 'status': 'Allowed'},
                        {'reqId': '1234', 'reqName': 'ING', 'date': '20-05-1991', 'status': 'Not Allowed'},
                        {'reqId': '1234', 'reqName': 'ING', 'date': '20-05-1991', 'status': 'Allowed'}
                    ],
                    'content': ''
                }
            }];*/

    }, function (error) {
        $scope.data = {documents: []};
        $scope.data.documents = [{
            document: {
                'id': '12345',
                'docType': 'passport',
                'name': 'docname1',
                'userId': '',
                'requestors': [{'reqId': '1234', 'reqName': 'ING', 'date': '20-05-1991', 'status': 'Allowed'},
                    {'reqId': '1234', 'reqName': 'ING', 'date': '20-05-1991', 'status': 'Not Allowed'},
                    {'reqId': '1234', 'reqName': 'ING', 'date': '20-05-1991', 'status': 'Allowed'}
                ],
                'content': ''
            }
        },
            {
                document: {
                    'id': '12345',
                    'docType': 'passport',
                    'name': 'docname1',
                    'userId': '',
                    'requestors': [{'reqId': '1234', 'reqName': 'ING', 'date': '20-05-1991', 'status': 'Allowed'},
                        {'reqId': '1234', 'reqName': 'ING', 'date': '20-05-1991', 'status': 'Not Allowed'},
                        {'reqId': '1234', 'reqName': 'ING', 'date': '20-05-1991', 'status': 'Allowed'}
                    ],
                    'content': ''
                }
            }];
        console.log(error.data);
    });

    $scope.changeSelection = function (selectedOption) {
        $scope.selectedFilter = selectedOption;
    }

    $scope.expand = function () {
        $scope.toggle = true;
    }

}]);
