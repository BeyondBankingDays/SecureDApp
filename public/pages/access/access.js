angular.module('app.accessController',[]).controller('accessController',['$scope', function($scope){

    $scope.selectedFilter = 'request';

    $scope.changeSelection = function(selectedOption){
        $scope.selectedFilter = selectedOption;
    }

}]);
