angular.module('app.footerController', []).controller('footerController', ['$scope', '$location', '$window', function ($scope, $location, $window) {
  $scope.$watch(function () {
    return $location.path();
  }, function (newVal, oldVal) {
    if(!$scope.activeMenu){
      $scope.activeMenu = newVal;
    } else if (newVal !== oldVal) {
      $window.scrollTo(0,0);
      $scope.activeMenu = newVal;
    }
  });

  $scope.showFooter = localStorage.getItem('user_id') ? true : false;
}]);
