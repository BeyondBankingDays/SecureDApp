angular.module('app.registrationController', [])
  .controller('registrationController', ['$scope', '$http',
    '$location', '$timeout', '$window', function ($scope, $http, $location, $timeout, $window) {
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

      $window.userObject = {};

      $scope.registerUser = function () {
        $scope.regObj.password = $scope.regObj.password.toString();
        $http.post('https://beyondbanking.openbankproject.com/obp/v2.0.0/users', JSON.stringify($scope.regObj))
          .then(function (success) {
            $scope.registrationSuccess = true;
            console.log(success.data);
            localStorage.setItem("user_id", success.data.user_id);
            localStorage.setItem("username", success.data.provider_id);
            $timeout(function () {
              $location.path('/homepage').search({user_id: success.data.user_id});
            }, 2000);
          }, function (error) {
            $scope.registrationFailed = true;
            console.log(error.data);
          })
      }
    }])
;
