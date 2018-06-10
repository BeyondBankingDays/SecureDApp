angular.module('app.profileController', [])
  .controller('profileController', ['$scope', '$http', '$location', '$timeout',
    function ($scope, $http, $location, $timeout) {
      $scope.loggedOut = false;
      let providerId = localStorage.getItem("user_id");
      $scope.name = localStorage.getItem("username");

      $http.get('https://webapisecuredbb.azurewebsites.net/user/' + providerId)
        .then(function (response) {
          $scope.name = response.data.name;
          $scope.dob = response.data.dob;
        });

      $scope.profile = {};

      $scope.logOut = function () {
        localStorage.removeItem('user_id');
        localStorage.removeItem('username');
        $scope.loggedOut = true;
        $timeout(function () {
          $location.path('/');
        }, 2000);
      }
    }]);

