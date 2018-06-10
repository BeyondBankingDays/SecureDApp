angular.module('app.accessController', [])
  .controller('accessController', ['$scope', '$http',
    function ($scope, $http) {

      $scope.selectedFilter = 'request';
      let providerId = localStorage.getItem("user_id");
      $http.get('https://webapisecuredbb.azurewebsites.net/user/' + providerId + '/documents')
        .then(function (success) {
          $scope.data = success.data;
        });

      $scope.changeSelection = function (selectedOption) {
        $scope.selectedFilter = selectedOption;
      };

      $scope.expand = function () {
        $scope.toggle = true;
      };
    }]);
