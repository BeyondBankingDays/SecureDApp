angular.module('app.footerController',[]).controller('footerController',['$scope', function($scope){

var isLoggedIn = localStorage.getItem('user_id');

if(!isUserLoggedIn){
    $scope.hideFooter = true;
}
    
if($scope.page === '' || $scope.page === undefined){
    $scope.page = 'home';
  }

$scope.changepage = function(page){
    $scope.page = page;
  };

}]);


