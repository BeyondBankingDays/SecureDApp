angular.module('app.registrationController', [])
  .controller('registrationController', ['$scope', '$http',
    '$location', '$timeout', function ($scope, $http, $location, $timeout) {
      $scope.registrationSuccess = false;
      $scope.registrationFailed = false;

      $scope.regObj = {
        password: '',
        username: '',
        last_name: '',
        first_name: '',
        email: ''
      };

      $scope.passwordRegex = '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\da-zA-Z])(.{10,})$/';

      $scope.registerUser = function () {
        $http.post('https://beyondbanking.openbankproject.com/obp/v2.0.0/users', JSON.stringify($scope.regObj))
          .then(function (success) {
            $scope.registrationSuccess = true;
            $timeout(function () {
              $location.path('/login');
            }, 2000);
          }, function () {
            $scope.registrationFailed = true;
          })
      }
    }])
;
