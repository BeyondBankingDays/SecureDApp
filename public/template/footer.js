angular.module('app.footerController',[]).controller('footerController',['$scope', function($scope){

    
if($scope.page === '' || $scope.page === undefined){
    $scope.page = 'home';
  }

$scope.changepage = function(page){
    $scope.page = page;
  };
  
function getClass(){
    if($scope.page === selected){
        return "section-active two columns footer-item";
    }
    else
        return "two columns footer-item";
}



}]);


