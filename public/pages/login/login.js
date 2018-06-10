angular.module('app.loginController', [])
  .controller('loginController', ['$scope', '$http',
    '$location', '$timeout', '$window', 'usSpinnerService', function ($scope, $http, $location, $timeout, $window, usSpinnerService) {

      $scope.isAuthenticating = false;
      $scope.loginSuccess = true;

      var isLoggedIn = localStorage.getItem('user_id');
      if (isLoggedIn) {
        $location.path('/homepage').search({user_id: isLoggedIn});
      }

      $scope.toRegistration = function(){
        $location.path('/registration');
      };

      $scope.loginObj = {};

      $window.userObject = {};
      $scope.reg = 'pending';

      $scope.login = function () {

        $scope.isAuthenticating = true;
        usSpinnerService.spin('spinner-1');

        var config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'DirectLogin username=\"' + $scope.loginObj.username + '\",password=\"' + $scope.loginObj.password + '\",consumer_key="ukj43wr0oc5ivqlvmbbawvyzkp0vo1vx3fcyal1n"'
          }
        };

        var data = {};

        $http.post('https://beyondbanking.openbankproject.com/my/logins/direct', data, config)
          .then(function (response) {
            var configGet = {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'DirectLogin token=\"' + response.data.token + '\"'
              }
            };

            $http.get('https://beyondbanking.openbankproject.com/obp/v3.0.0/users/current', configGet)
              .then(function (success) {
                localStorage.setItem("user_id", success.data.user_id);
                localStorage.setItem("username", success.data.provider_id);
                usSpinnerService.stop('spinner-1');
                $location.path('/homepage');
              });
          }, function(rejection){
            $scope.loginSuccess = false;
            $scope.loginErrorMsg = rejection.data.error.split(':')[1];
          }).then(function(){
          $scope.isAuthenticating = false;
          usSpinnerService.stop('spinner-1');
        });
      }
    }]);
