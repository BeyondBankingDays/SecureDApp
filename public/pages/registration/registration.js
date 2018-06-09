angular.module('app.registrationController', [])
    .controller('registrationController', ['$scope', '$http',
        '$location', '$timeout','$window', function ($scope, $http, $location, $timeout,$window) {

        $scope.regObj = {
            password: '',
            username: '',
            last_name: '',
            first_name: '',
            email: ''
        };
            $window.userObject={};
        $scope.reg = 'pending';

        $scope.registerUser = function () {
            $scope.regObj.password = $scope.regObj.password.toString();
            $http.post('https://beyondbanking.openbankproject.com/obp/v2.0.0/users', JSON.stringify($scope.regObj)).then(function (success) {
                console.log(success.data);
                $scope.reg = 'success';
                localStorage.setItem("user_id",success.data.user_id);
                localStorage.setItem("username",success.data.username);
                $timeout(function () {
                    $location.path('/homepage').search({user_id: $window.userObject.user_id});
                }, 1000);
            }, function (error) {
                console.log(error.data);
                $scope.reg = 'error';
            })
        }

    }]);
