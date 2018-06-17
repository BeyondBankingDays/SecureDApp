angular.module('app.accessController', [])
  .controller('accessController', ['$scope', '$http',
    function ($scope, $http) {

      $scope.selectedFilter = 'request';

      $http.get('https://websecuredapi.azurewebsites.net/user/' + localStorage.getItem("user_id") + '/documents')
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
